<template>
 <div>
  父组件
  <h2>name名字{{fullName}}</h2>
  <button @click="btnClick">修改name</button>
  <h3>数字：{{info.count}}</h3>
  <button @click="watchNum" ref="refs">+1</button>
  
  </div>
</template>

<script>
import { computed, reactive, ref } from '@vue/reactivity'
import { watchEffect } from '@vue/runtime-core'

export default {
name:'Show',
 setup(){
  let info = reactive({
    title: 'show组件',
    count:0
  })
  //拿到通过ref拿到实例
  let refs = ref(null)

  let fristName = ref('kobe')
  let lastName = ref('bryant')

  const fullName = computed(()=> fristName.value + lastName.value)
  //清楚副作用，传入onInvalidate参数 此参数为函数在函数里进行取消副作用操作，把前一次请求取消
 const stop = watchEffect((onInvalidate)=>{
    onInvalidate(()=>{
      console.log('onInvalidate');
    })
    console.log('拿到的ref实例',refs.value);
    console.log('监听到了name变化',fullName.value);
    console.log('监听到了age变化',info.count);
  },{
    flush : "post"
  })
  const btnClick = () => {
    fristName.value = 'james'
    console.log(fullName);
  }

  const watchNum = () => {
    info.count ++
  }

  return {
    info,
    fullName,
    btnClick,
    watchNum,
    stop,
    refs
  }
 }
}
</script>

<style>

</style>