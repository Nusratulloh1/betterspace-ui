import { Module } from 'vuex'
import { viewMenu, NavTabs, RootStateTypes } from '/@/store/interface/index'
import { Local } from '/@/utils/storage'
import { TAB_VIEW_CONFIG } from '/@/store/constant/cacheKey'

export function findMenu(tabsViewRoutes: viewMenu[], path: string): viewMenu | undefined {
    for (const key in tabsViewRoutes) {
        if (tabsViewRoutes[key].path == path) {
            return tabsViewRoutes[key]
        } else if (tabsViewRoutes[key].children) {
            const done = findMenu(tabsViewRoutes[key].children as viewMenu[], path)
            if (done) return done
        }
    }
}

function encodeRoutesURI(data: viewMenu[]): viewMenu[] {
    for (const key in data) {
        if (data[key].type == 'iframe') {
            data[key].path = '/admin/iframe/' + encodeURIComponent(data[key].path)
        }

        if (data[key].children) {
            data[key].children = encodeRoutesURI(data[key].children as viewMenu[])
        }
    }
    return data
}

const tabViewConfig = Local.get(TAB_VIEW_CONFIG) || {}

const NavTabsModule: Module<NavTabs, RootStateTypes> = {
    namespaced: true,
    state: {
        activeIndex: 0,
        activeRoute: null,
        tabsView: [],
        tabFullScreen: typeof tabViewConfig['tabFullScreen'] != 'undefined' ? tabViewConfig['tabFullScreen'] : false,
        tabsViewRoutes: [],
    },
    mutations: {
        addTab(state, path: string): void {
            if (state.tabsView.some((v) => v.path === path)) return
            const currentRoute = findMenu(state.tabsViewRoutes, path)
            if (!currentRoute) return
            state.tabsView.push(
                Object.assign({}, currentRoute, {
                    title: currentRoute.title || 'pagesTitle.noTitle',
                })
            )
        },
        closeTab(state, route: viewMenu): void {
            state.tabsView.map((v, k) => {
                if (v.path == route.path) {
                    state.tabsView.splice(k, 1)
                }
            })
        },
        closeTabs(state, retainMenu: viewMenu | undefined): void {
            if (retainMenu) {
                state.tabsView = [retainMenu]
            } else {
                state.tabsView = []
            }
        },
        setActiveRoute(state, path: string): void {
            const currentRoute = findMenu(state.tabsViewRoutes, path)
            if (!currentRoute) return
            const currentRouteIndex: number = state.tabsView.findIndex((route: viewMenu) => {
                return route.path === path
            })
            if (!currentRoute) return
            state.activeRoute = currentRoute
            state.activeIndex = currentRouteIndex
        },
        setTabsViewRoutes(state, data: viewMenu[]): void {
            state.tabsViewRoutes = data
        },
        setFullScreen(state, fullScreen: boolean): void {
            let tabViewConfig = Local.get(TAB_VIEW_CONFIG) || {}
            state.tabFullScreen = tabViewConfig['tabFullScreen'] = fullScreen
            Local.set(TAB_VIEW_CONFIG, tabViewConfig)
        },
    },
    actions: {
        setTabsViewRoutes({ commit }, data: viewMenu[]) {
            commit('setTabsViewRoutes', encodeRoutesURI(data))
        },
    },
}

export default NavTabsModule
