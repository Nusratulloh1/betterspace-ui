<template>
    <el-container class="layout-container">
        <el-menu default-active="5" class="el-menu-vertical-demo h-full" :collapse="isCallapse">
            <Sidebar class="w-full h-full min-w-[70px] max-w-[280px] overflow-hidden" :isCallapse="isCallapse" @toggle="isCallapse = !isCallapse" />
        </el-menu>
        <el-container class="content-wrapper">
            <div class="w-full px-4">
                <el-main class="layout-main">
                    <el-scrollbar class="layout-main-scrollbar" ref="mainScrollbarRef">
                        <Header class=" w-full mb-11" />
                        <router-view v-slot="{ Component }">
                            <transition name="slide-right" mode="out-in">
                                <component :is="Component" />
                            </transition>
                        </router-view>
                    </el-scrollbar>
                </el-main>
            </div>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar.vue'
import Header from './components/Header.vue'
import { navigationItems } from '/@/utils/constants'
import { computed, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUsersStore } from '../stores/user'
const router = useRouter()
const userStore = useUsersStore()
const user = computed(() => userStore.getUser)
const isCallapse = ref(false)
const currentRoute = computed(() => router.currentRoute.value.fullPath.split('/')[1] || 'default')
</script>

<style scoped lang="scss">
.layout-container .layout-main {
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.layout-main-scrollbar {
    width: 100%;
    position: relative;
    height: 100vh;
    overflow: scroll;
}
.layout-container {
    height: 100%;
    width: 100%;
    display: flex;
}
.content-wrapper {
    width: 100%;
    height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 280px;
    min-height: 300px;
    border: none;
}

</style>
