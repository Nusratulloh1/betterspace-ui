<template>
    <div>
        <hr />
        <h4 class="text-[#101828] font-semibold text-[30px] mt-12 mb-5">
            Личный кабинет
        </h4>
        <hr />
        <div class="flex w-full mt-8">
            <div class=" w-[10%]">
                <ul class="menues">
                    <li v-for="item in menues">
                        <router-link :to="item.path" :class="{ 'active': item.path == route.fullPath }">
                            {{ item.title }}
                            <div class="message" v-if="item.activeMessage && item.path !== route.fullPath">
                                2
                            </div>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="w-[90%] pl-24">
                <transition name="slide-right" mode="out-in">

                    <profileForm v-if="route.fullPath === '/profile'" />
                    <magazineForm v-else-if="route.fullPath === '/profile?magazine'" />
                    <usersForm v-else-if="route.fullPath === '/profile?users'" />
                    <serviceView v-else-if="route.fullPath === '/profile?subsription'" />
                    <marketplaceForm v-else-if="route.fullPath === '/profile?marketplaces'" />
                    <notisficationForm v-else />
                </transition>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import profileForm from './components/profileForm.vue'
import magazineForm from './components/magazineForm.vue'
import usersForm from './components/usersForm.vue'
import serviceView from './components/serviceView.vue'
import marketplaceForm from './components/marketplaceForm.vue'
import notisficationForm from './components/notisficationForm.vue'

const route = useRoute()

const menues = ref([
    {
        id: 1,
        title: "Мой профиль",
        path: "/profile"
    },
    {
        id: 2,
        title: "Магазины",
        path: "/profile?magazine"
    },
    {
        id: 3,
        title: "Маркетплейсы",
        path: "/profile?marketplaces"
    },
    {
        id: 4,
        title: "Пользователи",
        path: "/profile?users"
    },
    {
        id: 5,
        title: "Подписка",
        path: "/profile?subsription"
    },
    {
        id: 6,
        title: "Уведомления",
        path: "/profile?notisfication",
        activeMessage: 2,
    }
])

</script>
<style lang="scss" scoped>
.menues {
    li {
        a {
            margin-top: 4px;
            display: flex;
            padding: 8px 12px;
            align-items: center;
            color: #667085;
            font-size: 14px;
            font-weight: 600;
            line-height: 20px;
            gap: 8px;

            &.active {
                background: linear-gradient(91deg, #B540F6 52.01%, #F18F8C 86.64%, #FB9D79 96.11%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                border-left: 2px solid #B540F6;
            }

            .message {
                color: #344054;
                text-align: center;
                font-size: 12px;
                font-weight: 500;
                line-height: 18px;
                border-radius: 16px;
                border: 1px solid #EAECF0;
                background: #F9FAFB;
                mix-blend-mode: multiply;
                padding: 2px 8px;
            }
        }
    }
}
</style>