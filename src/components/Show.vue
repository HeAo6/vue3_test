<template>
 <div>
    <h2>provide和inject</h2>
    <h2>App组件</h2>
    <p>{{name}}</p>
    <p>{{count}}</p>
    <button @click="add">+1</button>
    <Child></Child>
  </div>
</template>

<script>
import { readonly, ref } from '@vue/reactivity'
import Child from './Child.vue'
import { provide } from '@vue/runtime-core'

export default {
name:'Show',
components:{
  Child
},
setup(){
  const name = ref('张三')
  let count = ref(10)

  //为了遵循vue的单向数据流原则需要对传入的数据用readonly进行包裹防止子组件更改数据

  provide('name',readonly(name))
  provide('count',readonly(count))

  const add = () => {
    count.value++
  }

  return {
    name,
    count,
    add
  } 
}}
</script>

<style>

</style>