<template>
    <div class="mui-numbox" data-numbox-step='1' data-numbox-min='0' data-numbox-max='100'>
        <!-- "-"按钮，点击可减小当前数值 -->
        <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
        <input class="mui-numbox-input" type="number"/>
        <!-- "+"按钮，点击可增大当前数值 -->
        <button class="mui-btn mui-numbox-btn-plus" type="button" >+</button>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    },
    methods:{
        fn(){
             console.log(1)
            mui(Selector).numbox().getValue()
         }
    }
}
</script>
