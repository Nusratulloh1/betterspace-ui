<template>
    <div class="mt-6">
        <div class="flex items-center justify-between border-b pb-4">
            <div class="flex items-center gap-2 cursor-pointer">
                <h5 class="text-[#111927] font-medium text-2xl">
                    Магазин №1
                </h5>
                <Icon size="20" name="local-arrow" class=" !fill-none" />
            </div>
            <div class="flex items-center rounded-lg border border-[#D2D6DB] h-10 overflow-hidden">
                <button class=" text-sm text-[#1D2939] border-r border-[#D2D6DB] bg-[#F9FAFB] font-semibold px-4 h-full">
                    FBS
                </button>
                <button class=" text-sm text-[#1D2939] font-semibold px-4 h-full">
                    FBO
                </button>
            </div>
        </div>
        <div class="flex items-center justify-between my-8">
            <div class="flex items-center gap-4">
                <el-input class="!w-[229px] !h-12 " size="large" placeholder="Введите ID-поставки" :suffix-icon="Search" />
                <el-popover :visible="visibleFilter" placement="bottom" :width="603">
                    <div class="flex items-center justify-between">
                        <h6 class=" font-semibold text-[#344054]">
                            Все фильтры:
                        </h6>
                        <button @click="visibleFilter = false">
                            <Close class=" w-6 h-6"></Close>
                        </button>
                    </div>
                    <div class=" mt-6">
                        <div class="flex gap-11 items-center justify-between">
                            <label class=" font-medium text-[#344054]">Категория</label>
                            <el-select v-model="selects1" multiple collapse-tags placeholder="Select" style="width: 447px"
                                size="large">
                                <el-option v-for="item in ['Электроника', 'Бытовая техника', 'Одежда']" :key="item"
                                    :label="item" :value="item" />
                            </el-select>
                        </div>
                        <div class="flex gap-11 items-center justify-between mt-6">
                            <label class=" font-medium text-[#344054]">Статус</label>
                            <el-select v-model="selects2" multiple collapse-tags class="checkboxable" placeholder="Select"
                                style="width: 447px" size="large">
                                <el-option class="none" :key="5" label="Все статусы" value="">
                                    <label class="flex items-center justify-between" :for="`${33}`">
                                        Все статусы
                                        <el-checkbox class="gradiented" :id="`${33}`" size="large" />
                                    </label>
                                </el-option>
                                <hr class=" mx-1.5" />
                                <el-option class="none"
                                    v-for="(item, i) in ['Готов к отправлению', 'В пути', 'Отменен', 'Ожидает возврата', 'Возвращен']"
                                    :key="item" :value="item">
                                    <label class="flex items-center justify-between" :for="`${i}`">
                                        {{ item }}
                                        <el-checkbox class="gradiented" :id="`${i}`" size="large" />
                                    </label>
                                </el-option>
                            </el-select>
                        </div>
                        <div class="flex gap-8 items-center justify-between mt-6">
                            <label class=" font-medium text-[#344054]">Маркетплейс</label>
                            <el-select v-model="selects3" multiple collapse-tags class="checkboxable" placeholder="Select"
                                style="width: 447px" size="large">
                                <el-option class="none" :key="5" label="Все маркетплейсы" value="">
                                    <label class="flex items-center justify-between" :for="`${313}`">
                                        Все маркетплейсы
                                        <el-checkbox class="gradiented with-bg" :id="`${313}`" size="large" />
                                    </label>
                                </el-option>
                                <el-option class="none" :key="44" value="Olcha.uz">
                                    <label class="flex items-center justify-between" :for="`${44}`">
                                        <div class="flex items-center gap-2">
                                            <img :src="olcha" alt="olcha" width="24" height="24">
                                            Olcha.uz
                                        </div>
                                        <el-checkbox class="gradiented with-bg" :id="`${44}`" size="large" />
                                    </label>
                                </el-option>
                                <el-option class="none" :key="434" value="Sello.uz">
                                    <label class="flex items-center justify-between" :for="`${434}`">
                                        <div class="flex items-center gap-2">
                                            <img :src="sello" alt="sello" width="24" height="24">
                                            Sello.uz
                                        </div>
                                        <el-checkbox class="gradiented with-bg" :id="`${434}`" size="large" />
                                    </label>
                                </el-option>
                            </el-select>
                        </div>
                        <el-button @click="visibleFilter = false" class="w-full mt-6 !bg-[#000] !text-white !rounded">
                            Сохранить
                        </el-button>
                    </div>
                    <template #reference>
                        <el-button @click="visibleFilter = !visibleFilter" class=" !text-[#344054]" size="large">
                            <Icon size="18" name="local-filter-arrow" class=" !fill-none mr-2" />
                            Фильтры
                        </el-button>
                    </template>
                </el-popover>
            </div>
            <div class="flex items-center">

                <el-button class=" !text-[#344054]" size="large">
                    <Icon size="18" name="local-edit-pen" class=" !fill-none mr-2" />
                    Изменить
                </el-button>
                <el-button size="large">
                    <Icon size="18" name="local-refresh" class=" !fill-none" />
                </el-button>
            </div>
        </div>
        <el-table row-class-name=" cursor-pointer" :data="tableData" style="width: 100%">
            <el-table-column prop="id" label="ID поставки" min-width="110"></el-table-column>
            <el-table-column prop="date" label="Товар, артикул, штрихкод" min-width="300">
                <template #default="{ row }">
                    <div class="flex gap-2 rounded-3xl p-2" :class="{ ' !bg-white z-40': row?.id == product?.id }">
                        <img :src="row.image" alt="dena">
                        <div>
                            <span class="spaned">
                                {{ row.name }}
                            </span>
                            <p class="text-sm">
                                Арт. 12315421 · 125283194523
                            </p>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="Принят в обработку" min-width="200">
                <template #default="{ row }">
                    15.10.2023 | 10:25
                </template>
            </el-table-column>
            <el-table-column prop="name" label="Принят в обработку" min-width="180">
                <template #default="{ row }">
                    892589234
                </template>
            </el-table-column>
            <el-table-column prop="address" label="Статус" min-width="150">
                <template #default="{ row }">
                    <el-tag v-if="row.status == 1" color="#D9D6FE" round class="!text-xs !font-medium">Ожидает
                        отгрузки</el-tag>
                    <el-tag v-if="row.status == 2" color="#ECFDF3" round
                        class="!text-xs !text-[#067647] !border-[#ABEFC6] !font-medium">Доставлен</el-tag>
                    <el-tag v-if="row.status == 3" color="#FFFAEB" round
                        class="!text-xs !font-medium !text-[#B54708] !border-[#FEDF89]">Ожидает сборки</el-tag>
                    <el-tag v-if="row.status == 4" color="#F9FAFB" round class="!text-xs !font-medium">В продаже</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="Актуальная цена, сум" min-width="180">
                <template #default="{ row }">
                    <div>
                        <Icon v-if="row.status == 1" size="24" name="local-checked" class="!fill-[#16B364]" />
                        <Icon v-if="row.status == 2" size="24" name="local-waiting" class="!fill-none stroke-[#9DA4AE]" />
                        <Icon v-if="row.status == 3" size="24" name="local-cancel" class="!fill-none stroke-[#D92D20]" />
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="size" label="Стоимость, сум" min-width="150">
                <template #default="{ row }">
                    <div>
                        100,000
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="size" label="Дата отгрузки" min-width="180" >
                15.10.2023 | 10:25
            </el-table-column>
            <el-table-column prop="address" label="Адрес доставки" min-width="220">
                ул. Мустакиллик, дом 15
            </el-table-column>
        </el-table>
        <div class="flex items-center justify-between mt-7">
            <p>
                1-10 of 195 items
            </p>
            <div>
                <el-pagination layout="prev, pager, next" :total="50" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Search, Close } from '@element-plus/icons-vue'
