// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import day from 'dayjs'
import { billList, billTypes } from './api'

Vue.use(Vuex)

const date = day().format('YYYY-MM')

const store = new Vuex.Store({
  state: {
    // 查询日期
    date,
    // 查询数据列表
    list: [],
    // 账单类型
    types: []
  },
  mutations: {
    updateTime: (state, { date }) => {
      state.date = date
    },
    updateList: (state, { list }) => {
      state.list = list
    },
    updateState: (state, payload) => {
      state = Object.assign(state, payload)
    }
  },
  actions: {
    getBills: async ({ commit, state }) => {
      const startTime = day(state.date).startOf('month').valueOf()
      const endTime = day(state.date).endOf('month').valueOf()
      const { data = [] } = await billList({ startTime, endTime })
      commit('updateList', { list: data })
    },
    getTypes: async ({commit, state}) => {
      const {data: types = []} = await billTypes()
      commit('updateState', {types})
    }
  }
})

export default store
