<template>
    <div class=" grid grid-cols-2 h-screen relative login">
        <div class=" h-full flex items-center justify-center relative">
            <div class="flex items-center logo gap-1.5 absolute top-24">
                <img :src="logoMain" alt="logoMain">
            </div>
            <div>
                <h5>
                    Регистрация
                </h5>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" :hide-required-asterisk="true"
                    label-position="top" class=" mt-8 w-[360px]">
                    <el-form-item prop="name" label="Имя*" class="!mb-5">
                        <el-input v-model.trim="ruleForm.name" type="text" size="large" autocomplete="off"
                            placeholder="Введите ваше имя" />
                    </el-form-item>
                    <el-form-item prop="phone" label="Номер телефона" class="!mb-5">
                        <el-input v-model.trim="ruleForm.phone" v-mask="'+998 ## ###-##-##'" type="text" size="large"
                            autocomplete="off" placeholder="Введите номер телефона" />
                    </el-form-item>
                    <el-form-item prop="password" label="Пароль*" class="!mb-6">
                        <el-input v-model.trim="ruleForm.password" type="password" size="large" :show-password="true"
                            autocomplete="off" placeholder="Создать пароль" />
                    </el-form-item>
                    <div class="flex flex-col space-y-6 py-1">
                        <el-button class="w-full gradient" size="large" type="primary" @click="submitForm(ruleFormRef)"
                            :loading="loading">
                            Зарегистрироваться
                        </el-button>
                        <div class="flex items-center justify-center gap-2 is-registered">
                            <p>
                                У вас уже есть аккаунт?
                            </p>
                            <RouterLink to="/login" class="text-sm text-primary font-semibold hover:underline">
                                Авторизоваться
                            </RouterLink>
                        </div>
                    </div>
                </el-form>
            </div>
        </div>
        <div class="flex items-center justify-center px-8 bg-[#F3F4F6]">
            <div class="w-full">
                <el-carousel ref="carousel" @change="changedSlider" :pause-on-hover="false" :interval="5000"
                    indicator-position="outside" style="transition: .5s ease-out all;" class="w-full !h-[604px]">
                    <el-carousel-item class=" !w-full !h-[704px]" arrow="never">
                        <div>
                            <img src="/@/assets/images/auth/reg-1.svg" class=" mx-auto" alt="">
                            <div class=" mt-20 max-w-[476px] mx-auto text-center">
                                <h6 class=" font-semibold text-2xl">
                                    Удобная аналитика
                                </h6>
                                <p class=" font-medium text-[#667085] mt-2">
                                    Получите полный контроль над вашими продажами с нашей детализированной
                                    аналитикой.Отслеживайте
                                    проданные, заказанные и возвращенные товары в реальном времени.
                                </p>
                            </div>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="/@/assets/images/auth/reg-2.svg" class=" mx-auto" alt="">
                        <div class=" mt-20 max-w-[476px] mx-auto text-center">
                            <h6 class=" font-semibold text-2xl">
                                Мониторинг маркетплейсов
                            </h6>
                            <p class=" font-medium text-[#667085] mt-2">
                                Контроллируйте по отдельности ваши продажи и зарезервированные товары для каждого
                                маркетплейса
                            </p>
                        </div>
                    </el-carousel-item>
                    <el-carousel-item>
                        <img src="/@/assets/images/auth/reg-3.svg" class=" mx-auto" alt="">
                        <div class=" mt-10 max-w-[476px] mx-auto text-center">
                            <h6 class=" font-semibold text-2xl">
                                Контроль остатков
                            </h6>
                            <p class=" font-medium text-[#667085] mt-2">
                                Контроллируйте свои остатки зарезервированные для каждого маркетплейса, а мы покажем каких
                                товаров у вас не хватает, заканчиваются или долго хранятся
                            </p>
                        </div>
                    </el-carousel-item>
                </el-carousel>
                <div class="flex items-center gap-16 justify-center">
                    <button @click="prev()">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5 15.4795L7.5 10.4795L12.5 5.47949" stroke="#0C111D" stroke-width="1.67"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                    <div class="flex items-center gap-4 p-3">
                        <button class=" bg-[#667085] w-[10px] h-[10px] rounded-md"
                            :class="{ '!bg-[#0C111D]': activeSlide === i }" @click="setActiveItem(i)"
                            v-for="i in [0, 1, 2]"></button>
                    </div>
                    <button @click="next()">
                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.5 15.4795L12.5 10.4795L7.5 5.47949" stroke="#0C111D" stroke-width="1.67"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { FormInstance, FormRules } from "element-plus";
import { phonePattern } from "/@/utils/mappers";
import { useUsersStore } from "../../stores/user";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import sha1 from "sha1";
import logoMain from '/@/assets/images/icons/logo-main.svg'
const i18n = useI18n();
const store = useUsersStore();
const router = useRouter();
const carousel: any = ref()
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    name: "",
    phone: "",
    password: "",
});
const rules = reactive<FormRules>({
    name: [
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
    phone: [
        {
            required: true,
            message: i18n.t("validation.fillField"),
            trigger: "blur",
        },
        {
            type: "string",
            required: true,
            pattern: phonePattern,
            message: i18n.t("validation.pattern"),
            trigger: ["blur", "change"],
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
const activeSlide = ref(0)
const setActiveItem = (i: number) => {
    carousel.value.setActiveItem(i)
}
const next = () => {
    carousel.value.next()
}
const prev = () => {
    carousel.value.prev()
}
const changedSlider = (val: any) => {
    activeSlide.value = val

}
const loading = ref(false);
const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return;
    await formEl.validate(async (valid) => {
        if (valid) {
            try {
                loading.value = true;
                const data = {
                    ...ruleForm,
                    password: sha1(ruleForm.password),
                };
                // await store.login(data);
                loading.value = false;
                router.push("/");
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

    h5 {
        color: #101828;
        font-family: 'Inter';
        font-size: 32px;
        font-weight: 600;
        text-align: center;
        line-height: 38px;
    }

    .is-registered {
        p {
            color: #475467;
            font-family: Inter;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
        }

        /* 142.857% */
    }

}
</style>
