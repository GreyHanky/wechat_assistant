import { getServiceHost } from './index'
import {boundClass} from 'autobind-decorator'

@boundClass
export default class Http {
  constructor (hostName) {
    this.service = getServiceHost(hostName)
  }

  fire (method = 'POST', url, data, options = {}) {
    return new Promise((resolve, reject) => {
      const { header = {} } = options
      const authentiction = { 'authentiction': 'testToken' }

      mpvue.request({
        method,
        ...options,
        header: Object.assign(header, authentiction),
        url: `${this.service}${url}`,
        data,
        success: resolve,
        fail: reject
      })
    })
  }
  /**
   *
   * @param {*} url 请求地址
   * @param {*} data 发送数据
   * @param {*} options 请求配置
   */
  post (url, data, options) {
    return this.fire('POST', url, data, options)
  }
  get (url, data, options) {
    return this.fire('GET', url, data, options)
  }
}
