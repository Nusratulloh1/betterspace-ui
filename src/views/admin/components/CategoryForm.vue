<template>
    <el-form :model="form" :rules="rules" ref="formRef" label-position="top" hide-required-asterisk label-width="150px" class="demo-ruleForm">
        <el-form-item label="Название категории" prop="categoryName">
            <el-input size="large" class="!w-full" placeholder="Напишите" v-model="form.categoryName" />
        </el-form-item>
        <el-form-item label="Описание категории" prop="categoryDesc">
            <el-input size="large" class="!w-full" placeholder="Напишите" v-model="form.categoryDesc" />
        </el-form-item>
        <el-form-item label="Теги организации" prop="tagsCategory">
            <div class="flex items-center flex-wrap gap-x-1 gap-y-2 mt-5">
                <el-tag
                    v-for="tag in form.tagsCategory"
                    :key="tag"
                    :color="tag.color"
                    round
                    :style="{
                        backgroundColor: `rgba(${parseInt(tag.color.slice(1, 3), 16)}, ${parseInt(tag.color.slice(3, 5), 16)}, ${parseInt(
                            tag.color.slice(5, 7),
                            16
                        )}, 0.10)`,
                        borderColor: `rgba(${parseInt(tag.color.slice(1, 3), 16)}, ${parseInt(tag.color.slice(3, 5), 16)}, ${parseInt(
                            tag.color.slice(5, 7),
                            16
                        )}, 0.25)`,
                    }"
                >
                    <span :style="`color: ${tag.color}`"> {{ tag.title }} </span>
                </el-tag>
                <el-button @click="addOrRemoveTag" round size="small" :icon="tagsCategoryVisible ? Minus : Plus"> </el-button>
            </div>
            <el-divider />
            <div class="flex items-center gap-2 !w-full" v-if="tagsCategoryVisible">
                <el-input size="large" class="!w-full" placeholder="Напишите" v-model="currentTag" />
                <el-color-picker size="large" v-model="color" />
                <el-button class="!w-[20%] !font-bold" size="large" type="primary" @click="saveTag" :disabled="!currentTag">Сохранить</el-button>
            </div>
        </el-form-item>
        <el-button class="!w-full !font-bold !mt-2" size="large" type="primary" @click="submitForm(formRef)">Сохранить</el-button>
    </el-form>
</template>

<script lang="ts" setup>
import { Plus, Minus } from '@element-plus/icons-vue'
import { FormInstance, FormRules } from 'element-plus'
import { ref, reactive } from 'vue'

const props: any = defineProps({
   category: {
    required: false,
    default: null,
    type: Object
   }
})

const emits = defineEmits(['onSubmit'])

const form: any = reactive({
    categoryName: '',
    categoryDesc: '',
    tagsCategory: [],
})
const currentTag = ref('')
const color = ref(null)

const tagsCategoryVisible = ref(false)
const formRef = ref<FormInstance>()

const rules = reactive<FormRules>({
    categoryName: [{ required: true, message: 'Название категории обязательно', trigger: 'change' }],
    categoryDesc: [{ required: true, message: 'Описание категории обязателен', trigger: 'change' }],
    tagsCategory: [{ required: true, message: 'Описание категории обязателен', trigger: 'blur' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid) => {
        if (valid) {
            emits('onSubmit', form)
        } else {
            console.log('Ошибка валидации формы')
            return false
        }
    })
}
const addOrRemoveTag = () => {
    tagsCategoryVisible.value = !tagsCategoryVisible.value
    currentTag.value = ''
}
const saveTag = () => {
    form.tagsCategory.push({
        title: currentTag.value,
        color: color.value,
    })
    currentTag.value = ''
    tagsCategoryVisible.value = false
}
const resetForm = () => {
    formRef.value?.resetFields()
}
</script>