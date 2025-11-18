<template>
  <!-- 按钮默认隐藏，滚动到一定距离后显示 -->
  <button 
    class="back-to-top" 
    @click="scrollToTop"
    :class="{ 'visible': isVisible }"
  >
    ↑ 回到顶部
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);

const handleScroll = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
  });
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.back-to-top {
  /* 按钮默认样式（隐藏状态） */
  position: fixed; /* 固定在页面右下角 */
  bottom: 20px;
  right: 20px;
  padding: 10px 15px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0; /* 初始透明 */
  visibility: hidden; /* 初始隐藏（不占空间） */
  transition: opacity 0.3s ease, visibility 0.3s ease; /* 显示/隐藏动画 */
  z-index: 999; /* 确保在其他内容上方 */
}

/* 显示状态的样式 */
.back-to-top.visible {
  opacity: 1;
  visibility: visible;
}

/* 鼠标悬停效果 */
.back-to-top:hover {
  background-color: #555;
}
</style>