// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import LoadScript from 'vue-plugin-load-script'
import jQuery from 'jquery'
import uploader from 'vue-simple-uploader'
import VueCookies from 'vue-cookies'
import utils from '@/common/utils'

Vue.prototype.utils = utils;
window.jQuery = jQuery;
window.$ = jQuery;

window.base_url = "https://mycanvas.oss-cn-shanghai.aliyuncs.com/cloud/html/";


Vue.use(VueCookies);
Vue.use(uploader);

Vue.config.productionTip = false;

//Vue.use(LoadScript);
// Vue.loadScript("static/assets/bundles/libscripts.bundle.js").then(
//     Vue.loadScript("static/assets/bundles/vendorscripts.bundle.js")
// ).then(
//   Vue.loadScript("static/assets/bundles/morrisscripts.bundle.js")
// ).then(
//   Vue.loadScript("static/assets/bundles/jvectormap.bundle.js")
// ).then(
//   Vue.loadScript("static/assets/bundles/knob.bundle.js")
// ).then(
//   Vue.loadScript('static/assets/plugins/sweetalert/sweetalert.min.js')
// ).then(
//   Vue.loadScript("static/assets/bundles/mainscripts.bundle.js")
// );

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
