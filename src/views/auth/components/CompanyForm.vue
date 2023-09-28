<template>
    <div>
        <h5 class="title">
            Отлично! Ещё чуть-чуть.
        </h5>
        <p class="desc mt-2">
            Заполните профиль для полноценного использования приложения!
        </p>
        <div class="card !p-6 h-[440px] !mt-12"></div>
        <div class="w-[80%] mx-auto mt-12">
            <el-button @click="$router.push('/onboarding?step=6')" type="primary" class="gradient !h-12 !w-full">
                Продолжить
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped></style>