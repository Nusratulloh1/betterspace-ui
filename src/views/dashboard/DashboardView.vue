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
        <div class="card overflow-hidden my-6">
            <div class="grid grid-cols-4 h-[152px]">
                <div class="h-full flex justify-between flex-col">
                    <h4 class=" font-semibold text-2xl">
                        Магазин №1
                    </h4>
                    <el-button icon="el-icon-Plus" type="primary" size="large"
                        class="gradient !text-lg !h-[60px] !w-[231px]">
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
                <div class=" relative">
                    <Icon size="180" name="local-ellipse" class=" fill-[#3D3D3D] absolute right-[-24px]" />
                </div>
            </div>
        </div>
        <h5 class="text-[#111927] font-medium text-2xl">
            Маркетплейсы и товары
        </h5>
        <div class="grid grid-cols-2 gap-4 mt-4">
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
        <h5 class="text-[#111927] font-medium text-2xl my-6">
            Остатки
        </h5>
        <div class="grid grid-cols-3 gap-10 mb-4">
            <div class="card" v-for="card in productTop" :key="card.id">
                <progressBarCart :card="card"></progressBarCart>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import topProductBar from './components/topProductBar.vue'
import progressBarCart from './components/progressBarCart.vue';
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
