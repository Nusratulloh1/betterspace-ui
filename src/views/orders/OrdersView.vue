<template>
    <div class="mt-6 pb-20 pr-5">
        <div class="flex items-center justify-between border-b pb-4">
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
            <div class="flex items-center rounded-lg border border-[#D2D6DB] h-10 overflow-hidden">
                <button @click="checkIs = true" :class="{ 'border-r border-[#D2D6DB] bg-[#F9FAFB]': checkIs }"
                    class=" text-sm text-[#1D2939] font-semibold px-4 h-full">
                    FBS
                </button>
                <button @click="checkIs = false" :class="{ 'border-l border-[#D2D6DB] bg-[#F9FAFB]': !checkIs }"
                    class=" text-sm text-[#1D2939] font-semibold px-4 h-full">
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
                            <el-select v-model="selects1" multiple placeholder="Select" style="width: 447px" size="large">
                                <el-option v-for="item in ['Электроника', 'Бытовая техника', 'Одежда']" :key="item"
                                    :label="item" :value="item" />
                            </el-select>
                        </div>
                        <div class="flex gap-11 items-center justify-between mt-6">
                            <label class=" font-medium text-[#344054]">Статус</label>
                            <el-select v-model="selects2" multiple class="checkboxable" placeholder="Select"
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
                            <el-select v-model="selects3" multiple class="checkboxable" placeholder="Select"
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
        <el-table row-class-name=" cursor-pointer" :data="ordersData" style="width: 100%">
            <el-table-column prop="id" label="ID поставки" min-width="110">
                A214253
            </el-table-column>
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
                15.10.2023 | 10:25
            </el-table-column>
            <el-table-column prop="phone" label="Принят в обработку" min-width="180" />
            <el-table-column prop="address" label="Статус" min-width="160">
                <template #default="{ row }">
                    <el-tag v-if="row.status == 1" color="#D9D6FE" round class="!text-xs !font-medium">Ожидает
                        отгрузки </el-tag>
                    <el-tag v-if="row.status == 2" color="#ECFDF3" round
                        class="!text-xs !text-[#067647] !border-[#ABEFC6] !font-medium">Доставлен</el-tag>
                    <el-tag v-if="row.status == 3" color="#FFFAEB" round
                        class="!text-xs !font-medium !text-[#B54708] !border-[#FEDF89]">Ожидает сборки</el-tag>
                    <el-tag v-if="row.status == 4" color="#FEF3F2" round
                        class="!text-[#B42318] !text-xs !font-medium !border-[#FECDCA]">Отменен</el-tag>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="Оплата" min-width="180">
                <template #default="{ row }">
                    <div>
                        <Icon v-if="row.is_paid == 1" size="24" name="local-checked" class="!fill-[#16B364]" />
                        <Icon v-if="row.is_paid == 2" size="24" name="local-waiting" class="!fill-none stroke-[#9DA4AE]" />
                        <Icon v-if="row.is_paid == 3" size="24" name="local-cancel" class="!fill-none stroke-[#D92D20]" />
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="size" label="Стоимость, сум" min-width="150">
                <template #default="{ row }">
                    <div>
                        {{ row.price }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="size" label="Дата отгрузки" min-width="180">
                15.10.2023 | 10:25
            </el-table-column>
            <el-table-column prop="address" label="Адрес доставки" min-width="240">
                <template #default="{ row }">
                    <div>
                        {{ row.address }}
                    </div>
                </template>
            </el-table-column>
        </el-table>
        <div class="flex items-center justify-between mt-7">
            <p>
                1-10 of {{ ordersData.length }} items
            </p>
            <div>
                <el-pagination layout="prev, pager, next" :total="ordersData.length" />
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
import ordersData from '/@/mock/orders'
const isEdit = ref(false)
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
const visibleFilter = ref(false)
const selects1 = ref([])
const selects2 = ref([])
const selects3 = ref([])
const product: any = ref()
const checkIs = ref(true)

</script>
<style lang="scss" scoped></style>