<template>
    <div class=" grid grid-cols-2 h-screen relative login">
        <div class=" h-full flex items-center justify-center relative">
            <div class="flex items-center logo gap-1.5 absolute top-24">
                <Icon size="27" name="local-logo-main" class=" fill-[#3D3D3D]" />
                <h4>
                    Deal<span>me</span>
                </h4>
            </div>
            <div>
                <div class=" rounded-xl border border-[#EAECF0] w-14 h-14 mx-auto mb-4 shadow-sm">
                    <Icon size="28" name="local-key" />
                </div>
                <h5>
                    Забыли пароль?
                </h5>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :hide-required-asterisk="true"
                    label-position="top" class=" mt-8 w-[360px]">
                    <el-form-item prop="phone" label="Номер телефона" class="!mb-5">
                        <el-input v-model.trim="ruleForm.phone" v-mask="'+998 ## ###-##-##'" type="text" size="large"
                            autocomplete="off" placeholder="Введите номер телефона" />
                    </el-form-item>
                    <el-form-item prop="code" label="Код подтверждения" class="!mb-6">
                        <el-input v-model.trim="ruleForm.code" v-mask="'####'" type="text" size="large" autocomplete="off"
                            placeholder="****" />
                    </el-form-item>
                    <div class="flex flex-col space-y-6 py-1">
                        <el-button class="w-full gradient" size="large" type="primary" @click="submitForm(ruleFormRef)"
                            :loading="loading">
                            Сбросить пароль
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
                <img class="w-full max-h-[682px]" src="../../assets/images/login.svg" alt="login">
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

const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    phone: "",
    code: "",
});
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
});

const loading = ref(false);
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(async (valid) => {
        if (valid) {
            try {
                loading.value = true;
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
            font-size: 33.648px;
            font-weight: 700;

            span {
                background: linear-gradient(91deg, #B540F6 52.01%, #F18F8C 86.64%, #FB9D79 96.11%);
                background-clip: text;
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                font-family: 'Pangram';
                font-size: 33.648px;
                font-weight: 700;
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

    .is-registered {
        color: #475467;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
    }

}
</style>
