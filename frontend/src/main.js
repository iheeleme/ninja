import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElImage,
  ElMessage,
  ElRadioGroup,
  ElRadio,
} from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'

const components = [
  ElButton,
  ElInput,
  ElForm,
  ElImage,
  ElFormItem,
  ElMessage,
  ElRadioGroup,
  ElRadio,
]
const plugins = [ElMessage]

const app = createApp(App)

components.forEach((component) => {
  app.component(component.name, component)
})

plugins.forEach((plugin) => {
  app.use(plugin)
})

app.use(router)
app.mount('#app')
