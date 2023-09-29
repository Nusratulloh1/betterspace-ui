<template>
    <div class="pr-5">
        <div class="flex justify-between items-center mb-5">
            <div>
                <h6 class="text-[#101828] text-lg font-semibold">
                    Маркетплейсы
                </h6>
                <p class="text-[#475467] text-sm">
                    Здесь вы можете отключать и выключать синхронизацию с маркетплейсами
                </p>
            </div>
        </div>
        <hr />
        <el-form ref="ruleFormRef" :hide-required-asterisk="true" label-position="top" class=" w-full">
            <div v-for="marketplace in marketplaces">
                <div class="flex items-center justify-between py-4">
                    <label :for="`${marketplace.id}`"
                        class="flex items-center gap-4 font-semibold text-[#344054] cursor-pointer">
                        <object type="image/svg+xml" width="32" height="32" :data="marketplace.image">svg-image</object>
                        <!-- <img :src="marketplace.image" :alt="marketplace.title" width="32" height="32"> -->
                        {{ marketplace.title }}
                    </label>
                    <button v-if="marketplace.notOpened" class=" text-[#667085] text-sm font-semibold underline">
                        Открыть аккаунт
                    </button>
                    <el-switch v-else :id="`${marketplace.id}`" v-model="marketplace.selected" />
                </div>
                <hr />
            </div>
            <div class=" float-right my-8">
                <el-button class="!h-11">
                    Отмена
                </el-button>
                <el-button type="primary" class="gradient !h-11 !w-[107px]">
                    Сохранять
                </el-button>
            </div>
        </el-form>
    </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { QuestionFilled, Message, Clock } from '@element-plus/icons-vue'
import marketplaces from '/@/mock/brands.js'

const form = reactive({
    first_name: "Islam",
    last_name: "Akramov ",
    email: "islamakramov.b@gmail.com",
    phone: "90-001-50-50",
    role: "Директор",
    region: "Узбекистан",
    utc: "Город Ташкент UTC+5"
})
</script>
<style lang="scss" >
.el-switch.is-checked .el-switch__core {
    background: linear-gradient(91deg, #B540F6 52.01%, #F18F8C 86.64%, #FB9D79 96.11%);
    border: none;
}
</style>