<template>
  <div class="container text-center">
    <h1>
      About Me
    </h1>
    <hr />

    <About />
            <div id="editor">
            <mavon-editor style="height: 100%"></mavon-editor>
        </div>
  </div>
</template>

<script>
let About = null
try {
  About = require('@/../posts/data/about.md')
} catch (e) {
  About = require('@/defaults/about.md')
}

export default {
  name: 'AboutMe',
  components: {
    About: About.vue.component
  },
  mounted: function () {
    this.changeTitle('About')
  }
}
</script>
