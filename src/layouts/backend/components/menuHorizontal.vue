<template>
    <div class="layouts-menu-horizontal px-5 md:px-8 py-6">
        <div class="flex">
            <div class="menu-horizontal-logo hidden md:block" v-if="layoutConfig.menuShowTopBar">
                <router-link to="/dashboard">
                    <Logo class="cursor-pointer" />
                </router-link>
            </div>
            <el-scrollbar ref="horizontalMenusRef" class="horizontal-menus-scrollbar flex">
                <el-menu class="menu-horizontal" router mode="horizontal"
                    background-color="#ffffff">
                    <template v-for="menu in menus">
                        <el-menu-item :class="{'is-active': menu.path === route.path, ' !no-underline !opacity-50 !font-normal': menu.path !== route.path}" v-if="menu.type == 'tab'" :index="menu.path" :key="menu.icon">
                            <span >{{ menu.title ? menu.title : $t('noTitle') }}</span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </el-scrollbar>
        </div>
        <NavMenus />
    </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, reactive, ref } from 'vue'
import Logo from './logo.vue'
import MenuTree from './menuTree.vue'
import { useRoute, onBeforeRouteUpdate, RouteLocationNormalizedLoaded } from 'vue-router'
import { useStore } from '/@/store/index'
import type { ElScrollbar } from 'element-plus'
import NavMenus from '/@/layouts/backend/components/navMenus.vue'
const horizontalMenusRef = ref<InstanceType<typeof ElScrollbar>>()

const store = useStore()
const route = useRoute()
console.log(route.path);
const state = reactive({
    defaultActive: '',
})
const menus = computed(() => store.state.navTabs.tabsViewRoutes)
const layoutConfig = computed(() => store.state.config.layout)

// 激活当前路由的菜单
const currentRouteActive = (currentRoute: RouteLocationNormalizedLoaded) => {
    state.defaultActive = currentRoute.path
}

// 滚动条滚动到激活菜单所在位置
const verticalMenusScroll = () => {
    nextTick(() => {
        let activeMenu: HTMLElement | null = document.querySelector('.el-menu.menu-horizontal li.is-active')
        if (!activeMenu) return false
        horizontalMenusRef.value?.setScrollTop(activeMenu.offsetTop)
    })
}

onMounted(() => {
    currentRouteActive(route)
    verticalMenusScroll()
})

onBeforeRouteUpdate((to) => {
    currentRouteActive(to)
})
</script>

<style scoped lang="scss">
.layouts-menu-horizontal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 74px;
    // border-bottom: 1px solid #182857;
    // background: #182857;
    // padding: 0px 50px;
}

.menu-horizontal-logo {
    width: 150px;
}

.menu-horizontal {
    border: none;
    display: flex;
}

.el-menu-item {
    color: #111927;
    font-family: 'Inter';
    font-size: 14px;
    font-weight: 400;
    line-height: 24px;
    padding: 8px 12px;
    opacity: 0.5;
    &:hover, &:focus{
        background-color: transparent !important;
    }
}

.el-sub-menu .icon,
.el-menu-item .icon {
    vertical-align: middle;
    margin-right: 5px;
    width: 24px;
    text-align: center;
}

.is-active .icon {
    color: var(--el-menu-active-color) !important;
}

.el-menu-item.is-active {
    color: #111927 !important;
    text-decoration-line: underline;
    font-weight: 600;
    border: none;
    opacity: 1;
}

@media (min-width: 1180px) {
    .menu-horizontal {
        width: 660px;
    }
}
</style>
