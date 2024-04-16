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
      path: '/dashboard',
      name: 'home',
      component: () => import('../views/dashboard/DashboardView.vue'),
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/space/:id',
      name: 'space',
      component: () => import('/@/views/SpaceView.vue'),
      meta: {
        title: 'Space',
      },
    },
    {
      path: "/web-view",
      component: MainLayout,
      name: "view",
      meta: { name: "view" },
      children: [
        {
          path: '',
          name: 'web-view',
          component: () => import('/@/views/WebView.vue'),
          meta: {
            title: 'Web view',
          },
        }
      ]
    }
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
