// export function login() {
//   return new Promise((resolve, reject) => mpvue.login({ success: resolve }))
// }

// export function hasAuth() {
//   return new Promise((resolve, reject) => mpvue.getSetting({
//     success: res => {
//       if (res.authSetting['scope.userInfo']) {
//         resolve(res)
//       } else {
//         reject(Error('未授权'))
//       }
//     }
//   }))
// }

// export function getUserInfo() {
//   return new Promise((resolve) => mpvue.getUserInfo({ success: resolve }))
// }

// 代理api
const proxyApiList = [
  'login',
  'getSetting',
  'getUserInfo'
]

// 不允许扩展mpvue对象
const proxyMpvue = Object.preventExtensions(mpvue)

export default new Proxy(proxyMpvue, {
  get: function (target, key, receiver) {
    if (proxyApiList.indexOf(key) >= 0) {
      return (options) => new Promise((resolve, reject) => target[key]({ ...options, success: resolve }))
    }
    return target[key]
  }
})
