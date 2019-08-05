import Http from '../../utils/http'

const {post} = new Http('admin')

export function addbill (params) {
  return post('/bill/add', params)
}
