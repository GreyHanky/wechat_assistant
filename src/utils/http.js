import Fly from 'flyio/dist/npm/wx'
import service from '../configs/service'

const fly = new Fly()

export default class http {
  constructor (host) {
    const envForService = service[process.env]
    console.log(envForService)
    if (!envForService) {
      throw Error('没有对应的环境变量')
    }
    if (!envForService[host]) {
      throw Error('没有对应的服务名')
    }

    this.serverHost = envForService[host]
  }
  fire (request) {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
    return request.then(() => {
      wx.hideToast()
    }).catch(() => {
      wx.hideToast()
    })
  }
  post (url, params, config) {
    return this.fire(fly.post(url, params), config)
  }
}
