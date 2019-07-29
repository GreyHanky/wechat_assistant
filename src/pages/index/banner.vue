<template>
  <div class="banner-container">

    <div class="home-banner"></div>
    <div class="area-group">
      <div class="area">
        <div class="area area-child">
          <div class="area area-child">
            <div class="area area-child">
              <div class="area area-child"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="banner-text">文字文字</div>
  </div>
</template>
<style lang="scss" scoped>
.banner-container {
  position: absolute;
  height: 200px;
  width: 800px;
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

$areaSize: 150px;
.area-group {
  position: absolute;
  left: -35px;
  top: -15px;
  .area {
    box-sizing: border-box;
    height: $areaSize;
    width: $areaSize;
    border: 1px solid #fff;
    padding: 12px;
    border-radius: 50%;
  }
  .area-child {
    height: 100%;
    width: 100%;
  }
}
.banner-text {
  position: absolute;
  left: 200px;
  top: 50px;
  color: #fff;
}
</style>

