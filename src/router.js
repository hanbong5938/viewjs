import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: () => import('./app/index'),
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('./app/home')
            },
            {
                path: '/vuexTest',
                component: () => import('./app/vuexTest')
            },
            {
                path: '/routerTest',
                component: () => import('./app/routerTest')
            },
            {
                path: '/ifElseTest',
                component: () => import('./app/interactiveTest')
            },
            {
                path: '/modelTest',
                component: () => import('./app/modelTest')
            },
            {
                path: '/connectionTest',
                component: () => import('./app/connectionTest')
            }
        ]
    },
    {
        path: '/chart',
        component: () => import('./app/chart'),
        redirect: '/chart/menu',
        children: [
            {
                path: '/chart/menu',
                component: () => import('./app/chart/menu')
            }
        ]
    }
]

const router = new VueRouter({
    routes
})

export default router;