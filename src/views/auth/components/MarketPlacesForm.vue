<template>
    <div class="w-full">
        <h5 class="title">
            Подключение маркетплейсов
        </h5>
        <p class="desc mt-2">
            Выберите на каких маркетплейсах вы уже продаете?
        </p>
        <div class="card h-[584px]"></div>
        <div class="w-[80%] mx-auto flex items-center mt-10">
            <el-button @click="$router.push('/register')" class="!h-12 !text-[#344054] !font-semibold !w-[50%]">
                У меня нет ни одного аккаунта
            </el-button>
            <el-button @click="$router.push('/onboarding?step=2')" type="primary" class="gradient !h-12 !w-[50%]">
                Продолжить
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped></style>