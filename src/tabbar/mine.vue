<template>
    <div>
        <div class="header1">
            <div class="bac">
                <p class="img">
                    <img src="http://127.0.0.1:3000/2.png">
                </p>
                <a class="aaa" @click.prevent="jump">
                    <span class="name">1511699</span>
                    <span class="ID">id:dd</span>
                </a>
                <a class="mui-icon mui-icon-gear" @click.prevent="jump"></a>
            </div>
        </div>

        
       <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/Home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item " to="/fenlei" >
                <span class="mui-icon mui-icon-list"></span>
                <span class="mui-tab-label">分类</span>
            </router-link>
            <router-link class="mui-tab-item" to="/">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item mui-active" to="/Login">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
      
    </nav>
    </div>
</template>

<style>
    *{
        margin:0;
        padding:0;
    }
    /* .mui-icon,.mui-icon-gear{
        color:white
    } */
    .mui-bar-tab .mui-tab-item.mui-active{
        color:#e5004f;
    }
    #shjjtab .active,#shjjtab .active a{
        background: white;
        color:#e5004f;
    }
    .name,.ID{
        font-size: 12px;
        height:20px;
        margin-top:20px;
        color: white;
    }
    .aaa{
        float: left;
        display: block;
        height:50px;
    }
    .img>img{
        border-radius: 50%;
        height:53px;
        width:53px;
    }
    .img{
        height:53px;
        width: 53px;
        border: 1px solid #ee9595;
        border-radius: 50%;
        overflow: hidden;
        float: left;
    }
    .bac{
        line-height: 95px;
        height:95px;
    }
    .header1{
        height:95px;
        width:100%;
        background:#e5004f;
        padding:20px 12px 20px 12px;
    }
</style>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        jump(){
            this.$router.push("/set");
        }
    }
}
</script>
