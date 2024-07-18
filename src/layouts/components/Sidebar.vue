<template>
    <aside class="flex relative flex-col px-4 py-8 mx-auto w-full bg-white drop-shadow-lg rounded-[32px] max-md:pr-5">
        <header
            class="flex items-center relative h-5 gap-5 justify-between w-full text-base font-medium tracking-tighter text-black whitespace-nowrap"
        >
            <userSettings :user="user" @logut="logOut" />
            <button>
                <Icon size="21" color="#343330" name="local-sidebar-simple" />
            </button>
        </header>
        <button class="flex gap-5 justify-between px-3 py-1 mt-6 text-white bg-blue-700 rounded-[1000px]">
            <span class="my-auto text-[13px] font-medium text-center">New command</span>
            <span
                class="justify-center px-1.5 py-0.5 text-sm leading-5 whitespace-nowrap rounded-[9px] border border-solid border-indigo-50 border-opacity-30"
            >
                ⌘+
            </span>
        </button>
        <nav class="mt-7">
            <ul class="space-y-1">
                <li v-for="menu in mainMenus" :key="menu.id">
                    <router-link
                        :to="menu.path"
                        class="flex items-center gap-2.5 py-1 pr-0.5 pl-1.5 text-sm whitespace-nowrap rounded-[55px] text-zinc-800 transition-all hover:bg-zinc-200"
                        :class="{ '!bg-zinc-100': currentRoute.includes(menu.path) }"
                    >
                        <Icon size="14" class="shrink-0 aspect-square" :name="`local-${menu.icon}`" />
                        <span class="flex-1">{{ menu.title }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
        <div class="mt-6" v-for="sub in subMenus" :key="sub.id">
            <button
                @click="sub.isOpen = !sub.isOpen"
                class="flex cursor-pointer items-center gap-0 py-1 pr-1 text-xs font-medium whitespace-nowrap rounded text-[#939496] max-md:pr-5"
            >
                {{ sub.title }}
                <Icon size="16" color="#939496" :class="{ ' rotate-[30deg]': !sub.isOpen }" name="local-arrow-down" />
            </button>
            <ul v-if="sub.isOpen">
                <li v-for="child in sub.childrens" :key="child.icon">
                    <router-link
                        v-if="!child.childrens.length"
                        :to="child.path"
                        :class="{ '!bg-zinc-100': currentRoute.includes(child.path) }"
                        class="flex items-center gap-2.5 py-1 pr-0.5 pl-1.5 text-sm whitespace-nowrap rounded-[55px] text-zinc-800 hover:bg-zinc-200"
                    >
                        <Icon size="15" color="#292929" :name="child.icon" />
                        <span class="flex-1">{{ child.title }}</span>
                    </router-link>
                    <button
                        v-else
                        @click="child.isOpen = !child.isOpen"
                        class="flex items-center gap-2.5 py-1 pr-0.5 pl-1.5 text-sm whitespace-nowrap rounded text-zinc-800"
                    >
                        <Icon size="15" :color="child?.iconColor" :name="child.icon" />
                        <div class="flex items-center">
                            {{ child.title }}
                            <Icon size="16" color="#939496" :class="{ ' rotate-[30deg]': !child.isOpen }" name="local-arrow-down" />
                        </div>
                    </button>
                    <ul v-if="child.isOpen">
                        <li v-for="subChild in child.childrens" :key="subChild.icon">
                            <router-link
                                to="/"
                                class="flex items-center gap-2.5 py-1 hover:bg-zinc-200 pr-0.5 pl-1.5 text-sm whitespace-nowrap rounded-[55px] text-zinc-800"
                            >
                                <Icon size="15" color="#292929" :name="subChild.icon" />
                                <span class="flex-1">{{ subChild.title }}</span>
                            </router-link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div
            class="flex absolute bottom-7 flex-col p-3 mt-6 mr-3.5 bg-white border border-solid border-stone-950 border-opacity-10 rounded-[40px] max-md:px-5 max-md:mx-2.5"
        >
            <Icon size="12" class="self-end aspect-square mt-1 mr-1" name="el-icon-Close" />
            <Icon size="24" class="self-center aspect-square" name="local-chrome" />
            <p class="mt-3 text-sm text-center text-stone-950 text-opacity-50">Start capturing issues on live websites!</p>
            <a href="#" class="mt-2 text-xs font-semibold text-center leading-5 text-primary"> Download extension </a>
        </div>
    </aside>
</template>
  
  <script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import userSettings from './userSettings.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUsersStore } from '/@/stores'
const router = useRouter()
const usersStore = useUsersStore()
const user = computed(() => (typeof usersStore.getUser == 'string' ? JSON.parse(usersStore.getUser) : usersStore.getUser))
const currentRoute = computed(() => router.currentRoute.value.fullPath || 'default')
const mainMenus = ref([
    {
        id: 1,
        title: 'Home',
        icon: 'home',
        path: '/home',
    },
    {
        id: 2,
        title: 'Inbox',
        icon: 'inbox',
        path: '/inbox',
    },
    {
        id: 3,
        title: 'My issues',
        icon: 'issue',
        path: '/issues',
    },
    {
        id: 4,
        title: 'Focus',
        icon: 'focus',
        path: '/focus',
    },
])
const nestedDropdownVisible = ref(false)
const subMenus: any = ref([
    {
        id: 1,
        title: 'Workspace',
        isOpen: true,
        childrens: [
            {
                icon: 'local-strike',
                title: 'Goals',
                isOpen: true,
                path: '/workspace/goals',
                childrens: [],
            },
            {
                icon: 'local-cross',
                title: 'Teams',
                isOpen: true,
                path: '/workspace/teams',
                childrens: [],
            },
        ],
    },
    {
        id: 2,
        title: 'Your teams',
        isOpen: true,
        childrens: [
            {
                icon: 'local-book-pink',
                iconColor: '#ED46E7',
                title: 'Marketing',
                isOpen: false,
                path: '/',
                childrens: [
                    {
                        icon: 'local-strike',
                        title: 'Something',
                        path: '',
                    },
                    {
                        icon: 'local-cicle',
                        title: 'Something',
                        path: '',
                    },
                ],
            },
            {
                icon: 'local-terminal',
                title: 'Digital',
                isOpen: false,
                iconColor: '#5D85FF',
                path: '/',
                childrens: [
                    {
                        icon: 'local-cicle',
                        title: 'Something',
                        path: '',
                    },
                    {
                        icon: 'local-strike',
                        title: 'Something',
                        path: '',
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: 'Try',
        isOpen: true,
        childrens: [
            {
                icon: 'el-icon-Plus',
                title: 'Invite people',
                isOpen: true,
                path: '/try/invite',
                childrens: [],
            },
            {
                icon: 'local-cicle',
                title: 'Cycles (sprints)',
                isOpen: true,
                path: '/try/cycles',
                childrens: [],
            },
            {
                icon: 'local-note',
                title: 'Notes',
                isOpen: true,
                path: '/try/notes',
                childrens: [],
            },
        ],
    },
])
const logOut = async () => {
    ElMessageBox.confirm('Are you sure logOut. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
        draggable: true,
    })
        .then(() => {
            usersStore.resetToken()
            router.push('/signin')
        })
        .catch((err) => {
            console.log(err)
        })
}
</script>
<style scoped>
.nested-dropdown-menu {
    position: absolute;
    left: 100%;
    top: 0;
    margin-left: 10px;
}
</style>