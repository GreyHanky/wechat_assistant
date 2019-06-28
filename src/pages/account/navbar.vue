<template>
  <mp-navbar
    :tabs="tabs"
    activeIndex=0
    @tabClick="tabClick"
  ></mp-navbar>
</template>

<script>
import mpNavbar from 'mpvue-weui/src/navbar'

export default {
  data () {
    return {
      tabs: [
        '明细',
        '类别统计'
      ]
    }
  },
  components: {
    mpNavbar
  },
  methods: {
    tabClick () {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
