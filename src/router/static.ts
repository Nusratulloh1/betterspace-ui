/*
 * 静态路由
 */
import { RouteRecordRaw } from 'vue-router'

const title = (name: string): string => {
    return `pagesTitle.${name}`
}

const staticRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/dashboard',
    },
    {
        path: '/',
        component: () => import('/@/layouts/backend/index.vue'),
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('/@/views/dashboard/DashboardView.vue'),
                meta: {
                    title: 'Dashboard',
                },
            },
            {
                path: 'products',
                name: 'products',
                component: () => import('/@/views/products/ProductsView.vue'),
                meta: {
                    title: 'Products',
                },
            },
            {
                path: 'orders',
                name: 'orders',
                component: () => import('/@/views/orders/OrdersView.vue'),
                meta: {
                    title: 'Orders',
                },
            },
        ],
    },
    {
        path: '/login',
        name: 'adminLogin',
        component: () => import('/@/views/auth/LoginView.vue'),
        meta: {
            title: 'Login',
        },
    },
    {
        path: '/:path(.*)*',
        redirect: '/404',
    },
    {
        path: '/404',
        name: 'notFound',
        component: () => import('/@/views/common/error/404.vue'),
        meta: {
            title: 'Not found',
        },
    },
    {
        path: '/401',
        name: 'noPower',
        component: () => import('/@/views/common/error/401.vue'),
        meta: {
            title: 'No Power',
        },
    },
]

export default staticRoutes
