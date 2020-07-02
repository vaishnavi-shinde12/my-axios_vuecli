import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from './store'
import axios from 'axios';

Vue.config.productionTip = false;

/* Global Request Config */
axios.defaults.baseURL = 'https://my-axios-vuecli.firebaseio.com'  // setting up global level configuration

/*Global Default Config check this header on network -> users.json -> Headers -> req header */
axios.defaults.headers.common['Authorization'] = 'akjjhjas'   
  // axios will setup some default headers but if you can also pass some specific headers
  // you can set them up & axios will merge them you can choose 'common' to setup headers which should be applied to any req of any type
  // ['Authorization'] is property by which we add our own header and set it to something ([''] = 'hsdjdf')
  // it's a good way to pass generic token to backend on every req  
                                                              
axios.defaults.headers.get['Accepts'] = 'application/json'    // u can also target headers,eg get req by targeting get & adding specific header

/* Interceptors */
const reqInterceptors = axios.interceptors.request.use(config => {
  console.log('Request Inceptor', config)
  return config
})

const resInterceptors = axios.interceptors.response.use(res => {
  console.log('Response Interceptor', res)
  return res
})

/* Remove Interceptors using eject function */
axios.interceptors.request.eject(reqInterceptors)
axios.interceptors.response.eject(resInterceptors)






new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
