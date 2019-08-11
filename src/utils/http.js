import { getServiceHost } from './index'
import { boundClass } from 'autobind-decorator'
import proxyMpvue from './proxyMpvue'

@boundClass
export default class Http {
  constructor (hostName) {
    this.token = null
    this.service = getServiceHost(hostName)
  }

  async getToken () {
    if (!this.token) {
      const {data: token} = await proxyMpvue.getStorage({ key: 'token' })
      return token
    }
    return this.token
  }

  fire (method = 'POST', url, data, options = {}) {
    return new Promise(async (resolve, reject) => {
      const { header = {} } = options
      const token = await this.getToken()
      const authentiction = { 'Authorization': token }
      mpvue.showLoading({mask: true})
      mpvue.request({
        method,
        ...options,
        header: Object.assign(header, authentiction),
        url: `${this.service}${url}`,
        data,
        success: ({data}) => resolve(data),
        fail: reject,
        complete: () => {
          mpvue.hideLoading()
        }
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
