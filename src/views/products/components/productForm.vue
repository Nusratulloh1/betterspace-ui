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
                <div class="flex gap-2 mt-3">
                    <el-upload ref="uploadRef" class="upload-demo" :show-file-list="false"
                        action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false">
                        <template #trigger>
                            <el-button class="!text-[#4D5761] !bg-[#F2F4F7] !border-[#F2F4F7]">
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
        <el-form ref="ruleFormRef" :disabled="props.readonly" :hide-required-asterisk="true" label-position="top"
            class=" overflow-y-auto h-[84%] 2xl:h-[88%] scrollbar">
            <el-form-item>
                <img v-if="form.image" class=" w-full h-[120px] object-cover object-center"
                    :style="props.product.id == 1 ? 'object-position: 0px -441px' : ''" :src="getImage(form.image)"
                    alt="prodcut">
                <fileUpload v-else></fileUpload>
            </el-form-item>
            <el-form-item label="Выберите маркетплейс">
                <div class="flex items-center gap-4 mt-2">
                    <button class=" rounded-lg border border-[#E5E7EB] p-[10px]" type="button"
                        v-for="(img, i) in [olcha, sello, asaxiy]" :key="i"
                        style="box-shadow: 0px 1.07895px 2.15789px 0px rgba(16, 24, 40, 0.05)">
                        <object type="image/svg+xml" width="32" height="32" :data="img">svg-image</object>
                    </button>
                </div>
            </el-form-item>
            <el-form-item label="Название продукта">
                <el-input size="large" v-model="form.product_name" placeholder="Напишите наименование товара" />
            </el-form-item>
            <el-form-item label="Категория продукта">
                <el-select v-model="form.category" size="large" placeholder="Select" class=" !w-full">
                    <el-option v-for="item in ['Электроника', 'Бытовая техника', 'Одежда', 'Напитки']" :key="item"
                        :label="item" :value="item" />
                </el-select>
            </el-form-item>
            <div class="grid grid-cols-2 gap-x-6">
                <el-form-item label="Энергетический класс">
                    <el-input v-model="form.class" size="large" />
                </el-form-item>
                <el-form-item label="Бренд">
                    <el-input v-model="form.brand" size="large" />
                </el-form-item>
                <el-form-item label="Артикул">
                    <el-input v-model="form.art" size="large" placeholder="Например: 3D1235123" />
                </el-form-item>
                <el-form-item label="Штрихкод">
                    <el-input v-model="form.code" size="large" placeholder="Например: #134214" />
                    <span class=" text-primary font-semibold text-sm underline mt-2 cursor-pointer">
                        Сгенерировать штрихкод
                    </span>
                </el-form-item>
            </div>
            <div class="flex items-center gap-x-6">
                <el-form-item label="Остаток" class=" w-[40%]">
                    <el-input size="large" v-model="form.size" placeholder="Общий. остаток, шт" />
                </el-form-item>
                <el-form-item label="*" class=" w-[60%]">
                    <div class="flex items-center w-full">
                        <el-popover :visible="visibleSht" placement="bottom-start" :width="603">
                            <div class="flex items-center justify-between">
                                <h6 class=" font-semibold text-[#344054]">
                                    Товары в виртуальном складе
                                </h6>
                                <button @click="visibleSht = false">
                                    <Close class=" w-6 h-6"></Close>
                                </button>
                            </div>
                            <div class=" mt-6">
                                <div class="flex gap-11 items-center justify-between">
                                    <label class=" font-medium text-[#344054] flex items-center gap-2">
                                        <object type="image/svg+xml" width="24" height="24" :data="sello">svg-image</object>
                                        Sello.uz</label>
                                    <el-input size="large" placeholder="шт" class=" !w-20" />
                                </div>
                                <div class="flex gap-11 items-center justify-between mt-4">
                                    <label class=" font-medium text-[#344054] flex items-center gap-2">
                                        <!-- <img width="24" height="24" :src="olcha" alt="olcha"> -->
                                        <object type="image/svg+xml" width="24" height="24" :data="olcha">svg-image</object>
                                        Olcha.uz</label>
                                    <el-input size="large" placeholder="шт" class=" !w-20" />
                                </div>
                                <div class="flex gap-11 items-center justify-between mt-4">
                                    <label class=" font-medium text-[#344054] flex items-center gap-2">
                                        <!-- <img width="24" height="24" :src="uzum" alt="uzum"> -->
                                        <object type="image/svg+xml" width="24" height="24" :data="uzum">svg-image</object>
                                        Uzum market</label>
                                    <el-input size="large" placeholder="шт" class=" !w-20" />
                                </div>
                                <el-button @click="visibleSht = false" class="w-full mt-6 !bg-[#000] !text-white !rounded">
                                    Сохранить
                                </el-button>
                            </div>
                            <template #reference>
                                <el-input @click="visibleSht = !visibleSht" v-model="form.sizes" size="large"
                                    class=" relative w-full" placeholder="Зарезервировано, шт">
                                    <template #prefix>
                                        <div class="flex items-center gap-2">
                                            <object type="image/svg+xml" :data="triple">svg-image</object>
                                            <Icon size="19" name="local-arrow" class="!fill-none !stroke-[#6C737F]" />
                                        </div>
                                    </template>
                                </el-input>
                            </template>
                        </el-popover>
                    </div>
                </el-form-item>
            </div>
            <el-form-item label="Описание продукта" class=" relative">
                <el-input v-model="form.desc" :autosize="{ minRows: 2, maxRows: 8 }" type="textarea"
                    placeholder="Напишите подробное описание товара включая его цвет, размеры и т.д" />
            </el-form-item>
            <div class="grid grid-cols-3 gap-x-6">
                <el-form-item label="Габариты упаковки">
                    <el-input v-model="form.height" size="large" placeholder="Высота, мм" />
                </el-form-item>
                <el-form-item label="*">
                    <el-input v-model="form.width" size="large" placeholder="Длина, мм" />
                </el-form-item>
                <el-form-item label="*">
                    <el-input size="large" v-model="form.width_2" placeholder="Ширина, мм" />
                </el-form-item>
            </div>
            <el-form-item label="Вес">
                <el-input size="large" v-model="form.ves" placeholder="Вес товара, г" />
            </el-form-item>
            <el-form-item label="Локация ★">
                <el-input size="large" v-model="form.location" :prefix-icon="Search" placeholder="Поиск локации" />
            </el-form-item>
        </el-form>
        <el-button type="primary" class="gradient !h-11 !w-full mb-2" @click="$emit('close')">
            <template v-if="props.readonly">
                Xорошо
            </template>
            <template v-else-if="!props.readonly && props.product">
                <Icon size="18" name="local-save" class=" !fill-none stroke-white mr-2" />
                Сохранить
            </template>
            <template v-else>
                <Icon size="19" name="local-plus" class="mr-2 !fill-none" />
                Добавить товар
            </template>
        </el-button>
    </el-drawer>
