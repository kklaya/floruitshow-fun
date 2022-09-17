<template>
  <div :class="`${home ? 'avatar-home' : ''}`">
    <vs-avatar :size="500" rect>
      <img :size="100"
        :src="config.avatarPath"
      >
    </vs-avatar>
  </div>
</template>

<script>
export default {
  name: 'Avatar',
  data: function () {
    return {
      config: this.getConfig().config
    }
  },
  props: [
    'size',
    'home'
  ]
}
</script>

<style scoped>
.avatar-home .vs-avatar, .avatar-home .vs-avatar-content {
  min-width: 200px !important;
  min-height: 200px !important;
}
</style>
