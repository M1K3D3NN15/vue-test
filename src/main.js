import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//import AboutUs from "@/components/AboutUs";
import AboutUs from "@/components/AboutUs";
import HelloWorld from "@/components/HelloWorld";

Vue.config.productionTip = false

// Use Vue-router
Vue.use(VueRouter)

// definition de route
const routes = [
  {
    path: '/',
    component: HelloWorld
  },
  {
    path: '/about',
    component: AboutUs
  }
]

// Inizialize the Router
const router = new VueRouter({
  mode: 'history',
  routes: routes // short for `routes: routes`
})

// pass to
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
