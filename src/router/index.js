import Vue from 'vue'
import Router from 'vue-router'
import FruitSingle from '@/components/Good/FruitSingle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: FruitSingle
    },
    {
      path: '/good',
      name: 'GoodList',
      redirect: {
        name: 'Index'
      }
    }
  ]
})
