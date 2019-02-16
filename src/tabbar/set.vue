<template>
    <div>
        <h3>账号设置</h3>
        <button @click="Logout">退出登录</button>
    </div>
</template>
<style>
    button{
        background: #e5004f;
        color:white;
        border:0;
    }
</style>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        Logout(){
            sessionStorage.setItem("uname","");
            this.$router.push("/Home");
        }
    }
}
</script>