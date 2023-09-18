import { Module } from 'vuex'
import { ConfigStateTypes, RootStateTypes } from '/@/store/interface/index'
import { Local } from '/@/utils/storage'
import { CONFIG } from '/@/store/constant/cacheKey'

interface setObj {
    name: string
    value: any
}

var state: ConfigStateTypes = {
    layout: {
        showDrawer: false,
        shrink: false,
        // <Default|Classic|Streamline>
        layoutMode: 'Streamline',
        // <slide-right|slide-left|el-fade-in-linear|el-fade-in|el-zoom-in-center|el-zoom-in-top|el-zoom-in-bottom>
        mainAnimation: 'slide-right',
        menuBackground: '#182857',
        menuColor: '#303133',
        menuActiveBackground: '#182857',
        menuActiveColor: '#EA2127',
        menuTopBarBackground: '#fcfcfc',
        menuWidth: 260,
        menuDefaultIcon: 'el-icon-Minus',
        menuCollapse: false,
        menuUniqueOpened: false,
        menuShowTopBar: true,
        headerBarTabColor: '#000000',
        headerBarTabActiveBackground: '#182857',
        headerBarTabActiveColor: '#000000',
        headerBarBackground: '#182857',
        headerBarHoverBackground: '#f5f5f5',
    },
    defaultLang: 'en',
    fallbackLang: 'en',
    langArray: [
        { name: 'uz', value: 'Uzbek' },
        { name: 'ru', value: 'Russian' },
        { name: 'en', value: 'English' },
    ],
}
const baConfig = Local.get(CONFIG) || {}
state = { ...state, ...baConfig }

const ConfigModule: Module<ConfigStateTypes, RootStateTypes> = {
    namespaced: true,
    state,
    getters: {
        menuWidth: (state) => {
            if (state.layout.shrink) {
                return state.layout.menuCollapse ? '0px' : state.layout.menuWidth + 'px'
            }
            return state.layout.menuCollapse ? '64px' : state.layout.menuWidth + 'px'
        },
    },
    mutations: {
        set(state: any, data: setObj): void {
            let name = data.name.split('.')
            if (name[1]) {
                state[name[0]][name[1]] = data.value
            } else {
                state[data.name] = data.value
            }
        },

        setMulti(state: any, data: object): void {
            for (let [key, val] of Object.entries(data)) {
                state[key] = val
            }
        },

        setAndCache(state: any, data: setObj): void {
            let baConfig = Local.get(CONFIG) || {}

            let name = data.name.split('.')
            if (name[1]) {
                state[name[0]][name[1]] = data.value
                if (!baConfig[name[0]]) {
                    baConfig[name[0]] = state[name[0]]
                }
                baConfig[name[0]][name[1]] = data.value
            } else {
                state[data.name] = baConfig[data.name] = data.value
            }
            if (baConfig.layout) {
                baConfig.layout.showDrawer = false
            }
            Local.set(CONFIG, baConfig)
        },
    },
    actions: {
        setLayoutMode({ state, commit }, data) {
            commit('setAndCache', {
                name: 'layout.layoutMode',
                value: data,
            })

            if (data == 'Classic' && state.layout.headerBarBackground == '#ffffff' && state.layout.headerBarBackground == '#ffffff') {
                commit('setAndCache', {
                    name: 'layout.headerBarTabActiveBackground',
                    value: '#f5f5f5',
                })
            } else if (data == 'Default' && state.layout.headerBarBackground == '#ffffff' && state.layout.headerBarTabActiveBackground == '#f5f5f5') {
                commit('setAndCache', {
                    name: 'layout.headerBarTabActiveBackground',
                    value: '#ffffff',
                })
            }
        },
    },
}

export default ConfigModule
