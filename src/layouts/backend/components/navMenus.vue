<template>
    <div class="nav-menus" :class="layoutConfig.layoutMode">
        <el-button class="vip">
            <svg width="20" height="20" class=" mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_660_4086)">
                    <path
                        d="M3.74984 18.3327V14.166M3.74984 5.83268V1.66602M1.6665 3.74935H5.83317M1.6665 16.2493H5.83317M10.8332 2.49935L9.38802 6.25673C9.15301 6.86776 9.03551 7.17327 8.85278 7.43025C8.69083 7.65801 8.49184 7.85701 8.26408 8.01896C8.00709 8.20169 7.70158 8.31919 7.09055 8.5542L3.33317 9.99935L7.09056 11.4445C7.70158 11.6795 8.00709 11.797 8.26408 11.9797C8.49184 12.1417 8.69083 12.3407 8.85278 12.5684C9.03551 12.8254 9.15301 13.1309 9.38802 13.742L10.8332 17.4993L12.2783 13.742C12.5133 13.1309 12.6308 12.8254 12.8136 12.5684C12.9755 12.3407 13.1745 12.1417 13.4023 11.9797C13.6592 11.797 13.9648 11.6795 14.5758 11.4445L18.3332 9.99935L14.5758 8.5542C13.9648 8.31919 13.6592 8.20169 13.4023 8.01896C13.1745 7.85701 12.9755 7.65801 12.8136 7.43025C12.6308 7.17327 12.5133 6.86776 12.2783 6.25673L10.8332 2.49935Z"
                        stroke="url(#paint0_linear_660_4086)" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round" />
                </g>
                <defs>
                    <linearGradient id="paint0_linear_660_4086" x1="1.6665" y1="1.66602" x2="21.1609" y2="1.91772"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.450283" stop-color="#B540F6" />
                        <stop offset="0.750161" stop-color="#F18F8C" />
                        <stop offset="0.832166" stop-color="#FB9D79" />
                    </linearGradient>
                    <clipPath id="clip0_660_4086">
                        <rect width="20" height="20" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            Стать VIP-продавцом
        </el-button>
        <button class=" px-2">
            <Icon name="local-bell" class=" !fill-none !stroke-current" size="20" />
        </button>
        <el-popover @show="onCurrentNavMenu(true, 'adminInfo')" @hide="onCurrentNavMenu(false, 'adminInfo')"
            placement="bottom-end" :hide-after="0" :width="230" class="!p-0" trigger="click" popper-class="!px-0">
            <template #reference>
                <div class="  border opacity-90 rounded-full p-2 hover:opacity-100 cursor-pointer"
                    :class="state.currentNavMenu == 'adminInfo' ? 'hover' : ''">
                    <Icon name="local-user" class=" !fill-none !stroke-black" size="20" />
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
    .vip {
        border-radius: 8px !important;
        border: 1px solid #B540F6;
        background: #FFF;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        background: linear-gradient(91deg, #B540F6 52.01%, #F18F8C 86.64%, #FB9D79 96.11%);
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        height: 40px !important;
        font-weight: 600;
        font-size: 14px !important;
    }

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
}</style>
