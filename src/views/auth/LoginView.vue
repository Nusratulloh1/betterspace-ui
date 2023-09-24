<template>
    <div class=" grid grid-cols-2 h-screen relative login">
        <div class=" h-full flex items-center justify-center relative">
            <div class="flex items-center logo gap-1.5 absolute top-24">
                <img :src="logoMain" alt="logoMain">
            </div>
            <div>
                <h5>
                    Войти
                </h5>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :hide-required-asterisk="true"
                    label-position="top" class=" mt-8 w-[360px]">
                    <el-form-item prop="email" label="Номер телефона" class="!mb-5">
                        <el-input v-model.trim="ruleForm.email" type="text" size="large" autocomplete="off"
                            placeholder="Введите номер телефона" />
                    </el-form-item>
                    <el-form-item prop="password" label="Пароль" class="!mb-6">
                        <el-input v-model.trim="ruleForm.password" type="password" size="large" :show-password="true"
                            autocomplete="off" placeholder="Your password" />
                    </el-form-item>
                    <el-form-item>
                        <div class="flex items-center justify-between w-full">
                            <el-checkbox label="Запомнить меня" class=" !h-4 !text-[#344054] !font-medium" size="large" />
                            <RouterLink to="/reset-password" class=" text-primary text-sm font-semibold hover:underline">
                                Забыли пароль?
                            </RouterLink>
                        </div>
                    </el-form-item>
                    <div class="flex flex-col space-y-6 py-1">
                        <el-button class="w-full gradient" size="large" type="primary" @click="submitForm(ruleFormRef)"
                            :loading="loading">
                            Войти
                        </el-button>
                        <div class="flex items-center gap-2 is-registered">
                            <p>
                                Еще не зарегистрировались?
                            </p>
                            <RouterLink to="/register" class="text-sm text-primary font-semibold hover:underline">
                                Зарегистрироваться
                            </RouterLink>
                        </div>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="flex items-center justify-end pl-24 bg-[#F3F4F6]">
            <div class="border-[6px] rounded-2xl border-[#101828] mr-[-10px] max-w-[1024px] overflow-hidden">
                <img class="w-full max-h-[682px]" src="../../assets/images/auth/login.jpeg" alt="login">
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElMessage, FormInstance, FormRules } from "element-plus";
import { useUsersStore } from "../../stores/user";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import sha1 from "sha1";
import logoMain from '/@/assets/images/icons/logo-main.svg'
const i18n = useI18n();
const store = useUsersStore();
const router = useRouter();

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    email: "",
    password: "",
});
const rules = reactive<FormRules>({
    email: [
        {
            required: true,
            message: i18n.t("validation.fillField"),
            trigger: "blur",
        },
        {
            type: "email",
            message: i18n.t("validation.inputEmail"),
            trigger: "blur",
        },
    ],
    password: [
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
});

const loading = ref(false);
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(async (valid) => {
        if (valid) {
            try {
                loading.value = true;
                const data = {
                    ...ruleForm,
                    password: ruleForm.password,
                };
                await store.login(data);
                loading.value = false;
                router.push("/");
            } catch (error: any) {
                console.log("error", error.message);
                ElMessage({
                    message: error.message,
                    type: 'error',
                    duration: 5 * 1000,
                })
                loading.value = false;
            }
        }
    });
};
</script>

<style scoped lang="scss">
.login {

    h5 {
        color: #101828;
        font-family: 'Inter';
        font-size: 30px;
        font-weight: 600;
        line-height: 38px;
    }

    .is-registered {
        color: #475467;
        font-family: Inter;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        /* 142.857% */
    }

}
</style>
