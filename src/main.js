// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import LyTab from 'ly-tab';

Vue.use(LyTab);

//4:引入axios库 main.js
import axios from "axios"
//5:修改配置信息 跨域保存session值!!!!
axios.defaults.withCredentials=true
//6:注册组件
Vue.prototype.axios = axios

//引入jquery
import $ from 'jquery'
//mint-ui css 文件
import 'mint-ui/lib/style.css'

//引入mui
import mui from './lib/mui/js/mui.js'
import './lib/mui/js/mui.min.js'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/mui.css'

Vue.prototype.mui = mui 


Vue.config.productionTip = false;
import {Header,Swipe,SwipeItem,Button,CellSwipe} from 'mint-ui';
Vue.component(CellSwipe.name,CellSwipe);
Vue.component(Header.name,Header);
Vue.component(Swipe.name,Swipe);
Vue.component(SwipeItem.name,SwipeItem);
Vue.component(Button.name,Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
