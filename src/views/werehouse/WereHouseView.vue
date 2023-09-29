<template>
    <div class=" mt-10 pr-5 pb-20">
        <div class="flex items-center justify-between">
            <el-dropdown size="large" hide-on-click>
                <button class="flex items-center gap-1">
                    <h4 class=" font-semibold text-2xl text-[#000000]">
                        {{ activeMag.name }}
                    </h4>
                    <Icon size="20" name="local-arrow" class=" !fill-none !stroke-[#0D121C]" />
                </button>
                <template #dropdown>
                    <el-dropdown-menu class=" w-[124px]">
                        <el-dropdown-item v-for="item in mags.filter(x => x.id !== activeMag.id)" :key="item.id">
                            <div class="w-full h-full" @click="activeMag = item">
                                {{ item.name }}
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <div class="flex items-center">
                <button @click="isList = !isList" :class="{ ' !bg-black': isList }"
                    class=" bg-white px-3 py-[10px] rounded-l-xl transition-all">
                    <Icon size="18" name="local-list-menu" :class="isList ? '!fill-white' : ''" />
                </button>
                <button @click="isList = !isList" :class="{ ' !bg-black': !isList }"
                    class=" bg-white px-3 py-[10px] rounded-r-xl transition-all">
                    <Icon size="18" name="local-card-menu" :class="!isList ? '!fill-white' : ''" />
                </button>
            </div>
        </div>
        <div class="flex items-center justify-between my-8">
            <div class="flex items-center gap-4">
                <el-input class="!w-[374px] !h-12 " size="large" placeholder="Введите товар, артикул или штрихкод"
                    :suffix-icon="Search" />
                <el-button class=" !text-[#344054]" size="large">
                    <Icon size="18" name="local-filter-arrow" class=" !fill-none mr-2" />
                    Фильтры
                </el-button>
            </div>
        </div>
        <transition name="slide-right" mode="out-in">
            <template v-if="isList">
                <div class="grid grid-cols-1 gap-8">
                    <button class="add-button h-[88px]" @click="showForm = true">
                        <svg width="40" class=" mx-auto" height="40" viewBox="0 0 40 40" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.0007 8.33398V31.6674M8.33398 20.0007H31.6674"
                                stroke="url(#paint0_linear_659_11562)" stroke-width="4" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_659_11562" x1="8.33398" y1="8.33398" x2="35.6261"
                                    y2="8.68638" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.450283" stop-color="#B540F6" />
                                    <stop offset="0.750161" stop-color="#F18F8C" />
                                    <stop offset="0.832166" stop-color="#FB9D79" />
                                </linearGradient>
                            </defs>
                        </svg>

                    </button>
                    <div class="list border border-[#D0D5DD] rounded-2xl p-6 flex items-center" v-for="prod in mockData"
                        :key="prod.id">
                        <div class=" w-5/12 flex items-center justify-between">
                            <div class="flex gap-2">
                                <object type="image/svg+xml" class=" rounded-lg w-16 h-12 object-contain"
                                    :data="prod.image">svg-image</object>
                                <!-- <img :src="prod.image" class=" rounded-lg w-16 h-12 object-contain" alt="test"> -->
                                <div>
                                    <h6 class=" font-medium text-[#111927]">
                                        {{ prod.name }}
                                    </h6>
                                    <p class=" text-[#98A2B3] text-xs mt-1">
                                        Арт. 12315421 · 125283194523
                                    </p>
                                </div>
                            </div>
                            <button
                                class=" rounded-2xl border px-3 p-1 border-[#EAECF0] bg-[#F9FAFB] font-medium text-sm text-[#344054] flex items-center gap-1.5">
                                <div class="w-2 h-2 rounded-full bg-[#667085]"></div>
                                Всего: {{ prod.size + ' ' + 'штук' }}
                            </button>
                        </div>
                        <div class="flex items-center justify-between w-7/12 pl-28">
                            <div class="flex items-center gap-20">
                                <button
                                    class=" border border-[#D0D5DD] rounded-md flex items-center gap-1.5 text-sm font-medium px-[10px] py-1 shadow-sm"
                                    v-for="shts in prod.werehouse" :key="shts">
                                    <object type="image/svg+xml" class="w-4 h-4" :data="shts.image">svg-image</object>
                                    <!-- <img class="w-4 h-4" :src="shts.image" alt="produ"> -->
                                    {{ shts.price }}
                                </button>
                            </div>
                            <button @click="handleRowClick(prod)">
                                <Edit class=" w-5 h-5" color="#98A2B3" />
                            </button>
                        </div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="grid grid-cols-5 2xl:grid-cols-7 gap-8 ">
                    <button class="add-button h-[343px]" @click="showForm = true">
                        <svg width="80" height="81" class=" mx-auto" viewBox="0 0 80 81" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M39.9993 17.166V63.8327M16.666 40.4993H63.3327" stroke="url(#paint0_linear_798_6122)"
                                stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
                            <defs>
                                <linearGradient id="paint0_linear_798_6122" x1="16.666" y1="17.166" x2="71.2502"
                                    y2="17.8708" gradientUnits="userSpaceOnUse">
                                    <stop offset="0.450283" stop-color="#B540F6" />
                                    <stop offset="0.750161" stop-color="#F18F8C" />
                                    <stop offset="0.832166" stop-color="#FB9D79" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </button>
                    <div class="card h-[343px]" v-for="prod in mockData" :key="prod.id">
                        <div class="flex items-center justify-between h-6">
                            <button
                                class=" rounded-2xl border px-2 p-0.5 border-[#EAECF0] bg-[#F9FAFB] font-medium text-xs text-[#344054]">
                                Всего: {{ prod.size + ' ' + 'штук' }}
                            </button>
                            <button @click="handleRowClick(prod)">
                                <Edit class=" w-4 " color="#98A2B3" />
                            </button>
                        </div>
                        <div>
                            <!-- <object type="image/svg+xml" width="100%" class="w-full h-[182px] my-4 object-cover object-center" :data="prod.image">svg-image</object> -->
                            <img class="w-full h-[182px] my-4 object-cover object-center" :src="prod.image" alt="produ">
                        </div>
                        <h6 class=" font-medium text-[#111927] text-sm">
                            {{ prod.name }}
                        </h6>
                        <p class=" text-[#98A2B3] text-xs">
                            Арт. 12315421 · 125283194523
                        </p>
                        <hr class=" my-4" />
                        <div class="flex items-center gap-1">
                            <button
                                class=" border border-[#D0D5DD] rounded-md flex items-center gap-1 text-xs font-medium px-2 py-1 shadow-sm"
                                v-for="(shts, i) in prod.werehouse" :key="`img${i}`">
                                <object type="image/svg+xml" class="w-4 h-4" :data="shts.image">svg-image</object>
                                <!-- <img class="w-4 h-4" :id="`img${i}`" :src="shts.image" alt="produ"> -->
                                {{ shts.price }}
                            </button>
                        </div>
                    </div>
                </div>
            </template>
        </transition>
        <werehouseForm :visible="showForm" :readonly="readonly" :product="werehouse" @closed="closed"></werehouseForm>
    </div>
</template>
<script lang="ts" setup>
import { Search, Close, Edit } from '@element-plus/icons-vue'
import mockData from "/@/mock/products.js"
import werehouseForm from "./components/werehouseForm.vue"
import { ref } from 'vue'
const isList = ref(false)
const showForm = ref(false)
const readonly = ref(false)
const werehouse = ref()
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

const closed = () => {
    werehouse.value = null
    showForm.value = false
    readonly.value = false
}
const handleRowClick = (row: any) => {
    showForm.value = true
    werehouse.value = row


}
</script>
<style lang="scss" scoped>
.add-button {
    width: 100%;
    border-radius: 8px !important;
    background: linear-gradient(white, white) padding-box, linear-gradient(91deg, #B540F6 52.01%, #F18F8C 86.64%, #FB9D79 96.11%) border-box !important;
    border: 2.5px solid transparent !important;
}

.card {
    border-radius: 12px;
    border: 1px solid #EAECF0;
    background: #FFF;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    padding: 16px;
}
</style>