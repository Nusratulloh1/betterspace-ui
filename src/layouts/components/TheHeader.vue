<template>
    <el-header class="layout-header">
        <div class="layouts-menu-horizontal px-5 md:px-12 w-full lg:w-auto border-b-2">
            <div class="flex items-center justify-between w-full lg:w-auto gap-5 sm:gap-14">
                <div
                    class="menu-horizontal-logo"
                    @click="$router.push(`${usersStore.user?.role === 'teacher' ? '/teacher/dashboard' : '/student/dashboard'}`)"
                >
                    <Logo class="cursor-pointer" />
                    <h4 class="font-poppins font-semibold text-[22px] text-black mt-1">Eduplus</h4>
                </div>
                <el-button class="!border-none lg:!hidden">
                    <Icon color="#ffffff" name="local-burger-menu" class="cursor-pointer" @click="menuVisible = !menuVisible" size="23" />
                </el-button>
                <el-scrollbar class="hidden lg:block" ref="horizontalMenusRef">
                    <el-menu
                        class="menu-horizontal"
                        id="menu"
                        router
                        mode="horizontal"
                        :default-active="activeRoute"
                        background-color="#fff"
                        text-color="#333741"
                        active-text-color="#000"
                    >
                        <template v-for="menu in menus">
                            <el-menu-item
                                :class="activeRoute === menu.path ? 'is-active' : ''"
                                v-if="menu.type == 'tab'"
                                :index="menu.path"
                                :key="menu.path"
                            >
                                <span>{{ menu.title ? menu.title : $t('noTitle') }}</span>
                            </el-menu-item>
                        </template>
                    </el-menu>
                </el-scrollbar>
            </div>
            <div class="flex items-center gap-5">
                <!-- <button @click="taggleDark()">
                        <span class="hidden dark:inline"
                            ><svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                                    class="fill-sky-400/20"
                                ></path>
                                <path
                                    d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                                    class="fill-sky-500"
                                ></path>
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                                    class="fill-sky-500"
                                ></path>
                            </svg>
                        </span>
                        <span class="block dark:hidden"
                            ><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6">
                                <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" class="fill-sky-400/20 stroke-sky-500"></path>
                                <path
                                    d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                                    class="stroke-sky-500"
                                ></path>
                            </svg>
                        </span>
                    </button> -->
                <el-button @click="logOut" round plain class="!font-medium lg:!h-11 lg:!px-8 !hidden lg:!block !text-black">
                    <Icon color="#000000" name="local-logout" class="mr-2" size="16" />
                    Log out
                </el-button>
            </div>
        </div>
        <el-drawer v-model="menuVisible" :size="206" @handleClose="menuVisible = false">
            <div class="flex flex-col gap-6">
                <template v-for="menu in menus" :key="menu.path">
                    <button
                        v-if="menu.type == 'tab'"
                        @click="goPath(menu.path)"
                        class="text-[#8C8C8C] font-medium flex items-center gap-2 text-xl"
                        :class="{ '!text-black': route.path.includes(menu.path) }"
                    >
                        <Icon :color="route.path.includes(menu.path) ? '#000' : '#8C8C8C'" size="26" :name="`${menu.icon}`" />
                        {{ menu.title ? menu.title : $t('noTitle') }}
                    </button>
                </template>
                    <el-button @click="logOut" round plain class="!font-medium lg:!px-8 !text-black">
                        <Icon color="#000000" name="local-logout" class="mr-2" size="16" />
                        Log out
                    </el-button>
            </div>
        </el-drawer>
    </el-header>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import Logo from './TheLogo.vue'
import { useRoute, useRouter } from 'vue-router'
import type { ElScrollbar } from 'element-plus'
import { useUsersStore } from '/@/stores/user'
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const taggleDark = useToggle(isDark)
interface Props {
    menus: {
        title: string
        path: string
        type: string
        icon: string
        visible: boolean
    }[]
}
const props = defineProps<Props>()
const activeRoute = computed(() => route.path)
const horizontalMenusRef = ref<InstanceType<typeof ElScrollbar>>()
const menuVisible = ref(false)
const usersStore = useUsersStore()
const route = useRoute()
const userStore = useUsersStore()
const router = useRouter()
const state = reactive({
    defaultActive: '',
})
watch(
    () => router.currentRoute.value,
    (to, from) => {
        console.log('Route changed from', route.path)
    }
)
const goPath = (path: string) => {
    router.push(path)
    menuVisible.value = false
}
const logOut = () => {
    userStore.resetToken()
    router.push('/login')
}
</script>

<style scoped lang="scss">
.layouts-menu-horizontal {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 72px;
    // border-bottom: 1px solid #182857;
    // background: #182857;
    // padding: 0px 50px;
}
.layout-header {
    height: auto;
    padding: 0;
}
.menu-horizontal-logo {
    width: 139px;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
}

.semi-circle {
    width: 96px;
    height: 96px;
    border: 1px solid black;
    border-radius: 50%;
    /* Halve the circle */
    border-bottom-color: transparent;
    border-left-color: transparent;
    /* Rotate the circle */
    transform: rotate(-45deg);
}

.menu-horizontal {
    border: none !important;
    display: flex;
    gap: 32px;
    height: 70px;
    padding: 0px 16px;
}

.el-menu-item {
    height: 70px;
    color: #333741;
    text-align: center;
    font-family: 'Poppins';
    font-size: 14px;
    font-weight: 400;
    line-height: 28px;
    padding: 0px;

    &:focus,
    &:hover {
        background-color: white !important;
    }
}

@media (min-width: 1180px) {
    .menu-horizontal {
        width: 510px;
    }
}

@media (max-width: 640px) {
    .menu-horizontal {
        gap: 10px;
        width: 88px;
        padding: 0;

        .el-sub-menu.is-active {
            padding: 0px 10px !important;
        }
    }

    .menu-horizontal-logo {
        width: 120px;
        gap: 4px;

        h4 {
            font-size: 20px;
        }
    }
}
</style>
