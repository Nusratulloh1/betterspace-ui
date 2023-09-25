<template>
    <div>
        <div class="flex items-center justify-between mt-6">
            <h5 class="text-[#111927] font-medium text-2xl">
                Общее
            </h5>
            <div class="flex items-center gap-2 buttons">
                <button class=" underline">
                    Текущее
                </button>
                <button>
                    3 месяца
                </button>
                <button>
                    30 дней
                </button>
                <button>
                    7 дней
                </button>
                <button>
                    24 часа
                </button>
            </div>
        </div>
        <el-collapse v-model="activeCollapse">
            <div class="card overflow-hidden my-5">
                <div class="grid grid-cols-4 h-[152px]">
                    <div class="h-full flex justify-between flex-col">
                        <el-dropdown size="large" hide-on-click>
                            <button class="flex items-center gap-1">
                                <h4 class=" font-semibold text-2xl text-[#000000]">
                                    {{ activeMag.name }}
                                </h4>
                                <Icon size="20" name="local-arrow" class=" !fill-none !stroke-[#0D121C]" />
                            </button>
                            <template #dropdown>
                                <el-dropdown-menu class=" w-[124px]">
                                    <el-dropdown-item v-for="item in mags.filter(x => x.id !== activeMag.id)"
                                        :key="item.id">
                                        <div class="w-full h-full" @click="activeMag = item">
                                            {{ item.name }}
                                        </div>
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                        <el-button @click="showForm = true" type="primary" class="gradient !text-lg !h-[60px] !w-[251px]">
                            <Icon size="24" name="local-plus" class="mr-2 !fill-none" />
                            Добавить товары
                        </el-button>
                    </div>
                    <div class="h-full flex justify-between flex-col">
                        <div>
                            <h4 class="text-[#6C737F] text-lg">
                                Общее количество SKU
                            </h4>
                            <p class=" font-medium text-3xl mt-1">
                                24
                            </p>
                        </div>
                        <div>
                            <h4 class="text-[#6C737F] text-lg">
                                Заказано
                            </h4>
                            <p class=" font-medium text-3xl mt-1">
                                155,000,000 <span class="text-[#6C737F] text-lg">сум</span>
                            </p>
                        </div>
                    </div>
                    <div class="h-full flex justify-between flex-col">
                        <div>
                            <h4 class="text-[#6C737F] text-lg">
                                Продано
                            </h4>
                            <p class=" font-medium text-3xl mt-1">
                                155,000,000 <span class="text-[#6C737F] text-lg">сум</span>
                            </p>
                        </div>
                        <div>
                            <h4 class="text-[#6C737F] text-lg">
                                Возвраты
                            </h4>
                            <p class=" font-medium text-3xl mt-1 text-[#D92D20]">
                                -15,234,500 <span class=" text-lg">сум</span>
                            </p>
                        </div>
                    </div>
                    <div class="">
                        <!-- <Icon size="180" name="local-ellipse" class="  absolute right-0"
                                style="fill: rgba(157, 164, 174, 1);" /> -->
                    </div>
                </div>
            </div>
            <el-collapse-item name="1">
                <template #title>
                    <h5 class="text-[#111927] font-medium text-2xl">
                        Маркетплейсы и товары
                    </h5>
                </template>
                <div class="grid grid-cols-2 gap-4 mt-2">
                    <div class="card">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../../assets/images/brands/olcha.svg" alt="olcha">
                                <h5 class="text-[#111927] font-semibold">
                                    Olcha.uz
                                </h5>
                            </div>
                            <div>
                                <h6 class="text-[#6C737F] font-medium text-base">
                                    Продано
                                </h6>
                                <p class=" font-medium text-base mt-1">
                                    25,000,000 сум
                                </p>
                            </div>
                            <div>
                                <h6 class="text-[#6C737F] font-medium text-base">
                                    Зарезервировано товаров
                                </h6>
                                <p class=" font-medium text-base mt-1">
                                    25 шт.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between my-8">
                            <div class="flex items-center gap-2">
                                <img src="../../assets/images/brands/zoodmall.svg" alt="zoodmall">
                                <h5 class="text-[#111927] font-semibold">
                                    Zoodmal
                                </h5>
                            </div>
                            <div>
                                <h6 class="text-[#6C737F] font-medium text-base">
                                    Продано
                                </h6>
                                <p class=" font-medium text-base mt-1">
                                    15,152,1250 сум
                                </p>
                            </div>
                            <div>
                                <h6 class="text-[#6C737F] font-medium text-base">
                                    Зарезервировано товаров
                                </h6>
                                <p class=" font-medium text-base mt-1">
                                    25 шт.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-center justify-between">
                            <div class="flex items-center gap-2">
                                <img src="../../assets/images/brands/sello.svg" alt="sello">
                                <h5 class="text-[#111927] font-semibold">
                                    Sello.uz
                                </h5>
                            </div>
                            <div>
                                <h6 class="text-[#6C737F] font-medium text-base">
                                    Продано
                                </h6>
                                <p class=" font-medium text-base mt-1">
                                    25,000,000 сум
                                </p>
                            </div>
                            <div>
                                <h6 class="text-[#6C737F] font-medium text-base">
                                    Зарезервировано товаров
                                </h6>
                                <p class=" font-medium text-base mt-1">
                                    25 шт.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <topProductBar />
                    </div>
                </div>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template #title>
                    <h5 class="text-[#111927] font-medium text-2xl">
                        Остатки
                    </h5>
                </template>
                <div class="grid grid-cols-3 gap-10 mb-4 mt-2">
                    <div class="card" v-for="card in productTop" :key="card.id">
                        <progressBarCart :card="card"></progressBarCart>
                    </div>
                </div>
            </el-collapse-item>
        </el-collapse>
        <productForm :visible="showForm" :product="null" @close="closed"></productForm>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import topProductBar from './components/topProductBar.vue'
import progressBarCart from './components/progressBarCart.vue';
import productForm from "../products/components/productForm.vue"
const activeCollapse = ref(['0', '1', '2'])
const showForm = ref(false)
const mags = ref([
    {
        id: 1,
        name: 'Магазин №1'
    },
    {
        id: 2,
        name: 'Магазин №2',
    },
    {
        id: 3,
        name: 'Магазин №3'
    }
])
const activeMag: any = ref(mags.value[0])
const productTop = ref([
    {
        id: 1,
        title: 'Нет на складах',
        desc: "23 Товара",
        percent: 28,
        color: '#F97066'
    },
    {
        id: 2,
        title: 'Заканчиваются',
        desc: "20 Товаров",
        percent: 28,
        color: '#FEC84B'
    },
    {
        id: 3,
        title: 'Долго хранятся',
        desc: "3 Товара",
        percent: 15,
        color: '#D2D6DB'
    }
])
const closed = () => {
    showForm.value = false
}
</script>

<style lang="scss" scoped>
.buttons {
    button {
        color: #667085;
        font-family: 'Inter';
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;
        padding: 8px 12px;
        transition: 2s ease-in;

        // &.active {
        //     color: #344054;
        //     border-radius: 6px;
        //     background: #F9FAFB;
        // }
    }
}

.card {
    border-radius: 12px;
    border: 1px solid #EAECF0;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    padding: 24px;
}
</style>
