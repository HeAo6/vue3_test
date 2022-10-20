<template>
  <div>
    <hr>
    nav-bar组件
    <button @click="btnClick">获取父组件信息</button>
  </div>
</template>

<script>
export default {
 data(){
    return {
        message: '这是navbar组件'
    }
 },
 methods: {
    btnClick(){
        console.log(this.$parent.message);
    }
 }
}
</script>

<style>

</style>