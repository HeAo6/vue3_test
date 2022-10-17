<template>
 <h1>我是根组件</h1>
 <h2>姓名：{{name}}</h2>
 <h2>年龄:{{age}} </h2>
 <h3>工作岗位:{{job.type}}</h3>
 <h3>薪水:{{job.salay}}</h3>
 <button @click="changeInfo">修改名字 年龄</button>
 <!-- 导入数据不需要.value直接将属性名，或者对象里面的属性渲染在{{}} -->
</template>

<script>
import { ref } from "vue";
export default {
  name: 'App',
  setup(){
    //数据
    let name = ref('张三')
    let age = ref(18)
    let job = ref({
      type: 'ul设计师',
      salay:'30k' 
    })
    //方法
    function changeInfo(){
      //基本类型的数据响应式变化都是通过对象里的get和set方法完成的
      //对象类型里面的数据通过.vlaue是返回的proxy对象，是通过reactive封装vue求助使用 
      job.value.salay = '60k'
      job.value.type = '前端工程师'
    }
      return {
    name,
    age,
    changeInfo
  }
  }
   //proxy的响应式可以检测到任何操作的值，
   //get用于获取到属性值，set用于添加和修改值， deleteProperty用于删除属性的值
}
</script>

<style>

</style>
