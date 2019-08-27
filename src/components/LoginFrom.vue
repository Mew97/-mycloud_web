<template>
  <form class="form">
    <div class="header">
      <div class="logo-container">
        <img src="../assets/images/logo.svg" alt="">
      </div>
      <h5>登 陆</h5>
    </div>
    <div class="content">
      <div class="error">{{errorMsg.error}}</div>
      <div class="input-group input-lg">
        <input type="text" class="form-control" v-model="userInfo.name" @blur="checkName" @click="clear" placeholder="用户名/手机号">
        <span class="input-group-addon">
                                <i class="zmdi zmdi-account-circle"></i>
                            </span>
      </div>
      <div class="error">{{errorMsg.name}}</div>
      <div class="input-group input-lg">
        <input type="password" placeholder="密码" v-model="userInfo.pwd" @blur="checkPwd" @click="clear" class="form-control" />
        <span class="input-group-addon">
                                <i class="zmdi zmdi-lock"></i>
                            </span>
      </div>
      <div class="error">{{errorMsg.pwd}}</div>
    </div>
    <div class="checkbox">
      <input id="terms" type="checkbox" v-model="isRemember">
      <label for="terms">
        记住我
      </label>
    </div>
    <div class="footer text-center">
      <a class="btn btn-primary btn-round btn-lg btn-block " @click="login" >登陆</a>
      <h5><a href="" class="link" @click="toUpdatePwd">忘记密码?</a></h5>
    </div>
  </form>
</template>

<script>
  import instance from '@/api/index'
  import nanoid from 'nanoid'
  import qs from 'qs'

  export default {
    name: "",
    data(){
      return{
        userInfo:{
          name: this.$route.params.username || '',
          pwd: '',
          uuid:nanoid(),
        },
        isRemember: false,
        errorMsg:{
          name:'',
          pwd:'',
          error:'',
        }
      }
    },
    methods:{
      login(){
        this.checkName()
        this.checkPwd()
        let msg = Object.keys(this.errorMsg).filter(key => {return this.errorMsg[key] !== ''});
        if (msg.length !== 0){
          swal("请检查登陆信息！");
          return
        }
        let url="login";
        console.log(this.userInfo['uuid'])
        instance.post(url,qs.stringify(this.userInfo))
          .then((response) => {
          if (response.data[0]){
            // let expireTimes = this.isRemember?"7d":60*3;
            //
            // this.$cookies.set("userInfo",JSON.stringify({
            //   username:response.data[2].name,
            //   userId:response.data[2].id,
            //   sessionId:response.data[2].sessionId
            // }),expireTimes);
            localStorage.setItem("userInfo",JSON.stringify(response.data[2]));
            localStorage.setItem("Authorization",response.data[3]);

            this.$router.push({path:'/'});
          } else {
            this.errorMsg['error'] = response.data[1]
          }
        })
      },
      toUpdatePwd(){
        this.$router.push({name:'Security'})
      },
      checkName(){
        if (0 === this.userInfo['name'].length){
          this.errorMsg['name'] = '请输入用户名'
        } else if (this.userInfo['name'].length > 15) {
          this.errorMsg['name'] = '用户名过长'
        } else {
          this.errorMsg['name'] = ''
        }
      },
      checkPwd(){
        if (0 === this.userInfo['pwd'].length){
          this.errorMsg['pwd'] = '请输入密码'
        } else {
          this.errorMsg['pwd'] = ''
        }
      },
      clear(){
        this.errorMsg['error'] = ''
      }

    },
    mounted(){
    }

  }
</script>

<style>

</style>
