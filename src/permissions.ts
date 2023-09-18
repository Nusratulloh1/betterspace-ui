import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { ElMessage } from 'element-plus'
import type { RouteLocationNormalized } from 'vue-router'
import { useUsersStore } from './stores/user'
import { loading } from '/@/utils/loading'
import { i18n } from '/@/i18n'

const title = 'Dealme'
const getPageTitle = (key: string) => {
    const { t, te } = i18n.global as any
    const hasKey = te(`app.${key}`) as any
    if (hasKey) {
        const pageName = t(`app.${key}`)

        return `${pageName} - ${title}`
    }
    return `${key} - ${title}`
}

NProgress.configure({ showSpinner: false })

const whiteList = ['/login']

router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
    const store = useUsersStore()

    // Start progress bar
    NProgress.start()
    if (!window.existLoading) {
        loading.show()
        window.existLoading = true
    }
    // Determine whether the user has logged in
    if (store.token) {
        if (to.path === '/login') {
            // If is logged in, redirect to the home page
            next({ path: '/' })
            NProgress.done()
        } else {
            // Check whether the user has obtained his permission roles
            if (!store.getUser) {
                try {
                    await store.getUserInfo()
                    next({ ...to, replace: true })
                } catch (err: any) {
                    store.resetToken()
                    ElMessage({
                        message: err?.message || 'Has Error',
                        type: 'error',
                        duration: 5 * 1000,
                    })
                    next(`/login?redirect=${to.path}`)
                    NProgress.done()
                }
            } else {
                next()
            }
        }
    } else {
        // Has no token
        if (whiteList.indexOf(to.path) !== -1) {
            // In the free login whitelist, go directly
            next()
        } else {
            next(`/login`)
            NProgress.done()
        }
    }
})

router.afterEach((to: RouteLocationNormalized) => {
    NProgress.done()
    if (window.existLoading) {
        loading.hide()
    }
    document.title = getPageTitle((to.meta.title || '') as string)
    console.log('document.title', document.title)
})
