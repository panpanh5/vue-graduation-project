import Vue from 'vue'
import VueRouter from 'vue-router'
import Admin from '../views/admin/admin.vue'
import Login from '../views/login/login'
import Index from '../views/index.vue'
import Location from '../views/location.vue'
import My from '../views/my.vue'
import Task from '../views/task.vue'
import submitTask from '../views/submitTask.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login,
    },
    {
        path: '/admin',
        component: Admin,
        children: [
            {
                path: '',
                redirect: 'index'
            }, {
                path: 'index',
                name: '首页',
                component: Index,
            }, {
                path: 'task',
                name: '作业',
                component: Task,
            },
            {
                path: 'location',
                name: '打卡',
                component: Location,
            },
            {
                path: 'my',
                name: '我的',
                component: My,
            }]
    },
    {
        path: '/submit:id',
        component: submitTask
    },
    {
        path: '*',
        component: Admin,
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router