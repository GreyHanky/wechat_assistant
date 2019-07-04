<template>
  <div class="page-content">
    <picker
      class="weui-btn"
      @change="PickerChange"
      :value="indexPicker"
      :range="array"
    >
      <div class="weui-cells__title">选择类型</div>
      <button type="default">{{array[indexPicker]}}</button>
    </picker>

    <div class="amount">
      <div class="page-section">
        <div class="weui-cells weui-cells_after-title">
          <div class="weui-cell weui-cell_input">
            <input
              class="weui-input"
              type="digit"
              placeholder="记账金额"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="footer-button">
      <button type="primary" @click="submit">记账</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      indexPicker: 0,
      array: ['美国', '中国', '巴西', '日本']
    }
  },
  methods: {
    PickerChange (e) {
      console.log('选中的值为：' + this.array[e.mp.detail.value])
      this.indexPicker = e.mp.detail.value
    },
    submit () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style>
.page-content {
  padding: 100px 10px 0 10px;
}
.amount {
  margin-top: 20px;
}
.footer-button {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 20px;
}
</style>
