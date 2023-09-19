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
            {
                path: 'learning',
                name: 'learning',
                component: () => import('/@/views/learning/LearnView.vue'),
                meta: {
                    title: 'Learning',
                },
            },
            {
                path: 'werehouse',
                name: 'orders',
                component: () => import('/@/views/werehouse/WereHouseView.vue'),
                meta: {
                    title: 'Werehouse',
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
        path: '/register',
        name: 'adminRegsiter',
        component: () => import('/@/views/auth/RegisterView.vue'),
        meta: {
            title: 'Register',
        },
    },
    {
        path: '/reset-password',
        name: 'adminReset',
        component: () => import('/@/views/auth/ResetPasswordView.vue'),
        meta: {
            title: 'Reset Password',
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
