<template>
    <div class="w-full">
        <h5 class="title">
            Подключение маркетплейсов
        </h5>
        <p class="desc mt-2">
            Выберите на каких маркетплейсах вы уже продаете товары
        </p>

        <div role="status" class=" mt-44">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 mx-auto text-gray-200 animate-spin dark:text-gray-600"
                width="66" height="66" viewBox="0 0 66 66" fill="none">
                <path
                    d="M62 33C62 36.8083 61.2499 40.5794 59.7925 44.0978C58.3351 47.6163 56.199 50.8132 53.5061 53.5061C50.8132 56.199 47.6163 58.3351 44.0978 59.7925C40.5794 61.2499 36.8083 62 33 62C29.1917 62 25.4206 61.2499 21.9022 59.7925C18.3837 58.3351 15.1868 56.199 12.4939 53.5061C9.801 50.8132 7.66488 47.6163 6.20749 44.0978C4.7501 40.5794 4 36.8083 4 33C4 29.1917 4.75011 25.4206 6.2075 21.9022C7.66489 18.3837 9.80101 15.1868 12.4939 12.4939C15.1868 9.801 18.3837 7.66487 21.9022 6.20749C25.4206 4.7501 29.1917 4 33 4C36.8083 4 40.5794 4.75011 44.0978 6.2075C47.6163 7.66489 50.8132 9.80101 53.5061 12.4939C56.199 15.1868 58.3351 18.3838 59.7925 21.9022C61.2499 25.4206 62 29.1917 62 33L62 33Z"
                    stroke="#F2F4F7" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" />
                <path
                    d="M33 4C36.8083 4 40.5794 4.75011 44.0978 6.20749C47.6163 7.66488 50.8132 9.80101 53.5061 12.4939C56.199 15.1868 58.3351 18.3837 59.7925 21.9022C61.2499 25.4206 62 29.1917 62 33"
                    stroke="url(#paint0_linear_659_12692)" stroke-width="8" stroke-linecap="round"
                    stroke-linejoin="round" />
                <defs>
                    <linearGradient id="paint0_linear_659_12692" x1="4" y1="4" x2="71.8404" y2="4.87594"
                        gradientUnits="userSpaceOnUse">
                        <stop offset="0.450283" stop-color="#B540F6" />
                        <stop offset="0.750161" stop-color="#F18F8C" />
                        <stop offset="0.832166" stop-color="#FB9D79" />
                    </linearGradient>
                </defs>
            </svg>
            <span class="sr-only">Loading...</span>
        </div>
        <h3 class=" text-2xl font-medium max-w-[766px] text-center mt-5 mx-auto">
            Пожалуйста, подождите, идет процесс синхронизации ваших данных из маркетплейсов с нашей платформой.
        </h3>

    </div>
</template>
<script lang="ts" setup>
import { on } from "process";
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter()
const route = useRoute()
const timeOut = ref()
onMounted(() => {
    timeOut.value = setTimeout(() => {
        router.push('/onboarding?step=5')
    }, 5000);
})
</script>
<style lang="scss" scoped></style>