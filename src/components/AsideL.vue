<template>
  <aside id="leftsidebar" class="sidebar">
    <ul class="nav nav-tabs">
      <li class="nav-item"><a class="nav-link active" data-toggle="tab" href="#dashboard"><i
        class="zmdi zmdi-home m-r-5"></i>主页</a></li>
      <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#user"><i class="zmdi zmdi-account m-r-5"></i>后台</a>
      </li>
    </ul>
    <div class="tab-content">
      <div class="tab-pane stretchRight active" id="dashboard">
        <div class="menu">
          <ul class="list">
            <li>
              <div class="user-info">
                <div class="image"><a href="#"><img src="../assets/images/profile_av.jpg" alt="User"></a></div>
                <div class="detail">
                  <h4>{{userInfo.name}}</h4>
                  <small>欢迎您，管理员</small>
                </div>
                <a title="facebook" href="#"><i class="zmdi zmdi-facebook"></i></a>
                <a title="twitter" href="#"><i class="zmdi zmdi-twitter"></i></a>
                <a title="instagram" href="#"><i class="zmdi zmdi-instagram"></i></a>
                <p class="text-muted">{{nowTime}}</p>
                <p class="text-muted">{{nowTime0}}</p>
              </div>
            </li>
            <li class="header">MAIN</li>
            <li class="active open"><a href="javascript:void(0);" class="menu-toggle"><i
              class="zmdi zmdi-home"></i><span>上传/下载</span></a>
              <ul class="ml-menu">
                <li class="active">
                  <router-link to="/fileUpLoad">上传</router-link>
                </li>
                <li>
                  <router-link to="/fileList">我的文件</router-link>
                </li>
                <li>
                  <router-link to="/fileRecycle">回收站</router-link>
                </li>
              </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i class="zmdi zmdi-apps"></i><span>个人中心</span> </a>
              <ul class="ml-menu">
                <li><a href="">资料修改</a></li>
                <li><a href="">密码找回</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-pane stretchLeft" id="user">
        <div class="menu">
          <ul class="list">
            <li>
              <div class="user-info m-b-20 p-b-15">
                <div class="image"><a href="profile.html"><img src="../assets/images/profile_av.jpg" alt="User"></a>
                </div>
                <div class="detail">
                  <h4>Michael</h4>
                  <small>UI UX Designer</small>
                </div>
                <a title="facebook" href="#"><i class="zmdi zmdi-facebook"></i></a>
                <a title="twitter" href="#"><i class="zmdi zmdi-twitter"></i></a>
                <a title="instagram" href="#"><i class="zmdi zmdi-instagram"></i></a>
                <p class="text-muted">{{nowTime}}</p>
                <p class="text-muted">{{nowTime0}}</p>
                <div class="row">
                  <div class="col-4">
                    <h5 class="m-b-5">852</h5>
                    <small>用户总数</small>
                  </div>
                  <div class="col-4">
                    <h5 class="m-b-5">{{onlineCount}}</h5>
                    <small>在线人数</small>
                  </div>
                  <div class="col-4">
                    <h5 class="m-b-5">234</h5>
                    <small>活跃人数</small>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <small class="text-muted">服务器总容量:</small>
              <p>50GB</p>
              <hr>
              <ul class="list-unstyled">
                <li>
                  <div>Photoshop</div>
                  <div class="progress m-b-20">
                    <div class="progress-bar l-blue " role="progressbar" aria-valuenow="89" aria-valuemin="0"
                         aria-valuemax="100" style="width: 89%"><span class="sr-only">62% Complete</span></div>
                  </div>
                </li>
                <li>
                  <div>Wordpress</div>
                  <div class="progress m-b-20">
                    <div class="progress-bar l-green " role="progressbar" aria-valuenow="56" aria-valuemin="0"
                         aria-valuemax="100" style="width: 56%"><span class="sr-only">87% Complete</span></div>
                  </div>
                </li>
                <li>
                  <div>HTML 5</div>
                  <div class="progress m-b-20">
                    <div class="progress-bar l-amber" role="progressbar" aria-valuenow="78" aria-valuemin="0"
                         aria-valuemax="100" style="width: 78%"><span class="sr-only">32% Complete</span></div>
                  </div>
                </li>
                <li>
                  <div>Angular</div>
                  <div class="progress m-b-20">
                    <div class="progress-bar l-blush" role="progressbar" aria-valuenow="43" aria-valuemin="0"
                         aria-valuemax="100" style="width: 43%"><span class="sr-only">56% Complete</span></div>
                  </div>
                </li>
              </ul>
            </li>
            <li><a href="javascript:void(0);" class="menu-toggle"><i
              class="zmdi zmdi-shopping-cart"></i><span>后台管理</span> </a>
              <ul class="ml-menu">
                <li><a href="ec-dashboard.html">用户管理</a></li>
                <li><a href="ec-product.html">服务器管理</a></li>
                <li><a href="ec-product-List.html">文件管理</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
  import PubSub from 'pubsub-js'
  export default {
    name: "",
    data() {
      return {
        nowTime: '',
        nowTime0: '',
        userInfo: JSON.parse(localStorage.getItem("userInfo")),
        date: new Date(),
        onlineCount:0
      }
    },
    methods: {
      timeFormate(timeStamp) {
        let year = timeStamp.getFullYear();
        let month = timeStamp.getMonth() + 1 < 10 ? "0" + (timeStamp.getMonth() + 1) : timeStamp.getMonth() + 1;
        let date = timeStamp.getDate() < 10 ? "0" + timeStamp.getDate() : timeStamp.getDate();
        let hh = timeStamp.getHours() < 10 ? "0" + timeStamp.getHours() : timeStamp.getHours();
        let mm = timeStamp.getMinutes() < 10 ? "0" + timeStamp.getMinutes() : timeStamp.getMinutes();
        let ss = timeStamp.getSeconds() < 10 ? "0" + timeStamp.getSeconds() : timeStamp.getSeconds();
        this.nowTime = year + "年" + month + "月" + date + "日";
        this.nowTime0 = hh + ":" + mm + ":" + ss;
      },
    },
    mounted() {
      let _this = this;
      this.getDate = setInterval(function () {
        _this.timeFormate(new Date())
      }, 1000);
      PubSub.subscribe("count",(msg, data)  => {
        this.onlineCount = data
      })
    },
    beforeDestroy() {
      if (this.timer) {
        clearInterval(this.getDate); //销毁实例前清除定时器
      }
    }
  }
</script>

<style>

</style>
