<template>
    <div class=" grid grid-cols-2 h-screen relative login">
        <div class=" h-full flex items-center justify-center relative">
            <div class="flex items-center logo gap-1.5 absolute top-24">
                <Icon size="30" name="local-logo-main" style="fill: rgba(17, 25, 39, 1);" />
                <h4>
                    Deal<span>me</span>
                </h4>
            </div>
            <div>
                <template v-if="step === 1">
                    <div
                        class=" rounded-xl border border-[#EAECF0] w-14 h-14 mx-auto mb-4 shadow-sm flex items-center justify-center">
                        <Icon size="28" name="local-key" class=" !fill-none" />
                    </div>
                    <h5>
                        Забыли пароль?
                    </h5>
                </template>
                <template v-else-if="step === 2">
                    <div
                        class=" rounded-xl border border-[#EAECF0] w-14 h-14 mx-auto mb-4 shadow-sm flex items-center justify-center">
                        <Icon size="28" name="local-lock" class=" !fill-none" />
                    </div>
                    <h5>
                        Введите новый пароль
                    </h5>
                    <p>
                        Ваш новый пароль должен отличаться от вашего старого
                    </p>
                </template>
                <template v-else>
                    <div
                        class=" rounded-xl border border-[#EAECF0] w-14 h-14 mx-auto mb-4 shadow-sm flex items-center justify-center">
                        <Icon size="28" name="local-success" class=" !fill-none" />
                    </div>
                    <h5>
                        Пароль сброшен
                    </h5>
                    <p>
                        Ваш пароль был успешно сброшен. Теперь вы можете снова войти в приложение
                    </p>
                    <el-button class="w-full gradient mt-8" size="large" type="primary" @click="router.push('login')">
                        Войти
                    </el-button>
                </template>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :hide-required-asterisk="true"
                    label-position="top" class=" mt-8 w-[360px]">
                    <template v-if="step === 1">
                        <el-form-item prop="phone" label="Номер телефона" class="!mb-5">
                            <el-input v-model.trim="ruleForm.phone" v-mask="'+998 ## ###-##-##'" type="text" size="large"
                                autocomplete="off" placeholder="Введите номер телефона" />
                        </el-form-item>
                        <el-form-item prop="code" label="Код подтверждения" class="!mb-6">
                            <div class="flex items-center relative w-full">
                                <el-input v-model.trim="ruleForm.code" v-mask="'####'" type="text" size="large"
                                    autocomplete="off" placeholder="****" />
                                <button type="button" class=" absolute  right-2 text-[#6941C6] text-xs font-medium">
                                    Отправить заново
                                </button>
                            </div>
                        </el-form-item>
                    </template>
                    <template v-else-if="step === 2">
                        <el-form-item prop="password" label="Password" class="!mb-6">
                            <el-input v-model.trim="ruleForm.password" type="password" size="large" :show-password="true"
                                autocomplete="off" />
                        </el-form-item>
                        <el-form-item prop="confirm_password" label="Confirm password" class="!mb-6">
                            <el-input v-model.trim="ruleForm.confirm_password" type="password" size="large"
                                :show-password="true" autocomplete="off" />
                        </el-form-item>
                    </template>
                    <template v-else>
                        <div></div>
                    </template>
                    <div class="flex flex-col space-y-8 py-1" v-if="step !== 3">
                        <el-button class="w-full gradient" size="large" type="primary" @click="submitForm(ruleFormRef)"
                            :loading="loading">
                            Сбросить пароль
                        </el-button>
                        <RouterLink to="/login" class="is-login">
                            <Icon size="20" name="local-arrow-left" class=" !fill-none" />
                            Вернуться в логин страницу
                        </RouterLink>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="flex items-center justify-end pl-24 bg-[#F3F4F6]">
            <div class="border-[6px] rounded-2xl border-[#101828] mr-[-10px] max-w-[1024px] overflow-hidden">
                <img class="w-full max-h-[682px]" src="../../assets/images/auth/login.svg" alt="login">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { useUsersStore } from "../../stores/user";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import sha1 from "sha1";
import { phonePattern } from "/@/utils/mappers";
const i18n = useI18n();
const store = useUsersStore();
const router = useRouter();
const step = ref(1)
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    phone: "",
    code: "",
    password: "",
    confirm_password: ""
});
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === "") {
        callback(new Error(i18n.t("validation.fillField")));
    } else {
        if (ruleForm.confirm_password !== "") {
            if (!ruleFormRef.value) return;
            ruleFormRef.value.validateField("confirm_password", () => null);
        }
        callback();
    }
};
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === "") {
        callback(new Error(i18n.t("validation.fillField")));
    } else if (value !== ruleForm.password) {
        callback(new Error(i18n.t("validation.passwordsDontMatch")));
    } else {
        callback();
    }
};
const rules = reactive<FormRules>({
    phone: [
        {
            required: true,
            message: i18n.t("validation.fillField"),
            trigger: ["blur", "change"],
        },
        {
            type: "string",
            required: true,
            pattern: phonePattern,
            message: i18n.t("validation.pattern"),
            trigger: ["blur", "change"],
        },
    ],
    code: [
        {
            required: true,
            message: i18n.t("validation.fillField"),
            trigger: "blur",
        },
        {
            min: 4,
            message: i18n.t("validation.minimumLength", { value: 4 }),
            trigger: "blur",
        },
    ],
    password: [
        { validator: validatePass, trigger: "blur" },
        {
            required: true,
            message: i18n.t("validation.fillField"),
            trigger: "blur",
        },
        {
            min: 8,
            message: i18n.t("validation.minimumLength", { value: 8 }),
            trigger: "blur",
        },
    ],
    confirm_password: [

        {
            required: true,
            message: i18n.t("validation.fillField"),
            trigger: "blur",
        },
        {
            validator: validatePass2,
            trigger: "blur",
        },
    ],
});

const loading = ref(false);
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(async (valid) => {
        if (valid) {
            try {
                loading.value = true;
                if (step.value == 1) step.value = 2
                else step.value = 3
                // await store.login(data);
                loading.value = false;
            } catch (error: any) {
                console.log("error", error.message);

                loading.value = false;
            }
        }
    });
};
</script>

<style scoped lang="scss">
.login {
    .logo {
        h4 {
            color: #3D3D3D;
            font-family: 'Pangram';
            font-size: 25.648px;
            font-weight: 700;

            span {
                background: linear-gradient(91deg, #B540F6 52.01%, #F18F8C 86.64%, #FB9D79 96.11%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-family: 'Pangram';
                font-size: 25.883px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
            }
        }
    }

    h5 {
        color: #101828;
        text-align: center;
        font-size: 32px;
        font-weight: 600;
        line-height: 44px;
        letter-spacing: -0.64px;
    }

    p {
        color: #475467;
        text-align: center;
        font-family: Inter;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        width: 360px;
        margin-top: 10px;
    }

    .is-login {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        color: #475467;
        font-size: 14px;
        font-weight: 600;
        line-height: 20px;

        &:hover {
            text-decoration: underline;
        }
    }

}
</style>
