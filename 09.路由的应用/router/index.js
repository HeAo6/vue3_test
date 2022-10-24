import { createRouter,createWebHistory } from 'vue-router'

const routes = [
    { path: '/home', name: 'home', component: () => import('../components/Home') },
    { path: '/user/:username', name: 'user', component: () => import('../components/User') },
    { path: '/about', name: 'about', component: () => import('../components/About') },
    
]

const router = createRouter({
    routes,
    //路由历史的方法必须调用一下
    history:createWebHistory()
})

router.beforeEach((to)=>{
    //判断是否要访问除了登录页面的其他页面
    if (to.path !== '/home') {
        //判断用户是否携带token如果没有则返回页面
        const token = window.localStorage.getItem('token')
        if (!token) {
            return '/home'
        }
    }
})

export default router