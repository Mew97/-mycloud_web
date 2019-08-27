<template>
<button @click="test">test</button>
</template>

<script>
  import instance from '@/api/index'
  import qs from 'qs'
export default {
  name: "",
  methods:{
    test(){
      instance.post('file',qs.stringify({
        filename:'21_Cage_8k.jpg',
        identifier:'e325ba44ea8d9f19c127a631c5673933',
      })).then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
