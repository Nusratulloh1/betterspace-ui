import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { registerIcons } from '/@/utils/common'
import ElementPlus from 'element-plus'
import elementEnLocale from 'element-plus/lib/locale/lang/en'
import mitt from 'mitt'
import { i18n } from './i18n'
import 'element-plus/dist/index.css'
import '/@/assets/styles/base.scss'
import '/@/assets/styles/element/index.scss'
import vue3GoogleLogin from 'vue3-google-login'
import '/@/permissions'
import VueTheMask from 'vue-the-mask';
async function start() {
    const app = createApp(App)

    registerIcons(app)
    // const i18n = await loadLang(app)

    app.use(router)
    app.use(i18n)
    app.use(ElementPlus, {
        // locale: elementEnLocale,
    })
    app.use(vue3GoogleLogin, {
        clientId: '1006123200595-mpadesgaspg0dhdi17teaaehj79ht45h.apps.googleusercontent.com'
    })
    app.use(createPinia())
    app.mount('#app')
    app.use(VueTheMask);
    app.config.globalProperties.eventBus = mitt()
}
start()
