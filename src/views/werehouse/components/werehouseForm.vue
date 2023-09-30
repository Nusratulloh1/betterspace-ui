<template>
    <el-drawer v-model="props.visible" @closed="closed" direction="rtl" size="598" :withHeader="false">
        <button class=" float-right" @click="$emit('closed')">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="#6C737F" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" />
            </svg>
        </button>
        <div class="inner mt-11 pb-4">
            <div class="flex items-center justify-between">
                <h6 class="text-[#111927] text-xl font-semibold">
                    {{ props.product ? 'Редактировать товар в виртуальный склад' : 'Добавить товар в виртуальный склад' }}
                </h6>
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
                    <button @click="marketplace = i" :class="{ ' !border-primary': marketplace === i }"
                        class=" rounded-lg border border-[#E5E7EB] p-[10px] cursor-pointer z-10" type="button"
                        v-for="(img, i) in [olcha, sello, asaxiy]" :key="i"
                        style="box-shadow: 0px 1.07895px 2.15789px 0px rgba(16, 24, 40, 0.05)">
                        <!-- <object @click="marketplace = i" type="image/svg+xml" width="32" height="32"
                            :data="img">svg-image</object> -->
                        <img :src="img" width="32" height="32" alt="img">
                    </button>
                </div>
            </el-form-item>
            <el-form-item label="Название продукта">
                <el-input size="large" v-model="form.product_name" placeholder="Напишите наименование товара" />
            </el-form-item>
            <el-form-item label="Категория продукта">
                <el-select v-model="form.category" size="large" placeholder="Выбрать" class=" !w-full">
                    <el-option v-for="item in ['Электроника', 'Бытовая техника', 'Одежда', 'Напитки']" :key="item"
                        :label="item" :value="item" />
                </el-select>
            </el-form-item>
            <el-form-item label="Количество для виртуального хранения">
                <el-input size="large" v-model="form.ves"
                    placeholder="Определите количество для перемещения в виртуальный склад" />
            </el-form-item>
            <el-form-item label="Локация ★">
                <el-input size="large" v-model="form.location" :prefix-icon="Search" placeholder="Поиск локации" />
            </el-form-item>
        </el-form>
        <el-button type="primary" class="gradient !h-11 !w-full mb-2" @click="$emit('closed')">
            <template v-if="props.readonly">
                Xорошо
            </template>
            <template v-else-if="!props.readonly && props.product">
                <Icon size="18" name="local-save" class=" !fill-none stroke-white mr-2" />
                Сохранить товар в виртуальный склад
            </template>
            <template v-else>
                <Icon size="19" name="local-model" class="mr-2 !fill-none" />
                Поместить товар в виртуальный склад
            </template>
        </el-button>
    </el-drawer>
</template>
  
<script lang="ts" setup>
import { reactive, ref, watch } from 'vue'
import fileUpload from '/@/components/common/fileUpload.vue'
import sello from '/@/assets/images/brands/sello.png'
import asaxiy from '/@/assets/images/brands/asaxiy.png'
import { Search, Close } from '@element-plus/icons-vue'
import olcha from '/@/assets/images/brands/olcha.png'
import uzum from '/@/assets/images/brands/uzum.png'
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
const marketplace = ref(0)
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
  