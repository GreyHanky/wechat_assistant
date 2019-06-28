<template>
  <nav class="x-menu">
    <div class="wrapper"></div>
    <ul class="menu">
      <li>
        <a href="../account/main">记账本</a>
      </li>
      <li>加油统计</li>
    </ul>
  </nav>
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

<style lang="scss">
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
nav {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 99;
  .wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 50%;
    height: 100%;
    animation: x__zoom 0.4s 0.3s linear forwards;
    &:before,
    &:after {
      content: "";
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 25%;
      max-width: 100px;
      height: 150%;
      background-color: #565654;
      z-index: -1;
    }
    &:before {
      transform: rotate(-45deg) translate(0, -100%);
      animation: x__in--left 0.3s 0.01s linear forwards;
    }
    &:after {
      transform: rotate(45deg) translate(0, -100%);
      animation: x__in--right 0.3s 0.01s linear forwards;
    }
  }
}

ul.menu {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: auto;
  z-index: 100;
  transform: translate(-50%, -50%);
  li {
    color: white;
    font-size: 30px;
    text-align: center;
    padding: 12px;
    opacity: 0;
    transform: translateY(24px);
    animation: x__menu--fade-in 0.2s 0.6s ease-out forwards;
  }
}

button {
  position: fixed;
  bottom: 12px;
  left: 12px;
  padding: 8px 12px;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;
  color: white;
  background-color: black;
  border: 0;
  z-index: 101;
}

@keyframes x__in--left {
  100% {
    transform: rotate(-45deg) translate(0, 0);
  }
}
@keyframes x__in--right {
  100% {
    transform: rotate(45deg) translate(0, 0);
  }
}

@keyframes x__zoom {
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(8);
  }
}

@keyframes x__menu--fade-in {
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
