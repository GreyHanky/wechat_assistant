import service from '../configs/service'

function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function delay (time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}

export function getEnv () {
  return process.env.NODE_ENV
}

export function getService () {
  const env = getEnv()
  const servi = service[env]
  if (!servi) {
    throw Error('没有对应的环境服务')
  }
  return servi
}

export function getServiceHost (hostName) {
  const services = getService()
  const serviceHost = services[hostName]
  if (!serviceHost) {
    throw Error(`没有这个服务名${hostName}`)
  }
  return serviceHost
}

export default {
  formatNumber,
  formatTime
}
