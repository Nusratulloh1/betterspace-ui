<template>
    <aside class="flex relative flex-col px-4 py-8 mx-auto w-full bg-white drop-shadow-lg rounded-[32px] max-md:pr-5">
        <header
            class="flex items-center relative h-5 gap-5 justify-between w-full text-base font-medium tracking-tighter text-black whitespace-nowrap"
        >
            <!-- <el-dropdown placement="bottom-start" :hide-on-click="false">
                <div class="flex items-center gap-1 self-start cursor-pointer">
                    <LogoIcon class="w-[18px]" />
                    <span class="text-base text-black font-medium">Opus</span>
                    <Icon size="8" color="#939496" name="el-icon-ArrowDown" />
                </div>
                <template #dropdown>
                    <el-dropdown-menu class="w-[181px]">
                        <el-dropdown-item class="flex items-center justify-between">
                            <div class="flex items-center gap-1.5">
                                <div class="w-[14px] h-[14px] bg-black rounded-full"></div>
                                {{ user.name }}
                            </div>
                            <Icon size="8" color="fillCurrent" name="el-icon-ArrowRightBold" />
                        </el-dropdown-item>
                        <el-dropdown-item class="flex items-center justify-between">
                            <div class="flex items-center gap-1.5">
                                <Icon size="14" color="#343330" name="local-switch" />
                                Switch workspace
                            </div>
                            <Icon size="8" color="#343330" name="el-icon-ArrowRightBold" />
                        </el-dropdown-item>
                        <el-dropdown-item divided class="flex items-center gap-1.5">
                            <Icon size="14" color="#343330" name="local-setting" />
                            Workspace settings
                        </el-dropdown-item>
                        <el-dropdown-item class="flex items-center gap-1.5">
                            <Icon size="14" color="#343330" name="local-users" />
                            Manage members
                        </el-dropdown-item>
                        <el-dropdown-item class="flex items-center gap-1.5">
                            <Icon size="14" color="#343330" name="local-credit" />
                            Billing
                        </el-dropdown-item>
                        <el-dropdown-item class="flex items-center gap-1.5" divided>
                            <Icon size="14" color="#343330" name="local-help" />
                            Help
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown> -->

            <el-popover placement="bottom-start" class=" !top-[-20px]" :width="181" trigger="click">
                <template #reference>
                    <div class="flex items-center gap-1 cursor-pointer">
                        <LogoIcon class="w-[18px]" />
                        <span class="text-base text-black font-medium">Opus</span>
                        <Icon size="8" color="#939496" name="el-icon-ArrowDown" />
                    </div>
                </template>
                <div>
                    <el-popover placement="right" class="!ml-3" :width="181" trigger="click">
                        <template #reference>
                            <div class="flex items-center justify-between route">
                                <div class="flex items-center gap-1.5">
                                    <div class="w-[14px] h-[14px] bg-black rounded-full"></div>
                                    {{ user.name }}
                                </div>
                                <Icon size="8" color="#343330" name="el-icon-ArrowRightBold" />
                            </div>
                        </template>
                        fddsfdsf
                    </el-popover>
                    <div class="flex items-center justify-between route">
                        <div class="flex items-center gap-1.5">
                            <Icon size="14" color="#343330" name="local-switch" />
                            Switch workspace
                        </div>
                        <Icon size="8" color="#343330" name="el-icon-ArrowRightBold" />
                    </div>
                    <hr />
                    <div class="flex items-center gap-1.5 route">
                        <Icon size="14" color="#343330" name="local-setting" />
                        Workspace settings
                    </div>
                    <div class="flex items-center gap-1.5 route">
                        <Icon size="14" color="#343330" name="local-users" />
                        Manage members
                    </div>
                    <div class="flex items-center gap-1.5 route">
                        <Icon size="14" color="#343330" name="local-credit" />
                        Billing
                    </div>
                    <hr />
                    <div class="flex items-center gap-1.5 route">
                        <Icon size="14" color="#343330" name="local-help" />
                        Help
                    </div>
                </div>
            </el-popover>
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
                        to="/"
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
            <p class="mt-3 text-sm font-inter text-center text-stone-950 text-opacity-50">Start capturing issues on live websites!</p>
            <a href="#" class="mt-2 text-xs font-semibold text-center font-inter leading-5 text-primary"> Download extension </a>
        </div>
    </aside>
</template>
  
  <script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import LogoIcon from '/@/components/icons/LogoIcon.vue'
import { useUsersStore } from '/@/stores'
const router = useRouter()
const usersStore = useUsersStore()
const user = computed(() => JSON.parse(usersStore.getUser))
const currentRoute = computed(() => router.currentRoute.value.fullPath || 'default')
const mainMenus = ref([
    {
        id: 1,
        title: 'Home',
        icon: 'home',
        path: '/dashboard',
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
                childrens: [],
            },
            {
                icon: 'local-cross',
                title: 'Teams',
                isOpen: true,
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
                childrens: [],
            },
            {
                icon: 'local-cicle',
                title: 'Cycles (sprints)',
                isOpen: true,
                childrens: [],
            },
            {
                icon: 'local-note',
                title: 'Notes',
                isOpen: true,
                childrens: [],
            },
        ],
    },
])
</script>
<style scoped>
.nested-dropdown-menu {
    position: absolute;
    left: 100%;
    top: 0;
    margin-left: 10px;
}
</style>