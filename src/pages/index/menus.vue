<template>
  <div class="x-menu">

    <div
      class="menu-item"
      v-for="(menu, index) in menus"
      :key="index"
    >
      <div>
        <a :href="menu.link">
          <img
            class="icon"
            :src="menu.icon"
            size="cover"
          />
        </a>
      </div>
      <div>
        {{menu.text}}
      </div>
    </div>
  </div>
</template>
<script>
import menus from '../../configs/menus'

export default {
  data () {
    return {
      menus
    }
  }
}
</script>

<style lang="scss" scoped>
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
