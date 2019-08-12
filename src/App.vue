<script>
import proxyMpvue from './utils/proxyMpvue.js'
import {login} from './api'

async function wxLogin () {
  const {authSetting} = await proxyMpvue.getSetting()
  if (!authSetting['scope.userInfo']) {
    await proxyMpvue.authorize({scope: 'scope.userInfo'})
  }

  const {code} = await proxyMpvue.login()
  console.log(code)
  const {encryptedData, iv} = await proxyMpvue.getUserInfo()
  const {token} = await login({code, encryptedData, iv})
  await proxyMpvue.setStorage({key: 'token', data: token})
}

export default {
  created () {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */
    try {
      wxLogin()
    } catch (error) {
      console.log(error)
    }
    let logs
    if (mpvuePlatform === 'my') {
      logs = mpvue.getStorageSync({key: 'logs'}).data || []
      logs.unshift(Date.now())
      mpvue.setStorageSync({
        key: 'logs',
        data: logs
      })
    } else {
      logs = mpvue.getStorageSync('logs') || []
      logs.unshift(Date.now())
      mpvue.setStorageSync('logs', logs)
    }
  },
  log () {
    console.log(`log at:${Date.now()}`)
  }
}
</script>

<style>
body {
  height: 100%;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}

.text-right {
  text-align: right;
}
.text-center{
  text-align: center;
}
.mt-10 {
  margin-top: 10px;
}
</style>
