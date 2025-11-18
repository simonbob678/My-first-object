<template>
  <button 
    class="is-dark-toggle" 
    :class="{ 'dark-mode': themeStore.isDarkMode }"
    @click="toggleTheme">
    <p class="text-dark">☪</p>
    <p class="text-light">☼</p>
    <div class="toggle-slider"></div>
  </button>
</template>

<script setup>
import { getCurrentInstance,onMounted,reactive,} from 'vue';
let themeStore = null 
const Instance = getCurrentInstance()
if (!themeStore) {
  themeStore = reactive({
    isDarkMode:localStorage.getItem('darkMode')==='true'
  })
}
Instance.proxy.themeStore = themeStore

onMounted(() =>{
  const html = document.documentElement;
  html.classList.toggle('dark-mode',themeStore.isDarkMode)
})

const toggleTheme = () => {
  themeStore.isDarkMode = !themeStore.isDarkMode
  localStorage.setItem('darkMode',themeStore.isDarkMode)

  const html = document.documentElement;
  html.classList.toggle('dark-mode',themeStore.isDarkMode)
}
</script>


<style>
.is-dark-toggle{
  display: grid;
  grid-template-columns: 5fr 5fr;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 2rem;
  width: 4.2rem;
  outline: none;
  border: 0.05rem solid #545454;
  border-radius: 1rem;
  background-color: white;
  transition: background-color 0.3s ease;
}
.is-dark-toggle.dark-mode{
  background-color: black;
}
.toggle-slider{
  position: absolute;
  top: 0;
  left: 0px;
  height: 1.8rem;
  width: 1.8rem;
  border-radius: 1rem;
  border: 0.05rem solid #b6b6b6;
  background-color: white;
  box-shadow: 0.2rem 0rem 0.2rem rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease
}
.is-dark-toggle.dark-mode .toggle-slider{
  left: 2.2rem;
  box-shadow: -0.2rem 0rem 0.2rem rgba(0, 0, 0, 0.5);
}

.text-light,.text-dark{
  position: relative;
  line-height: 2rem;
}
.text-dark{
  color: white;
  font-size: 2rem;
  opacity: 0;
  transition: opacity 0.5s ease;
  transition-delay: 0.3s;
}
.text-light{
  color: black;
  font-size: 2rem;
  opacity: 1;
  transition: opacity 0.5s ease;
  transition-delay: 0.3s;
}
.is-dark-toggle.dark-mode .text-light{
  opacity: 0;
}
.is-dark-toggle.dark-mode .text-dark{
  opacity: 1;
}
:root {
  --nav-bg: #f0f0f0;
  --nav-text: black;
  --nav-lay:white;
  --hamburger-bg: black;
  --foot-bg: #e4e4e4;
  --foot-text: black;
  --wel-gradient: linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0.8));
  --wel-h1:#333;
  --wel-p:#333;
  --wel-content:rgba(256, 256, 256, 0.6);
}

:root.dark-mode {
  --nav-bg: #424242;
  --nav-text: white;
  --nav-lay:black;
  --hamburger-bg: white;
  --foot-bg: #282828;
  --foot-text: white;
  --wel-gradient: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.6));
  --wel-h1:white;
  --wel-p:white;
  --wel-content:rgba(53, 53, 53, 0.6);
}
</style>
