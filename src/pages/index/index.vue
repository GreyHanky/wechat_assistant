<template>
  <div class="home">
    <banner></banner>

    <menus></menus>
  </div>

</template>

<script>
import menus from './menus'
import banner from './banner'

export default {
  data () {
    return {
    }
  },
  components: {
    menus,
    banner
  },
  methods: {
  }
}
</script>

<style lang="scss" scope>
* {
  box-sizing: border-box;
}

body {
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: "Helvetica", sans-serif;
}
.home {
  position: relative;
}

</style>
