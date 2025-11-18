<template>
  <div id="app">
    <div class="nav-top">
      <AppNavbar />
    </div>
      <router-view class="page"></router-view>
  </div>
</template>

<script setup>
import AppNavbar from './components/AppNavbar.vue';
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
#app{
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.page {
  padding: 2rem 2rem;
  flex: 1;
}
.app-footer {
  padding: 1rem;
  position: relative;
  z-index: 10;
}
.nav-top{
  position: fixed;
  width: 100%;
  z-index: 999;
}

</style>