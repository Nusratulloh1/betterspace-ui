<template>
    <div>
        <h5 class="title">
            Подключение маркетплейсов
        </h5>
        <p class="desc mt-2">
            Заполните свои данные, чтобы мы могли открыть аккаунты за Вас!
        </p>
        <div class="card !p-6 h-[424px]"></div>
        <div class="w-[80%] mx-auto">
            <el-button @click="$router.push('/onboarding?step=3')" type="primary" class="gradient !h-12 !w-full">
                Продолжить
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped></style>