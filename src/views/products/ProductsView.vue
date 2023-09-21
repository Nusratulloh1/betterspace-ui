<template>
    <div class=" mt-6">
        <div class="flex items-center justify-between border-b">
            <div class="flex items-center gap-2 mb-4 cursor-pointer">
                <h5 class="text-[#111927] font-medium text-2xl">
                    Магазин №1
                </h5>
                <Icon size="20" name="local-arrow" class=" !fill-none" />
            </div>
            <div class="flex items-center gap-2">
                <button class=" text-sm font-semibold py-4 px-1 border-b-[3px] border-black">
                    Актуальные
                </button>
                <button class=" text-sm font-semibold py-4 px-1 text-[#6C737F] border-b-[3px] border-transparent mx-4">
                    Архив
                </button>
                <el-button type="primary" class="gradient !h-11 !w-[184px] mb-2">
                    <Icon size="19" name="local-plus" class="mr-2 !fill-none" />
                    Добавить товары
                </el-button>
                <el-dropdown size="large">
                    <el-button class=" !border-none mb-2">
                        <Icon size="19" name="local-burger-menu" class="!fill-none" />
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu class=" w-[284px]">
                            <el-dropdown-item command="export">
                                <div class="flex items-center justify-between w-full text-sm font-medium text-[#344054]">
                                    <div class="flex items-center gap-2">
                                        <Icon size="16" name="local-export" class="!fill-none" />
                                        Выгрузить данные
                                    </div>
                                    <span class="text-[#667085] font-normal text-xs">
                                        Shift+D+E
                                    </span>
                                </div>
                            </el-dropdown-item>

                            <el-dropdown-item command="import">
                                <div class="flex items-center justify-between w-full text-sm font-medium text-[#344054]">
                                    <div class="flex items-center gap-2">
                                        <Icon size="16" name="local-import" class="!fill-none" />
                                        Импортировать данные
                                    </div>
                                    <span class="text-[#667085] font-normal text-xs">
                                        Shift+D+I
                                    </span>
                                </div>
                            </el-dropdown-item>
                            <el-dropdown-item command="student">
                                <div class="flex items-center justify-between w-full text-sm font-medium text-[#344054]">
                                    <div class="flex items-center gap-2">
                                        <Icon size="16" name="local-doc" class="!fill-none" />
                                        Акт и накладная
                                    </div>
                                    <span class="text-[#667085] font-normal text-xs">
                                        Shift+D+R
                                    </span>
                                </div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
        <div class="flex items-center justify-between my-8">
            <div class="flex items-center gap-4">
                <el-input class="!w-[374px] !h-12 " size="large" placeholder="Введите товар, артикул или штрихкод"
                    :suffix-icon="Search" />
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
                        <div class="flex gap-11 items-center">
                            <label class=" font-medium text-[#344054]">Категория</label>
                            <el-select v-model="selects1" multiple collapse-tags placeholder="Select" style="width: 447px">
                                <el-option v-for="item in ['Электроника', 'Бытовая техника', 'Одежда']" :key="item"
                                    :label="item" :value="item" />
                            </el-select>
                        </div>
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
                <template v-if="isEdit">
                    <el-button @click="isEdit = false" class=" !text-[#344054] !bg-[#F2F4F7]" size="large">
                        <Icon size="18" name="local-save" class=" !fill-none mr-2" />
                        Сохранить
                    </el-button>
                    <el-button class=" !text-[#344054] " size="large">
                        <Icon size="18" name="local-trash" class=" !fill-none mr-2" />
                        Удалить
                    </el-button>
                    <el-button class=" !text-[#344054] " size="large">
                        <Icon size="18" name="local-renew" class=" !fill-none mr-2" />
                        Обьединить товары
                    </el-button>
                </template>
                <template v-else>
                    <el-button @click="isEdit = true" class=" !text-[#344054]" size="large">
                        <Icon size="18" name="local-edit-pen" class=" !fill-none mr-2" />
                        Изменить
                    </el-button>
                </template>
                <el-button size="large">
                    <Icon size="18" name="local-refresh" class=" !fill-none" />
                </el-button>
            </div>
        </div>
        <el-table :class="{ 'opened': isEdit }" :data="tableData" style="width: 100%">
            <el-table-column v-if="isEdit" type="selection" align="center" width="55" />
            <el-table-column prop="date" label="Товар, артикул, штрихкод" min-width="180">
                <template #default="{ row }">
                    <div class="flex gap-2">
                        <img :src="row.image" alt="dena">
                        <div>
                            <span class="spaned">
                                {{ row.name }}
                            </span>
                            <p>
                                Арт. 12315421 · 125283194523
                            </p>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="Категория" min-width="150">
                <template #default="{ row }">
                    <span class="spaned">
                        {{ row.name }}
                    </span>
                </template>
            </el-table-column>
            <el-table-column prop="address" label="Статус" min-width="100">
                <template #default="{ row }">
                    <el-tag v-if="row.status == 1" color="#F4F3FF" round class="!text-xs !font-medium">В продаже</el-tag>
                    <el-tag v-if="row.status == 2" color="#FDF2FA" round
                        class="!text-xs !text-[#C11574] !border-[#FCCEEE] !font-medium">Не продается</el-tag>
                    <el-tag v-if="row.status == 3" color="#FFFAEB" round
                        class="!text-xs !font-medium !text-[#B54708] !border-[#FEDF89]">Не загружен</el-tag>
                    <el-tag v-if="row.status == 4" color="#F9FAFB" round class="!text-xs !font-medium">В продаже</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="Актуальная цена, сум" min-width="180">
                <template #default="{ row }">
                    <div class="flex gap-3 items-center">
                        <div v-for="price in row.prices" :key="price">
                            <img :src="price.image" width="24" height="24" :alt="price.price">
                            <span class="spaned">
                                {{ price.price }}
                            </span>
                        </div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="size" label="Общее количество товаров" min-width="150" />
            <el-table-column prop="address" label="Товары в виртуальном складе" min-width="150">
                <template #default="{ row }">
                    <div class="flex gap-3 items-center">
                        <div v-for="werehouse in row.werehouse" :key="werehouse" class="flex items-center gap-1">
                            <img :src="werehouse.image" width="24" height="24" :alt="werehouse.price">
                            <span class="spaned">
                                {{ werehouse.price }}
                            </span>
                        </div>
                    </div>
                </template>
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
import { ref } from 'vue';
import { Search, Close } from '@element-plus/icons-vue'
import dena from '/@/assets/images/products/dena.svg'
import sello from '/@/assets/images/brands/sello.svg'
import asaxiy from '/@/assets/images/brands/asaxiy.svg'
import olcha from '/@/assets/images/brands/olcha.svg'
const isEdit = ref(false)
const visibleFilter = ref(false)
const selects1 = ref([])
const tableData = [
    {
        name: 'Olma sharbat',
        image: dena,
        status: 1,
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
        name: 'Sleepy podguznik',
        image: dena,
        status: 2,
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

</script>
<style lang="scss" scoped></style>