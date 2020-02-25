import Vue from 'vue'
import VueWaypoint from 'vue-waypoint'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import ElementUI from 'element-ui';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/css/icon.css';
import './assets/icon/iconfont.css';

Vue.config.productionTip = false
Vue.use(ElementUI, {
    size: 'small'
});
Vue.use(VueWaypoint);
Vue.prototype.$axios = axios;


router.beforeEach((to, from, next) => {
    
    if(to.meta.title){
        document.title = to.meta.title
    }

    next()
    
})



new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')