import ky from 'ky'

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api'
// const VITE_API_LOGIN_URL = import.meta.env.VITE_API_LOGIN_URL || 'http://nvtnet.com:960'
const api = ky.create({ prefixUrl: VITE_API_BASE_URL, retry: { limit: 0 },timeout:40000 })

// const apis = ky.create({ prefixUrl: VITE_API_LOGIN_URL, retry: { limit: 0 } })


export function phoneCode(body) {
  return api.post('phonesend', { json: body }).json()
}

export function phoneLogin(body) {
  return api.post('phonelogin', { json: body }).json()
}

export function getInfoAPI() {
  return api.get('info').json()
}

export function CKLoginAPI(body) {
  return api.post('cklogin', { json: body }).json()
}

export function getQrcodeAPI() {
  return api.get('qrcode').json()
}

export function checkLoginAPI(body) {
  return api.post('check', { json: body }).json()
}

export function getUserInfoAPI(eid) {
  const searchParams = new URLSearchParams()
  searchParams.set('eid', eid)
  return api.get('userinfo', { searchParams: searchParams }).json()
}

export function delAccountAPI(body) {
  return api.post('delaccount', { json: body }).json()
}

export function updateRm(body){
  return api.post('update/remark',{json :body}).json()
}