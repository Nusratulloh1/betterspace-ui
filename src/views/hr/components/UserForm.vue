<template>
    <el-form :model="form" :rules="rules" ref="formRef" label-position="top" hide-required-asterisk label-width="150px"
        class="demo-ruleForm">
        <el-form-item label="Имя" prop="first_name">
            <el-input size="large" class="!w-full" placeholder="Напишите" v-model="form.first_name" />
        </el-form-item>

        <el-form-item label="Фамилия" prop="last_name">
            <el-input size="large" class="!w-full" placeholder="Напишите" v-model="form.last_name" />
        </el-form-item>
        <el-form-item label="Отдел" prop="department">
            <el-select size="large" class="!w-full" v-model="form.department" placeholder="Выберите">
                <el-option label="ИТ" value="it" />
                <el-option label="Маркетинг" value="marketing" />
                <el-option label="HR" value="hr" />
                <el-option label="Снабжение" value="procurement" />
                <el-option label="Управление" value="management" />
                <el-option label="Финансы" value="finance" />
                <el-option label="Логистика" value="logistics" />
                <el-option label="Юридический" value="legal" />
                <el-option label="Производство" value="manufacturing" />
                <el-option label="Бухгалтерия" value="accounting" />
                <el-option label="АХО" value="aho" />
                <el-option label="Офис Менеджмент" value="office_management" />
                <el-option label="Продажи" value="sales" />
            </el-select>
        </el-form-item>

        <el-form-item label="Номер ответственного лица" prop="responsiblePersonNumber">
            <el-input placeholder="Напишите" v-mask="'+998(##)###-##-##'" size="large" class="!w-full"
                v-model="form.responsiblePersonNumber" />
        </el-form-item>

        <el-button class="!w-full !font-bold !mt-2" size="large" type="primary"
            @click="submitForm">Сохранить</el-button>
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
    first_name: '',
    last_name: '',
    department: '',
    responsiblePersonNumber: '',
})

const formRef: any = ref(null)

const rules = {
    first_name: [{ required: true, message: 'Имя обязательно', trigger: 'blur' }],
    last_name: [{ required: true, message: 'Фамилия обязательно', trigger: 'change' }],
    department: [{ required: true, message: 'Отдел обязательна', trigger: 'change' }],
    responsiblePersonNumber: [
        { required: true, message: 'Номер ответственного лица обязателен', trigger: 'blur' },
        {
            pattern: /^\+998\(\d{2}\)\d{3}-\d{2}-\d{2}$/,
            message: 'Введите правильный номер телефона в формате +998(__)___-__-__',
            trigger: 'blur',
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