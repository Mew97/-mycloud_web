import axios from 'axios'
import router from '@/router/index'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API,
  timeout: 10000
});

//instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
instance.defaults.withCredentials=true;

instance.interceptors.request.use(
  config => {
    if (localStorage.getItem('Authorization')) {
      config.headers.Authorization = localStorage.getItem('Authorization');
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

instance.interceptors.response.use(
  response => {
    console.log("正常响应")
    return response;
  },
  error => {
    console.log("错误响应")
    localStorage.removeItem("userInfo")
    localStorage.removeItem("Authorization")
    if(error.response) {
      if (error.response.status === 401) {
        swal('登陆过期，请重新登陆！')
        router.replace({
          name: 'Login',
          query: {redirect: router.currentRoute.fullPath}
        });
      }
    }
    return Promise.reject(error.response.data);
  }
);
export default instance
