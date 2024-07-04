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
      <el-form-item prop="first_name" label="First name">
        <el-input
          v-model.trim="ruleForm.first_name"
          type="text"
          autocomplete="off"
          placeholder="Your first name"
        />
      </el-form-item>
      <el-form-item prop="last_name" label="Last name">
        <el-input
          v-model.trim="ruleForm.last_name"
          type="text"
          autocomplete="off"
          placeholder="Your last name"
        />
      </el-form-item>
      <el-form-item prop="password" label="Password">
        <el-input
          v-model.trim="ruleForm.password"
          type="password"
          :show-password="true"
          autocomplete="off"
          placeholder="Put your password"
          @input="validatePassword"
        />
      </el-form-item>
      <div class="space-y-1 mt-[-4px] mb-3">
        <p class="flex items-center gap-2 text-xs" :class="passwordLengthClass">
          <span class="w-1 h-1 rounded-full" :class="passwordLengthDotClass"></span>
          Use 8 or more characters
        </p>
        <p class="flex items-center gap-2 text-xs" :class="passwordLetterClass">
          <span class="w-1 h-1 rounded-full" :class="passwordLetterDotClass"></span>
          Use a minimum of 1 letter
        </p>
        <p class="flex items-center gap-2 text-xs" :class="passwordNumberClass">
          <span class="w-1 h-1 rounded-full" :class="passwordNumberDotClass"></span>
          Use a minimum of 1 number
        </p>
      </div>
      <el-form-item>
        <el-checkbox v-model="check">
          I agree to Opus
          <a href="http://" class="text-primary  text-xs" target="_blank" rel="noopener noreferrer"> terms and conditions</a>
        </el-checkbox>
      </el-form-item>
      <hr class="mt-[-8px] mb-7" />
      <div class="flex flex-col space-y-4 py-1">
        <el-button
          :disabled="!check"
          class="w-full"
          size="large"
          round
          type="primary"
          @click="submitForm(ruleFormRef)"
          :loading="loading"
        >
          Continue
        </el-button>
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
    first_name: '',
    last_name: '',
    password: '',
  })
  const check = ref(false)
  const emit = defineEmits(['onSubmit'])
  
  const rules = reactive<FormRules>({
    first_name: [
      {
        required: true,
        message: i18n.t('validation.fillField'),
        trigger: 'blur',
      },
    ],
    last_name: [
      {
        required: true,
        message: i18n.t('validation.fillField'),
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
      {
        validator: (rule, value, callback) => {
          if (!/[a-zA-Z]/.test(value)) {
            callback(new Error(i18n.t('validation.minimumLetter')));
          } else if (!/[0-9]/.test(value)) {
            callback(new Error(i18n.t('validation.minimumNumber')));
          } else {
            callback();
          }
        },
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
  
  // Password validation computed properties
  const passwordLengthClass = computed(() => ({
    'text-[#999999]': ruleForm.password.length < 8,
    'text-[#64D390]': ruleForm.password.length >= 8,
  }))
  const passwordLengthDotClass = computed(() => ({
    'bg-[#F02C2C]': ruleForm.password.length < 8,
    'bg-[#64D390]': ruleForm.password.length >= 8,
  }))
  
  const passwordLetterClass = computed(() => ({
    'text-[#999999]': !/[a-zA-Z]/.test(ruleForm.password),
    'text-[#64D390]': /[a-zA-Z]/.test(ruleForm.password),
  }))
  const passwordLetterDotClass = computed(() => ({
    'bg-[#F02C2C]': !/[a-zA-Z]/.test(ruleForm.password),
    'bg-[#64D390]': /[a-zA-Z]/.test(ruleForm.password),
  }))
  
  const passwordNumberClass = computed(() => ({
    'text-[#999999]': !/[0-9]/.test(ruleForm.password),
    'text-[#64D390]': /[0-9]/.test(ruleForm.password),
  }))
  const passwordNumberDotClass = computed(() => ({
    'bg-[#F02C2C]': !/[0-9]/.test(ruleForm.password),
    'bg-[#64D390]': /[0-9]/.test(ruleForm.password),
  }))
  
  const validatePassword = () => {
    ruleFormRef.value?.validateField('password')
  }
  </script>
  
  <style scoped>
  .custom-text {
    margin-top: 20px;
    font-size: 14px;
    color: #606266;
  }
  </style>
  