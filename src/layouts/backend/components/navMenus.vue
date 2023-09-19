<template>
    <div class="nav-menus" :class="layoutConfig.layoutMode">
        <el-button class=" !h-10 !text-sm !text-[#344054] !font-semibold ">
            <Icon name="local-tok" class=" !fill-none !stroke-[#344054] mr-2" size="20" />
            Улучшить до Premium
        </el-button>
        <button class="">
            <Icon name="local-bell" class=" !fill-none !stroke-current" size="20" />
        </button>
        <el-popover @show="onCurrentNavMenu(true, 'adminInfo')" @hide="onCurrentNavMenu(false, 'adminInfo')"
            placement="bottom-end" :hide-after="0" :width="230" class="!p-0" trigger="click" popper-class="!px-0">
            <template #reference>
                <div class="admin-info text-[#111927] hover:!text-primary"
                    :class="state.currentNavMenu == 'adminInfo' ? 'hover' : ''">
                    <svg width="24" height="24" viewBox="0 0 24 24" class=" fill-none stroke-current"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 20C5.33579 17.5226 8.50702 16 12 16C15.493 16 18.6642 17.5226 21 20M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z"
                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div class="admin-name text-sm md:text-base pl-2 md:pl-3">Личный кабинет</div>
                </div>
            </template>
            <div>
                <div class="admin-info-base">
                    <p class="text-lg font-semibold text-[#171725]">
                        {{ fullName }}
                    </p>
                    <p class="text-sm font-semibold text-[#92929D]">
                        {{ userStore.user?.email }}
                    </p>
                </div>
                <ul class="font-semibold mt-3">
                    <li class="px-5 py-2 hover:bg-[#EDF1FF] transition-all">
                        <router-link to="/personal-info" class="flex items-center gap-3 w-full"> <svg width="24" height="24"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14 11H8M10 15H8M16 7H8M20 6.8V17.2C20 18.8802 20 19.7202 19.673 20.362C19.3854 20.9265 18.9265 21.3854 18.362 21.673C17.7202 22 16.8802 22 15.2 22H8.8C7.11984 22 6.27976 22 5.63803 21.673C5.07354 21.3854 4.6146 20.9265 4.32698 20.362C4 19.7202 4 18.8802 4 17.2V6.8C4 5.11984 4 4.27976 4.32698 3.63803C4.6146 3.07354 5.07354 2.6146 5.63803 2.32698C6.27976 2 7.11984 2 8.8 2H15.2C16.8802 2 17.7202 2 18.362 2.32698C18.9265 2.6146 19.3854 3.07354 19.673 3.63803C20 4.27976 20 5.11984 20 6.8Z"
                                    stroke="#182857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Profile</router-link>
                    </li>
                    <li class="px-5 py-2 hover:bg-[#EDF1FF] transition-all">
                        <button @click="logOut" class="flex items-center gap-3 w-full"><svg width="24" height="24"
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 17L21 12M21 12L16 7M21 12H9M12 17C12 17.93 12 18.395 11.8978 18.7765C11.6204 19.8117 10.8117 20.6204 9.77646 20.8978C9.39496 21 8.92997 21 8 21H7.5C6.10218 21 5.40326 21 4.85195 20.7716C4.11687 20.4672 3.53284 19.8831 3.22836 19.1481C3 18.5967 3 17.8978 3 16.5V7.5C3 6.10217 3 5.40326 3.22836 4.85195C3.53284 4.11687 4.11687 3.53284 4.85195 3.22836C5.40326 3 6.10218 3 7.5 3H8C8.92997 3 9.39496 3 9.77646 3.10222C10.8117 3.37962 11.6204 4.18827 11.8978 5.22354C12 5.60504 12 6.07003 12 7"
                                    stroke="#182857" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            Logout</button>
                    </li>
                </ul>
            </div>
        </el-popover>
        <!-- <div @click="onSetState('showDrawer', true)" class="nav-menu-item">
            <Icon :color="layoutConfig.headerBarTabColor" class="nav-menu-icon" name="fa fa-cogs" size="18" />
        </div>
        <Config /> -->
        <button>
            <img src="/@/assets/images/avatar.svg" alt="avatar">
        </button>
    </div>
</template>

<script lang="ts" setup>
import { computed, reactive } from 'vue'
import { setLocale } from '../../../i18n'
import screenfull from 'screenfull'
import { store } from '/@/store/index'
import { ElMessage } from 'element-plus'
import { useI18n } from 'vue-i18n'
import Config from './config.vue'
import { useUsersStore } from '/@/stores/user'
import { useRouter } from 'vue-router'

const { t } = useI18n()
const userStore = useUsersStore()
const router = useRouter()
const fullName = computed(() => userStore.user?.first_name + ' ' + userStore.user?.last_name)

const state = reactive({
    isFullScreen: false,
    currentNavMenu: '',
    showLayoutDrawer: false,
})

const langArray = computed(() => store.state.config.langArray)
const layoutConfig = computed(() => store.state.config.layout)

const onCurrentNavMenu = (status: boolean, name: string) => {
    state.currentNavMenu = status ? name : ''
}

const onFullScreen = () => {
    if (!screenfull.isEnabled) {
        ElMessage.warning(t('layout.Full screen is not supported'))
        return false
    }
    screenfull.toggle()
    screenfull.onchange(() => {
        state.isFullScreen = screenfull.isFullscreen
    })
}

const onSetState = (name: string, value: any) => {
    store.commit('config/set', {
        name: 'layout.' + name,
        value: value,
    })
}

const logOut = () => {
    userStore.resetToken()
    router.push('/login')
}
</script>

<style scoped lang="scss">
.nav-menus.Default {
    border-radius: var(--el-border-radius-base);
    box-shadow: var(--el-box-shadow-light);
}

.nav-menus {
    display: flex;
    align-items: center;
    height: 100%;
    gap: 16px;
    // margin-left: auto;
    // background-color: #182857;

    .nav-menu-item {
        height: 100%;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .nav-menu-icon {
            box-sizing: content-box;
        }

        &:hover {
            .icon {
                animation: twinkle 0.3s ease-in-out;
            }
        }
    }

    .admin-info {
        display: flex;
        height: 100%;
        align-items: center;
        cursor: pointer;
        user-select: none;
    }

    .admin-name {
        font-family: 'Inter';
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
    }

}

.chang-lang :deep(.el-dropdown-menu__item) {
    justify-content: center;
}

.admin-info-box {
    border-radius: 20px !important;
    background: #FFF !important;
    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.14) !important;
}

.admin-info-base {
    display: flex;
    padding-left: 20px;
    flex-wrap: wrap;

    .admin-info-other {
        display: block;
        width: 100%;
        text-align: center;
        padding: 10px 0;

        .admin-info-name {
            font-size: var(--el-font-size-large);
        }
    }
}

.admin-info-footer {
    padding: 10px 0;
    margin: 0 -12px -12px -12px;
    display: flex;
    justify-content: space-around;
    background: var(--color-bg-2);
}

@keyframes twinkle {
    0% {
        transform: scale(0);
    }

    80% {
        transform: scale(1.2);
    }

    100% {
        transform: scale(1);
    }
}
</style>
