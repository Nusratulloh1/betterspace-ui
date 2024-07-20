import { createRouter, createWebHistory } from 'vue-router'
import { mainRoutes, workspaceRoutes, tryRoutes, settingsRoutes } from './modules'
import 'nprogress/nprogress.css'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('../views/auth/SignInView.vue'),
      meta: {
        title: 'Sign in',
      },
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/auth/SignUpView.vue'),
      meta: {
        title: 'Sign up',
      },
    },
    {
      path: '/verify',
      name: 'verify',
      component: () => import('../views/auth/VerifyView.vue'),
      meta: {
        title: 'Email verify',
      },
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import('../views/auth/SetupView.vue'),
      meta: {
        title: 'Account setup',
      },
    },
    mainRoutes,
    workspaceRoutes,
    tryRoutes,
    settingsRoutes

  ]
})
router.onError((error: any, to: any) => {
  if (
    error.message.includes('Failed to fetch dynamically imported module') ||
    error.message.includes('Importing a module script failed')
  ) {
    if (!to?.fullPath) {
      window.location.reload();
    } else {
      window.location = to.fullPath;
    }
  }
})
export default router
