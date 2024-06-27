<template>
    <div class="min-h-screen">
        <div class="h-[95vh] flex items-center justify-center">
            <div class="text-center w-full max-w-[340px]">
                <LogoIcon class="mx-auto" />
                <h5 class="font-inter font-medium text-[19px] mt-6 mb-5">Sign in to Opus</h5>
                <el-button class="!w-full" round size="large">
                    <img class="mr-1.5" src="/@/assets/images/applications/google.svg" alt="google" />
                    Sign in with Google
                </el-button>
                <div class="flex items-center gap-5 my-8">
                    <hr class="!w-full" />
                    <span class="text-[#A9AEB8] text-xs uppercase"> or </span>
                    <hr class="!w-full" />
                </div>
                <el-form
                    @keyup.enter="submitForm(ruleFormRef)"
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :rules="rules"
                    :hide-required-asterisk="true"
                    label-position="top"
                    class="!text-xs"
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
                    <div class="mb-3 text-end">
                        <RouterLink to="/forgot-password" class="text-xs text-end text-primary hover:underline">Forgot password</RouterLink>
                    </div>
                    <div class="flex flex-col space-y-4 py-1">
                        <el-button class="w-full " size="large" round type="primary" @click="submitForm(ruleFormRef)" :loading="loading">
                            Sign in with email
                        </el-button>
                    </div>
                    <div class="newTo mt-6">
                        <p class="text-[#AAAAAA] text-xs">New to Opus?</p>
                        <router-link to="/signup" class="text-xs text-primary hover:underline"> Create an account </router-link>
                    </div>
                </el-form>
            </div>
        </div>
        <ul class="flex items-center justify-center gap-5">
            <li>
                <a href="#" class="text-[#AAAAAA] text-xs hover:underline"> Privacy Policy </a>
            </li>
            <li>
                <a href="#" class="text-[#AAAAAA] text-xs hover:underline"> Cookie Policy </a>
            </li>
            <li>
                <a href="#" class="text-[#AAAAAA] text-xs hover:underline"> Terms of Service </a>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { LogoIcon } from '/@/components/icons'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import { useUsersStore } from '/@/stores'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import sha1 from 'sha1'
import Cookies from 'js-cookie'
const i18n = useI18n()
const store = useUsersStore()
const router = useRouter()
const route = useRoute()
const ruleFormRef = ref<FormInstance>()
const keyPressEvent = ref<any>()
const ruleForm = reactive({
    email: '',
    password: '',
})

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
                await store.login(data as any)
                await store.getUserInfo()
                loading.value = false
                router.push('/dashboard')
            } catch (error: any) {
                console.log('error', error.message)
                loading.value = false
            }
        }
    })
}

onMounted(() => {})

onUnmounted(() => {})
</script>