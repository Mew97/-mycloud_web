<template>
  <div id="app">
    <transition name="fade">
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
  // watch: {
  //   '$route': async function (to, from) {
  //     if (to.path !== from.path){
  //       this.utils.loadJs()
  //     }
  //   }
  // },

}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
