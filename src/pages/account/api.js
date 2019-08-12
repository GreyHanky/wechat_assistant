import Http from '../../utils/http'

const {post} = new Http('admin')

export function billList (params) {
  return post('/bill/list', params)
}
export function billTypes (params) {
  return post('/bill/type-list', params)
}
