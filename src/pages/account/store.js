// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import day from 'dayjs'

Vue.use(Vuex)

const date = day().format('YYYY-MM')

const store = new Vuex.Store({
  state: {
    // 查询日期
    date,
    // 查询数据列表
    list: []
  },
  mutations: {
    updateTime: (state, { date }) => {
      state.date = date
    },
    updateList: (state, { list }) => {
      state.list = list
    }
  }
})

export default store
