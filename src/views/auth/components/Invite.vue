<template>
    <el-form
        @keyup.enter="submitForm(ruleFormRef)"
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        :hide-required-asterisk="true"
        label-position="top"
        class="!text-xs "
    >
        <el-form-item prop="email">
            <el-input v-model.trim="ruleForm.email" type="text" autocomplete="off" class="!h-10 !text-xs" placeholder="Login" />
        </el-form-item>
        <el-form-item prop="password">
            <el-input
                v-model.trim="ruleForm.password"
                type="password"
                :show-password="true"
                autocomplete="off"
                class="!h-10 !text-xs"
                placeholder="Password"
            />
        </el-form-item>
        <div class="flex flex-col space-y-4 py-1">
            <el-button class="w-full" size="large" round type="primary" @click="submitForm(ruleFormRef)" :loading="loading">
                Sign in with email
            </el-button>
        </div>
    </el-form>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import sha1 from 'sha1'
const i18n = useI18n()
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    email: '',
    password: '',
})
const emit = defineEmits(['onSubmit'])
const rules = reactive<FormRules>({
    email: [
        {
            required: true,
            message: i18n.t('validation.fillField'),
            trigger: 'blur',
        },
        {
            type: 'email',
            message: i18n.t('validation.inputEmail'),
            trigger: 'blur',
        },
    ],
    password: [
        {
            required: true,
            message: i18n.t('validation.fillField'),
            trigger: 'blur',
        },
        {
            min: 8,
            message: i18n.t('validation.minimumLength', { value: 8 }),
            trigger: 'blur',
        },
    ],
})

const loading = ref(false)
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid) => {
        if (valid) {
            try {
                loading.value = true
                const data = {
                    ...ruleForm,
                    password: sha1(ruleForm.password),
                }
                setTimeout(() => {
                    loading.value = false
                    emit('onSubmit', data)
                }, 1000)
            } catch (error: any) {
                console.log('error', error.message)
                loading.value = false
            }
        }
    })
}
</script>