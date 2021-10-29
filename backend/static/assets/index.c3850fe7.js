var e=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,r=(a,o,t)=>o in a?e(a,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[o]=t,n=(e,a)=>{for(var o in a||(a={}))s.call(a,o)&&r(e,o,a[o]);if(t)for(var o of t(a))l.call(a,o)&&r(e,o,a[o]);return e},c=(e,t)=>a(e,o(t));import{p as i,a as d,o as m,c as u,r as p,b as f,d as g,F as h,k,u as y,e as b,f as v,g as w,t as P,h as j,w as _,i as C,_ as A,j as x,l as V,m as I,n as S,q as L,s as U,v as q,x as z,y as B,z as N,A as O,B as R,C as D,D as Q}from"./vendor.5b17fed0.js";i("data-v-4b23e37a"),d();const E={},F={class:"NinjaLogo",src:"/assets/logo.03d6d6da.png",alt:"logo"};E.render=function(e,a){return m(),u("img",F)};const $={components:{Logo:E}};i("data-v-1f23ce5f");const K={class:"header"},T={class:"header-wrapper"},Z={class:"flex items-center"},J=f("p",{class:"pl-3 select-none"},"Ninja",-1);d(),$.render=function(e,a,o,t,s,l){const r=p("Logo");return m(),u("div",K,[f("div",T,[f("div",Z,[g(r,{class:"h-10 w-10"}),J])])])},$.__scopeId="data-v-1f23ce5f";const W={class:"main"},H={setup:e=>(e,a)=>{const o=p("router-view");return m(),u(h,null,[g($),f("div",W,[g(o)])],64)}};const X=k.create({prefixUrl:"/api",retry:{limit:0}});const G={setup(){const e=y();b();let a=v({nickName:void 0,timestamp:void 0,form:{remark:"",token:"",type:"PLUS"}});const o=async()=>{try{const e=localStorage.getItem("eid");if(!e)return void t();const o=await function(e){const a=new URLSearchParams;return a.set("eid",e),X.get("userinfo",{searchParams:a}).json()}(e);if(!o)return A.error("获取用户信息失败，请重重新登录"),void t();a.nickName=o.data.nickName,a.timestamp=new Date(o.data.timestamp).toLocaleString(),a.form.token=o.data.token,a.form.remark=o.data.remark,a.form.type=o.data.type}catch(e){console.error(e)}};w(o);const t=()=>{localStorage.removeItem("eid"),e.push("/login")};return c(n({},P(a)),{activity:[{name:"玩一玩（可找到大多数活动）",address:"京东 APP 首页-频道-边玩边赚",href:"https://funearth.m.jd.com/babelDiy/Zeus/3BB1rymVZUo4XmicATEUSDUgHZND/index.html"},{name:"宠汪汪",address:"京东APP-首页/玩一玩/我的-宠汪汪"},{name:"东东萌宠",address:"京东APP-首页/玩一玩/我的-东东萌宠"},{name:"东东农场",address:"京东APP-首页/玩一玩/我的-东东农场"},{name:"东东工厂",address:"京东APP-首页/玩一玩/我的-东东工厂"},{name:"东东超市",address:"京东APP-首页/玩一玩/我的-东东超市"},{name:"领现金",address:"京东APP-首页/玩一玩/我的-领现金"},{name:"东东健康社区",address:"京东APP-首页/玩一玩/我的-东东健康社区"},{name:"京喜农场",address:"京喜APP-我的-京喜农场"},{name:"京喜牧场",address:"京喜APP-我的-京喜牧场"},{name:"京喜工厂",address:"京喜APP-我的-京喜工厂"},{name:"京喜财富岛",address:"京喜APP-我的-京喜财富岛"},{name:"京东极速版红包",address:"京东极速版APP-我的-红包"},{name:"京东赚赚",address:"微信小程序京东赚赚"},{name:"京东秒秒币",address:"京东首页-京东秒杀-立即签到领红包"}],getInfo:o,logout:t,delAccount:async()=>{try{const e=localStorage.getItem("eid"),a=await function(e){return X.post("delaccount",{json:e}).json()}({eid:e});200!==a.data.code?A.error(a.message):(A.success(a.message),setTimeout((()=>{t()}),1e3))}catch(e){console.error(e)}},openUrlWithJD:e=>{const a=encodeURIComponent(`{"category":"jump","des":"m","action":"to","url":"${e}"}`);window.location.href=`openapp.jdmobile://virtual?params=${a}`,console.log(window.location.href)},updateRemark:async()=>{try{const e=localStorage.getItem("eid"),o=await function(e){return X.post("update/remark",{json:e}).json()}({eid:e,remark:a.form.remark,push_token:a.form.token,type:a.form.type});o.message?A.success(o.message):A.error("更新失败")}catch(e){console.error(e)}}})}},M={class:"content"},Y={class:"card"},ee=f("div",{class:"card-header"},[f("p",{class:"card-title"},"个人中心")],-1),ae={class:"card-body"},oe={class:"card-footer"},te=x("退出登录"),se=x("删除账号"),le={class:"card"},re=f("div",{class:"card-header"},[f("p",{class:"card-title"},"信息配置"),f("span",{class:"card-subtitle"},"用户识别信息及推送配置")],-1),ne={class:"card-body"},ce=x("公众号"),ie=x("APP"),de=x("提交"),me={class:"card"},ue=f("div",{class:"card-header"},[f("p",{class:"card-title"},"推送token获取说明")],-1),pe={class:"card-body"},fe=f("h1",{class:"card-subtitle"},"微信推送方式",-1),ge=f("p",null,[x(" 1、扫码关注公众号，发送token。 "),f("br"),x("2、复制返回内容，填入推送token，提交。 ")],-1),he=f("hr",null,null,-1),ke=f("h1",{class:"card-subtitle"},"APP推送方式",-1),ye=f("p",null,[x("1、仅限iPhone设备"),f("br"),x(" 2、安装APP获取token后填入token ")],-1),be={class:"card"},ve=f("div",{class:"card-header"},[f("p",{class:"card-title"},"常见活动位置"),f("span",{class:"card-subtitle"},"下面是一些常见活动的位置")],-1),we={class:"card-body"},Pe={class:"pr-2"},je=["onClick"];G.render=function(e,a,o,t,s,l){const r=p("el-button"),n=p("el-input"),c=p("el-form-item"),i=p("el-radio"),d=p("el-radio-group"),k=p("el-form"),y=p("el-image");return m(),u("div",M,[f("div",Y,[ee,f("div",ae,[f("p",null,"昵称："+j(e.nickName),1),f("p",null,"更新时间："+j(e.timestamp),1)]),f("div",oe,[g(r,{size:"small",auto:"",onClick:t.logout},{default:_((()=>[te])),_:1},8,["onClick"]),g(r,{type:"danger",size:"small",auto:"",onClick:t.delAccount},{default:_((()=>[se])),_:1},8,["onClick"])])]),f("div",le,[re,f("div",ne,[g(k,{model:e.form,"label-width":"80px"},{default:_((()=>[g(c,{label:"备注"},{default:_((()=>[g(n,{modelValue:e.form.remark,"onUpdate:modelValue":a[0]||(a[0]=a=>e.form.remark=a)},null,8,["modelValue"])])),_:1}),g(c,{label:"推送token"},{default:_((()=>[g(n,{modelValue:e.form.token,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form.token=a)},null,8,["modelValue"])])),_:1}),g(c,{label:"推送方式"},{default:_((()=>[g(d,{modelValue:e.form.type,"onUpdate:modelValue":a[2]||(a[2]=a=>e.form.type=a)},{default:_((()=>[g(i,{label:"PLUS"},{default:_((()=>[ce])),_:1}),g(i,{label:"BARK"},{default:_((()=>[ie])),_:1})])),_:1},8,["modelValue"])])),_:1}),g(c,null,{default:_((()=>[g(r,{type:"primary",onClick:a[3]||(a[3]=e=>t.updateRemark())},{default:_((()=>[de])),_:1})])),_:1})])),_:1},8,["model"])])]),f("div",me,[ue,f("div",pe,[fe,ge,g(y,{src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtiqs2hg88j60by0by3yx02.jpg",style:{width:"100%",height:"100%"},fit:e.fit},null,8,["fit"]),g(y,{style:{width:"100%"},src:"https://tva1.sinaimg.cn/large/008i3skNgy1gtiqbbfhuoj60u01t0q4j02.jpg",fit:e.fit},null,8,["fit"]),he,ke,ye])]),f("div",be,[ve,f("div",we,[f("ul",null,[(m(!0),u(h,null,C(t.activity,((e,a)=>(m(),u("li",{key:a,class:"leading-normal"},[f("span",null,j(e.name)+"：",1),f("span",Pe,j(e.address),1),e.href?(m(),u("a",{key:0,class:"text-blue-400",href:"#",onClick:a=>t.openUrlWithJD(e.href)},"直达链接",8,je)):V("",!0)])))),128))])])])])};const _e={setup(){const e=I(null),a=y();b();let o=v({marginCount:0,allowAdd:!0,cookie:"",QRCode:void 0,qrCodeVisibility:!1,token:void 0,okl_token:void 0,cookies:void 0,timer:void 0,waitLogin:!1,onSubmitload:!1,valiBtn:"获取验证码",form:{phone:"",code:""},disabled:!1});const t=v({phone:[{validator:(e,a,o)=>{if(/^0?(13[0-9]|15[012356789]|18[0-9]|14[578]|16[6]|17[035768]|19[19])[0-9]{8}$/.test(a))return o();o("请输入合法的手机号")},required:!0,trigger:"blur"}],code:[{required:!0,message:"请输入验证码",trigger:"blur"}]}),s=async()=>{try{const e=(await X.get("info").json()).data;o.marginCount=e.marginCount,o.allowAdd=e.allowAdd}catch(e){console.error(e)}},l=a=>new Promise((o=>{e.value.validateField(a,(e=>{o(""===e)}))})),r=async()=>{let e=60,a=setInterval((()=>{0==e?(clearInterval(a),o.valiBtn="获取验证码",o.disabled=!1):(o.disabled=!0,o.valiBtn=e+"秒后重试",e--)}),1e3)},i=async()=>{if(localStorage.getItem("eid"))a.push("/");else try{const e=await function(e){return X.post("check",{json:e}).json()}({token:o.token,okl_token:o.okl_token,cookies:o.cookies});switch(null==e?void 0:e.data.errcode){case 0:localStorage.setItem("eid",e.data.eid),A.success(e.message),clearInterval(o.timer),a.push("/");break;case 176:break;default:A.error(e.message),o.waitLogin=!1,clearInterval(o.timer)}}catch(e){clearInterval(o.timer),o.waitLogin=!1}},d=async()=>{try{const e=o.cookie.match(/pt_key=(.*?);/)&&o.cookie.match(/pt_key=(.*?);/)[1],t=o.cookie.match(/pt_pin=(.*?);/)&&o.cookie.match(/pt_pin=(.*?);/)[1];if(e&&t){const o=await function(e){return X.post("cklogin",{json:e}).json()}({pt_key:e,pt_pin:t});o.data.eid?(localStorage.setItem("eid",o.data.eid),A.success(o.message),a.push("/")):A.error(o.message||"cookie 解析失败，请检查后重试！")}else A.error("cookie 解析失败，请检查后重试！")}catch(e){console.error(e)}};return w((()=>{s(),i()})),c(n({},P(o)),{getInfo:s,getQrcode:async()=>{try{const e=await X.get("qrcode").json();o.token=e.data.token,o.okl_token=e.data.okl_token,o.cookies=e.data.cookies,o.QRCode=e.data.QRCode,o.QRCode&&(o.waitLogin=!0,clearInterval(o.timer),o.timer=setInterval(i,3e3))}catch(e){console.error(e),A.error("生成二维码失败！请重试或放弃")}},showQrcode:async()=>{o.qrCodeVisibility=!0},ckeckLogin:i,jumpLogin:async()=>{const e=`openapp.jdmobile://virtual/ad?params={"category":"jump","des":"ThirdPartyLogin","action":"to","onekeylogin":"return","url":"https://plogin.m.jd.com/cgi-bin/m/tmauth?appid=300&client_type=m&token=${o.token}","authlogin_returnurl":"weixin://","browserlogin_fromurl":"${window.location.host}"}`;window.location.href=e},CKLogin:d,getCode:async()=>{if(""===o.form.phone)return A.error("请输入手机号"),!1;try{o.onSubmitload=!0;if(!(await l("phone")))return!1;{const e=await function(e){return X.post("phonesend",{json:e}).json()}({phone:o.form.phone});o.onSubmitload=!1,200===e.data.status?(A.success(e.message),r()):A.error(e.message)}}catch(e){A.error(e),o.onSubmitload=!1}},onSubmit:async()=>{const a=S(e);if(a)try{await a.validate();const e=await function(e){return X.post("phonelogin",{json:e}).json()}({phone:o.form.phone,code:o.form.code});200===e.data.status?(A.success(e.message),o.cookie=e.data.cookie,d()):A.error(e.message)}catch(t){A.error(body.message),console.log(t)}},tackBtn:r,rules:t,formValidateField:l,ruleFormsss:e})}};i("data-v-5d65c1bf");const Ce={class:"content"},Ae={class:"card"},xe={class:"card-header"},Ve={class:"flex items-center justify-between"},Ie=f("p",{class:"card-title"},"登录",-1),Se={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Le=f("span",{class:"card-subtitle"},[x(" 请点击下方按钮获取验证码登录,获取验证码时间较长（3～10s），请耐心等待！ "),f("h1",{class:"title"},"获取验证码按钮只能点一次！"),f("h1",{class:"title"},"获取验证码按钮只能点一次！"),f("h1",{class:"title"},"获取验证码按钮只能点一次！"),x("响应会有延迟，多次点击验证码重复发送导致登录失败！ ")],-1),Ue={class:"card-body"},qe=x("登录"),ze=f("div",{class:"card-footer"},null,-1),Be={class:"card hidden"},Ne={class:"card-header"},Oe={class:"flex items-center justify-between"},Re=f("p",{class:"card-title"},"CK 登录",-1),De={class:"ml-2 px-2 py-1 bg-gray-200 rounded-full font-normal text-xs"},Qe=f("span",{class:"card-subtitle"},"请在下方输入您的 cookie 登录。",-1),Ee={class:"card-body text-center"},Fe=x("登录"),$e=f("div",{class:"card-footet"},null,-1);d(),_e.render=function(e,a,o,t,s,l){const r=p("el-input"),n=p("el-form-item"),c=p("el-button"),i=p("el-form");return m(),u("div",Ce,[f("div",Ae,[f("div",xe,[f("div",Ve,[Ie,f("span",Se,"余量："+j(e.marginCount),1)]),Le]),f("div",Ue,[g(i,{model:e.form,ref:"ruleFormsss",rules:t.rules,"label-width":"20%",style:{width:"80%"}},{default:_((()=>[g(n,{prop:"phone"},{default:_((()=>[g(r,{size:"small",placeholder:"手机号","suffix-icon":"el-icon-mobile-phone",maxlength:"11",modelValue:e.form.phone,"onUpdate:modelValue":a[0]||(a[0]=a=>e.form.phone=a)},null,8,["modelValue"])])),_:1}),g(n,{prop:"code"},{default:_((()=>[g(r,{style:{width:"200px"},type:"text",maxlength:"6",size:"small","suffix-icon":"el-icon-lock",placeholder:"验证码",modelValue:e.form.code,"onUpdate:modelValue":a[1]||(a[1]=a=>e.form.code=a)},null,8,["modelValue"]),g(c,{size:"small",class:"btn-orange",disabled:e.disabled,loading:e.onSubmitload,onClick:t.getCode},{default:_((()=>[x(j(e.valiBtn),1)])),_:1},8,["disabled","loading","onClick"])])),_:1}),g(n,null,{default:_((()=>[g(c,{type:"primary",size:"small",onClick:t.onSubmit},{default:_((()=>[qe])),_:1},8,["onClick"])])),_:1})])),_:1},8,["model","rules"])]),ze]),f("div",Be,[f("div",Ne,[f("div",Oe,[Re,f("span",De,"余量："+j(e.marginCount),1)]),Qe]),f("div",Ee,[g(r,{modelValue:e.cookie,"onUpdate:modelValue":a[2]||(a[2]=a=>e.cookie=a),size:"small",clearable:"",class:"my-4 w-full"},null,8,["modelValue"]),g(c,{type:"primary",size:"small",round:"",onClick:t.CKLogin},{default:_((()=>[Fe])),_:1},8,["onClick"])]),$e])])},_e.__scopeId="data-v-5d65c1bf";const Ke=[{path:"/",component:G},{path:"/login",component:_e}],Te=L({history:U(),routes:Ke});Te.beforeEach(((e,a,o)=>{localStorage.getItem("eid")||"/login"===e.path?o():o({path:"/login"})}));const Ze=[z,B,N,O,R,A,D,Q],Je=[A],We=q(H);Ze.forEach((e=>{We.component(e.name,e)})),Je.forEach((e=>{We.use(e)})),We.use(Te),We.mount("#app");
