import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'
import type { UserConfig } from 'vite'
import { isProd, loadEnv } from '/@/utils/vite'
import { svgBuilder } from '/@/components/icon/svg/index'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import tailwindcss from 'tailwindcss'
const { VITE_OUT_DIR } = loadEnv()

const pathResolve = (dir: string): any => {
    return resolve(__dirname, '.', dir)
}

const alias: Record<string, string> = {
    '/@': pathResolve('./src/'),
    assets: pathResolve('./src/assets'),
    'vue-i18n': isProd(process.env.NODE_ENV) ? 'vue-i18n/dist/vue-i18n.cjs.prod.js' : 'vue-i18n/dist/vue-i18n.cjs.js',
}

// https://vitejs.cn/config/
const viteConfig: UserConfig = {
    plugins: [
        vue(),
        svgBuilder('./src/assets/images/icons/'),
        VueI18nPlugin({
            include: resolve(dirname(fileURLToPath(import.meta.url)), './src/assets/locales/**'),
        }),
    ],
    resolve: { alias },
    build: {
        sourcemap: false,
        outDir: VITE_OUT_DIR,
        emptyOutDir: true,
        chunkSizeWarningLimit: 1500,
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss as any,
                {
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {
                        charset: (atRule) => {
                            if (atRule.name === 'charset') {
                                atRule.remove()
                            }
                        },
                    },
                },
            ],
        },
    },
}

export default viteConfig
