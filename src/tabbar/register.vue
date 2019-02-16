<template>
    <div>
        <div class="header">
            <router-link to="/Login">
                <a href=""  class="mui-icon mui-icon-arrowleft"></a>
            </router-link>
            <h3>注册</h3>
            <div></div>
      </div>
      <div class="content">
        <form class="mui-input-group" action="get">
            <div class="mui-input-row">
                <label>用户名</label>
            <input type="text" value="name" class="mui-input-clear" placeholder="请输入用户名" v-model="name" @blur.prevent="checkName">
            </div>
            <div class="mui-input-row">
                <label>密码</label>
                <input type="password" value="pwd" class="mui-input-password" placeholder="请输入密码" v-model="pwd">
            </div>
             <div class="mui-input-row">
                <label>确认密码</label>
                <input type="password" value="pwd1" class="mui-input-password" placeholder="请输入密码" v-model="pwd2">
            </div>
            <div class="mui-button-row">
                <button type="button" class="mui-btn" @click="handelreg">立即注册</button>
            </div>
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
        return{
            name:"",
            pwd:"",
            pwd2:"",
            isSubmit:false
        }
    },
    methods:{
        checkName(){
            var name=this.name;
            var url="http://127.0.0.1:3000/existsName?name="+name;
            this.axios.get(url).then(result=>{
                if(result.data.code>0){
                    Toast("欢迎使用！");
                    this.isSubmit=true
                }else{
                    Toast("该用户名已存在！")
                    //已经占用
                    this.isSubmit = false;
                }
            })
        },
        handelreg(){
            if(!this.isSubmit){
                Toast("用户名已存在请修改");
                return 
            }
            var name=this.name;
            var pwd=this.pwd;
            var pwd2=this.pwd2;
            //验证用户名
            var regname = /^[a-z0-9_]{8,12}$/i;
            var regpwd = /^[a-z0-9]{8,12}$/i;
             if(!regname.test(name)){
          Toast("用户名格式不正确");
          return;
        }
        //验证密码
        if(!regpwd.test(pwd)){
          Toast("密码格式不正确");
          return;
        }
        //验证密码与确认密码一致
        if(pwd != pwd2){
          Toast("两次密码不一致,请重新输入！");
          return;
        }
        var url="http://127.0.0.1:3000/register";
            url+="?name="+name+"&pwd="+pwd;
        this.axios.get(url).then(result=>{
            //console.log(result.data);
            Toast(result.data.msg);
            this.name="";
            this.pwd="";
            this.pwd2="";
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
    .mui-btn{
        background: #e5004f;
        color:white;
        width: 80%;
        border:0;
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
