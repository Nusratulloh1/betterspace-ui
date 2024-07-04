<template>
    <el-form
        @keyup.enter="submitForm(ruleFormRef)"
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        :hide-required-asterisk="true"
        label-position="top"
        class="!text-xs"
    >
        <el-form-item prop="workspace" label="Workspace">
            <el-input v-model.trim="ruleForm.workspace" type="text" autocomplete="off" placeholder="Enter your workspace name" />
        </el-form-item>
        <el-form-item prop="team" label="Team">
            <div class="relative w-full">
                <el-input v-model.trim="ruleForm.team" type="text" autocomplete="off" class="!text-xs !w-full" placeholder="Enter your team name" />
                <button class="text-primary text-xs  absolute right-3 top-4 hover:underline">No company, I’m solo</button>
            </div>
        </el-form-item>
        <el-form-item prop="company_size" label="How big is the company?">
            <el-select class="w-full" v-model="ruleForm.company_size" placeholder="Number of employees">
                <el-option v-for="item in ['10+', '20+', '30+', '40+', '50+']" :key="item" :label="item" :value="item" />
            </el-select>
        </el-form-item>
        <el-form-item prop="company_type" label="What kind of company is it?">
            <el-select class="w-full" v-model="ruleForm.company_type" placeholder="Company type">
                <el-option v-for="item in ['AA', 'II', 'PP', 'PP', 'AISS']" :key="item" :label="item" :value="item" />
            </el-select>
        </el-form-item>
        <el-form-item prop="role" label="What is your role in this company?">
            <el-select class="w-full" v-model="ruleForm.role" placeholder="Your role">
                <el-option v-for="item in ['CEO', 'Founder', 'Project manager', 'CTO', 'COO']" :key="item" :label="item" :value="item" />
            </el-select>
        </el-form-item>
        <el-form-item label="Do people report to you?">
            <el-checkbox class="mt-[-8px]" v-model="ruleForm.report">Yes people report to me</el-checkbox>
        </el-form-item>
        <hr class="mt-[-8px] mb-7" />
        <div class="flex flex-col space-y-4 py-1">
            <el-button :disabled="!ruleForm.report" class="w-full" size="large" round type="primary" @click="submitForm(ruleFormRef)" :loading="loading"> Continue </el-button>
        </div>
    </el-form>
</template>
  
  <script lang="ts" setup>
import { reactive, ref, computed } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import sha1 from 'sha1'

const i18n = useI18n()
const router = useRouter()
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    workspace: '',
    team: '',
    company_size: '',
    company_type: '',
    role: '',
    report: false,
})
const check = ref(false)
const emit = defineEmits(['onSubmit'])

const rules = reactive<FormRules>({
    workspace: [
        {
            required: true,
            message: i18n.t('validation.fillField'),
            trigger: ['blur', 'change'],
        },
    ],
    team: [
        {
            required: true,
            message: i18n.t('validation.fillField'),
            trigger: ['blur', 'change'],
        },
    ],
    company_size: [
        {
            required: true,
            message: i18n.t('validation.fillField'),
            trigger: ['blur', 'change'],
        },
    ],
    company_type: [
        {
            required: true,
            message: i18n.t('validation.fillField'),
            trigger: ['blur', 'change'],
        },
    ],
    role: [
        {
            required: true,
            message: i18n.t('validation.fillField'),
            trigger: ['blur', 'change'],
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
                setTimeout(() => {
                    loading.value = false
                    emit('onSubmit', ruleForm)
                }, 1000)
            } catch (error: any) {
                console.log('error', error.message)
                loading.value = false
            }
        }
    })
}
</script>
  
  <style scoped>
.custom-text {
    margin-top: 20px;
    font-size: 14px;
    color: #606266;
}
</style>
  