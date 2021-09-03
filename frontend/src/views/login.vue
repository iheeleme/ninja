<template>
  <div class="content">
    <div class="card">
      <div class="card-header">
        <div class="flex items-center justify-between">
          <p class="card-title">登录</p>
          <span class="ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs">余量：{{ marginCount }}</span>
        </div>
        <span class="card-subtitle">请点击下方按钮获取验证码登录,获取验证码时间较长（3～10s），请耐心等待！
          <h1 class="title">获取验证码按钮只能点一次！</h1>
          <h1 class="title">获取验证码按钮只能点一次！</h1>
          <h1 class="title">获取验证码按钮只能点一次！</h1>
          响应会有延迟，多次点击验证码重复发送导致登录失败！
        </span>
      </div>
      <div class="card-body">
        <el-form :model="form" ref="ruleFormsss" :rules="rules" label-width="20%" style="width:80%;">
          <el-form-item prop="phone">
            <el-input size="small" placeholder="手机号" suffix-icon="el-icon-mobile-phone" maxlength="11" v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item prop="code">
            <el-input style="width:200px" type="text" maxlength="6" size="small" suffix-icon="el-icon-lock" placeholder="验证码" v-model="form.code" />
            <el-button size="small" class="btn-orange" :disabled="disabled" @click="getCode">{{valiBtn}}</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="onSubmit">登录</el-button>
            <!-- <el-button>取消</el-button> -->
          </el-form-item>
        </el-form>
        <!-- <div v-if="!qrCodeVisibility" class="flex flex-col w-48 m-auto mt-4">
          <el-button type="primary" round @click="showQrcode"
            >扫描二维码登录</el-button
          >
          <el-button class="mt-4 ml-0" type="primary" round @click="jumpLogin"
            >跳转到京东 App 登录</el-button
          >
        </div>
        <img v-else :src="QRCode" :width="256" class="m-auto" />-->
      </div>
      <div class="card-footer"></div>
    </div>

    <div class="card hidden">
      <div class="card-header">
        <div class="flex items-center justify-between">
          <p class="card-title">CK 登录</p>
          <span class="ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs">余量：{{ marginCount }}</span>
        </div>
        <span class="card-subtitle">请在下方输入您的 cookie 登录。</span>
      </div>
      <div class="card-body text-center">
        <el-input v-model="cookie" size="small" clearable class="my-4 w-full" />
        <el-button type="primary" size="small" round @click="CKLogin">登录</el-button>
      </div>
      <div class="card-footet"></div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs, unref, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { ElMessage } from 'element-plus'
import {
  getInfoAPI,
  getQrcodeAPI,
  CKLoginAPI,
  checkLoginAPI,
  phoneLogin,
  phoneCode,
} from '@/api/index'

