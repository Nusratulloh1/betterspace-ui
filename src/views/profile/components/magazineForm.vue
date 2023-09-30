<template>
    <div class=" pr-4">
        <div class="flex justify-between items-center mb-5">
            <div>
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
                <p class="text-[#475467] text-sm">
                    Здесь вы можете изменять данные о своем магазине, которые автоматом будут меняться и в маркетплейсах
                </p>
            </div>
            <el-upload ref="uploadRef" class="upload-demo" :show-file-list="false"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false">
                <template #trigger>
                    <div class=" rounded-full border  p-[10.5px] opacity-80"
                        style=" background-color: rgba(242, 244, 247, 1);">
                        <Plus class="w-[35px] h-[35px]" color="rgba(71, 84, 103, 1)"></Plus>
                    </div>
                </template>
            </el-upload>
        </div>
        <hr />
        <el-form ref="ruleFormRef" :hide-required-asterisk="true" label-position="top" class=" w-full">
            <div class="flex items-center gap-8 mt-8">
                <label class="text-[#344054] text-sm font-semibold flex items-center w-[32.3%]">
                    Название компании
                </label>
                <el-form-item class="!m-0 w-[66%]">
                    <el-input size="large" v-model="form.name" placeholder="Last name" />
                </el-form-item>
            </div>
            <hr class=" my-6" />
            <div class="flex items-center gap-8">

                <label class="text-[#344054] text-sm font-semibold flex items-center w-[32.3%]">
                    Вид деятельности
                </label>
                <el-form-item class="!m-0 w-[66%]">
                    <el-select v-model="form.category" placeholder="Выбрать" size="large" class=" !w-full">
                        <el-option v-for="item in ['Электроника', 'Бытовая техника', 'Одежда']" :key="item" :label="item"
                            :value="item" />
                    </el-select>
                </el-form-item>
            </div>
            <hr class=" my-6" />
            <div class="flex items-center gap-8">

                <label class="text-[#344054] text-sm font-semibold flex items-center w-[32.3%]">
                    Данные о компании
                </label>
                <div class="grid grid-cols-3 gap-6 w-[66%]">
                    <el-form-item class="!m-0" label="Выбор юридической формы">
                        <el-select v-model="form.company_type" placeholder="Выбрать" size="large" class=" !w-full">
                            <el-option v-for="item in ['AAA', 'AUYTT', 'AUNN']" :key="item" :label="item" :value="item" />
                        </el-select>
                    </el-form-item>
                    <el-form-item class="!m-0" label="Юридическое название">
                        <el-input size="large" v-model="form.company_name" placeholder="Text" />
                    </el-form-item>
                    <el-form-item class="!m-0" label="ИНН компании">
                        <el-input size="large" v-model="form.company_code" placeholder="Text">
                            <template #prefix>
                                <OfficeBuilding class=" w-5 h-5" color="rgba(102, 112, 133, 1)" />
                            </template>
                        </el-input>
                    </el-form-item>
                </div>
            </div>
            <hr class=" my-6" />
            <div class="flex items-center gap-8">

                <label class="text-[#344054] text-sm font-semibold flex items-center w-[32.3%]">
                    Банковские реквизиты
                </label>
                <div class="grid grid-cols-3 gap-6 w-[66%]">
                    <el-form-item class="!m-0" label="№ расчетного счета">
                        <el-select v-model="form.billing" placeholder="Выбрать" size="large" class=" !w-full">
                            <el-option v-for="item in ['16341B123', '123AC1А12', '12341BA123']" :key="item" :label="item"
                                :value="item" />
                        </el-select>
                    </el-form-item>
                    <el-form-item class="!m-0" label="Код МФО">
                        <el-input size="large" v-model="form.mfo" placeholder="Text" />
                    </el-form-item>
                    <el-form-item class="!m-0" label="ОКЭД">
                        <el-input size="large" v-model="form.oked" placeholder="Text" />
                    </el-form-item>
                </div>
            </div>
            <hr class=" my-6" />
            <div class="flex items-center gap-8">
                <label class="text-[#344054] text-sm font-semibold flex items-center w-[32.3%]">
                    Банковские реквизиты
                </label>
                <div class="flex gap-2 2xl:gap-6 w-[66%]">
                    <el-upload ref="uploadRef" class="upload-demo" :show-file-list="false"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false">
                        <template #trigger>
                            <el-button size="large" class="!text-[#4D5761] !bg-[#F2F4F7] !border-[#F2F4F7] !w-[244px]">
                                <svg class="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18 12.5V13.5C18 14.9001 18 15.6002 17.7275 16.135C17.4878 16.6054 17.1054 16.9878 16.635 17.2275C16.1002 17.5 15.4001 17.5 14 17.5H7C5.59987 17.5 4.8998 17.5 4.36502 17.2275C3.89462 16.9878 3.51217 16.6054 3.27248 16.135C3 15.6002 3 14.9001 3 13.5V12.5M14.6667 8.33333L10.5 12.5M10.5 12.5L6.33333 8.33333M10.5 12.5V2.5"
                                        stroke="#4D5761" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                Импорт товаров
                            </el-button>
                        </template>

                        <!-- <el-button class="ml-3" type="success" @click="submitUpload">
                            upload to server
                        </el-button> -->

                        <!-- <template #tip>
                            <div class="el-upload__tip">
                                jpg/png files with a size less than 500kb
                            </div>
                        </template> -->
                    </el-upload>
                    <el-button size="large" class="!text-[#4D5761] !bg-[#F2F4F7] !border-[#F2F4F7] !w-[255px]">
                        <svg width="21" class="mr-2" height="20" viewBox="0 0 21 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 12.5V13.5C18 14.9001 18 15.6002 17.7275 16.135C17.4878 16.6054 17.1054 16.9878 16.635 17.2275C16.1002 17.5 15.4001 17.5 14 17.5H7C5.59987 17.5 4.8998 17.5 4.36502 17.2275C3.89462 16.9878 3.51217 16.6054 3.27248 16.135C3 15.6002 3 14.9001 3 13.5V12.5M14.6667 6.66667L10.5 2.5M10.5 2.5L6.33333 6.66667M10.5 2.5V12.5"
                                stroke="#4D5761" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        Экспорт товара
                    </el-button>
                </div>
            </div>
            <hr class=" mt-6" />
            <div class=" float-right my-8">
                <el-button class="!h-11">
                    Отмена
                </el-button>
                <el-button type="primary" class="gradient !h-11 !w-[107px]">
                    Сохранять
                </el-button>
            </div>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { OfficeBuilding } from '@element-plus/icons-vue'

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
const form = reactive({
    name: "Магазин №1",
    category: "Мебель и домашние изделия ",
    email: "islamakramov.b@gmail.com",
    phone: "90-001-50-50",
    role: "Директор",
    region: "Узбекистан",
    utc: "Город Ташкент UTC+5",
    company_type: "OOO",
    company_name: "SovdaWash",
    company_code: "21315-2315",
    billing: "12341А123",
    mfo: "21315-2315",
    oked: "21315-2315"
})
</script>
<style lang="scss" scoped>
</style>