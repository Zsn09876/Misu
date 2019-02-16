<template>
    <div class="app-home">
        <div class="home">
            <div id="search">
                <div class="search-bar">
                    <div class="search-mask" :style="maskStyle" id="d1"></div>
                    <div class="search-box">
                        <div class="search-txt">
                            <input type="text" placeholder="搜索词">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>
                <img src="../img/1.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../img/2.jpg" alt="">
            </mt-swipe-item>
            <mt-swipe-item>
                <img src="../img/3.jpg" alt="">
            </mt-swipe-item>
        </mt-swipe>
        <div class="ensure">
            <span>品质保障</span>
            <span>15天无忧退换货</span>
            <span>全场免运费</span>
        </div>
        <div class="gap gap1"></div>
        <ul class="mui-table-view mui-grind-view mui-grid-9">
            <li class="mui-table-view-cell mui-media">
                <router-link  to="/">
                    <img src="../img/4.jpg" alt="">
                    <div class="mui-media-body">店主</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link  to="/">
                    <img src="../img/5.jpg" alt="">
                    <div class="mui-media-body">新人</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link  to="/">
                    <img src="../img/6.jpg" alt="">
                    <div class="mui-media-body">升级</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link  to="/">
                    <img src="../img/7.jpg" alt="">
                    <div class="mui-media-body">团购</div>
                </router-link>
            </li>
            <li class="mui-table-view-cell mui-media">
                <router-link  to="/">
                    <img src="../img/8.jpg" alt="">
                    <div class="mui-media-body">买卖</div>
                </router-link>
            </li>
        </ul>
        <div class="gap gap2"></div>
        <div class="ad">
            <a href="/" class="ad-item">
                <img src="../img/9.jpg" alt="">
                <div class="ad-txt">
                    <span class="txt-c1">古法手工蜜</span>
                    <span class="txt-c">查看详情</span>
                </div>
            </a>
        </div>
        <div class="gap gap2"></div>
        <div class="ad">
            <a href="/" class="ad-item">
                <img src="../img/10.jpg" alt="">
                <div class="ad-txt">
                    <span class="txt-c1">告别凌乱 居家收纳好选择</span>
                    <span class="txt-c">查看详情</span>
                </div>
            </a>
        </div>
        <div class="gap gap2"></div>
        <div class="ad">
            <a href="/" class="ad-item">
                <img src="../img/11.jpg" alt="">
                <div class="ad-txt">
                    <span class="txt-c1 txt-c2">肤白貌美清单 让他迷恋你的美 全场30元起</span>
                    <span class="txt-c">查看详情</span>
                </div>
            </a>
        </div>
        <div class="gap2 gap"></div>
       <div class="whp">
            <div class="whp-top">
                <span class="whp-top1">玩火拼</span>
                <span>更多</span>
            </div>
            <div class="whp-body">
                <a href="javascript:;">
                    <div class="p-img">
                        <img src="../img/12.jpg" alt="">
                    </div>
                    <div class="p-info">
                        <span class="p-name">日本原装进口厨卫清洁液洗洁精600ml</span>
                        <span class="flex">
                            <span>
                                <span class="p-price">￥9</span>
                                <span class="p-market">￥20</span>
                            </span>
                        </span>
                    </div>
                </a>
                <a href="">
                    <div class="p-img">
                        <img src="../img/13.jpg" alt="">
                    </div>
                    <div class="p-info">
                        <span class="p-name">118g  巴旦木坚果炒货休闲零食品 奶油味年货</span>
                        <span class="flex">
                            <span>
                                <span class="p-price">￥10</span>
                                <span class="p-market">￥20</span>
                            </span>
                        </span>
                    </div>
                </a>
            </div>
        </div> 
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item mui-active" to="/Home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/fenlei" >
                <span class="mui-icon mui-icon-list"></span>
                <span class="mui-tab-label">分类</span>
            </router-link>
            <div class="mui-tab-item" @click="tocart">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                <span class="mui-tab-label">购物车</span>
            </div>
            <div class="mui-tab-item" @click="toLogin">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">我的</span>
            </div>
        </nav>
        <router-link to="/">
            <div class="mui-icon mui-icon-arrowup gohistory1" :style="toTop" id="d2" @click="top"></div>
        </router-link>
        <div @click="jump">
            <div class="gohistory mui-icon mui-icon-paperplane" >
            </div>
        </div>
        
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            maskStyle:"opacity:0",
            toTop:"opacity:0"

        }
    },
    methods:{
        jump(){
             if(!sessionStorage.getItem("uname")){
                 Toast("请先登录")
                this.$router.push("/Login")
            }else{
                this.$router.push("/mine")
            }
        },
        top(){
            document.documentElement.scrollTop=0 //topTop !!!!只有这个可以
        },
        tocart(){
            if(!sessionStorage.getItem("uname")){
                this.$router.push("/Login")
            }else{
                this.$router.push("/shopCart")
            }
        },
        toLogin(){
            //判断是否已经登陆，登陆成功则结果为true
            if(!sessionStorage.getItem("uname")){
                //用编程方式跳转至我的页面
                this.$router.push("/Login");
                
            }else{
                //若没有登陆过则执行跳转至登陆页面
                this.$router.push("/mine");
            }
        }
    },
    mounted(){
        window.onscroll=function(){
            var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
             var a=document.getElementById("d1");
             var toTop=document.getElementById("d2");
            if(scrollTop<=200&&scrollTop>100){
                a.style.opacity="0.5";
                toTop.style.opacity="0"
            }
            else if(scrollTop>200){
                a.style.opacity="0.8";
                toTop.style.opacity="1"
            }
            else if(scrollTop>300){
                toTop.style.opacity="1"
            }
            else{
                a.style.opacity="0";
                 toTop.style.opacity="0"
            }
        }
        
    }
}
</script>

