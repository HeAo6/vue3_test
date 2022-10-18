<template>
  <div>
    <h2>父组件</h2>
    <mySlot>
      <!-- 具名插槽 -->
      <template #frist>
        <div class="frist">第一段内容</div>
      </template>
      <template #two>
        <div class="two">第二段内容</div>
      </template>
    </mySlot>
  </div>
</template>

<script>
import mySlot from './mySlot.vue'
export default {
  name: 'FatherSlot',
  components: { 
    mySlot
   },

}
</script>

<style>
.frist {
  height: 100px;
  width: 50px;
  background: blue;
}
.two {
  height: 200px;
  width: 100px;
  margin: 0 20px;
  background: yellow;
}
</style>