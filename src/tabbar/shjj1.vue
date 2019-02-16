<template>
    <div class="app-container">
        <img src="../img/14.jpg" alt="">
        <div class="cate-item">
            <h4>宠物用品</h4>
            <div class="cate-for">
                <div class="cate-for1">
                    <ul class="ul-ul">
                        <li v-for="item of list" :key="item.id">
                            <img :src=item.img_url>
                            <span>{{item.text}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                list:[
                    {id:1,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:2,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:3,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:4,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:5,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:6,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:7,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:8,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:9,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:10,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:11,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:12,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:13,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:14,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:15,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:16,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:17,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                    {id:18,text:"食材干活",img_url:"http://127.0.0.1:3000/16.jpg"},
                ]
            }
        }
    }
</script>
<style>
    .ul-ul li{
        float: left;
        width: 33.3%;
        text-align: center;
    }
    .ul-ul li span{
        font-size: 12px;
        text-align: center;
    }
     .ul-ul{
         list-style: none;
     }
    /* .cate-for{
        display: flex;
    } */
   
    .app-container {
        padding:5px 0 0 5px;
    }
    .app-container img{
        width:100%;
        padding:0 5px 5px 0;
        height:77px;
    }

</style>