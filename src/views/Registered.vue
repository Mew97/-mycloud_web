<template>
  <div class="theme-purple authentication sidebar-collapse">
    <nav class="navbar navbar-expand-lg fixed-top navbar-transparent">
      <div class="container">
        <div class="navbar-translate n_logo">
          <a class="navbar-brand" href="javascript:void(0);" title="" target="_blank">Oreo</a>
          <button class="navbar-toggler" type="button">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div class="navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="index.html">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);">搜索</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" title="Follow us on Twitter" href="javascript:void(0);" target="_blank">
                <i class="zmdi zmdi-twitter"></i>
                <p class="d-lg-none d-xl-none">Twitter</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" title="Like us on Facebook" href="javascript:void(0);" target="_blank">
                <i class="zmdi zmdi-facebook"></i>
                <p class="d-lg-none d-xl-none">Facebook</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" title="Follow us on Instagram" href="javascript:void(0);" target="_blank">
                <i class="zmdi zmdi-instagram"></i>
                <p class="d-lg-none d-xl-none">Instagram</p>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link btn btn-white btn-round" href="" @click="toLogin">登陆</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- End Navbar -->
    <div class="page-header">
      <div class="page-header-image" style="background-image:url(https://mycanvas.oss-cn-shanghai.aliyuncs.com/cloud/html/assets/images/login.jpg)"></div>
      <div class="container">
        <div class="col-md-12 content-center">
          <div class="card-plain">
            <Registered/>
          </div>
        </div>
      </div>
      <footer class="footer">
        <div class="container">
          <nav>
            <ul>
              <li><a href="http://thememakker.com/contact/" target="_blank">联系我们</a></li>
              <li><a href="http://thememakker.com/about/" target="_blank">关于我们</a></li>
              <li><a href="javascript:void(0);">FAQ</a></li>
            </ul>
          </nav>

        </div>
      </footer>
    </div>
  </div>
</template>

<script>
  import Registered from '@/components/RegisteredFrom'
  export default {
    name: "",
    components:{
      Registered
    },
    methods:{
      toLogin(){
        this.$router.push({name:'Login'})
      },
    },
    mounted() {
      this.utils.loadLoginJs()
    }
  }
</script>

<style scoped>

</style>
