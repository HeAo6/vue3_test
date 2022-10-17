<template>
    <hr>
  <h2>About组件</h2>
  <h3>父组件传来的值,姓名:{{ren.name}} 年龄:{{ren.age}}</h3>
    <button @click="send">点击给父组件传值</button>
  
</template>

<script>


export default {
 name : 'About',
 props: {
    ren: {
        require: true,
        type : Object
    }
 },
 data(){
    return {
        sonName : 'son的信息'
    }
 },
 methods: {
    send(){
        this.$emit('onSon',this.sonName)
    }
 }
}
</script>

<style>

</style>