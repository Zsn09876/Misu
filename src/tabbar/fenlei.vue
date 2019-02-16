<template>
    <div>
        <div class="header">
            <router-link to="/Home">
                <a href=""  class="mui-icon mui-icon-arrowleft"></a>
            </router-link>
            <h3>商品分类</h3>
            <div></div>
        </div> 
            <div class="cate-body">
                <div class="cate-root">
                    <div class="cate-panel" @mouseup="fn()">
                        <ul id="shjjtab">
                            <li v-for="item of list" :key="item.id" @click="change(item.id)" :class="item.backgroundStyle">
                                <router-link :to="'/fenlei/spsx/'+item.id">{{item.text}}</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
       
            <div class="spfl-right">
                 <router-view/>
            </div>



       <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item " to="/Home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item mui-active" to="/fenlei" >
                <span class="mui-icon mui-icon-list"></span>
                <span class="mui-tab-label">分类</span>
            </router-link>
            <router-link class="mui-tab-item" to="/">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/Login">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">我的</span>
            </router-link>
      
    </nav>
    </div>
</template>
<script>
  

export default {
    data(){
        return{
        list:[{id:1,text:"生活家居",backgroundStyle:""},
            {id:2,text:"食品生鲜",backgroundStyle:""},
            {id:3,text:"美妆护肤",backgroundStyle:""},
            {id:4,text:"服装鞋帽",backgroundStyle:""},
            {id:5,text:"养生保健",backgroundStyle:""},
            {id:6,text:"地方特产",backgroundStyle:""},
            {id:7,text:"数码家电",backgroundStyle:""},
            {id:8,text:"妈咪宝贝",backgroundStyle:""},
            {id:9,text:"汽车用品",backgroundStyle:""},
            {id:10,text:"运动休闲",backgroundStyle:""},
            {id:11,text:"办公文具",backgroundStyle:""},
            {id:12,text:"箱包配饰",backgroundStyle:""}
        ]
        
        }
    },
    created(){
      
    },
    mounted(){
        var $jjtab= $(".cate-panel");
        var move = 0;//移动距离
        var moveStart = 0;//移动开始时的位置
        var t = 40;//距离顶部的距离
        var isMove = false;//是否开始移动
        var isHT = false;//是否开始惯性回弹
        $jjtab.mousedown(function(e){
            //鼠标按下时进行初始化
            console.log(1)
            moveStart = 0;
            move = 0;
            isMove = true;
            moveStart = e.clientY;
        });
        $jjtab.mousemove(function(e){
            console.log(2)
            if(isMove){
                move = 0;
                move  = e.clientY - moveStart;
                t += move*0.05;//鼠标拖动时移动的速度，可调
                //当顶部被下拉时，设置可执行惯性回弹
                if(t>=40){
                    isHT = true;
                }  
                //当底部被拉起时，也设置可执行惯性回弹
                if(t<=-228){
                    isHT = true;
                }
                //设置可拉伸的最大距离，到达时停止移动
                if(t>=140 || t<=-358) isMove = false;
                //把鼠标的位移值赋值给ul的margin-top
                $jjtab.css("margin-top",t+"px");
            }
        });
        $jjtab.mouseup(function(){
                        console.log(3)

            isMove = false;
            if(isHT){
                var s = setInterval(function(){
                        //判断上拉还是下拉
                        if(t>40){
                            //惯性速度，可调
                            t-=0.8;
                            //判断是否回到顶部
                            if(t<=40){
                                //停止定时器
                                clearInterval(s);
                                //清空定时器
                                s = null;
                            } 
                        } 
                        else{
                            t+=0.8;
                            if(t>=-258){
                                clearInterval(s);
                                s = null;
                            } 
                        } 
                        $jjtab.css("margin-top",t+"px");
                },1);
            }
        });
},
    methods:{
        fn(){
            console.log(10);
        },
        change(e){
            console.log(e);
            e--;
            for(var i=0;i<this.list.length;i++){
                this.list[i].backgroundStyle="";
                if(e==i){
                    this.list[i].backgroundStyle="active";
                }
            }
        }
    },


}
</script>
<style>
    *{
        padding:0;
        margin:0;
    }
    .spfl-right{
        margin-left:76px;
    }
    .cate-panel{
        transform: translateY(0px);
    }
   .mui-bar-tab .mui-tab-item.mui-active{
        color:#e5004f;
    }
    #shjjtab .active,#shjjtab .active a{
        background: white;
        color:#e5004f;
    }
    .cate-body{
        width:76px;
        float: left;
        position: relative;
    }
    .cate-root{
        width:76px;
         position: absolute;
        overflow: hidden;
    }
    #shjjtab li{
         border-bottom:1px solid #e8e8e9;
         background: #f3f4f6;
    }
    #shjjtab li a{
        color:black;
         height:48px;
        line-height: 48px;
        width:76px;
        display: inline;
        font-size: 12px;
       
    }
     .header{
        display: flex;
        justify-content: space-between;
        background: #f9f9f9;
        height:40px;
        line-height: 40px;  
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
