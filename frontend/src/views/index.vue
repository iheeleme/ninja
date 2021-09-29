<template>
  <div class="content">
    <div class="card">
      <div class="card-header">
        <p class="card-title">个人中心</p>
      </div>
      <div class="card-body">
        <p>昵称：{{ nickName }}</p>
        <p>更新时间：{{ timestamp }}</p>
      </div>
      <div class="card-footer">
        <el-button size="small" auto @click="logout">退出登录</el-button>
        <el-button type="danger" size="small" auto @click="delAccount">删除账号</el-button>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <p class="card-title">信息配置</p>
        <span class="card-subtitle">用户识别信息及推送配置</span>
      </div>
      <div class="card-body">
        <el-form :model="form" label-width="80px">
          <el-form-item label="备注">
            <el-input v-model="form.remark"></el-input>
          </el-form-item>
          <el-form-item label="推送token">
            <el-input v-model="form.token"></el-input>
          </el-form-item>
          <el-form-item label="推送方式">
            <el-radio-group v-model="form.type">
              <el-radio label="PLUS">公众号</el-radio>
              <el-radio label="BARK">APP</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="updateRemark()">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <p class="card-title">推送token获取说明</p>
      </div>
      <div class="card-body">
        <h1 class="card-subtitle">微信推送方式</h1>
        <p>
          1、扫码关注公众号，发送token。
          <br />2、复制返回内容，填入推送token，提交。
        </p>
        <el-image src="https://tva1.sinaimg.cn/large/008i3skNgy1gtiqs2hg88j60by0by3yx02.jpg" style="width:100%;height:100%;" :fit="fit"></el-image>
        <el-image style="width: 100%;" src="https://tva1.sinaimg.cn/large/008i3skNgy1gtiqbbfhuoj60u01t0q4j02.jpg" :fit="fit"></el-image>
        <hr>
        <h1 class="card-subtitle">APP推送方式</h1>
        <p>1、仅限iPhone设备<br>
            2、安装APP获取token后填入token
        </p>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <p class="card-title">常见活动位置</p>
        <span class="card-subtitle">下面是一些常见活动的位置</span>
      </div>
      <div class="card-body">
        <ul>
          <li v-for="(item, index) in activity" :key="index" class="leading-normal">
            <span>{{ item.name }}：</span>
            <span class="pr-2">{{ item.address }}</span>
            <a v-if="item.href" class="text-blue-400" href="#" @click="openUrlWithJD(item.href)">直达链接</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { getUserInfoAPI, delAccountAPI, updateRm } from '@/api/index'
import { onMounted, reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
export default {
  setup() {
    const router = useRouter()
    const route = useRoute()

    let data = reactive({
      nickName: undefined,
      timestamp: undefined,
      form: {
        remark: '',
        token: '',
        type:'PLUS'
      },
    })

    const getInfo = async () => {
      const eid = localStorage.getItem('eid')
      if (!eid) {
        logout()
        return
      }
      const userInfo = await getUserInfoAPI(eid)
      if (!userInfo) {
        ElMessage.error('获取用户信息失败，请重重新登录')
        logout()
        return
      }
      data.nickName = userInfo.data.nickName
      data.timestamp = new Date(userInfo.data.timestamp).toLocaleString()
      data.form.token = userInfo.data.token
      data.form.remark = userInfo.data.remark
      data.form.type=userInfo.data.type
    }

    onMounted(getInfo)

    const updateRemark = async () => {
      const eid = localStorage.getItem('eid')
      const body=await updateRm({
        eid: eid,
        remark: data.form.remark,
        push_token: data.form.token,
        type:data.form.type
      })
      if (body.message) {
        ElMessage.success(body.message)
      } else {
        ElMessage.error('更新失败')
      }
    }

    const logout = () => {
      localStorage.removeItem('eid')
      router.push('/login')
    }

    const delAccount = async () => {
      const eid = localStorage.getItem('eid')
      const body = await delAccountAPI({ eid })
      if (body.data.code !== 200) {
        ElMessage.error(body.message)
      } else {
        ElMessage.success(body.message)
        setTimeout(() => {
          logout()
        }, 1000)
      }
    }

    const openUrlWithJD = (url) => {
      const params = encodeURIComponent(
        `{"category":"jump","des":"m","action":"to","url":"${url}"}`
      )
      window.location.href = `openapp.jdmobile://virtual?params=${params}`
      console.log(window.location.href)
    }

    const activity = [
      {
        name: '玩一玩（可找到大多数活动）',
        address: '京东 APP 首页-频道-边玩边赚',
        href: 'https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html',
      },
      {
        name: '宠汪汪',
        address: '京东APP-首页/玩一玩/我的-宠汪汪',
      },
      {
        name: '东东萌宠',
        address: '京东APP-首页/玩一玩/我的-东东萌宠',
      },
      {
        name: '东东农场',
        address: '京东APP-首页/玩一玩/我的-东东农场',
      },
      {
        name: '东东工厂',
        address: '京东APP-首页/玩一玩/我的-东东工厂',
      },
      {
        name: '东东超市',
        address: '京东APP-首页/玩一玩/我的-东东超市',
      },
      {
        name: '领现金',
        address: '京东APP-首页/玩一玩/我的-领现金',
      },
      {
        name: '东东健康社区',
        address: '京东APP-首页/玩一玩/我的-东东健康社区',
      },
      {
        name: '京喜农场',
        address: '京喜APP-我的-京喜农场',
      },
      {
        name: '京喜牧场',
        address: '京喜APP-我的-京喜牧场',
      },
      {
        name: '京喜工厂',
        address: '京喜APP-我的-京喜工厂',
      },
      {
        name: '京喜财富岛',
        address: '京喜APP-我的-京喜财富岛',
      },
      {
        name: '京东极速版红包',
        address: '京东极速版APP-我的-红包',
      },
       {
        name: '京东赚赚',
        address: '微信小程序京东赚赚',
      },
       {
        name: '京东秒秒币',
        address: '京东首页-京东秒杀-立即签到领红包',
      },
    ]

    return {
      ...toRefs(data),
      activity,
      getInfo,
      logout,
      delAccount,
      openUrlWithJD,
      updateRemark,
    }
  },
}
</script>
