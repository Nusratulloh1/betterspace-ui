<template>
    <el-form
        @keyup.enter="submitForm(ruleFormRef)"
        ref="ruleFormRef"
        :model="ruleForm"
        :hide-required-asterisk="true"
        label-position="top"
        class="!text-xs"
    >
        <p class="text-xs  text-[#444444] text-start mb-4">Enter your collaborators emails</p>
        <el-form-item
            v-for="(form, index) in ruleForm.emails"
            :key="form.id"
            :prop="'emails.' + index + '.email'"
            :rules="[
                {
                    required: true,
                    message: 'Please input email address',
                    trigger: 'blur',
                },
                {
                    type: 'email',
                    message: 'Please input correct email address',
                    trigger: ['blur', 'change'],
                },
            ]"
        >
            <el-input v-model.trim="form.email" type="text" autocomplete="off" placeholder="teammate@email.com">
                <template #prefix>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M14.2 5H5.8C4.80589 5 4 5.83947 4 6.875V13.125C4 14.1605 4.80589 15 5.8 15H14.2C15.1941 15 16 14.1605 16 13.125V6.875C16 5.83947 15.1941 5 14.2 5Z"
                            stroke="#1458DD"
                        />
                        <path d="M14.6663 5.1001H5.33301L9.99968 9.50012L14.6663 5.1001Z" stroke="#1458DD" stroke-linejoin="round" />
                    </svg>
                </template>
            </el-input>
        </el-form-item>
        <button type="button" @click="addUser" class="font-semibold text-xs  flex items-center gap-2 text-[#0071FF]">
            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M18.9998 10.0938C18.9998 10.2513 18.9373 10.4023 18.8259 10.5136C18.7146 10.625 18.5635 10.6875 18.4061 10.6875H17.2186V11.875C17.2186 12.0325 17.156 12.1835 17.0447 12.2949C16.9333 12.4062 16.7823 12.4688 16.6248 12.4688C16.4673 12.4688 16.3163 12.4062 16.205 12.2949C16.0936 12.1835 16.0311 12.0325 16.0311 11.875V10.6875H14.8436C14.6861 10.6875 14.5351 10.625 14.4237 10.5136C14.3124 10.4023 14.2498 10.2513 14.2498 10.0938C14.2498 9.93632 14.3124 9.78529 14.4237 9.67394C14.5351 9.56259 14.6861 9.50004 14.8436 9.50004H16.0311V8.31254C16.0311 8.15507 16.0936 8.00404 16.205 7.89269C16.3163 7.78134 16.4673 7.71879 16.6248 7.71879C16.7823 7.71879 16.9333 7.78134 17.0447 7.89269C17.156 8.00404 17.2186 8.15507 17.2186 8.31254V9.50004H18.4061C18.5635 9.50004 18.7146 9.56259 18.8259 9.67394C18.9373 9.78529 18.9998 9.93632 18.9998 10.0938ZM14.7048 14.4616C14.8061 14.5822 14.8554 14.7382 14.8418 14.8952C14.8281 15.0522 14.7527 15.1974 14.632 15.2987C14.5114 15.4001 14.3554 15.4494 14.1984 15.4358C14.0414 15.4221 13.8962 15.3467 13.7948 15.226C12.3016 13.4477 10.2487 12.4688 8.01543 12.4688C5.78219 12.4688 3.7293 13.4477 2.23602 15.226C2.13465 15.3466 1.98953 15.4219 1.8326 15.4355C1.67566 15.4491 1.51977 15.3998 1.3992 15.2984C1.27864 15.197 1.20328 15.0519 1.18971 14.895C1.17614 14.738 1.22547 14.5821 1.32684 14.4616C2.43567 13.142 3.81465 12.2046 5.34727 11.7029C4.41649 11.1231 3.69985 10.256 3.30576 9.23276C2.91167 8.20948 2.86157 7.08568 3.16305 6.03139C3.46452 4.9771 4.10117 4.04968 4.97667 3.38944C5.85217 2.72921 6.91889 2.37207 8.01543 2.37207C9.11198 2.37207 10.1787 2.72921 11.0542 3.38944C11.9297 4.04968 12.5663 4.9771 12.8678 6.03139C13.1693 7.08568 13.1192 8.20948 12.7251 9.23276C12.331 10.256 11.6144 11.1231 10.6836 11.7029C12.2162 12.2046 13.5952 13.142 14.7048 14.4616ZM8.01543 11.2813C8.77874 11.2813 9.52491 11.0549 10.1596 10.6309C10.7943 10.2068 11.2889 9.60404 11.581 8.89883C11.8731 8.19362 11.9496 7.41763 11.8007 6.66899C11.6517 5.92034 11.2842 5.23267 10.7444 4.69292C10.2047 4.15318 9.517 3.78561 8.76836 3.6367C8.01971 3.48778 7.24372 3.56421 6.53851 3.85632C5.83331 4.14842 5.23055 4.64309 4.80648 5.27776C4.38241 5.91243 4.15606 6.6586 4.15606 7.42191C4.15724 8.44512 4.56423 9.42608 5.28774 10.1496C6.01126 10.8731 6.99222 11.2801 8.01543 11.2813Z"
                    fill="#0071FF"
                />
            </svg>
            Add one
        </button>
        <hr class="mt-6 mb-7" />
        <div class="flex flex-col space-y-4">
            <el-button class="w-full" size="large" round type="primary" @click="submitForm(ruleFormRef)" :loading="loading"> Continue </el-button>
            <button class="text-[#4C4F6B] text-xs hover:underline" @click="emit('onSubmit', ruleForm)">I'll do this later</button>
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
    emails: [
        {
            id: 1,
            email: '',
        },
        {
            id: 2,
            email: '',
        },
        {
            id: 3,
            email: '',
        },
    ],
})

const emit = defineEmits(['onSubmit'])
const addUser = () => {
    ruleForm.emails.push({
        id: 1,
        email: '',
    })
}
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
  