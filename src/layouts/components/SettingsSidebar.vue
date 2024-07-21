<template>
    <aside class="flex relative flex-col px-4 mx-auto w-full bg-white drop-shadow-lg rounded-[32px] max-md:pr-5">
        <div class="flex items-center gap-4 px-5 pt-6">
            <router-link to="/">
                <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M2.28992 6.25435L2.04108 6.49431L2.28992 6.73426L6.61084 10.9007C6.9047 11.184 6.90317 11.6547 6.6093 11.9471C6.30396 12.2399 5.80804 12.2394 5.50337 11.9456L0.391749 7.01677C0.0933752 6.72906 0.0933752 6.27029 0.391749 5.98258L5.50337 1.05372C5.80856 0.759437 6.30566 0.759437 6.61084 1.05372C6.90924 1.34143 6.90924 1.8002 6.61084 2.08791L2.28992 6.25435Z"
                        fill="black"
                    />
                </svg>
            </router-link>
            <h3 class="text-black text-lg">Settings</h3>
        </div>
        <el-scrollbar height="610px">
            <div class="px-5 pb-6">
                <div class="mt-4" v-for="sub in subMenus" :key="sub.id">
                    <h4 class="flex cursor-pointer items-center gap-0 py-1 pr-1 text-[13px] font-medium whitespace-nowrap rounded text-[#313131]">
                        {{ sub.title }}
                    </h4>
                    <ul class="pl-[18px] mt-1 space-y-1">
                        <li v-for="child in sub.childrens" :key="child.icon">
                            <router-link
                                v-if="!child.childrens.length"
                                :to="child.path"
                                :class="{ '!bg-zinc-100 !text-black !font-medium': currentRoute.includes(child.path) }"
                                class="flex items-center gap-2.5 py-2 pr-0.5 pl-3 text-sm whitespace-nowrap rounded-[55px] text-[#ADADAD] hover:bg-zinc-200 hover:text-black"
                            >
                                <span class="flex-1">{{ child.title }}</span>
                            </router-link>
                            <button
                                v-else
                                @click="child.isOpen = !child.isOpen"
                                class="flex items-center gap-2.5 py-1 pr-0.5 pl-1.5 font-medium text-sm whitespace-nowrap rounded text-[#343330]"
                            >
                                <Icon size="15" :color="child?.iconColor" :name="child.icon" />
                                <div class="flex items-center">
                                    {{ child.title }}
                                    <Icon size="16" color="#939496" :class="{ ' rotate-[30deg]': !child.isOpen }" name="local-arrow-down" />
                                </div>
                            </button>
                            <ul v-if="child.isOpen" class="pl-[18px] mt-1 space-y-1">
                                <li v-for="subChild in child.childrens" :key="subChild.icon">
                                    <router-link
                                        :to="subChild.path"
                                        :class="{ '!bg-zinc-100 !text-black !font-medium': currentRoute.includes(subChild.path) }"
                                        class="flex items-center gap-2.5 py-2 pr-0.5 pl-3 text-sm whitespace-nowrap rounded-[55px] text-[#ADADAD] hover:bg-zinc-200 hover:text-black"
                                    >
                                        <span class="flex-1">{{ subChild.title }}</span>
                                    </router-link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </el-scrollbar>
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
const subMenus: any = ref([
    {
        id: 1,
        title: 'Workspace',
        childrens: [
            {
                icon: 'local-strike',
                title: 'General',
                isOpen: true,
                path: '/settings/workspace/general',
                childrens: [],
            },
            {
                icon: 'local-cross',
                title: 'Members',
                isOpen: true,
                path: '/settings/workspace/members',
                childrens: [],
            },
            {
                icon: 'local-cross',
                title: 'Projects',
                isOpen: true,
                path: '/settings/workspace/projects',
                childrens: [],
            },
            {
                icon: 'local-cross',
                title: 'Labels',
                isOpen: true,
                path: '/settings/workspace/labels',
                childrens: [],
            },
            {
                icon: 'local-cross',
                title: 'Plans',
                isOpen: true,
                path: '/settings/workspace/plans',
                childrens: [],
            },
            {
                icon: 'local-cross',
                title: 'Billing',
                isOpen: true,
                path: '/settings/workspace/billing',
                childrens: [],
            },
            {
                icon: 'local-cross',
                title: 'Import / Export',
                isOpen: true,
                path: '/settings/workspace/import-export',
                childrens: [],
            },
        ],
    },
    {
        id: 3,
        title: 'My account',
        childrens: [
            {
                icon: 'el-icon-Plus',
                title: 'Profile',
                isOpen: true,
                path: '/settings/account/profile',
                childrens: [],
            },
            {
                icon: 'local-cicle',
                title: 'Security & Access',
                isOpen: true,
                path: '/settings/account/security-access',
                childrens: [],
            },
            {
                icon: 'local-note',
                title: 'Notifications',
                isOpen: true,
                path: '/settings/account/notifications',
                childrens: [],
            },
        ],
    },
    {
        id: 2,
        title: 'Teams',
        childrens: [
            {
                icon: 'local-book-pink',
                iconColor: '#ED46E7',
                title: 'Marketing',
                isOpen: false,
                path: '/',
                childrens: [
                    {
                        title: 'General',
                        path: '/settings/teams/general',
                    },
                    {
                        title: 'Members',
                        path: '/settings/teams/members',
                    },
                    {
                        title: 'Workflow',
                        path: '/settings/teams/workflow',
                    },
                    {
                        title: 'Triage',
                        path: '/settings/teams/triage',
                    },
                    {
                        title: 'Labels',
                        path: '/settings/teams/labels',
                    },
                    {
                        title: 'Sprints',
                        path: '/settings/teams/sprints',
                    },
                    {
                        title: 'Notifications',
                        path: '/settings/teams/notifications',
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
                        title: 'General',
                        path: '/settings/teams/general',
                    },
                    {
                        title: 'Members',
                        path: '/settings/teams/members',
                    },
                    {
                        title: 'Workflow',
                        path: '/settings/teams/workflow',
                    },
                    {
                        title: 'Triage',
                        path: '/settings/teams/triage',
                    },
                    {
                        title: 'Labels',
                        path: '/settings/teams/labels',
                    },
                    {
                        title: 'Sprints',
                        path: '/settings/teams/sprints',
                    },
                    {
                        title: 'Notifications',
                        path: '/settings/teams/notifications',
                    },
                ],
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