// 主界面入口 之后要拆分功能
<template>
  <div>
    <div class="container">
      <div class="text-center">
        <div class="center">
          <Avatar size="300" home="true" />
        </div>
        <h1>{{ config.name }}</h1>
        <h4 style="color: #666666">{{ config.username }}</h4>
      </div>
      <hr/>

    </div>
    </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'

export default {
  name: 'Home',
  components: {
    Avatar
  },
  data () {
    return {
      posts: this.getConfig('posts.json').posts,
      config: this.getConfig().config
    }
  },
  methods: {

  },
  mounted: function () {
    this.changeTitle('Home')
  }
}

</script>
<style >

</style>
