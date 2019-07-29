<template>
  <div class="home">
    <div class="home-banner"></div>

    <div class="x-menu">

      <div class="menu-item">
        <div>
          <a href="../account/main">
            <img
              class="icon"
              src="/static/images/notebook.png"
              size="cover"
            />
          </a>
        </div>
        <div>
          账本
        </div>
      </div>
      <div class="menu-item">
        <div>
          <img
            class="icon"
            src="/static/images/paper-plane.png"
            size="cover"
          />
        </div>
        <div>
          油耗
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  data () {
    return {
    }
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
.home-banner {
  position: absolute;
  height: 800px;
  width: 800px;
  background: linear-gradient(to left, #258ddc, #259edb);
  transform: rotate(40deg);
  left: -200px;
  top: -700px;
  border-radius: 240px;
}

.x-menu {
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 230px 30px 0 30px;
  .menu-item {
    display: inline-grid;
    text-align: center;
    padding: 10px;
  }
}

.icon {
  height: 80px;
  width: 80px;
}

</style>
