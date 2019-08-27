<template>
  <form class="form">
    <div class="header">
      <div class="logo-container">
        <img src="https://mycanvas.oss-cn-shanghai.aliyuncs.com/cloud/html/assets/images/logo.svg" alt="">
      </div>
      <h6>第二步：输入新密码</h6>
    </div>
    <div class="content">
      <div class="input-group">
        <input type="password" placeholder="新密码" class="form-control" @blur="checkPwd" v-model="pwd" />
        <span class="input-group-addon">
                                <i class="zmdi zmdi-lock"></i>
                            </span>
      </div>
      <div class="error">{{errorMsg.pwd}}</div>
      <div class="input-group">
        <input type="password" placeholder="确认密码" class="form-control" @blur="checkRePwd" v-model="rePwd" />
        <span class="input-group-addon">
                                <i class="zmdi zmdi-lock"></i>
                            </span>
      </div>
      <div class="error">{{errorMsg.rePwd}}</div>
      <div class="footer text-center">
        <a class="btn btn-raised btn-primary waves-effect btn-round btn-lg btn-block " type="submit" @click="updatePwd">验证</a>
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
        userInfo:JSON.parse(localStorage.getItem("userInfo")),
        pwd:'',
        rePwd:'',
        errorMsg:{
          pwd:'',
          rePwd:'',
        },
      }
    },
    methods:{
      updatePwd(){
        this.checkPwd();
        this.checkRePwd();
        let msg = Object.keys(this.errorMsg).filter(key => {return this.errorMsg[key] !== ''});
        console.log(msg)
        if (msg.length !== 0){
          swal("请检查验证信息！");
          return
        }

        this.userInfo["pwd"] = this.pwd;

        instance.post('updatePwd', qs.stringify(this.userInfo))
          .then(response => {
            if (response.data) {
              swal("更新密码成功,请登陆",'','success')
              this.$router.push({name:'Login'})
            } else {
              swal("修改失败！")
            }
          }).catch(error=>console.log(error))


      },
      toLogin(){
        this.$router.push({name:'Login'})
      },

      checkPwd(){
        if (0 === this.pwd.length){
          this.errorMsg['pwd'] = '请输入新密码'
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
    }

  }
</script>

<style>

</style>
