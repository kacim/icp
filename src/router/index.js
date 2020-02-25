import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    srcollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
    routes: [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: resolve => require(['../components/page/index.vue'], resolve),
        meta: { title: 'xxxx', ico: './static/favicon.ico' },
        children: [{
            path: '/home',
            component: resolve => require(['../components/page/home.vue'], resolve),
        },
        {
            path: '/our',
            component: resolve => require(['../components/page/our.vue'], resolve),
        },
        {
            path: '/company',
            component: resolve => require(['../components/page/company.vue'], resolve),
        },
          {
            path: '/info',
            component: resolve => require(['../components/page/info.vue'], resolve),
        }
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
    ],

})