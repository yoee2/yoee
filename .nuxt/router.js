import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6f942219 = () => interopDefault(import('../pages/note.vue' /* webpackChunkName: "pages/note" */))
const _ee373b32 = () => interopDefault(import('../pages/notes/Middleware.vue' /* webpackChunkName: "pages/notes/Middleware" */))
const _13d02630 = () => interopDefault(import('../pages/notes/vue生命周期钩子函数.vue' /* webpackChunkName: "pages/notes/vue生命周期钩子函数" */))
const _2971a88a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/note",
    component: _6f942219,
    name: "note"
  }, {
    path: "/notes/Middleware",
    component: _ee373b32,
    name: "notes-Middleware"
  }, {
    path: "/notes/vue生命周期钩子函数",
    component: _13d02630,
    name: "notes-vue生命周期钩子函数"
  }, {
    path: "/",
    component: _2971a88a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}