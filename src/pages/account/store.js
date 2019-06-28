// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import day from 'dayjs'

Vue.use(Vuex)

const date = day().format('YYYY-MM')

const store = new Vuex.Store({
  state: {
    date
  },
  mutations: {
    update: (state, {date}) => {
      const obj = state
      obj.date = date
    }
  }
})

export default store
