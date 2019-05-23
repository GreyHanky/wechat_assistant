<template>
  <div class="counter-warp">
    <div class="header">
      <div class="header-item date-container">
        <div class="title">2033</div>
      </div>
      <div class="header-item"></div>
      <div class="header-item"></div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}
</script>

<style lang="scss">
.counter-warp {
  height: 100%;
  background-color: #342800;
}
.header {
  display: flex;
  padding: 10px;
  .header-item {
    flex: 1;
    height: 40px;
    padding: 8px;
    .title {
      margin-bottom: 10px;
      color:rgb(137, 140, 136)
    }
    &.date-container{
      width: 50px;

    }
  }
}
</style>