import dena from '/@/assets/images/products/dena.svg'
import sello from '/@/assets/images/brands/sello.svg'
import asaxiy from '/@/assets/images/brands/asaxiy.svg'
import olcha from '/@/assets/images/brands/olcha.svg'
const isEdit = ref(false)
const showForm = ref(false)
const visibleFilter = ref(false)
const selects1 = ref([])
const selects2 = ref([])
const selects3 = ref([])
const product: any = ref()
const tableData: any = ref(
    [
        {
            id: 1,
            name: 'Olma sharbat',
            image: dena,
            status: 1,
            selected: false,
            prices: [
                {
                    image: olcha,
                    price: '100 тыс'
                },
                {
                    image: asaxiy,
                    price: '500 тыс'
                },
                {
                    image: sello,
                    price: '300 тыс'
                }
            ],
            size: 30,
            werehouse: [
                {
                    image: olcha,
                    price: '9 шт'
                },
                {
                    image: asaxiy,
                    price: '9 шт'
                },
                {
                    image: sello,
                    price: '9 шт'
                }
            ],
        },
        {
            id: 2,
            name: 'Sleepy podguznik',
            image: dena,
            status: 2,
            selected: false,
            prices: [
                {
                    image: olcha,
                    price: '100 тыс'
                },
                {
                    image: asaxiy,
                    price: '500 тыс'
                },
                {
                    image: sello,
                    price: '300 тыс'
                }
            ],
            size: 1,
            werehouse: [
                {
                    image: olcha,
                    price: '9 шт'
                },
            ],
        },
        {
            id: 3,
            selected: false,
            name: 'Splat zubi',
            image: dena,
            status: 3,
            prices: [
                {
                    image: olcha,
                    price: '100 тыс'
                },
                {
                    image: asaxiy,
                    price: '500 тыс'
                },
            ],
            size: 4,
            werehouse: [
                {
                    image: olcha,
                    price: '9 шт'
                },
                {
                    image: asaxiy,
                    price: '9 шт'
                },
            ],
        },
    ]
)
const computedData = computed(() => tableData.value)

</script>
<style lang="scss" scoped></style>