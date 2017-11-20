import Vue from 'vue'
import Router from 'vue-router'

import FruitList from './Good/FruitList'
import FruitDetail from './Good/FruitDetail'
import Order from './Order'

Vue.use(Router)

export default new Router({
  mode: 'history', // 可以去掉url中的"#/"
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: {
        name: 'FruitSingle'
      }
    },
    FruitList,
    FruitDetail,
    Order
  ]
})
