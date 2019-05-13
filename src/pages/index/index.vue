<template lang="html">
<div class="container">
  <div class="flex-row">
    <div class="flex-cloumn"></div>
  </div>
</div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },

  components: {
    card
  },

  methods: {
    // bindViewTap () {
    //   const url = '../logs/main'
    //   if (mpvuePlatform === 'wx') {
    //     mpvue.switchTab({ url })
    //   } else {
    //     mpvue.navigateTo({ url })
    //   }
    // },
    // clickHandle (ev) {
    //   console.log('clickHandle:', ev)
    //   // throw {message: 'custom test'}
    // }
  },

  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
.container {
  padding: 10px;
}

.flex-row {
  display: flex;
}

.flex-cloumn {
  padding: 20px;
  background-color: gray;
}
</style>