<style>
.mui-icon-arrowup{
    color:#999;
}
.gohistory1{
    position: fixed;
    top:440px;
    left:285px;
    background:white;
    border:1px solid #ddd;
    height:30px;
    width:30px;
    border-radius: 50%;
    z-index:10;
}
.mui-icon-paperplane{
    color:#999
}
.gohistory{
    position: fixed;
    top:478px;
    left:285px;
    background:white;
    border:1px solid #ddd;
    height:30px;
    width:30px;
    border-radius: 50%;
    z-index:10;
}
.mui-bar-tab .mui-tab-item.mui-active{
    color:#e5004f;
}
.search-box{
    z-index:10;
    position: fixed;
    top:0;
    height:20px;
}
.search-txt{
    width: 100%;
    height: 28px;
    padding: 1px .3rem 0 1rem;
    margin: 7px 19px;
    display: inline-block;
    overflow: hidden;
    background-color: rgba(255,255,255,.8);
    border-radius: .35rem;
}
.search-txt input{
    width: 100%;
    line-height: 1.2em;
    height: 1.2em;
    margin: .5em 0;
    display: inline-block;
    vertical-align: middle;
    font-size: 12px;
    color: #000;
    background: 0;
    border: 0;
}
.flex{
    display: flex;
}
.p-price{
    color:#e5004f;
    font-size: 12px;
}
.p-market{
    font-size:12px;
    color:#999;
    text-decoration: line-through;
}
.search-mask{
    width:100%;
    height:44px;
    position: fixed;
    z-index:10;
    background:#e5004f;
}
.app-home .mint-swipe{
    height:150px;
}
.app-home .mint-swipe img{
    width:100%;
}
*{
    margin: 0;
    padding:0;
}
.ensure{
    display: flex;
    background: white;
    height:30px;
    line-height: 30px;
}
.ensure span{
    font-size: 14px;
    width:32%;
    height:20px;

}
.gap1{
    height:2px;
}
.gap{
    background:#f3f3f3;
}
.app-home .mui-grid-9 img{
    width:40px;
    height:40px;
}
.mui-table-view{
    display: flex;
}
.mui-table-view-cell{
    width:30%;
    font-size: 12px;
}
.mui-media-body{
    width:40px;
}
.gap2{
    height:10px;
}
.ad{
    line-height: 0;
}
.ad-item{
    display: block
}
.ad-item img{
    width:100%;
    
}
.ad-txt{
    display: flex;
    background: white;
    height:30px;
    line-height:30px;
    justify-content: space-between;
    
}
.txt-c{
    color:#999;
   
}
.txt-c2{
    width:250px;
}
.txt-c1{
    color:black;
     text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
 .whp-top{
    display: flex;
    justify-content: space-between;
    background:white;
    padding:.3rem;
} 
.whp-top1{
    display: block;
   border-left:2px solid #e5004f;
   color:#e5004f;
   padding-left: 5px;   
}
.whp-body{
    display: flex;
    justify-content: space-around;
}
.whp-body a{
    width:47%;
    display: block;
    margin-bottom: 5px;
    background: white;
    margin-top: 5px;
}
.p-img{
    width:100%;
    overflow: hidden;
}
.p-img img{
    width:100%;
}
.p-name{
    font-size:12px;
    overflow: hidden;
    text-overflow: ellipsis;
    color:black;
    text-align: left;
    display: block;
}   
</style>
