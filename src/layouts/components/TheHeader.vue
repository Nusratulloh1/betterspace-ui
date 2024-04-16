<template>
    <el-header class="layout-header !h-12 !px-0" :class="active ? 'bg-primary active' : 'bg-[#2C2C2C]'">
        <div class="flex items-center justify-between">
            <div class="flex items-center w-[30%]">
                <button class="px-2.5 flex items-center h-12 text-[#2C2C2C] hover:text-primary hover:bg-primary">
                    <div class="flex items-end gap-0.5">
                        <svg width="22" class="fill-current" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18.1108 18.1182C20.1646 17.9948 21.3483 16.5668 21.3779 14.9265C21.431 12.0963 21.4445 9.26374 21.3779 6.43484C21.331 4.58347 19.7586 3.16902 18.1158 3.3159C18.1268 2.45686 17.7988 1.62809 17.203 1.00917C16.6072 0.39025 15.7915 0.0310293 14.9327 0.00934591C12.0852 0.00934591 9.23782 -0.017808 6.39165 0.0204537C4.62173 0.0439044 3.26406 1.53981 3.29615 3.31713C1.78543 3.1394 -0.0128719 4.57236 0.00440763 6.53605C0.0278584 9.23782 -0.0128719 11.9408 0.00440763 14.6414C0.0204529 16.7087 1.21397 17.9442 3.29244 18.1195C3.31342 19.9807 4.7143 21.3594 6.64467 21.3717C9.27979 21.389 11.9161 21.3446 14.55 21.389C16.5446 21.4223 18.1182 19.9881 18.1108 18.1182Z"
                            />
                            <rect x="3" y="3" width="15" height="15" rx="0.245333" />
                        </svg>
                        <Icon color="#ECECEC" class="mb-0.5" name="el-icon-ArrowDown" size="10" />
                    </div>
                </button>
                <button class="flex items-center justify-center w-12 h-12 hover:bg-primary">
                    <Icon name="el-icon-ArrowLeft" size="22" />
                </button>
                <button class="flex items-center justify-center w-12 h-12 hover:bg-primary">
                    <Icon name="el-icon-ArrowRight" size="22" />
                </button>
                <button class="flex items-center justify-center w-12 h-12 hover:bg-primary pl-2">
                    <div class="flex items-center gap-0.5">
                        <Icon name="local-selection" size="18" />
                        <Icon class="mt-0.5 !stroke-current" name="el-icon-ArrowDown" size="10" />
                    </div>
                </button>
            </div>
            <el-input type="search" v-model="text" :prefix-icon="Search" round placeholder="Search through space" size="small" :class="active ? '' : 'dark'" class=" !w-[388px]" />
            <div class="flex items-center justify-end pr-3 gap-2 w-[30%]">
                <p class="font-medium text-xs mr-3 text-[#FDFDFD]" :class="active ? ' visible' : 'invisible'">You are in Focus mode</p>
                <button class="flex items-center justify-center w-12 h-12 hover:bg-primary">
                    <Icon class="!fill-current" name="local-checkers" size="18" />
                </button>
                <button class=" p-[3px] rounded-[22px] flex items-center gap-1 mr-2.5" :class="active ? ' bg-[#0F3B7F]' : 'bg-[#383838]'">
                    <img src="/@/assets/images/avatar.png" width="27" height="27" alt="avatar" />
                    <Icon color="#ECECEC" class="mt-0.5" name="el-icon-ArrowDown" size="10" />
                </button>
                <el-switch size="large" v-model="active" class="custom"></el-switch>
            </div>
        </div>
    </el-header>
</template>

<script lang="ts" setup>
import { computed, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ElScrollbar } from 'element-plus'
import { useUsersStore } from '/@/stores/user'
import { useDark, useToggle } from '@vueuse/core'
import { Search } from '@element-plus/icons-vue'
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
const active = ref(false)
const text = ref('')
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
button {
    .el-icon,
    svg {
        color: #ececec !important;
        rect {
            fill: #2c2c2c;
        }
    }
    &:hover {
        svg {
            rect {
                fill: #1265e9;
            }
        }
    }
}
.active {
    button {
        svg {
            rect {
                fill: #1265e9;
            }
        }
        &:hover {
            background: #f4f4f4;
            .el-icon,
            svg {
                color: #0b0b0b !important;
                rect {
                    fill: #ececec;
                }
            }
        }
    }
}
</style>
