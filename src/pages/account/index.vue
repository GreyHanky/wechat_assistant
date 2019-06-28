<template>
  <div class="counter-warp">
    <div class="header">
      <div class="header-item date-container">
        <div class="title">{{year}}</div>
        <div class="header-content">
          <picker
            mode="date"
            :value="date"
            fields="month"
            @change="bindDateChange"
          >
            <div class="picker">
              <span class="month">{{month}}</span>
              <span class="month-unit">月</span>
            </div>
          </picker>
        </div>
      </div>
      <div class="header-item">
        <div class="title">支出(元)</div>
        <div class="header-content">
          <div>2342343</div>
        </div>
      </div>
      <div class="header-item">
        <div class="title">收入(元)</div>
        <div class="header-content">
          <div>2342343</div>
        </div>
      </div>
    </div>
    <div class="content-body">
      <navbar></navbar>
    </div>
  </div>
</template>

<script>
import store from './store'
import navbar from './navbar'

export default {
  data () {
    return {

      ...store.state
    }
  },
  components: {
    navbar
  },
  computed: {
    year () {
      const [year] = store.state.date.split('-')
      return year
    },
    month () {
      const [, month] = store.state.date.split('-')
      return month
    }
  },
  methods: {
    bindDateChange (e) {
      const date = e.target.value
      store.commit('update', {date})
    }
  }
}
</script>

<style lang="scss">
.counter-warp {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.header {
  display: flex;
  padding: 10px;
  background-color: #2b2e3e;
  .header-item {
    flex: 1;
    padding: 8px;
    color: #fff;
    .title {
      margin-bottom: 10px;
      font-size: 16px;
      color: rgb(137, 140, 136);
    }
    &.date-container {
      width: 40px;
    }
    .header-content {
      font-size: 20px;
      min-height: 40px;
      * {
        vertical-align: bottom;
      }
    }
  }
}
.content-body {
  flex:1;
}
</style>
