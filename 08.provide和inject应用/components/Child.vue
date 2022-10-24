<template>
  <div>
    <hr>
    <h2>Child组件</h2>
    {{name}}
    <p>{{count}}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script >
import { inject } from '@vue/runtime-core'
export default {
    name:'Child',
    setup(){
      const name = inject('name')
      let count =  inject('count')
      const add = () => {
        count.value++
      }

      return {
        name,
        count,
        add
      }
    }
}
</script>

<style>

</style>