export default {
  setup() {
    var checkPhone = (rule, value, callback) => {
      const reg =
        /^0?(13[0-9]|15[012356789]|18[0-9]|14[578]|16[6]|17[035768]|19[19])[0-9]{8}$/
      if (reg.test(value)) {
        return callback()
      }
      callback('请输入合法的手机号')
    }
    const ruleFormsss = ref(null)
    const router = useRouter()
    const route = useRoute()
    let data = reactive({
      marginCount: 0,
      allowAdd: true,
      cookie: '',
      QRCode: undefined,
      qrCodeVisibility: false,
      token: undefined,
      okl_token: undefined,
      cookies: undefined,
      timer: undefined,
      waitLogin: false,
      valiBtn: '获取验证码',
      form: {
        phone: '',
        code: '',
      },
      disabled: false,
    })
    const rules = reactive({
      phone: [{ validator: checkPhone, required: true, trigger: 'blur' }],
      code: [{ required: true, message: '请输入验证码', trigger: 'blur' }],
    })
    const getInfo = async () => {
      const info = (await getInfoAPI()).data
      data.marginCount = info.marginCount
      data.allowAdd = info.allowAdd
    }

    const formValidateField = (id) => {
      return new Promise((resolve) => {
        ruleFormsss.value.validateField(id, (check) => {
          if (check === '') {
            resolve(true)
          } else {
            resolve(false)
          }
        })
      })
    }

    const getCode = async () => {
      if (data.form.phone === '') {
        ElMessage.error('请输入手机号')
        return false
      }
      const formValuidateValue = await formValidateField('phone')
      if (formValuidateValue) {
        const body = await phoneCode({ phone: data.form.phone })
        if (body.data.status === 200) {
          ElMessage.success(body.message)
          tackBtn()
        } else {
          ElMessage.error(body.message)
        }
        // 校验成功
      } else {
        // 校验未成功
        return false
      }
    }
    const tackBtn = async () => {
      let time = 60
      let timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer)
          data.valiBtn = '获取验证码'
          data.disabled = false
        } else {
          data.disabled = true
          data.valiBtn = time + '秒后重试'
          time--
        }
      }, 1000)
    }
    const onSubmit = async () => {
      const form = unref(ruleFormsss)
      if (!form) {
        return
      }
      try {
        await form.validate()
        const body = await phoneLogin({ phone: data.form.phone,code:data.form.code })
        if (body.data.status === 200) {
          ElMessage.success(body.message)
          data.cookie=body.data.cookie
          CKLogin()
        } else {
          ElMessage.error(body.message)
        }
      } catch (err) {
        console.log(err)
      }
    }
    // tackBtn(){       //验证码倒数60秒
    //           let time = 60;
    //           let timer = setInterval(() => {
    //               if(time == 0){
    //                   clearInterval(timer);
    //                   this.valiBtn = '获取验证码';
    //                   this.disabled = false;
    //               }else{
    //                   this.disabled = true;
    //                   this.valiBtn = time + '秒后重试';
    //                   time--;
    //               }
    //           }, 1000);
    //     },

    // getCode(){
    //        this.$refs['loginForm'].validateField('phone', (err) =>{
    //             if(err){
    //                 console.log('未通过')
    //                 return;
    //             }else{
    //                 console.log('已通过')
    //                 this.tackBtn();   //验证码倒数60秒
    //                 let fd = new FormData();  //POST 请求需要 转化为Form
    //                     fd.append('PhoneNumber', this.form.phone);
    //                     fd.append('NeedCheck', 2);
    //                 this.$axios({
    //                         method: 'POST', data: fd, url:'/api/sgsaccount/vcodeget',
    //                  }).then( res => {
    //                         console.log(res);
    //                     })
    //                 }
    //             })
    //     },

    const getQrcode = async () => {
      try {
        const body = await getQrcodeAPI()
        data.token = body.data.token
        data.okl_token = body.data.okl_token
        data.cookies = body.data.cookies
        data.QRCode = body.data.QRCode
        if (data.QRCode) {
          // data.qrCodeVisibility = true
          data.waitLogin = true
          clearInterval(data.timer) // 清除定时器
          data.timer = setInterval(ckeckLogin, 3000) // 设置定时器
        }
      } catch (e) {
        console.error(e)
        ElMessage.error('生成二维码失败！请重试或放弃')
      }
    }

    const showQrcode = async () => {
      data.qrCodeVisibility = true
    }

    const jumpLogin = async () => {
      const href = `openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${data.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`
      window.location.href = href
    }

    const ckeckLogin = async () => {
      if(localStorage.getItem('eid')){
        router.push('/')
        return
      }
      try {
        const body = await checkLoginAPI({
          token: data.token,
          okl_token: data.okl_token,
          cookies: data.cookies,
        })

        switch (body?.data.errcode) {
          case 0:
            localStorage.setItem('eid', body.data.eid)
            ElMessage.success(body.message)
            clearInterval(data.timer)
            router.push('/')
            break
          case 176:
            break
          default:
            ElMessage.error(body.message)
            data.waitLogin = false
            clearInterval(data.timer)
            break
        }
      } catch (error) {
        clearInterval(data.timer)
        data.waitLogin = false
      }
    }

    const CKLogin = async () => {
      const ptKey =
        data.cookie.match(/pt_key=(.*?);/) &&
        data.cookie.match(/pt_key=(.*?);/)[1]
      const ptPin =
        data.cookie.match(/pt_pin=(.*?);/) &&
        data.cookie.match(/pt_pin=(.*?);/)[1]
      if (ptKey && ptPin) {
        const body = await CKLoginAPI({ pt_key: ptKey, pt_pin: ptPin })
        if (body.data.eid) {
          localStorage.setItem('eid', body.data.eid)
          ElMessage.success(body.message)
          router.push('/')
        } else {
          ElMessage.error(body.message || 'cookie 解析失败，请检查后重试！')
        }
      } else {
        ElMessage.error('cookie 解析失败，请检查后重试！')
      }
    }

    onMounted(() => {
      getInfo()
      ckeckLogin()
      // getQrcode()
    })

    return {
      ...toRefs(data),
      getInfo,
      getQrcode,
      showQrcode,
      ckeckLogin,
      jumpLogin,
      CKLogin,
      getCode,
      onSubmit,
      tackBtn,
      rules,
      formValidateField,
      ruleFormsss,
    }
  },
}
</script>

<style scoped>
.title{
  font-size: 30px;
  font-weight: 20px;
  line-height: 30px;
  color:red;
}
</style>
