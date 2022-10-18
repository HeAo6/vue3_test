<template>
  <div>
    Child
    <hr>
    <template v-for="(item,index) in names" :key="item">
        <slot :Name="item" :index="index"> </slot>
    </template>
  </div>
</template>

<script>
export default {
name: 'Child',
//接受父组件传入的值，再通过给插槽通过v-bind向上传递给父组件
props:{
    names: {
        type: Array,
        default: () => [] 
    }
}
}
</script>

<style>

</style>