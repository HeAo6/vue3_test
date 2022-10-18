<template>
  <div>
    <FatherSlot></FatherSlot>
  </div>
  <div>
    <hr>
    作用域插槽
    <Child :names="names">
      <template v-slot="slotProps">
        <button>{{slotProps.Name}}---{{slotProps.index}}</button>
      </template>
    </Child>
  </div>
</template>

<script>
import FatherSlot from './FatherSlot.vue'
import Child from './Child.vue'
export default {
name:'Show',
components: {
  FatherSlot,
  Child
},
data(){
  return {
    names:['why','tom','jeery','john']
  }
}
}
</script>

<style>

</style>