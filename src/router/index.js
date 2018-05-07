import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cart from '@/components/Cart'
import ClassFilter from '@/components/ClassFilter'
import PersonalCenter from '@/components/PersonalCenter'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/class_filter',
      name: 'ClassFilter',
      component: ClassFilter
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/personal_center',
      name: 'PersonalCenter',
      component: PersonalCenter
    },
  ]
})
