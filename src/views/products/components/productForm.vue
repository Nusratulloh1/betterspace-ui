<template>
    <el-drawer v-model="props.visible" @closed="closed" direction="rtl" size="678" :withHeader="false">


        <button class=" float-right" @click="$emit('close')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#6C737F" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>
        <div class="inner mt-11 pb-4">
            <div class="flex items-center justify-between">
                <h6 class="text-[#111927] text-xl font-semibold">
                    {{ props.product ? 'Редактировать товар' : 'Добавить товар' }}
                </h6>
                <div>
                    <el-button class="!text-[#4D5761] !bg-[#F2F4F7] !border-[#F2F4F7]">
                        <svg class="mr-2" width="21" height="20" viewBox="0 0 21 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M18 12.5V13.5C18 14.9001 18 15.6002 17.7275 16.135C17.4878 16.6054 17.1054 16.9878 16.635 17.2275C16.1002 17.5 15.4001 17.5 14 17.5H7C5.59987 17.5 4.8998 17.5 4.36502 17.2275C3.89462 16.9878 3.51217 16.6054 3.27248 16.135C3 15.6002 3 14.9001 3 13.5V12.5M14.6667 8.33333L10.5 12.5M10.5 12.5L6.33333 8.33333M10.5 12.5V2.5"
                                stroke="#4D5761" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        Импорт товаров
                    </el-button>
                    <el-button v-if="props.product" class="!text-[#4D5761] !bg-[#F2F4F7] !border-[#F2F4F7]">
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

        </div>

        <el-form ref="ruleFormRef" :hide-required-asterisk="true" label-position="top"
            class=" overflow-y-auto h-[90%] scrollbar">
            <el-form-item>
                <fileUpload></fileUpload>
            </el-form-item>
            <el-form-item label="Выберите маркетплейс">
                <div class="flex items-center gap-4 mt-2">
                    <button class=" rounded-lg border border-[#E5E7EB] p-[10px]" type="button"
                        v-for="(img, i) in [olcha, sello, asaxiy]" :key="i"
                        style="box-shadow: 0px 1.07895px 2.15789px 0px rgba(16, 24, 40, 0.05)">
                        <img :src="img" width="32" height="32" alt="img">
                    </button>
                </div>
            </el-form-item>
            <el-form-item label="Название продукта">
                <el-input size="large" placeholder="Напишите наименование товара" />
            </el-form-item>
            <el-form-item label="Категория продукта">
                <el-select v-model="selects1" multiple collapse-tags size="large" placeholder="Select" class=" !w-full">
                    <el-option v-for="item in ['Электроника', 'Бытовая техника', 'Одежда']" :key="item" :label="item"
                        :value="item" />
                </el-select>
            </el-form-item>
            <div class="grid grid-cols-2 gap-x-6">
                <el-form-item label="Энергетический класс">
                    <el-input size="large" />
                </el-form-item>
                <el-form-item label="Бренд">
                    <el-input size="large" />
                </el-form-item>
                <el-form-item label="Артикул">
                    <el-input size="large" placeholder="Например: 3D1235123" />
                </el-form-item>
                <el-form-item label="Штрихкод">
                    <el-input size="large" placeholder="Например: #134214" />
                    <span class=" text-primary font-semibold text-sm underline mt-2 cursor-pointer">
                        Сгенерировать штрихкод
                    </span>
                </el-form-item>
            </div>
            <div class="flex items-center gap-x-6">
                <el-form-item label="Остаток" class=" w-[40%]">
                    <el-input size="large" placeholder="Общий. остаток, шт" />
                </el-form-item>
                <el-form-item label="*" class=" w-[60%]">
                    <el-input size="large" class=" relative" placeholder="Общий. остаток, шт" />
                    <div class="flex items-center">

                    </div>
                </el-form-item>
            </div>
            <el-form-item label="Описание продукта">
                <el-input type="textarea" size="large"
                    placeholder="Напишите подробное описание товара включая его цвет, размеры и т.д" />
            </el-form-item>
            <div class="grid grid-cols-3 gap-x-6">
                <el-form-item label="Габариты упаковки">
                    <el-input size="large" placeholder="Высота, мм" />
                </el-form-item>
                <el-form-item label="*">
                    <el-input size="large" placeholder="Длина, мм" />
                </el-form-item>
                <el-form-item label="*">
                    <el-input size="large" placeholder="Ширина, мм" />
                </el-form-item>
            </div>
            <el-form-item label="Вес">
                <el-input size="large" placeholder="Вес товара, г" />
            </el-form-item>
            <el-form-item label="Локация ★">
                <el-input size="large" :prefix-icon="Search" placeholder="Поиск локации" />
            </el-form-item>
        </el-form>
        <el-button type="primary" class="gradient !h-11 !w-full mb-2">
            <Icon size="19" name="local-plus" class="mr-2 !fill-none" />
            Добавить товар
        </el-button>
    </el-drawer>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import fileUpload from '/@/components/common/fileUpload.vue'
import sello from '/@/assets/images/brands/sello.svg'
import asaxiy from '/@/assets/images/brands/asaxiy.svg'
import { Search } from '@element-plus/icons-vue'
import olcha from '/@/assets/images/brands/olcha.svg'
const selects1 = ref([])
const emits = defineEmits(['closed'])
const props = defineProps({
    visible: {
        type: Boolean,
        required: true,
        default: true
    },
    product: {
        required: true,
        default: null
    }
})
const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})
const closed = () => {
    emits('closed')
}








</script>
<style lang="scss" scoped>
.scrollbar {
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;

    /* Firefox */
    &::-webkit-scrollbar {
        width: 0;
        /* Remove scrollbar space */
        background: transparent;
        /* Optional: just make scrollbar invisible */
    }

    /* Optional: show position indicator in red */
    &::-webkit-scrollbar-thumb {
        background: #FF0000;
    }
}</style>
  