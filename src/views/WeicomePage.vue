<template >
  <div class="welcome-page">
    <div class="overlay"></div>
    <div class="content" :style="{opacity:contentOpacity}">
      <h1>🌟欢迎使用VUE试做 🌟</h1>
      <p style=" margin-bottom: 2rem;padding: 0 1rem;">本网页由个人独立设计与开发，全程使用Vue框架构建。
          制作初衷是为HR提供一个直观、高效的窗口，快速了解
          我的技术能力、项目经验与个人特质。通过这个页面，
          我希望精炼地呈现自己的专业素养与思考方式，帮助招
          聘方在短时间内获取关键信息，减少前期沟通中的信
          息差，降低双方的时间与沟通成本，让面试更聚焦于深
          度交流与实际问题探讨。
      </p>
      <button @click="goToApp">立即进入</button>
    </div>
  </div>
  <div class="page1" @scroll="handleScroll">
    <DoubleArrowhead class="arrowhead"/>
    <div class="content1">
      <p style="font-size: large;">个人推荐信</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;我是江苏联合职业技术学院的罗茜蒙，获悉
        贵公司正招聘相关岗位人才，特此递上自荐信，希望能凭借自身多元技能
        与实践经验，争取加入贵团队的机会。
      </p>
      <p>
        专业能力上，我熟练掌握PS、AI、CDR等设计软件，具备两年平面设计实战
        经验；精通HTML、CSS、JavaScript前端技术与Python后端开发，能熟练
        运用VSCode、PyCharm工具，以及Vue、Flask框架搭建项目；同时掌握MyS
        QL数据库操作，可独立完成数据存储与调用。此外，还具备视频剪辑能力，曾
        打造出全网播放量超千万的作品，实现技术与内容创作的双向结合。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        实践经历中，一年武术教练工作培养了我的责任意识与沟通能力，让我学会
        高效统筹教学节奏；一年电商商店经营经历，则让我深入理解市场需求与用
        户思维，能从商业视角优化设计与开发成果。这些经历让我明白，技能是基
        础，而跨界思维与实践能力，才是将技术转化为价值的关键。
      </p>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        本人郑重承诺：若有幸加入贵公司，我将以“技术为核、实践为基”，快速适配
        岗位需求，主动承担工作任务。持续深耕专业领域，不断精进技术能力；同时
        积极融入团队，以过往多元经验为团队注入新活力，切实为公司发展贡献力量。
      </p>
    </div>
    <AppFooter style="width: 100%;"/>
  </div>
</template>

<script setup>
import DoubleArrowhead from '@/components/DoubleArrowhead.vue';
import AppFooter from '@/components/AppFooter.vue';
import { useRouter } from 'vue-router';
import { ref,onMounted, onUnmounted } from 'vue'; 

const contentOpacity = ref(1)

onMounted(() => {
  window.addEventListener('scroll', handleWindowScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleWindowScroll);
});

const handleWindowScroll = () => {
  const scrollTop = window.scrollY; // 全局滚动距离
  const maxScroll = 300;
  contentOpacity.value = Math.max(1 - scrollTop / maxScroll, 0);
};
const router = useRouter();
// 点击跳转至 App 主页面
const goToApp = () => {
  router.push('/HomePage'); // 对应主页面的路由路径
};
</script>

<style scoped>
.welcome-page {
  position: fixed;
  display: flex;
  justify-content: center;
  background-image: url(../assets/banner.png);
  background-size: cover;
  background-position: center;
  height: 100%;
}
.overlay{
    opacity: 0.8;
    position: fixed;
    background-image: var(--wel-gradient);
    height: 100%;
    width: 100%;
    transition: all 0.5s ease;
    z-index: 1;
}
.content{
  z-index: 1;
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
}
h1 {
  text-align: start;
  font-size: 4rem;
  margin-bottom: 2rem;
  color: var(--wel-h1,#333);
  transition: all 0.5s ease;
}
p{
  margin-bottom: 1rem;
  padding: 0 0rem;
  font-size: 1rem;
  color: var(--wel-p,#333);
  text-align: center;
  transition: all 0.5s ease;
}
button {
  padding: 12px 30px;
  font-size: 18px;
  background: #42b983;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
button:hover {
  background: #359469;
}
.page1{
    position: absolute;
    display: flex;
    flex-direction: column;
    top: 90%;
    width: 100%;
    overflow-y: auto
}
.content1{
  flex-shrink: 0;
    display: flex;
    flex-direction: column;
    padding: 2rem 2rem;
    box-sizing: border-box;
    position: relative;
    display: flex;
    height: 50rem;
    left: 5%;
    width: 90%;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    background-color: var(--wel-content,rgba(256, 256, 256, 0.6));
    border: 0.1rem solid #b5b5b5;
}
.arrowhead{
height: 4rem;
animation: flash 2s infinite;
}
@keyframes flash{
  0%{opacity: 0;}
  40%{opacity: 0.8;}
  60%{opacity: 0.8;}
  100%{opacity: 0;}
}
@media(max-width:70rem){
h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}
.arrowhead{
  height: 3rem;
}
}
@media(max-width:50rem){
h1 {
  font-size: 1.5rem;
}
.arrowhead{
  height: 2.5rem;
}
}
@media(max-width:40rem){
h1 {
  font-size: 1.2rem;
}
p{
  font-size: 0.8rem;
}
}
</style>
