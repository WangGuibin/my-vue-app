import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import RowLayout from '@/components/RowLayout.vue'
import News from '../views/NewsPage.vue';


Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/demo',
        name: 'Demo List',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ('../views/DemoList.vue'),
    },
    {
        path: '/InputData',
        name: 'InputData',
        component: () =>
            import ('../views/InputData.vue')
    },
    {
        path: '/demo/rowlayout',
        name: 'RowLayout',
        component: RowLayout
    },
    {
        path: '/News',
        name: 'News',
        component: News
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

export default router;