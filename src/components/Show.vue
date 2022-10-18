<template>
 <div>
  父组件
  <button @click="btnClick">获取子组件信息</button>
  <nav-bar ref="navbar"></nav-bar>
  
  </div>
</template>

<script>
 import NavBar from './NavBar.vue'
export default {
name:'Show',
components: {
 NavBar
},
data(){
  return {
  message: '这是父组件信息'
  }
},
methods: {
  btnClick(){
    //获取子组件的实例
    console.log(this.$refs.navbar.message);
  }
}
}
</script>

<style>

</style>