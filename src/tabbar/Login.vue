<template>
   <div>
      <div class="header">
            <router-link to="/Home">
                <a href=""  class="mui-icon mui-icon-arrowleft"></a>
            </router-link>
            <h3>登陆</h3>
            <div></div>
      </div> 
      <div class="form">
          <form action="get">
              <ul>
                  <li class="tel">
                      <p class="mui-icon mui-icon-phone"></p>
                      <p>
                          <input type="text" placeholder="请输入用户名" v-model="name">
                      </p>
                  </li>
                  <li class="passw">
                      <p class="mui-icon mui-icon-locked"></p>
                      <p>
                          <input type="password" placeholder="请输入密码" v-model="pwd">
                      </p>
                  </li>
                  <div class="btn_area">
                      <input type="button" value="立即登陆" @click.prevent="login">
                  </div>
                  <div class="btn_link">
                      <a href="">忘记密码？</a>
                      <router-link to="/register">新用户注册</router-link>
                  </div>
              </ul>
          </form>
      </div>
      <div class="other_logins">
          <p class="title">
              <span>使用第三方账号登陆</span>
          </p>
          <p>
              <a href="">
                  <span class="mui-icon mui-icon-qq"></span>
                  <span class="qq">QQ</span>
              </a>
              <a href="">
                  <span class="mui-icon mui-icon-weibo"></span>
                  <span class="wb">新浪微博</span>
              </a>
          </p>
      </div>
   </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            name:"",
            pwd:""
        }
    },
    methods:{
        login(){
            var name=this.name;
            var pwd=this.pwd;
            var url="http://127.0.0.1:3000/Login?name="+name+"&pwd="+pwd;
            console.log("账号是"+name+":"+"密码是"+pwd);
            this.axios.get(url).then(result=>{
                 if(result.data.code == 1){
                    Toast("登陆成功");
                    sessionStorage.setItem("uname",name);
                    this.$router.push("/Home");
                }else{
                    Toast("用户名或密码不正确");
                }
            })
        }
    }
}
</script>
<style>
    *{
        margin:0;
        padding:0;
    }
    .qq,.wb{
        color:black
    }
    .mui-icon-weibo{
        color:brown
    }
    .other_logins{
        margin-top:40px;    
    }
    .title{
        border-top:1px solid #999;
        line-height: 0;
    }
    .title span {
        background:#f3f5f7;
        font-size:.9rem;
        color:black;
    }
    .btn_link{
        display: flex;
        justify-content: space-between;
        text-align: center;
        padding:0 13px 0 13px;
    }
    .btn_link a{
        color:#e5004f;
        font-size: 12px;
    }
    .btn_area input{
        background: #e5004f;
        border:0;
        color:white;
        width:296px;
        height:40px;
        margin-top:10px;
    }
    .mui-icon-locked{
        text-align: center;
        margin-left: 5px;
        height:33px;
        line-height: 33px;
    }
    .passw{
           display: flex;
        background: white;
        height:33px;
        line-height: 33px;
        margin-top:2px;
    }
    .mui-icon-phone{
        text-align: center;
        margin-left: 5px;
        height:33px;
        line-height: 33px;
    }
    .tel{
        display: flex;
        background: white;
        height:33px;
        line-height: 33px;
    }
    .tel input,.passw input{
        border:none;
        height:33px;
        font-size: 0.8rem;
    }
    .header{
        display: flex;
        justify-content: space-between;
        background: #f9f9f9;
    }
    .header h3{
        color:#e5004f;
        font-size: 1.1rem;
        text-align: center;
    }
    .mui-icon-arrowleft{
        color:black;
    }
</style>
