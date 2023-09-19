<template>
    <div class="nav-menus" :class="layoutConfig.layoutMode">
        <el-button class="vip">
            <svg width="20" height="20" class=" mr-2" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M9.4022 2.8778C9.59427 2.48869 9.69031 2.29413 9.82068 2.23197C9.93411 2.17789 10.0659 2.17789 10.1793 2.23197C10.3097 2.29413 10.4057 2.48869 10.5978 2.8778L12.42 6.56944C12.4767 6.68432 12.5051 6.74176 12.5465 6.78635C12.5832 6.82584 12.6272 6.85783 12.6761 6.88056C12.7313 6.90623 12.7947 6.91549 12.9214 6.93402L16.9975 7.5298C17.4267 7.59253 17.6413 7.6239 17.7406 7.72874C17.8271 7.81995 17.8677 7.94529 17.8512 8.06985C17.8323 8.21302 17.677 8.36436 17.3662 8.66702L14.4179 11.5387C14.326 11.6282 14.28 11.673 14.2503 11.7263C14.2241 11.7734 14.2072 11.8252 14.2008 11.8788C14.1934 11.9393 14.2043 12.0025 14.2259 12.129L14.9216 16.1851C14.995 16.6129 15.0317 16.8269 14.9627 16.9538C14.9028 17.0642 14.7961 17.1417 14.6725 17.1646C14.5305 17.1909 14.3384 17.0899 13.9543 16.8879L10.3103 14.9716C10.1968 14.9119 10.14 14.882 10.0802 14.8703C10.0272 14.8599 9.97277 14.8599 9.91982 14.8703C9.86001 14.882 9.80324 14.9119 9.6897 14.9716L6.04576 16.8879C5.66159 17.0899 5.4695 17.1909 5.32747 17.1646C5.20389 17.1417 5.09726 17.0642 5.03727 16.9538C4.96832 16.8269 5.00501 16.6129 5.07839 16.1851L5.77406 12.129C5.79575 12.0025 5.80659 11.9393 5.79926 11.8788C5.79276 11.8252 5.77592 11.7734 5.74966 11.7263C5.72001 11.673 5.67405 11.6282 5.58214 11.5387L2.63379 8.66702C2.32304 8.36436 2.16767 8.21302 2.14876 8.06985C2.13231 7.94529 2.17295 7.81995 2.25937 7.72874C2.35869 7.6239 2.5733 7.59253 3.00253 7.5298L7.07858 6.93402C7.20534 6.91549 7.26872 6.90623 7.32392 6.88056C7.37279 6.85783 7.41679 6.82584 7.45348 6.78635C7.49491 6.74176 7.52326 6.68432 7.57997 6.56944L9.4022 2.8778Z"
                    fill="url(#paint0_linear_623_1675)" />
                <defs>
                    <linearGradient id="paint0_linear_623_1675" x1="2.14517" y1="2.19141" x2="20.5198" y2="2.44026"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.450283" stop-color="#B540F6" />
                        <stop offset="0.750161" stop-color="#F18F8C" />
                        <stop offset="0.832166" stop-color="#FB9D79" />
                    </linearGradient>
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
                <div class=" bg-[#F2F4F7] border opacity-90 rounded-full p-2 hover:opacity-100 cursor-pointer"
                    :class="state.currentNavMenu == 'adminInfo' ? 'hover' : ''">
                    <Icon name="local-user" class=" !fill-none !stroke-[#475467]" size="20" />
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
}
</style>
