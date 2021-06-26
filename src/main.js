import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css'
import '@/http/index.js'
import httpPlugin from './http';
//https://element.eleme.cn/#/zh-CN/component/installation

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(httpPlugin);


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');