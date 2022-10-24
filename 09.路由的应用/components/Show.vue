<template>
 <div>
    <h2>App组件</h2>
    <router-link to="/home">首页</router-link>
    <!-- 通过插槽在router-link放入标签和组件可以通过插槽的性质展示 -->
    <!-- href跳转链接 -->
    <!-- route对象 -->
    <!-- navigate自动匹配跳转 -->
    <!-- isActive 是否路由组件处于活跃状态 -->
    <router-link to="/user/kobe" v-slot="props" custom>
    <button @click="props.navigate">用户</button>
    <button @click="props.navigate">跳转</button>
    </router-link>
    <router-link to="/about" >关于</router-link>
    <!-- 占位符router view的插槽应用   -->
    <router-view v-slot="props">
      <transition name="why">
       <keep-alive>
         <component :is="props.Component"></component>
       </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
name:'Show',
components:{
},
setup(){
  const route = useRoute()
  console.log(route.params.username);

}}
</script>

<style >
.why-enter-from,
.why-leave-to {
  opacity: 0;
}
.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease; 
}
</style>