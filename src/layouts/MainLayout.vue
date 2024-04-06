<template>
    <el-container class="layout-container">
        <el-container class="content-wrapper !mb-10">
            <TheHeader :menus="navigationItems[currentRoute]" />
            <el-main class="layout-main !pb-16 lg:!p-0">
                <el-scrollbar class="layout-main-scrollbar" ref="mainScrollbarRef">
                    <router-view v-slot="{ Component }">
                        <transition name="slide-right" mode="out-in">
                            <component :is="Component" />
                        </transition>
                    </router-view>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import { navigationItems } from '/@/utils/constants'
import { computed, onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import dayjs from 'dayjs'
import { useUsersStore } from '../stores/user'
const router = useRouter()
const userStore = useUsersStore()
const user = computed(() => userStore.getUser)
const currentRoute = computed(() => (router.currentRoute.value.fullPath.split('/')[1] || 'default'))
</script>

<style scoped lang="scss">
.layout-container .layout-main {
    padding-left: 0 !important;
    padding-right: 0 !important;
    padding-top: 0 !important;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #f9f9f9;
}
.layout-main-scrollbar {
    width: 100%;
    position: relative;
    // overflow: hidden;
}
.layout-container {
    height: 100%;
    width: 100%;
}
.content-wrapper {
    flex-direction: column;
    width: 100%;
    height: 100%;
}
</style>
