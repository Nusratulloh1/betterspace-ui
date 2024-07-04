<template>
    <div class="min-h-screen">
        <div class="h-[95vh] flex items-center justify-center">
            <div class="box">
                <div class="text-center w-full max-w-[340px]">
                    <LogoIcon class="mx-auto" />
                    <h5 class="font-medium text-[19px] mt-8 mb-3">Create your Opus account</h5>
                    <p class="text-[#676C76] text-xs">Start to collaborate in context with your teammates now.</p>
                    <el-form
                        @keyup.enter="submitForm(ruleFormRef)"
                        ref="ruleFormRef"
                        :model="ruleForm"
                        :rules="rules"
                        :hide-required-asterisk="true"
                        label-position="top"
                        class="!text-xs mt-5"
                    >
                        <el-form-item prop="email">
                            <el-input v-model.trim="ruleForm.email" type="text" autocomplete="off" placeholder="Enter your email" />
                        </el-form-item>
                        <div class="flex flex-col space-y-4 py-1">
                            <el-button class="w-full" size="large" round type="primary" @click="submitForm(ruleFormRef)" :loading="loading">
                                Sign in with email
                            </el-button>
                        </div>
                    </el-form>
                    <div class="flex items-center gap-5 my-5">
                        <hr class="!w-full" />
                        <span class="text-[#A9AEB8] text-xs uppercase"> or </span>
                        <hr class="!w-full" />
                    </div>
                    <googleButton />
                    <div class="newTo mt-6">
                        <p class="text-[#AAAAAA] text-xs !leading-[14.5px]">Already using Opus?</p>
                        <router-link to="/signin" class="text-xs text-primary !leading-[14.5px] hover:underline">
                            Sign in to your account</router-link
                        >
                    </div>
                </div>
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
import googleButton from '/@/components/common/googleButton.vue'
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
})

const loading = ref(false)
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate(async (valid) => {
        if (valid) {
            try {
                loading.value = true
                // await store.login(ruleForm as any)
                // await store.getUserInfo()
                setTimeout(() => {
                    loading.value = false
                    router.push(`/verify?email=${ruleForm.email}`)
                }, 2000)
            } catch (error: any) {
                console.log('error', error.message)
                loading.value = false
            }
        }
    })
}
</script>
<style lang="scss" scoped>
.box {
    box-shadow: 0px 16px 32px 0px #9da6b63d;
    border-radius: 70px;
    width: 100%;
    max-width: 500px;
    padding: 32px 80px 28px 80px;
    background: #fbfbfb;
}
</style>