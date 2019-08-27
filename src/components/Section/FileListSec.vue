<template>
  <section class="content inbox">
    <div class="block-header">
      <div class="row">
        <div class="col-lg-7 col-md-6 col-sm-12">
          <h2>我的文件
            <small>欢迎使用</small>
          </h2>
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12">
          <ul class="breadcrumb float-md-right">
            <li class="breadcrumb-item"><a href="#"><i class="zmdi zmdi-home"></i> 首页</a></li>
            <li class="breadcrumb-item active">我的文件</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row clearfix">
        <div class="col-lg-12">
          <div class="card action_bar">
            <div class="body">
              <div class="row clearfix">
                <div class="col-lg-1 col-md-2 col-3">
                  <div class="checkbox inlineblock delete_all">
                    <input id="deleteall" type="checkbox">
                    <label for="deleteall">
                      All
                    </label>
                  </div>
                </div>
                <div class="col-lg-5 col-md-4 col-6">
                  <div class="input-group search">
                    <input type="text" class="form-control" placeholder="Search...">
                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-search"></i>
                                    </span>
                  </div>
                </div>
                <div class="col-lg-6 col-md-6 col-3 text-right">
                  <div class="btn-group hidden-sm-down">
                    <button type="button" class="btn btn-neutral dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More<span class="caret"></span> </button>
                    <ul class="dropdown-menu dropdown-menu-right pullDown">
                      <li><a href="javascript:void(0);">Unread</a></li>
                      <li><a href="javascript:void(0);">Unimportant</a></li>
                      <li><a href="javascript:void(0);">Add star</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="javascript:void(0);">Mute</a></li>
                    </ul>
                  </div>
                  <div class="btn-group hidden-sm-down">
                    <div class="btn-group">
                      <button type="button" class="btn btn-neutral dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="zmdi zmdi-label"></i>
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-right pullDown">
                        <li>
                          <a href="javascript:void(0);">Family</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Work</a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">Google</a>
                        </li>
                        <li role="separator" class="divider"></li>
                        <li>
                          <a href="javascript:void(0);">Create a Label</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="btn-group hidden-md-down hidden-sm-down">
                    <button type="button" class="btn btn-neutral dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <i class="zmdi zmdi-folder"></i> <span class="caret"></span> </button>
                    <ul class="dropdown-menu dropdown-menu-right pullDown">
                      <li><a href="javascript:void(0);">Important</a></li>
                      <li><a href="javascript:void(0);">Social</a></li>
                      <li><a href="javascript:void(0);">Bank Statements</a></li>
                      <li role="separator" class="divider"></li>
                      <li><a href="javascript:void(0);">Create a folder</a></li>
                    </ul>
                  </div>
                  <button type="button" class="btn btn-neutral hidden-sm-down">
                    <i class="zmdi zmdi-plus-circle"></i>
                  </button>
                  <button type="button" class="btn btn-neutral hidden-sm-down">
                    <i class="zmdi zmdi-archive"></i>
                  </button>
                  <button type="button" class="btn btn-neutral btn-danger">
                    <i class="zmdi zmdi-delete"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row clearfix">
        <div class="col-lg-12">
          <div class="card">
            <div class="body table-responsive">
              <FileList/>
            </div>
          </div>
          <div class="card">
            <div class="body">
              <ul class="pagination pagination-primary m-b-0">
                <li class="page-item"><a class="page-link" href="#"><i class="zmdi zmdi-arrow-left"></i></a></li>
                <li class="page-item active"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#"><i class="zmdi zmdi-arrow-right"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import FileList from '@/components/Section/FileList'
  export default {
    name: "",
    components:{
      FileList
    }
  }
</script>

<style>

</style>
