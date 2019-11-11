import Vue from 'vue'
import Router from 'vue-router'
import Mi from './views/mi.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mi',
      component: Mi
    }
  ]
})
