<template>
  <div class="container">
    <h1 class="text-center">放置三娃1.拼图游戏，用上之前抽奖布局
      2.三娃认脸游戏
      3.摇一张三娃
    </h1>
    <hr />
    <div class="grid-3_xs-1_sm-2_md-2" v-if="links.length">
      <div
        :key="index"
        v-for="(link, index) in links"
        class="col w-full"
      >
        <ExchangeLink
          :link="link.link"
          :title="link.title"
          :desc="link.desc"
          class="center"
        />
      </div>
      // 显示视频封面以及视频外链
<div class="main" style="height: 100px;margin-top: 100px;">
  <a href="javascript:;" class="video" id="video"><img src="http://i1.hdslb.com/bfs/archive/62915c7879fb3149bd8e21fb6e3c06749b7b40b2.jpg@160w_100h.webp"></a>
		</div>
		<div class="video-btn" id="video-btn">
			<div class="video-area" id="video-area"></div>
			<a class="video-shut" id="video-shut">×</a>
		</div>
		<div id="shadow"></div>
    </div>

    <Nothing v-else />

  </div>

</template>

<script>
import ExchangeLink from '@/components/ExchangeLink.vue'
import Nothing from '@/components/Nothing.vue'

export default {
  name: 'Game',
  data: function () {
    return {
      links: this.getConfig('links.json').links
    }
  },
  components: {
    ExchangeLink,
    Nothing
  }

}
</script>
