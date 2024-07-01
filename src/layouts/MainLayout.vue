<template>
    <el-container class="layout-container">
        <Sidebar class="w-full max-w-[268px]" />
        <el-container class="content-wrapper">
            <div class="w-full">
                <Header class="h-14 w-full" />
                <el-main class="layout-main !pb-16 lg:!p-0">
                    <el-scrollbar class="layout-main-scrollbar" ref="mainScrollbarRef">
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
import dayjs from 'dayjs'
import { useUsersStore } from '../stores/user'
const router = useRouter()
const userStore = useUsersStore()
const user = computed(() => userStore.getUser)
const currentRoute = computed(() => router.currentRoute.value.fullPath.split('/')[1] || 'default')
</script>

<style scoped lang="scss">
.layout-container .layout-main {
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-top: 8px !important;
    overflow: hidden;
    width: 100%;
    height: 100%;
}
.layout-main-scrollbar {
    width: 100%;
    position: relative;
    height: 100vh;
    overflow: hidden;
}
.layout-container {
    height: 100%;
    width: 100%;
    display: flex;
    padding: 6px 0px 6px 15px;
}
.content-wrapper {
    width: 100%;
    height: 100%;
}
</style>
