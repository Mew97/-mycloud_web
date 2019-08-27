<template>
  <table class="table table-hover m-b-0 c_list">
    <thead>
    <tr>
      <th>#</th>
      <th>文件名</th>
      <th>文件大小</th>
      <th>剩余删除时间</th>
      <th>操作</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="file in fileList" :key="file.id">
      <td>
        <div class="checkbox">
          <input :id="`_${file.id}`" type="checkbox">
          <label :for="`_${file.id}`">&nbsp;</label>
        </div>
      </td>
      <td>
        <p class="c_name">{{file.filename}}</p>
      </td>
      <td>
        <p class="c_name">{{file.size}}</p>
      </td>
      <td>
        <p class="c_name">{{deadline(file.delTime)}}</p>
      </td>
      <td>
        <button class="btn btn-icon btn-neutral btn-icon-mini" @click="restoreFile(file)" title="恢复文件"><i class="zmdi zmdi-refresh"></i></button>
        <button class="btn btn-icon btn-neutral btn-icon-mini" @click="deleteFile(file)" title="永久删除"><i class="zmdi zmdi-delete"></i></button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import instance from '@/api/index'
  import qs from 'qs'
  export default {
    name: "",
    data(){
      return{
        fileList:[],
        userInfo:null
      }
    },
    methods:{
      deleteFile(file){
        file.userId=this.userInfo.id;
        instance.post("delFileForever",qs.stringify(file)).then(response => {
          if (response.data) {
            this.fileList = this.fileList.filter(f => {return f.id !== file.id});
            //console.log(this.fileList)
            swal("文件已永久删除",'','success')
          } else {
            swal("删除失败")
          }
        }).catch(error => console.log(error))
      },
      restoreFile(file){
        file.userId=this.userInfo.id;
        instance.post("restoreFile",qs.stringify(file)).then(response => {
          if (response.data) {
            this.fileList = this.fileList.filter(f => {return f.id !== file.id});
            //console.log(this.fileList)
            swal("文件恢复成功",'','success')
          } else {
            swal("恢复失败")
          }
        }).catch(error => console.log(error))
      },
      deadline(time){
        let t = new Date().getTime() - time
        return Math.floor(30 - t/1000/60/60/24) + "天";
      }
    },
    mounted(){
      let userId = JSON.parse(localStorage.getItem("userInfo")).id;
      instance.get('fileList',{params:{userId:userId,status:1}}).then(
        response => {
          this.fileList = response.data;
          //console.log(this.fileList)
        }
      ).catch(error=>console.log(error))
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
    }
  }
</script>

<style>

</style>
