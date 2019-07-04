<template>
  <div class="view-detail">
    <scroll-view
      scroll-y
      style="height: 770rpx;"
      @scrolltoupper="upper"
      @scrolltolower="lower"
      @scroll="onScroll"
    >
      <div
        v-for="(dayList, index) in list"
        :key="index"
      >
        <div
          class="scroll-view-item"
          v-for="(item, dayIndex) in dayList"
          :key="item.date + dayIndex"
        >
          <div
            class="item-head weui-flex"
            v-if="dayIndex === 0"
          >
            <div class="weui-flex__item">
              2083-32-32
            </div>
            <div class="weui-flex__item text-right">
              支出:34234
            </div>
          </div>
          <div class="item-content">
            {{item.date}}
          </div>
        </div>
      </div>

    </scroll-view>
    <div class="footer-bottom">
      <a href="/pages/addConsumeBill/main">
      <button>记一笔</button>
      </a>
    </div>
  </div>
</template>

<script>
// 账单列表
const value = {date: 2034}

export default {
  data () {
    return {
      list: [
        [value, value, value, value], [value, value, value], [value, value, value]
      ]
    }
  },
  methods: {
    onScroll (e) {
      // console.log(this)
    }
  }
}
</script>

<style lang="scss" scoped>
.view-detail {
  position: relative;
  height: 100%;
  .footer-bottom {
    position: absolute;
    left:0;
    right: 0;
    bottom: 0;
  }
}
.scroll-view-item {
  // height: 36px;
  padding: 10px;
  border-bottom: 1px solid rgb(215, 215, 215);
}
.item-content {
}
.item-head {
  padding-right: 2px;
  font-size: 16px;
  color: rgb(155, 152, 152);
}
</style>
