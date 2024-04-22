<template>
    <el-header class="layout-header !h-12 !px-0" :class="active ? 'bg-primary active' : 'bg-[#2C2C2C]'">
        <div class="flex items-center justify-between">
            <div class="flex items-center w-[30%]">
                <mainMenu :active="active" />
                <button class="flex items-center justify-center w-12 h-12 hover:bg-primary">
                    <Icon name="el-icon-ArrowLeft" size="22" />
                </button>
                <button class="flex items-center justify-center w-12 h-12 hover:bg-primary">
                    <Icon name="el-icon-ArrowRight" size="22" />
                </button>
                <miniMenu  :active="active" />
            </div>
            <el-input
                type="search"
                v-model="text"
                :prefix-icon="Search"
                round
                placeholder="Search through space"
                :class="active ? '' : 'dark'"
                class="!w-[388px] !h-9"
            />
            <div class="flex items-center justify-end pr-3 gap-2 w-[30%]">
                <p class="font-medium text-sm mr-3 text-[#FDFDFD]" :class="active ? ' visible' : 'invisible'">You are in Focus mode</p>
                <checkersMenu :active="active" />
                <button class="p-[3px] rounded-[22px] flex items-center gap-1 mr-2.5" :class="active ? ' bg-[#0F3B7F]' : 'bg-[#383838]'">
                    <img src="/@/assets/images/avatar.png" width="27" height="27" alt="avatar" />
                    <Icon color="#ECECEC" class="mt-0.5" name="el-icon-ArrowDown" size="10" />
                </button>
                <el-switch size="large" v-model="active" class="custom"></el-switch>
            </div>
        </div>
    </el-header>
</template>

<script lang="ts" setup>
import mainMenu from './mainMenu.vue'
import miniMenu from './miniMenu.vue'
import checkersMenu from './checkerMenu.vue'
import { computed, reactive, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ElScrollbar } from 'element-plus'
import { useUsersStore } from '/@/stores/user'
import { useDark, useToggle } from '@vueuse/core'
import { Search } from '@element-plus/icons-vue'
const isDark = useDark()
const uiSplit = ref(false)
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
            background: #f4f4f4 !important;
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
