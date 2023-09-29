<template>
    <div>
        <h5 class="title">
            Отлично! Ещё чуть-чуть.
        </h5>
        <p class="desc mt-2">
            Заполните профиль для полноценного использования приложения!
        </p>
        <div class="card !p-6 h-[440px] !mt-12">
            <el-form ref="ruleFormRef" :hide-required-asterisk="true" label-position="top" class=" w-full">
                <div class="grid grid-cols-2 gap-x-6 gap-y-8">
                    <el-form-item label="Название компании/магазина" class="!m-0">
                        <el-input size="large" v-model="form.name" placeholder="Text" />
                        <p class="text-sm text-[#B641F7] mt-1.5">
                            В бесплатной версии доступно 2 магазина
                        </p>
                    </el-form-item>
                    <el-form-item label="Тип бизнеса" class="!m-0">
                        <el-select v-model="form.company_type" placeholder="Select" size="large" class=" !w-full">
                            <el-option v-for="item in ['Физическое лицо', 'AAA лицо', 'AUNN']" :key="item" :label="item"
                                :value="item" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Электронная почта" class="!m-0">
                        <el-input size="large" v-model="form.email" placeholder="Email">
                            <template #prefix>
                                <Message class=" w-5 h-5" color="rgba(102, 112, 133, 1)" />
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="Рабочий номер телефона" class="!m-0">
                        <el-input size="large" v-model="form.phone">
                            <template #prefix>
                                <el-dropdown size="large">
                                    <button class="flex items-center text-[#101828]" type="button">
                                        UZB
                                        <Icon size="20" name="local-arrow" style="stroke: rgba(102, 112, 133, 1) !important"
                                            class=" !fill-none " />
                                    </button>
                                    <template #dropdown>
                                        <el-dropdown-menu>
                                            <el-dropdown-item>RUS</el-dropdown-item>
                                            <el-dropdown-item>ENG</el-dropdown-item>
                                            <el-dropdown-item>USA</el-dropdown-item>
                                            <el-dropdown-item>KZ</el-dropdown-item>
                                        </el-dropdown-menu>
                                    </template>
                                </el-dropdown>
                            </template>
                            <template #suffix>
                                <QuestionFilled class=" w-4 h-4" />
                            </template>
                        </el-input>
                    </el-form-item>
                </div>
                <el-form-item label="Логотип компании" class=" !mt-8">
                        <fileUpload text-color="#344054" class="!mt-3" />
                    </el-form-item>
            </el-form>
        </div>
        <div class="w-[80%] mx-auto mt-12">
            <el-button @click="$router.push('/onboarding?step=6')" type="primary" class="gradient !h-12 !w-full">
                Продолжить
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { QuestionFilled, Message } from '@element-plus/icons-vue'
import fileUpload from '/@/components/common/fileUpload.vue';
const form = reactive({
    name: "7coolcases",
    phone: "90-001-50-50",
    email: "7coolcases@gmail.com",
    company_type: "Физическое лицо"
})
</script>
<style lang="scss" scoped></style>