<template>
    <div>
        <h5 class="title">
            Поздравляем! Теперь ты один из нас
        </h5>
        <p class="desc mt-2">
            Начните управлять и продавать уже сегодня с нашим специальным премиум-предложением.
        </p>
        <div class="card !p-6 !mt-12 space-y-6">
            <div class="tariff transition-all duration-200" :class="{ 'active': tariff.selected }" v-for="tariff in tariffs"
                :key="tariff.id">
                <div class="flex items-center justify-between p-4 transition-all duration-200"
                    :class="{ ' !bg-[#F9F5FF]': tariff.selected }">
                    <label class="flex items-center gap-4 cursor-pointer" :for="'box' + tariff.id">
                        <img :src="tariff.image" alt="Начинающий">
                        <h6 class="text-[#344054] font-semibold text-base">
                            {{ tariff.title }}
                        </h6>
                    </label>
                    <el-checkbox :id="'box' + tariff.id" v-model="tariff.selected" type="primary" class=" rounded" />
                </div>
                <hr class="transition-all duration-200 border-[1.5px]" :class="{ ' !border-primary': tariff.selected }" />
                <div class="p-4">
                    <p class="text-[#475467] text-sm">
                        {{ tariff.desc }}
                    </p>
                </div>
            </div>
            <el-button @click="submitForm" type="primary" class="gradient !h-12 !w-full">
                Начать использовать
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import tariff1 from '/@/assets/images/tariff/1.png'
import tariff2 from '/@/assets/images/tariff/2.png'
import tariff3 from '/@/assets/images/tariff/3.png'
import { reactive, ref } from "vue";
import { ElMessage, FormInstance, FormRules } from "element-plus";
import { useUsersStore } from "/@/stores/user";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
const i18n = useI18n();
const store = useUsersStore();
const router = useRouter();
const tariffs = ref([
    {
        id: 1,
        image: tariff1,
        title: "Стандартный пакет -  Бесплатно",
        desc: "Идеальный старт для малого бизнеса или индивидуальных предпринимателей. Управляйте своим первым магазином и выгружайте данные в удобном для вас формате, управляйте достаточным количеством SKU, без каких-либо затрат.",
        selected: true,
    },
    {
        id: 2,
        image: tariff2,
        title: "Начинающий пакет -  Сум / в месяц",
        desc: "Для начинающих онлайн продавцов, стремящихся к росту. Управляйте двумя магазинами и выгружайте данные в удобном для вас формате.",
        selected: false,
    },
    {
        id: 3,
        image: tariff3,
        title: "Бизнес пакет  -  Сум / в месяц",
        desc: "Полное решение для средних компаний. Управляйте тремя магазинами и выгружайте данные в удобном для вас формате управляйтее большим количеством SKU.",
        selected: false,
    },
    {
        id: 4,
        image: tariff1,
        title: "Империум пакет -  Сум / в месяц",
        desc: "Для серьезных предпринимателей, стремящихся к росту. Управляйте неограниченным количеством магазинов и выгружайте данные в удобном для вас формате, управляйте бесконечным количеством SKU.",
        selected: false,
    },
])
const ruleFormRef = ref<FormInstance>();
const ruleForm = reactive({
    email: "islamakramov.b@gmail.com",
    password: "Ai3003008",
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
const submitForm = async () => {


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

};
</script>
<style lang="scss" scoped>
.tariff {
    width: 100%;
    border-radius: 12px;
    border: 2px solid #EAECF0;
    background: #FFF;
    overflow: hidden;

    &.active {
        border: 2px solid #7F56D9;
    }
}
</style>