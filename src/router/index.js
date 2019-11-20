import Vue from 'vue'
import Router from 'vue-router'
const DashboardLayout = () => import( /* webpackChunkName: "dashboard" */ '../components/dashboardLayout.vue')
const LoginLayout = () => import(/* webpackChunkName: "dashboard" */ '../components/LoginLayout.vue') 

function loadView(view) {
    return () => import(
        /* webpackChunkName: "view-[request]" */
        `../components/dashboardContents/${view}.vue`)
}
const routes = [{
    path: '/Dashboard',
    component: DashboardLayout,
    children: [{
        name: 'UserController',
        path: '/userController',
        component: loadView('userController')
    },
    {
        name: 'BengkelController',
        path: '/bengkel',
        component: loadView('bengkelController')
    }
],
}, 
{
    path: '/',
    component: LoginLayout,
    name: 'LoginLayout'
}   
]
Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes: routes
})
export default router