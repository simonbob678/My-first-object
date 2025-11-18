<template>
  <div class="page">
    <img class="banner1" src="../assets/banner.png" alt="海报1"/>
    <div class="Introduction">
      <h1>你好！</h1>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.page{
  color: var(--main-text,black);
  background-color: white;
  display: flex;
  flex-direction: column;
}
.banner1{
  max-height: 65vh;
  object-fit: cover;
}
.Introduction{
  background-color: var(--main-bg,#f0f0f0);
}
</style>