</template>
  
<script lang="ts" setup>
import { onMounted, reactive, ref, watch, watchEffect } from 'vue'
import fileUpload from '/@/components/common/fileUpload.vue'
import sello from '/@/assets/images/brands/sello.svg'
import asaxiy from '/@/assets/images/brands/asaxiy.svg'
import { Search, Close } from '@element-plus/icons-vue'
import olcha from '/@/assets/images/brands/olcha.svg'
import uzum from '/@/assets/images/brands/uzum.svg'
import triple from "/@/assets/images/brands/triple.svg"
const emits = defineEmits(['closed'])
const props = defineProps({
    visible: {
        type: Boolean,
        required: true,
        default: true
    },
    product: {
        type: Object,
        required: true,
        default: null
    },
    readonly: {
        type: Boolean,
        required: true,
        default: false
    }
})
const visibleSht = ref(false)
const getImage = (imagePath: string) => {
    return new URL(imagePath, import.meta.url).href
}
const form = reactive({
    image: "",
    product_name: "",
    category: "",
    class: "",
    brand: "",
    art: "",
    code: "",
    size: "",
    desc: "",
    height: "",
    width: "",
    width_2: "",
    ves: "",
    location: "",
    sizes: ""
})
const closed = () => {
    visibleSht.value = false
    emits('closed')
}

watch(
    () => props.product,
    (val) => {
        if (val) {
            form.product_name = val.name
            form.size = `${val.size} шт`
            form.sizes = `${val.size / 2} шт`
            form.image = val.image
            form.category = "Напитки",
                form.class = "Class",
                form.brand = "Brand",
                form.art = "12315421",
                form.code = "#124231",
                form.desc = `Состав: пюре яблочное, пюре вишнёвое, сок яблочный концентрированный, сахар, лимонная кислота, вода.
Фруктовая часть составляет не менее 40%.
Пищевая ценность 100 г. продукта:
Углеводы: 12 г.
Витамины (мг): С – 4,8; В1 – 0,01; B2 – 0,01; РР – 0,16; β-каротин – 0,03.`,
                form.height = "15 мм",
                form.width = "15 мм",
                form.width_2 = "15 мм",
                form.ves = "15 мм",
                form.location = "Tashkent"
        }
        else {
            form.product_name = ""
            form.size = ``
            form.sizes = ``
            form.image = ""
            form.category = "",
                form.class = "",
                form.brand = "",
                form.art = "",
                form.code = "",
                form.desc = ``,
                form.height = "",
                form.width = "",
                form.width_2 = "",
                form.ves = "",
                form.location = ""
        }
    }
)






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
}
</style>
  