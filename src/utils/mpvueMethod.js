export function login () {
  return new Promise((resolve, reject) => mpvue.login({ success: resolve }))
}

export function hasAuth () {
  return new Promise((resolve, reject) => mpvue.getSetting({
    success: res => {
      if (res.authSetting['scope.userInfo']) {
        resolve(res)
      } else {
        reject(Error('未授权'))
      }
    }
  }))
}

export function getUserInfo () {
  return new Promise((resolve) => mpvue.getUserInfo({ success: resolve }))
}
