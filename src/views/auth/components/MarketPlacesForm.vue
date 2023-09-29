<template>
    <div class="w-full">
        <h5 class="title">
            Подключение маркетплейсов
        </h5>
        <p class="desc mt-2">
            Выберите на каких маркетплейсах вы уже продаете?
        </p>
        <div class="card !py-2">
            <div v-for="marketplace in marketplaces">
                <div class="flex items-center justify-between py-4">
                    <label :for="`${marketplace.id}`"
                        class="flex items-center gap-4 cursor-pointer text-[#344054] font-semibold">
                        <img :src="marketplace.image" width="32" height="32" :alt="marketplace.title">
                        {{ marketplace.title }}
                    </label>
                    <el-checkbox :id="`${marketplace.id}`" class=" gradiented" v-model="marketplace.selected"
                        size="large" />
                </div>
                <hr v-if="!marketplace.notOpened" />
            </div>
        </div>
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
<script setup>
import marketplaces from '/@/mock/brands.js'
</script>
<style lang="scss" scoped></style>