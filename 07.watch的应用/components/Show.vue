<template>
 <div>
   <h2>{{info.name}}</h2>

 <button @click="changeDate">修改值</button>  
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'


export default {
name:'Show',
setup(){

 const info = reactive({
  name : '张三',
  age : 18
 })
 //watch可以监听ref 也可监听reactive的对象 
 // 监听ref时是old和new返回的就是单纯的数据不会呗proxy包裹
 watch(info ,(newValue,oldValue) => {
  console.log('newvalue',newValue,'oldValue',oldValue);
 })

 const changeDate = () => {
   info.name = '李四'
 }
 return {
  info,
  changeDate
 }
}
}
</script>

<style>

</style>