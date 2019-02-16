import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/tabbar/Home.vue'
import Login from '@/tabbar/Login.vue'
import fenlei from '@/tabbar/fenlei.vue'
import shjj1 from '@/tabbar/shjj1.vue'
import spsx from '@/tabbar/spsx.vue'
import register from '@/tabbar/register.vue'
import mine from '@/tabbar/mine.vue'
import set from '@/tabbar/set.vue'
import shopCart from '@/tabbar/shopCart.vue'
import shopCart1 from '@/tabbar/shopCart1.vue'
import betterScroll from "@/tabbar/better-scroll.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',redirect:"/Home"},
    {path:'/Home',component:Home},
    {path:'/Login',component:Login},
    {path:'/betterScroll',component:betterScroll},
    {path:'/fenlei',component:fenlei,
     children:[
       {path:'',component:shjj1},
       {path:'spsx/1',component:shjj1},
       {path:'spsx/2',component:spsx},
      ]
    },
    {path:'/register',component:register},
    {path:'/mine',component:mine},
    {path:'/set',component:set},
    {path:'/shopCart',component:shopCart,
    children:[
      {path:'',component:shopCart},
      {path:'/shopCart1',component:shopCart1},
    ]
  }
  ]
})
