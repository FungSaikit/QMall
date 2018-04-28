import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
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
      path: '/personal_center',
      name: 'PersonalCenter',
      component: PersonalCenter
    }
  ]
})
