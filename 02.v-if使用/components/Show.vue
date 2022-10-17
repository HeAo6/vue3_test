<template>
  <div>我是show组件</div>
  <button @click="isShow">点击切换视图</button>
  <div v-show="show">
    <img src="../assets/logo.png" alt="">
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';

export default {
 name:'Show',
 setup(){
   let show = ref(true)
   function isShow(){
     show.value = !show.value
     console.log(show);
   }
   return {
     show,
     isShow,
   }
 }
}
</script>

<style>

</style>