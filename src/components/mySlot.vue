<template>
  <div>
    <hr>
    <h2>子组件</h2>
    <slot name="frist"></slot>
    <hr>
    <slot name="two"></slot>
  </div>
</template> 

<script>

export default {
  
 name: 'Slot'
}
</script>

<style>

</style>