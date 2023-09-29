<template>
    <div class=" flex h-screen relative login">
        <div class=" w-[65%]">
            <el-scrollbar class="layout-main-scrollbar" :style="layoutMainScrollbarStyle()" ref="mainScrollbarRef">
                <div class=" h-full flex justify-center relative  pt-32 pb-12">
                    <div class="flex items-center logo gap-1.5 absolute top-14">
                        <img :src="logoMain" alt="logoMain">
                    </div>
                    <div class="onboarding">
                        <transition name="slide-right" mode="out-in">
                            <MagazineForm v-if="route.query.step == '2'"></MagazineForm>
                            <newMarketPlaceForm v-else-if="route.query.step == '3'"></newMarketPlaceForm>
                            <Loading v-else-if="route.query.step == '4'"></Loading>
                            <CompanyForm v-else-if="route.query.step == '5'"></CompanyForm>
                            <TariffForm v-else-if="route.query.step == '6'"></TariffForm>
                            <MarketPlaceForm v-else></MarketPlaceForm>
                        </transition>
                    </div>
                </div>
            </el-scrollbar>
        </div>
        <div class="flex items-center justify-center px-8 bg-[#F3F4F6] w-[35%] relative">
            <div class=" space-y-2">
                <div class="flex items-start gap-4" :class="{ ' opacity-60': current > menu.id }" v-for="menu in wizardMenu"
                    :key="menu.id">
                    <div>
                        <div class=" bg-white p-3 rounded-xl w-12 h-12">
                            <Icon size="24" :name="current > menu.id ? 'local-checked-arrow' : menu.icon"
                                class=" !fill-none !stroke-black" />
                        </div>
                        <div v-if="!menu.last" :class="{ ' !opacity-100': current > menu.id }"
                            class=" h-[50px] w-[2px] rounded-sm opacity-10 bg-black mx-auto mt-2"></div>
                    </div>
                    <div>
                        <h6 class="text-base font-semibold text-[#344054]">
                            {{ menu.title }}
                        </h6>
                        <p class="text-[#475467]">
                            {{ menu.desc }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="flex items-center w-full justify-between absolute px-10 bottom-10">
                <p class="text-[#475467] text-sm">
                    © DealMe OOO 2023
                </p>
                <p class="flex items-center gap-2 text-[#475467] text-sm">
                    <Message class="w-4 h-4" color="#667085" />
                    dealme@gmail.com
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import logoMain from '/@/assets/images/icons/logo-main.svg'
import MarketPlaceForm from './components/MarketPlacesForm.vue'
import MagazineForm from './components/MagazineForm.vue'
import newMarketPlaceForm from './components/newMarketPlaceForm.vue'
import Loading from './components/Loading.vue'
import CompanyForm from './components/CompanyForm.vue'
import TariffForm from './components/TariffForm.vue'
import { mainHeight as layoutMainScrollbarStyle } from '/@/utils/layout'
const wizardMenu = ref([
    {
        icon: "local-shopping-cart",
        id: 3,
        title: "Подключение к маркетплейсам",
        desc: "Подключите свои аккаунты на маркетплейсах"
    },
    {
        icon: "local-office-building",
        id: 5,
        title: "Данные о компании",
        desc: "Проверьте внимательно верны ли ваши данные "
    },
    {
        icon: "local-doc-checked",
        id: 6,
        title: "Завершение",
        desc: "Вы готовы начать!",
        last: true
    }
])
const current = computed(() => parseInt(route.query.step as string))
const route = useRoute()

</script>

<style lang="scss">
.onboarding {
    width: 100%;

    .title {
        color: #101828;
        text-align: center;
        font-size: 30px;
        font-weight: 600;
        line-height: 38px;
    }

    .desc {
        color: #9DA4AE;
        text-align: center;
        font-size: 18px;
        font-weight: 400;
        line-height: 28px;
        max-width: 599px;
        margin: 12px auto 0px;
    }

    .card {
        border-radius: 12px;
        border: 1px solid #EAECF0;
        background: #FFF;
        box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
        padding: 0px 24px;
        // height: 584px;
        width: 80%;
        margin: 32px auto;
    }
}
</style>
