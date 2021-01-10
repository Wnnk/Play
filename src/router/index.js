import Vue from 'vue'
import Router from 'vue-router'
import  Login from '../components/Login'
import  Home  from '../../src/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:Login,
    },
    {
      path:'/home',
      component:Home,
    },
    {
      path:'/',
      redirect:"/home"
    }
    
  ]
})
