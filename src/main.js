import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Admin from './components/Admin.vue'
import Form from './components/Form.vue'
import Check from './components/Check.vue'
import Agencyrating from './components/Agencyrating.vue'
import Reshedule from './components/Reshedule.vue'
import Adv from './components/Adv.vue'
import Agencyrefunds from './components/Agencyrefunds.vue'


Vue.use(VueRouter)
Vue.config.productionTip = false

let router = new VueRouter({
  routes: [
    {
      name: 'Home',
      path: '/home',
      component: Home
    },
    {
      name: 'Admin',
      path: '/admin',
      component: Admin
    },
    {
      name: 'Adv',
      path: '/adv',
      component: Adv
    },
    {
      name: 'Agencyrefunds',
      path: '/agencyrefunds',
      component: Agencyrefunds
    },
    {
      name: 'Form',
      path: '/',
      component: Form
    },
    {
      name: 'Check',
      path: '/check',
      component: Check
    },
    {
      name: 'Agencyrating',
      path: '/agencyrating',
      component: Agencyrating
    },
    {
      name: 'Reshedule',
      path: '/reshedule',
      component: Reshedule
    }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
