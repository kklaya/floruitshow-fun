import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Message from '../views/Message.vue'
import Joke from '../views/Joke.vue'
import Game from '../views/Game.vue'
import Video from '../views/Video.vue'
import NotFound from '../views/errors/NotFound.vue'

const children = []

let Posts = null
try {
  Posts = require('@/../posts/data/posts.json')
} catch (e) {
  Posts = require('@/defaults/posts.json')
}

Posts.posts.map(post => {
  children.push({
    path: post.id,
    component: async function () {
      let value
      await import(`@/../posts/${post.id}.md`).then((val) => {
        value = val
      })
      return value.vue.component
    }
  })
})
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/message',
    name: 'Message',
    component: Message
  },
  {
    path: '/joke',
    name: 'Joke',
    component: Joke
  },
  {
    path: '/video',
    name: 'Video',
    component: Video
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
