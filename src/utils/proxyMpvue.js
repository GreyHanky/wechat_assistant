
// 代理api
const proxyApiList = [
  'login',
  'getSetting',
  'getUserInfo',
  'setStorage',
  'getStorage',
  'authorize'
]

// 不允许扩展mpvue对象
const proxyMpvue = Object.preventExtensions(mpvue)

export default new Proxy(proxyMpvue, {
  get: function (target, key, receiver) {
    // 为代理api列表中的api添加promise支持
    if (proxyApiList.indexOf(key) >= 0) {
      return (options = {}) => new Promise((resolve, reject) => target[key]({ ...options, success: resolve, fail: reject }))
    }
    return target[key]
  }
})
