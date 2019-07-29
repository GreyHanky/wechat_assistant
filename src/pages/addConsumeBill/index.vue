<template>
  <div class="page-content">
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <div
        v-for="(typeGroup,indexGroup) in types"
        :key="indexGroup"
      >
        <swiper-item>
          <div class="swiper-content">

            <div
              class="swiper-content-item"
              v-for="(type, indexType) in typeGroup"
              :key="indexType"
              @click="PickerChange(type)"
            >
              <div
                class="img-content"
                :class="chooseKey === type.key && 'choose'"
              >
                <img
                  class="type-icon"
                  :src="type.icon"
                  size="cover"
                >
              </div>
              <div>
                {{type.text}}
              </div>
            </div>
          </div>
        </swiper-item>
      </div>
    </swiper>

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

           <div class="weui-cell weui-cell_textarea">
            <textarea
              placeholder="备注"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="footer-button">
      <button
        type="primary"
        @click="submit"
      >记账</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      types: [
        [
          {
            text: '四个字的',
            icon: '/static/images/home.png',
            key: '1'
          },
          {
            text: '四个字的',
            icon: '/static/images/home.png',
            key: '2'
          },
          {
            text: '四个字的',
            icon: '/static/images/home.png',
            key: '3'
          }
        ]

      ],
      indicatorDots: true,
      autoplay: false,
      interval: 5000,
      duration: 1000,
      chooseKey: null
    }
  },
  methods: {
    PickerChange (e) {
      const {key} = e
      console.log(key)
      this.chooseKey = key
      // this.indexPicker = e.mp.detail.value
    },
    submit () {
      wx.navigateBack({
        delta: 1
      })
    }
  }
}
</script>

<style lang="scss" scope>
.page-content {
  padding: 10px 10px 0 10px;
}
textarea {
  height: 50px;
}

.swiper-content {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(5, 20%);
  grid-template-rows: repeat(2, 35%);
  height: 100%;
  width: 100%;
  padding: 30px 10px;
  .swiper-content-item {
    display: inline-grid;
    text-align: center;
    font-size: 14px;
  }
}
.type-icon,
.img-content {
  height: 26px;
  width: 26px;
}
.img-content {
  padding: 5px;
  margin: 0 auto;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0);
  transition: all 0.5s;
}

.amount {
  margin-top: 20px;
}
.choose {
  border-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
}
.footer-button {
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 20px;
}
input {
  width: 100%;
}
</style>
