<template>
  <table class="table table-hover m-b-0 c_list">
    <thead>
    <tr>
      <th>#</th>
      <th>文件名</th>
      <th>文件大小</th>
      <th>创建时间</th>
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
        <p class="c_name">{{file.date}}</p>
      </td>
      <td>
        <button class="btn btn-icon btn-neutral btn-icon-mini" title="下载"><a :href="file.location" download="" target="_blank"><i
          class="zmdi zmdi-download"></i></a></button>
        <button class="btn btn-icon btn-neutral btn-icon-mini" @click="deleteFile(file)" title="移动到回收站"><i
          class="zmdi zmdi-delete"></i></button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
  import instance from "@/api/index"
  import qs from 'qs'



  export default {
    name: "",
    data() {
      return {
        fileList: [],
        userInfo: null
      }
    },
    methods: {
      deleteFile(file) {
        //添加Id属性
        file.userId = this.userInfo.id;
        instance.post("deleteFile", qs.stringify(file)).then(response => {
          if (response.data) {
            this.fileList = this.fileList.filter(f => {
              return f.id !== file.id
            });
            //console.log(this.fileList)
            swal("文件删除成功！", '', 'success')
          } else {
            swal("删除失败")
          }
        }).catch(error => console.log(error))
      }
    },
    mounted() {
      let userId = JSON.parse(localStorage.getItem("userInfo")).id;
      instance.get('fileList', {params: {userId: userId, status: 0}}).then(
        response => {
          this.fileList = response.data;
          console.log(JSON.parse(JSON.stringify(this.fileList)))
        }
      ).catch(error => console.log(error))
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"))
    }
  }
</script>

<style>

</style>
