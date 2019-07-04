<template>
  <div class="weui-tab">
    <div class="weui-navbar">
      <block
        v-for="(item,index) in tabs"
        :key="index"
      >
        <div
          :id="index"
          :class="{'weui-bar__item_on':activeIndex == index}"
          class="weui-navbar__item"
          @click="tabClick"
        >
          <div class="weui-navbar__title">{{item}}</div>
        </div>
      </block>
      <div
        class="weui-navbar__slider"
        :class="navbarSliderClass"
      ></div>
    </div>
    <div class="weui-tab__panel">
      <div
        class="weui-tab__content"
        :hidden="activeIndex != 0"
      >
        <scrollViewDetail></scrollViewDetail>
      </div>
      <div
        class="weui-tab__content"
        :hidden="activeIndex != 1"
      >
        <charts :status="isSlider1"></charts>
      </div>
    </div>
  </div>
</template>

<script>
import mpNavbar from 'mpvue-weui/src/navbar'
import scrollViewDetail from './scroll-view-detail'
import charts from './accountCharts/index'

export default {
  data () {
    return {
      tabs: [
        '明细',
        '类别统计'
      ],
      activeIndex: 0,
      isSlider1: false
    }
  },
  components: {
    mpNavbar,
    scrollViewDetail,
    charts
  },
  computed: {
    navbarSliderClass () {
      if (this.activeIndex === '0') {
        return 'weui-navbar__slider_0'
      }
      if (this.activeIndex === '1') {
        return 'weui-navbar__slider_1'
      }
      return ''
    }
  },
  methods: {
    tabClick (e) {
      this.activeIndex = e.currentTarget.id
    }
  },
  onLoad () {
    this.activeIndex = '0'
    this.isSlider1 = false
  },
  watch: {
    activeIndex (value) {
      if (value === '1') {
        this.isSlider1 = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.weui-tab__content {
  height: 100%;
  // text-align: center;
}
// .weui-navbar {
//   height: 54px;
// }


.weui-navbar__slider_0 {
  left: 29rpx;
  transform: translateX(0);
}
.weui-navbar__slider_1 {
  left: 29rpx;
  transform: translateX(470rpx);
}
</style>
