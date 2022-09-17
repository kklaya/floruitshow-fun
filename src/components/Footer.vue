// 页脚
<template>
  <div class="footer">
    <div class="container text-center">
      <!-- <h3>{{ config.blogTitle }}</h3> -->
      <p><i>{{ config.description }}</i></p>
      <br />
      <a href="https://beian.miit.gov.cn" >豫ICP备20220037775号-1</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data: function () {
    return {
      config: this.getConfig().config,
      curYear: new Date().getFullYear()
    }
  },
  methods: {
    getYear: function () {
      return new Date().getFullYear()
    }
  }
}
</script>
