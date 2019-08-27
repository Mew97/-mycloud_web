<template>
  <div class="theme-purple">
<!--    <div class="page-loader-wrapper">-->
<!--      <div class="loader">-->
<!--        <div class="m-t-30"><img class="zmdi-hc-spin" src="../assets/images/logo.svg" width="48" height="48" alt="Oreo"></div>-->
<!--        <p>Please wait...</p>-->
<!--      </div>-->
<!--    </div>-->
    <!-- Overlay For Sidebars -->
    <div class="overlay"></div>

    <!-- Top Bar -->
    <Nav/>

    <!-- Left Sidebar -->
    <AsideL/>

    <!-- Right Sidebar -->
    <AsideR/>

    <router-view/>

  </div>
</template>

<script>

  import Nav from '@/components/Nav'
  import AsideL from '@/components/AsideL'
  import AsideR from '@/components/AsideR'
  import Chat from '@/components/Chat'


  export default {
    name: 'home',
    mounted(){
      this.utils.loadJs()
    },
    components:{
      Nav,
      AsideL,
      AsideR,
      Chat,
    }

  }
</script>

<style>
</style>

