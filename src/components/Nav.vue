<template>
  <nav class="navbar p-l-5 p-r-5">
    <ul class="nav navbar-nav navbar-left">
      <li>
        <div class="navbar-header">
          <a href="javascript:void(0);" class="bars"></a>
          <a class="navbar-brand" href="index.html"><img src="../assets/images/logo.svg" width="30" alt="Oreo"><span class="m-l-10">Oreo</span></a>
        </div>
      </li>
      <li><a href="javascript:void(0);" class="ls-toggle-btn" data-close="true"><i class="zmdi zmdi-swap"></i></a></li>
      <li class="hidden-md-down"><a href="events.html" title="Events"><i class="zmdi zmdi-calendar"></i></a></li>
      <li class="hidden-md-down"><a href="mail-inbox.html" title="Inbox"><i class="zmdi zmdi-email"></i></a></li>
      <li><a href="contact.html" title="Contact List"><i class="zmdi zmdi-account-box-phone"></i></a></li>
      <li class="float-right">
        <span style="color: white; font-size: 15px">在线人数：{{onlineCount}}</span>
        <a href="javascript:void(0);" class="fullscreen hidden-sm-down" data-provide="fullscreen" data-close="true"><i class="zmdi zmdi-fullscreen"></i></a>
        <a class="mega-menu" data-close="true" @click="logout"><i class="zmdi zmdi-power"></i></a>
        <a href="javascript:void(0);" class="js-right-sidebar" data-close="true"><i class="zmdi zmdi-settings zmdi-hc-spin"></i></a>
      </li>
    </ul>
  </nav>
</template>

<script>
  import instance from '@/api/index'
  import PubSub from 'pubsub-js'
  export default {
    name: "",
    data(){
      return{
        onlineCount:0
      }
    },
    methods:{
      logout(){
        let user = JSON.parse(localStorage.getItem("userInfo"))
        instance.get('logout',{params:{userId:user.id}})
          .then((response)=>{
            localStorage.removeItem("userInfo");
            localStorage.removeItem("Authorization")
            this.$router.push({name:'Login',params:{username:user.name}})
            console.log(response.status)
          })
          .catch(error => console.log(error));
      }
    },
    mounted() {
      instance.get('onlineCount').then(
        response => {this.onlineCount = response.data;PubSub.publish("count", response.data)}
      ).catch(error => console.log(error))
    }
  }
</script>

<style>

</style>
