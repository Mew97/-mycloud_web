<template>
  <form class="form">
    <div class="header">
      <div class="logo-container">
        <img src="https://mycanvas.oss-cn-shanghai.aliyuncs.com/cloud/html/assets/images/logo.svg" alt="">
      </div>
      <h6>第一步：验证手机号</h6>
    </div>
    <div class="content">
      <div class="input-group">
        <input type="text" class="form-control" placeholder="手机号" @blur="checkPhoneNum" v-model="phoneNum" />
        <span class="input-group-addon">
                                <i class="zmdi zmdi-phone"></i>
                            </span>
      </div>
      <div class="error">{{errorMsg.phoneNum}}</div>

      <div class="input-group">
        <input type="password" placeholder="验证码" class="form-control" @blur="checkVerify" v-model="verify" />
        <span class="input-group-addon">
                                <a @click="sendVerify">{{msg}}</a>
                            </span>
      </div>
      <div class="error">{{errorMsg.verify}}</div>
    <div class="footer text-center">
      <a class="btn btn-raised btn-primary waves-effect btn-round btn-lg btn-block " type="submit" @click="verifyNum">验证</a>
    </div>
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
        phoneNum:'',
        verify:'',
        msg:'获取验证码',
        errorMsg:{
          verify:'',
          phoneNum:'',
        },
      }
    },
    methods:{
      verifyNum(){
        this.checkPhoneNum();
        this.checkVerify();
        //循环对象的key
        let msg = Object.keys(this.errorMsg).filter(key => {return this.errorMsg[key] !== ''});
        console.log(msg);
        if (msg.length !== 0){
          swal('请检查验证信息!');
          return
        }

        instance.get('verify',{params:{phone:this.phoneNum,verify:this.verify}})
          .then(response => {
            if (response.data[0]) {
              localStorage.setItem("userInfo",JSON.stringify(response.data[2]));
              localStorage.setItem("Authorization", "0");
              this.$router.push({name:'UpdatePwd'})
            } else {
              swal(response.data[1])
            }
          })

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

      sendVerify(){
        if (this.msg !== '获取验证码'){
          console.log("稍后再试")
        }else {
          this.checkPhoneNum();
          if (this.errorMsg.phoneNum !== ''){
            swal("请先输入手机号");
            return
          }
          instance.get('sendVerify',{params:{phone:this.phoneNum,option:'修改密码'}})
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
      }


    }

  }
</script>

<style>

</style>
