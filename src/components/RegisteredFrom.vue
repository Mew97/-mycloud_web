<template>
  <form class="form">
    <div class="header">
      <div class="logo-container">
        <img src="https://mycanvas.oss-cn-shanghai.aliyuncs.com/cloud/html/assets/images/logo.svg" alt="">
      </div>
      <h5>注 册</h5>
    </div>
    <div class="content">
      <div class="error">{{errorMsg.fail}}</div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="用户名" @blur="checkName" v-model="username">
        <span class="input-group-addon">
                                <i class="zmdi zmdi-account-circle"></i>
                            </span>
      </div>
      <div class="error">{{errorMsg.name}}</div>

      <div class="input-group">
        <input type="password" placeholder="密码" class="form-control" @blur="checkPwd" @click="clear" v-model="pwd" />
        <span class="input-group-addon">
                                <i class="zmdi zmdi-lock"></i>
                            </span>
      </div>
      <div class="error">{{errorMsg.pwd}}</div>

      <div class="input-group">
        <input type="password" placeholder="确认密码" class="form-control" @blur="checkRePwd" @click="clear" v-model="rePwd" />
        <span class="input-group-addon">
                                <i class="zmdi zmdi-lock"></i>
                            </span>
      </div>
      <div class="error">{{errorMsg.rePwd}}</div>

      <div class="input-group">
        <input type="text" class="form-control" placeholder="手机号" @blur="checkPhoneNum" v-model="phoneNum" />
        <span class="input-group-addon">
                                <i class="zmdi zmdi-phone"></i>
                            </span>
      </div>
      <div class="error">{{errorMsg.phoneNum}}</div>

      <div class="input-group">
        <input type="password" placeholder="验证码" class="form-control" @blur="checkVerify" @click="clear" v-model="verify" />
        <span class="input-group-addon">
                                <a @click="sendVerify">{{msg}}</a>
                            </span>
      </div>
      <div class="error">{{errorMsg.verify}}</div>

    </div>
    <div class="checkbox">
      <input id="terms" type="checkbox" v-model="isAgree" />
      <label for="terms">
        我已阅读并且同意 <a href="javascript:void(0);">用户协议</a>
      </label>
    </div>
    <div class="footer text-center">
      <a class="btn btn-raised btn-primary waves-effect btn-round btn-lg btn-block " type="submit" @click="registered">注册</a>
      <h5><a class="link" href="" @click="toLogin" >已经拥有账户?</a></h5>
    </div>
  </form>
</template>

<script>
  import instance from '@/api/index'
  import qs from 'qs';
  export default {
    name: "",
    data(){
      return{
        username:'',
        pwd:'',
        rePwd:'',
        phoneNum:'',
        verify:'',
        msg:'获取验证码',
        isAgree:false,
        errorMsg:{
          name:'',
          pwd:'',
          rePwd:'',
          phoneNum:'',
          verify:'',
          fail:''
        },
      }
    },
    methods:{
      registered(){
        this.checkName();
        this.checkPhoneNum();
        this.checkPwd();
        this.checkRePwd();
        this.checkVerify();

        let msg = Object.keys(this.errorMsg).filter(key => {return this.errorMsg[key] !== ''});
        if (msg.length !== 0){
          swal("请检查注册信息！");
          return
        } else if (!this.isAgree) {
          swal('请先阅读并且同意用户手册')
          return
        }
        instance.post('registered',qs.stringify({
          name:this.username,
          pwd:this.pwd,
          phoneNum:this.phoneNum,
          verify:this.verify
        })).then(response => {
          console.log(response.data);
          if (response.data[0]) {
            swal('注册成功!', '', 'success')
            this.$router.push({name:'Login', params:{username:this.username}})
          } else {
            this.errorMsg['fail'] = response.data[1]
            this.verify='';
            this.pwd='';
            this.rePwd='';
          }
        })
      },

      sendVerify(){
        if (this.msg !== '获取验证码'){
          console.log("稍后再试")
        }else {
          this.checkPhoneNum();
          if (this.errorMsg.phoneNum !== ''){
            swal("请先输入手机号")
            return
          }
          instance.get('sendVerify',{params:{phone:this.phoneNum,option:'注册'}})
            .then(response => {
              if (response.data[0]) {
                swal(response.data[1],'','success');
                let time = 30
                let set = setInterval(()=>{
                  time--
                  this.msg = time + 's 后再次发送'
                  if (time === 0){
                    this.msg = '获取验证码'
                    clearInterval(set)
                  }
                }, 1000)
              } else {
                swal(response.data[1])
              }
            }).catch(error=>console.log(error))
        }
      },

      toLogin(){
        this.$router.push({name:'Login'})
      },
      checkPhoneNum(){
        if (this.phoneNum.length === 0){
          this.errorMsg['phoneNum'] = '请输入手机号'
        } else if (!(/^1[3|4|5|8|7][0-9]\d{8}$/.test(this.phoneNum))) {
          this.errorMsg['phoneNum'] = '无效的手机号码'
        } else {
          this.errorMsg['phoneNum'] = ''
        }
      },
      checkVerify(){
        if (this.verify.length === 0) {
          this.errorMsg['verify'] = '请输入验证码'
        } else {
          this.errorMsg['verify'] = ''
        }
      },
      checkName(){
        if (0 === this.username.length){
          this.errorMsg['name'] = '请输入用户名'
        } else if (this.username.length > 15) {
          this.errorMsg['name'] = '用户名过长'
        } else {
          this.errorMsg['name'] = ''
        }
      },
      checkPwd(){
        if (0 === this.pwd.length){
          this.errorMsg['pwd'] = '请输入密码'
        } else {
          this.errorMsg['pwd'] = ''
        }
      },
      checkRePwd(){
        if (this.rePwd !== this.pwd){
          this.errorMsg['rePwd'] = '输入密码不一致'
        } else {
          this.errorMsg['rePwd'] = ''
        }
      },
      clear(){
        this.errorMsg['fail'] = ''
      }
    }

  }
</script>

<style scoped>

</style>
