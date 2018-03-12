import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/components/goods/goods'
import Seller from '@/components/seller/seller'
import Ratings from '@/components/ratings/ratings'

Vue.use(Router)

export default new Router({
  // 激活连接
  linkActiveClass: 'active',
  routes: [
    { path: '/goods', component: Goods },
    { path: '/seller', component: Seller },
    { path: '/ratings', component: Ratings }
  ]
})
