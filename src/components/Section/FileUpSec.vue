<template>
  <section class="content">
    <div class="block-header">
      <div class="row">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <h2>文件上传
            <small>欢迎使用</small>
          </h2>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12">
          <ul class="breadcrumb float-md-right">
            <li class="breadcrumb-item"><a href="index.html"><i class="zmdi zmdi-home"></i> 首页</a></li>
            <li class="breadcrumb-item active">文件上传</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <!-- File Upload | Drag & Drop OR With Click & Choose -->
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="card">
            <div class="header">
              <h2><strong>文件上传</strong><small>拖拽文件上传或者选择文件上传</small></h2>
              <ul class="header-dropdown">
                <li class="dropdown"> <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-more"></i> </a>
                  <ul class="dropdown-menu dropdown-menu-right">
                    <li><a href="javascript:void(0);">Action</a></li>
                    <li><a href="javascript:void(0);">Another action</a></li>
                    <li><a href="javascript:void(0);">Something else</a></li>
                  </ul>
                </li>
                <li class="remove">
                  <a role="button" class="boxs-close"><i class="zmdi zmdi-close"></i></a>
                </li>
              </ul>
            </div>
            <FileUpload/>
          </div>
        </div>
      </div>
      <!-- #END# File Upload | Drag & Drop OR With Click & Choose -->
    </div>
  </section>
</template>

<script>
  import FileUpload from '@/components/Section/FileUpload'
  export default {
    name: "",
    components:{
      FileUpload
    },
    methods:{
    }
  }
</script>

<style scoped>

</style>
