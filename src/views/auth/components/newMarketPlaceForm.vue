<template>
    <div>
        <h5 class="title">
            Отлично, но еще не все!
        </h5>
        <p class="desc mt-2">
            Хотели ли бы Вы продавать и в других маркетплейсах?
        </p>
        <div class="card !p-6 !mt-9 flex items-center justify-between">
            <div>
                <h4 class=" text-sm font-medium text-[#344054]">
                    Подключенные маркетплейсы
                </h4>
                <div class="flex items-center gap-2 mt-4">
                    <img v-for="marketplace in marketplaces.slice(0, 4)" width="32" height="32" :src="marketplace.image"
                        alt="img">
                </div>
            </div>
            <el-button class="!text-sm !text-[#344054] !font-semibold" @click="$router.push('/onboarding')">
                <Icon size="18" name="local-edit-pen " class=" !fill-none mr-2 !stroke-[#0D121C]" />
                Изменить
            </el-button>
        </div>
        <div class="card !p-6">
            <div class="flex items-center gap-2 mb-4">
                <p class=" text-sm text-[#384250] font-medium">
                    Зарегистрируйте меня на всех популярных маркетплейсах:
                </p>
                <el-tooltip class="box-item" effect="dark"
                    content="Авторегистрация на всех популярных площадках для увеличения продаж" placement="bottom">
                    <QuestionFilled class="w-4 h-4" color="rgba(102, 112, 133, 1)" />
                </el-tooltip>
            </div>
            <div v-for="marketplace in marketplaces.slice(4, 10)">
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
        <div class="w-[80%] mx-auto">
            <el-button @click="$router.push('/onboarding?step=4')" type="primary" class="gradient !h-12 !w-full">
                Продолжить
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import marketplaces from '/@/mock/brands.js'
import { QuestionFilled, EditPen } from '@element-plus/icons-vue'
</script>
<style lang="scss" scoped></style>