<template>
  <div class="body" ref="drop">
    <div class="dropzone">
      <div class="dz-message">
        <div class="drag-icon-cph"> <i class="material-icons">touch_app</i></div>
        <h3>文件拖拽至此上传</h3>

        <em>上传完成后，请到 <strong>我的文件</strong> 中查看或者下载上传好的文件</em>
        <br>
        <button ref="btn" class="btn btn-info btn-round">选择文件</button>
      </div>
      <div class="fallback">
      </div>
    </div>
    <uploader :options="options"
              :autoStart="false"
              :file-status-text="statusText"
              ref="uploader"
              @file-complete="fileComplete"
              @complete="complete"
              @file-added="fileAdded"
              v-show="true"
    >
      <uploader-btn v-show="false"></uploader-btn>
      <uploader-drop v-show="false"></uploader-drop>
      <uploader-list></uploader-list>
    </uploader>
    <!--    <button ref="btn" class="btn btn-info btn-round">select files</button>-->
  </div>
</template>

<script>
import instance from '@/api/index'
import qs from 'qs'
import SparkMD5 from 'spark-md5';
export default {
  name: "",
  data(){
    return{
      uploader: null,
      options: {
        target: process.env.VUE_APP_UPLOAD,
        testChunks: true,
        simultaneousUploads: 3,
        chunkSize:3*1024*1024,
      },
      attrs: {
        //accept: 'image/*'
      },
      statusText: {
        success: "成功",
        error: "失败",
        uploading: "上传中",
        paused: "暂停",
        waiting: "等待中"
      },
      started: false,
      files: [],
      fileList: [],
      userId:null
    }
  },
  methods:{
    fileAdded(file) {

      this.userId=JSON.parse(localStorage.getItem("userInfo")).id
      console.log("文件添加");
      this.files = this.uploader.files
      this.fileList = this.uploader.fileList

      this.computeMD5(file);
    },
    complete(){
      console.log('完成')
      console.log('complete',arguments)
    },
    fileComplete() {
      this.files = this.uploader.files
      this.fileList = this.uploader.fileList
      console.log('file complete', arguments)
      const file = arguments[0].file;
      instance.post('mergeFile', qs.stringify({
        filename: file.name,
        identifier: arguments[0].uniqueIdentifier,
        totalSize: file.size,
        type: file.type,
        userId: this.userId
      })).then((response)=>{
        console.log(response);
      }).catch(error=>{
        console.log(error)
      });

    },
    fileRemoved(){
      this.files = this.uploader.files
      this.fileList = this.uploader.fileList
    },
    computeMD5(file) {

      let fileReader = new FileReader();
      let time = new Date().getTime();
      let md5 = '';
      this.statusText.paused = 'MD5检验中';
      file.pause();
      fileReader.readAsArrayBuffer(file.file);

      console.log("开始计算")

      fileReader.onload = (e => {
        if (file.size != e.target.result.byteLength) {
          this.error('Browser reported success but could not read the file until the end.');
          return
        }

        md5 = SparkMD5.ArrayBuffer.hash(e.target.result);

        // 添加额外的参数
        // this.uploader.opts.query = {
        //   ...this.params
        // }

        console.log(`MD5计算完毕：${file.id} ${file.name} MD5：${md5} 用时：${new Date().getTime() - time} ms`);

        file.uniqueIdentifier = md5;

        file.resume();

        this.statusText.paused = "暂停"
      });

      fileReader.onerror = function () {
        this.error('FileReader onerror was triggered, maybe the browser aborted due to high memory usage.');
      };
    },
  },

  computed:{
  },

  mounted() {
    //nextTick在模板渲染结束之后开始执行
    this.$nextTick(() => {
      this.uploader = this.$refs.uploader.uploader;
      //注册上传按钮
      this.uploader.assignBrowse(this.$refs.btn, false, false, this.attrs);
      //注册上传拖拽区域
      this.uploader.assignDrop(this.$refs.drop)
    })
  }
}
</script>


<style>

</style>
