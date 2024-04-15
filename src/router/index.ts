import { createRouter, createWebHistory } from 'vue-router'
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
