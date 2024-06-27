import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "../layouts/MainLayout.vue";
import 'nprogress/nprogress.css'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
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
