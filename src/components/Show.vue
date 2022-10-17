<template>
 <h2>Show组件</h2>
 <h3>子传来的信息:{{sonName}}</h3>
 <div>
    <About :ren="person" @onSon="showSon"></About>
 </div>
 
</template>

<script>
import About from '@/components/About'

export default {
 emits:['onSon'],
 name:'Show',
 components: {
 About,
 },
 data(){
 return {
    person: {
        name:'张三',
        age : 18
    },
    sonName:'还未传值'
 }
 },
 methods: {
    showSon(e){
        console.log(e);
        this.sonName = e
    }
 },
 setup(){
 
 }
}
</script>

<style>
 
</style>