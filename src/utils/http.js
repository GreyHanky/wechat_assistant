import Fly from 'flyio/dist/npm/wx'

const fly = new Fly()

export function post (...params) {
  return fly.post(...params)
}

export function get (...params) {
  return fly.get(...params)
}
