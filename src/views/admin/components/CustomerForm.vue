<template>
    <el-form :model="form" :rules="rules" ref="formRef" label-position="top" hide-required-asterisk label-width="150px" class="demo-ruleForm">
        <el-form-item label="Название организации" prop="organizationName">
            <el-input size="large" class="!w-full" placeholder="Напишите" v-model="form.organizationName" />
        </el-form-item>

        <el-form-item label="Тип организации" prop="organizationType">
            <el-select size="large" class="!w-full" v-model="form.organizationType" placeholder="Выберите">
                <el-option label="Сеть" value="private" />
                <el-option label="Eдиничная" value="public" />
            </el-select>
        </el-form-item>

        <el-form-item label="Категория организации" prop="organizationCategory">
            <el-select size="large" class="!w-full" v-model="form.organizationCategory" placeholder="Выберите">
                <el-option label="ИТ" value="it" />
                <el-option label="Телеком" value="telecom" />
                <el-option label="Гос" value="gov" />
                <el-option label="Промышленность" value="industry" />
                <el-option label="Производство" value="manufacturing" />
                <el-option label="Консалтинг" value="consulting" />
                <el-option label="Маркетинг" value="marketing" />
                <el-option label="Логистика" value="logistics" />
                <el-option label="Образование" value="education" />
            </el-select>
        </el-form-item>

        <el-form-item label="Имя ответственного лица" prop="responsiblePersonName">
            <el-input size="large" class="!w-full" placeholder="Напишите" v-model="form.responsiblePersonName" />
        </el-form-item>

        <el-form-item label="Должность ответственного лица" prop="responsiblePersonPosition">
            <el-select size="large" class="!w-full" v-model="form.responsiblePersonPosition" placeholder="Выберите">
                <el-option label="HR" value="hr" />
                <el-option label="CEO" value="ceo" />
                <el-option label="CEO Assistant" value="ceoAssistant" />
                <el-option label="HRD" value="hrd" />
                <el-option label="CFO" value="cfo" />
                <el-option label="Accountant" value="accountant" />
                <el-option label="IT" value="it" />
                <el-option label="CB Specialist" value="cbSpecialist" />
            </el-select>
        </el-form-item>

        <el-form-item label="Номер ответственного лица" prop="responsiblePersonNumber">
            <el-input placeholder="Напишите" v-mask="'+998(##)###-##-##'" size="large" class="!w-full" v-model="form.responsiblePersonNumber" />
        </el-form-item>

        <el-form-item label="Локация организации" prop="organizationLocation">
            <el-input placeholder="Напишите" size="large" class="!w-full" v-model="form.organizationLocation" />
        </el-form-item>

        <el-button class="!w-full !font-bold !mt-2" size="large" type="primary" @click="submitForm">Сохранить</el-button>
    </el-form>
</template>
  
  <script setup lang="ts">
import { ref } from 'vue'

const props: any = defineProps({
   category: {
    required: false,
    default: null,
    type: Object
   }
})

const emits = defineEmits(['onSubmit'])

const form = ref({
    organizationName: '',
    organizationType: '',
    organizationCategory: '',
    responsiblePersonName: '',
    responsiblePersonPosition: '',
    responsiblePersonNumber: '',
    organizationLocation: '',
})

const formRef: any = ref(null)

const rules = {
    organizationName: [{ required: true, message: 'Название организации обязательно', trigger: 'blur' }],
    organizationType: [{ required: true, message: 'Тип организации обязателен', trigger: 'change' }],
    organizationCategory: [{ required: true, message: 'Категория организации обязательна', trigger: 'change' }],
    responsiblePersonName: [{ required: true, message: 'Имя ответственного лица обязательно', trigger: 'blur' }],
    responsiblePersonPosition: [{ required: true, message: 'Должность ответственного лица обязательна', trigger: 'change' }],
    responsiblePersonNumber: [
        { required: true, message: 'Номер ответственного лица обязателен', trigger: 'blur' },
        {
            pattern: /^\+998\(\d{2}\)\d{3}-\d{2}-\d{2}$/,
            message: 'Введите правильный номер телефона в формате +998(__)___-__-__',
            trigger: 'blur',
        },
    ],
    organizationLocation: [
        {
            required: true,
            message: 'Локация организации обязательна',
            trigger: 'blur',
        },
        {
            type: 'url',
            message: 'Локация должна быть ссылкой',
            trigger: ['blur', 'change'],
        },
    ],
}

const submitForm = () => {
    formRef.value.validate((valid: any) => {
        if (valid) {
            emits('onSubmit', form)
        } else {
            console.log('Ошибка валидации формы')
            return false
        }
    })
}

const resetForm = () => {
    formRef.value.resetFields()
}
</script>
  