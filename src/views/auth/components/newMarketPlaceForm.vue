<template>
    <div>
        <h5 class="title">
            Отлично, но еще не все!
        </h5>
        <p class="desc mt-2">
            Хотели ли бы Вы продавать и в других маркетплейсах?
        </p>
        <div class="card !p-6 !mt-9 h-[116px]"></div>
        <div class="card !p-6 h-[388px]"></div>
        <div class="w-[80%] mx-auto">
            <el-button @click="$router.push('/onboarding?step=4')" type="primary" class="gradient !h-12 !w-full">
                Продолжить
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped></style>