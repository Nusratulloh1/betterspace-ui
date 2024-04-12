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

// import '/@/permissions'
import { mask } from "vue-the-mask";
async function start() {
    const app = createApp(App)

    registerIcons(app)
    // const i18n = await loadLang(app)

    app.use(router)
    app.use(i18n)
    app.use(ElementPlus, {
        // locale: elementEnLocale,
    })
    app.use(createPinia())
    app.mount('#app')
    app.directive("mask", mask as any);
    app.config.globalProperties.eventBus = mitt()
}
start()
