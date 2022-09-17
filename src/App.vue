<template>
  <div id="app" class="content">
    <Navbar />
    <router-view />
    <br v-for="index in 10" :key="index" />
    <div class="wrapper">
      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
// 全局注册
// import with ES6
import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// use
Vue.use(mavonEditor)

export default {
  name: 'App',
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.w-full {
  width: 100% !important;
}

.w-full .vs-card__text {
  width: 100%;
}
</style>
