<template>
    <aside class="flex relative flex-col justify-between px-4 py-9 mx-auto w-full bg-white border-r">
        <div>
            <header
                class="flex items-center relative h-5 gap-5 justify-between w-full text-base font-medium tracking-tighter text-black whitespace-nowrap mt-2">
                <div :class="!props.isCallapse ? 'pl-2' : 'pl-0 '">
                    <LogoIcon :class="!props.isCallapse ? 'max-w-[167px]' : 'max-w-[147px]'" />
                </div>
                <button @click="emit('toggle')">
                    <Icon size="15" color="#343330" name="local-burger-menu" />
                </button>
            </header>
            <nav class="mt-11">
                <ul class="space-y-1">
                    <template v-for="menu in mainMenus" :key="menu.id">
                        <li v-if="currentRoute.includes(menu.role)">
                            <router-link :to="menu.path"
                                class="flex items-center gap-3 py-2 px-3 font-medium whitespace-nowrap rounded-[3px] text-[#616161] transition-all hover:bg-zinc-100"
                                :class="{ '!bg-black !text-white': currentRoute.includes(menu.path) }">
                                <div>
                                    <Icon size="20" class="!fill-current"
                                        :color="currentRoute.includes(menu.path) ? '#FFFFFF' : '#616161'"
                                        :name="`local-${menu.icon}`" />
                                </div>
                                <span v-if="!props.isCallapse" class="flex-1">{{ menu.title }}</span>
                            </router-link>
                        </li>
                    </template>
                </ul>
            </nav>
        </div>

        <div class="w-full border-t flex justify-between items-start pt-5">
            <div class="flex items-center gap-3">
                <img width="40" height="40" src="/@/assets/images/avatars/default.png" alt="default" />
                <div v-if="!props.isCallapse">
                    <p class="text-[#344054] text-sm font-semibold">Азиз</p>
                    <span class="text-[#475467] text-sm"> aziz@company.uz </span>
                </div>
            </div>
            <button v-if="!props.isCallapse" class="mt-2" @click="logOut">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.3333 14.1667L17.5 10M17.5 10L13.3333 5.83333M17.5 10H7.5M7.5 2.5H6.5C5.09987 2.5 4.3998 2.5 3.86502 2.77248C3.39462 3.01217 3.01217 3.39462 2.77248 3.86502C2.5 4.3998 2.5 5.09987 2.5 6.5V13.5C2.5 14.9001 2.5 15.6002 2.77248 16.135C3.01217 16.6054 3.39462 16.9878 3.86502 17.2275C4.3998 17.5 5.09987 17.5 6.5 17.5H7.5"
                        stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
        </div>
        <button v-if="props.isCallapse" @click="emit('toggle')"
            class="absolute top-10 right-[-2px] bg-white p-1.5 z-40">
            <Icon size="15" color="#343330" name="local-burger-menu" />
        </button>
    </aside>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import LogoIcon from '/@/components/icons/LogoIcon.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useUsersStore } from '/@/stores'

const emit = defineEmits(['toggle'])
const props = defineProps(['isCallapse'])

const router = useRouter()
const usersStore = useUsersStore()
const user = computed(() => (typeof usersStore.getUser == 'string' ? JSON.parse(usersStore.getUser) : usersStore.getUser))
const currentRoute = computed(() => router.currentRoute.value.fullPath || 'default')
const mainMenus = ref([
    {
        id: 1,
        title: 'Главная',
        icon: 'house',
        path: '/admin/home',
        role: 'admin'
    },
    {
        id: 2,
        title: 'Клиентская база',
        icon: 'customers',
        path: '/admin/customer-base',
        role: 'admin'
    },
    {
        id: 3,
        title: 'Каталог',
        icon: 'catalog',
        path: '/admin/catalog',
        role: 'admin'
    },
    {
        id: 4,
        title: 'Тимбилдинги',
        icon: 'team-building',
        path: '/admin/team-building',
        role: 'admin'
    },
    {
        id: 5,
        title: 'Мои сотрудники',
        icon: 'customers',
        path: '/hr/users',
        role: 'hr'
    },
    {
        id: 6,
        title: 'Клиентская база',
        icon: 'customers',
        path: '/merchant/customer-base',
        role: 'merchant'
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