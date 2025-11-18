<template>
  <nav class="navbar">
    <div class="logo">
      <img style="height: 2.5rem;width: auto;" src="../assets/logo.png" alt="logo">
      <div style="display: flex;flex-direction: row;align-items: end;margin-left: 0.5rem;">
        <h2>Test</h2>
        <p style="font-size: 0.8rem;margin-left: 0.5rem;font-weight: 300;">--Simon11.11</p>
      </div>
    </div>
    <div style="display: flex;align-items: center;">
      <div style="display: flex;flex-direction: row;margin-left: auto;align-items: center;">
        <IsDark class="isdark1"/>
        <div class="hamburger" @click="toggleMenu">
          <span></span>
          <span style="margin-top: auto;margin-bottom: auto;"></span>
          <span></span>
        </div>
      </div>
      <div class="nav-links-desktop">
        <IsDark class="isdark2"/>
        <router-link class="nav-link" to="/HomePage">首页</router-link>
        <router-link class="nav-link" to="/CategoryPage">分类</router-link>
        <router-link class="nav-link" to="/ContactPage">联系</router-link>
        <router-link class="nav-link" to="/MessagesPage">信息</router-link>
        <router-link class="nav-link" to="/ProfilePage">我的</router-link>
      </div>
      <div class="nav-drawer" :class="{open:isMenuOpen}">
        <router-link class="nav-link" @click="closeMenu" to="/HomePage">首页</router-link>
        <router-link class="nav-link" @click="closeMenu" to="/CategoryPage">分类</router-link>
        <router-link class="nav-link" @click="closeMenu" to="/ContactPage">联系</router-link>
        <router-link class="nav-link" @click="closeMenu" to="/MessagesPage">信息</router-link>
        <router-link class="nav-link" @click="closeMenu" to="/ProfilePage">我的</router-link>
      </div>
    </div>
    <div v-if="isMenuOpen" class="overlay" @click="closeMenu">
    </div>
  </nav>
</template>

<script setup>
import IsDark from './IsDark.vue' // 导入组件
import {ref}from'vue';
const isMenuOpen = ref(false);
const toggleMenu = () =>{
  isMenuOpen.value = !isMenuOpen.value
};
const closeMenu = () =>{
  isMenuOpen.value = false
}
</script>

<style scoped>
.navbar{
  padding: 1rem 0rem;
  display: grid;
  grid-template-columns: 5fr 5fr;
  align-items: center;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.2);
  position: relative;
  height: 3rem;
  width: 100%;
  background-color: var(--nav-bg,#f0f0f0);
  color: var(--nav-text,black);
  transition: all 0.5s ease;
}
.logo{
  display: flex;
  align-items: center;
  margin-left: 1rem;
}
.isdark1{
  display: none;
}
.hamburger{
  display: none;
  flex-direction: column;
  width: 2.5rem;
  height: 1.8rem;
  cursor: pointer;
  margin-right: 1rem;
}
.hamburger span{
  display: block;
  width: 100%;
  height: 0.12rem;
  border-radius: 0.2rem;
  background-color: var(--hamburger-bg,black);
  transition: all 0.5s ease;
}
.nav-links-desktop {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 35rem;
  min-width: 15rem;
  width: 100%;
  margin-left: auto;
  margin-right: 1rem;
  font-size: 1.2rem;
  line-height: 1rem;
}
.nav-link {
  text-decoration: none;
  padding: 0.75rem 0rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  text-align: center;
  font-size: 1.2rem;
  color: var(--nav-text,black);
  transition: all 0.5s ease;
}
.nav-link:hover{
  font-size: 1.2rem;
  text-decoration: underline;
  text-underline-offset: 0.2rem;
}
.navbar .router-link-active{
  font-weight: bold;
}
.nav-drawer{
  display: none;
  flex-direction: column;
  position: absolute;
  top: 100%;
  right: 2rem;
  width: 12rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 1rem;
  align-items: center;
  max-height: 0;
  visibility: hidden;
  opacity: 0;
  transition: max-height 0.4s ease,opacity 0.4s ease,visibility 0.4s ease;
  box-shadow: -0.4rem 0.6rem 1rem rgba(0, 0, 0, 0.3);
  overflow: hidden;
  z-index: 999;
  background-color: var(--nav-bg,#f0f0f0);
  color: var(--nav-text,black);
}
.nav-drawer.open{
  max-height: 20rem;
  visibility: visible;
  opacity: 1;
}
.nav-drawer .nav-link{
  width: 80%;
  padding: 0.6rem 0rem;
  border-bottom: 1px solid rgba(256, 256, 256, 0.5);
}
.nav-drawer .nav-link:last-child{
  border-bottom: none;
}
.overlay{
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--nav-lay,white);
  opacity: 0.2;
  cursor: pointer;
  animation: fade-in 0.2s linear;
}
@keyframes fade-in{
  from{opacity: 0;}
  to{opacity: 0.2;}
}
@media(max-width:60rem){
  .navbar{
    height: 2.5rem;
  }
  .isdark1{
    display: flex;
    margin-right: 1rem;
  }
  .isdark2{
    display: none;
  }
  .hamburger{
    display: flex;
  }
.nav-links-desktop{
  display: none;
}
  .logo{
    grid-column: 1;
  }
  .hamburger{
    grid-column: 2;
    margin-left: auto;
  }
  .nav-drawer{
    display: flex;
    width: 15rem;
  }
  .overlay{
    display: flex;
  }
}
@media(max-width:40rem){
  .nav-drawer{
    width: 12rem;
  }
}
</style>