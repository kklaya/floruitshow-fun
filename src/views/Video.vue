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
        <!-- <p>{{ config.description }}</p> -->
      </div>
      <h2>Video  想按照时间线那样排列</h2>

     <video class="video" controls="controls"
      ref="startvideo"
      poster="http://rhoaws9un.hd-bkt.clouddn.com/%E5%B7%A1%E6%BC%94%E8%A7%86%E9%A2%91/1662387324975.jpg?e=1662387915&token=iBgk9FnfDEal8mtAtrBeexSLJ7xHI5d3PJzRL6u3:WO4d7-VPmEF3aIIygEKA4ijIj_c=/w/50/h/100"
          height="500"
          width="700"      >
       <source src=
"http://rhoaws9un.hd-bkt.clouddn.com/%E5%B7%A1%E6%BC%94%E8%A7%86%E9%A2%91/%E3%80%90%E7%A6%8F%E7%A6%84%E5%AF%BF%E3%80%912020.12.20%E3%80%8A%E6%88%91%E7%94%A8%E4%BB%80%E4%B9%88%E6%8A%8A%E4%BD%A0%E7%95%99%E4%BD%8F%E3%80%8B%E5%85%A8%E5%9B%BD%E5%B7%A1%E6%BC%94%E6%9D%AD%E5%B7%9E%E7%AB%99.mp4?e=1662387786&token=iBgk9FnfDEal8mtAtrBeexSLJ7xHI5d3PJzRL6u3:QgbdwCiEW6iJt4OF0LatjUuZABA=/w/700/h/500"
       type="video/mp4">
     </video>

      <hr/>

    </div>
    </div>
</template>

<script>
import Avatar from '@/components/Avatar.vue'
// import Nothing from '@/components/Nothing.vue'

export default {
  name: 'Video',
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
    startvideo: function () {
      if (this.$refs.startvideo.paused) {
        this.$refs.startvideo.play()
      } else {
        this.$refs.startvideo.pause()
      }
    }
  },
  mounted: function () {
    this.changeTitle('Home')
  }
}

</script>
<style >
/* video{
    width: 100%;
    height: 100%;
    object-fit: fill;
} */
</style>
