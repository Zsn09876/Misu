<template>
    <div class="container">
        <div class="header">
            <router-link to="/Home">
                <a href=""  class="mui-icon mui-icon-arrowleft"></a>
            </router-link>
            <h3>购物车</h3>
            <div class="mui-icon mui-icon-home" @click="home"></div>
        </div>
        <div class="content">
            <div class="nav-box">
                <ul>
                    <li class="cart list" v-for="item of list" :key="item.id">
                        <mt-cell-swipe 
                                :right="[ 
                                { 
                                content: '删除', 
                                style: { background: '#e5004f', color: 'white'}, 
                                handler: () => deleteSection(item.id) 
                                } 
                            ]"> 
                        <input name="checkbox" value="Item 1" type="checkbox">
                        <img :src=item.img_url>
                        <div class="text">
                            <p>{{item.text}}</p>
                        </div>
                        <div class="shop_price">
                            <span>￥{{item.price}}</span>
                            <div class="mui-numbox data-numbox-step='10' data-numbox-min='0' data-numbox-max='100'" >
                                <!-- "-"按钮，点击可减小当前数值 -->
                                <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
                                <input class="mui-numbox-input" type="number" />
                                <!-- "+"按钮，点击可增大当前数值 -->
                                <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
                            </div>
                        </div>
                          </mt-cell-swipe> 
                    </li>
                </ul>
            </div>
        </div>
    <!-- 左拉删除 
        <ul class="list"> 
        <li class="item" v-for="section in list"> 
        <mt-cell-swipe 
            :right="[ 
            { 
            content: '删除', 
            style: { background: '#ff7900', color: '#fff'}, 
            handler: () => deleteSection(section.PartId) 
            } 
        ]"> 
        <p>{{section.id}}</p>
        </mt-cell-swipe> 
    </li> 
</ul> -->

    </div>
</template>
<style>
    ul{
        padding: 0
    }
    li{
        display: flex;
    }
    .nav-box img{
        height:68px;
        width:68px;
    }
    .cart{
        list-style: none;
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
<script>
import Mint from 'mint-ui'; 
export default {
    data(){
        return {
             list:[{id:1,text:"宠物零食",img_url:"http://127.0.0.1:3000/12.jpg",count:5,price:13.9,partnaPartName:"hahah",TeacherName:"heihei"},
                {id:2,text:"宠物零食",img_url:"http://127.0.0.1:3000/13.jpg",count:3,price:12,partnaPartName:"hahah1",TeacherName:"heihei1"},
            ]
        }
    },
    methods:{
        deleteSection(e){
            console.log(e)
        },
        home(){
            this.$router.push("/Home")
        }
    }
}
</script>
