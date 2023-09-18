import { createRouter, createWebHistory } from 'vue-router'
import 'nprogress/nprogress.css'
import staticRoutes from '/@/router/static'

const router = createRouter({
    history: createWebHistory(),
    routes: staticRoutes,
})

export default router
