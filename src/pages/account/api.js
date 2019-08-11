import Http from '../../utils/http'

const {post} = new Http('admin')

export function billList (params) {
  return post('/bill/list', params)
}
