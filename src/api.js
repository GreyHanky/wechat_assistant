import Http from './utils/http'

const { post } = new Http('admin')

export function login (params) {
  return post('/wxLogin', params)
}
