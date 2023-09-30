<template>
    <div class="pr-5">
        <div class="flex justify-between items-center mb-5">
            <div>
                <h6 class="text-[#101828] text-lg font-semibold">
                    Профиль компании
                </h6>
                <p class="text-[#475467] text-sm">
                    Обновление информации в личном кабинете может послужить изменению данных в маркетплейсах!
                </p>
            </div>
            <el-upload ref="uploadRef" class="upload-demo" :show-file-list="false"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false">
                <template #trigger>
                    <div class=" rounded-full border  p-[10.5px] opacity-80" style=" background-color: rgba(242, 244, 247, 1);">
                        <Icon size="35" name="local-sky-upload" class=" !fill-none "
                            style="stroke: rgba(71, 84, 103, 1);" />
                    </div>
                </template>
            </el-upload>
        </div>
        <hr />
        <el-form ref="ruleFormRef" :hide-required-asterisk="true" label-position="top" class=" w-full">
            <div class="grid grid-cols-3 gap-8 mt-8">
                <label class="text-[#344054] text-sm font-semibold flex items-center">
                    ФИО
                </label>
                <el-form-item class="!m-0">
                    <el-input size="large" v-model="form.first_name" placeholder="First name" />
                </el-form-item>
                <el-form-item class="!m-0">
                    <el-input size="large" v-model="form.last_name" placeholder="Last name" />
                </el-form-item>
            </div>
            <hr class=" mt-6" />
            <div class="grid grid-cols-3 gap-8 mt-6">
                <label class="text-[#344054] text-sm font-semibold flex items-center">
                    Контактные данные
                </label>
                <el-form-item label="Номер телефона" class="!m-0">
                    <el-input size="large" v-model="form.phone" placeholder="First name">
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
                <el-form-item label="Электронная почта" class="!m-0">
                    <el-input size="large" v-model="form.email" placeholder="Email">
                        <template #prefix>
                            <Message class=" w-5 h-5" color="rgba(102, 112, 133, 1)" />
                        </template>
                    </el-input>
                </el-form-item>
            </div>
            <hr class=" my-6" />
            <div class="flex items-center gap-8">

                <label class="text-[#344054] text-sm font-semibold flex items-center w-[32.3%]">
                    Роль
                </label>
                <el-form-item class="!m-0 w-[66%]">
                    <el-select v-model="form.role" placeholder="Выбрать" size="large" class=" !w-full">
                        <el-option v-for="item in ['Админ', 'Контент менеджер']" :key="item" :label="item" :value="item" />
                    </el-select>
                </el-form-item>
            </div>
            <hr class=" my-6" />
            <div class="flex items-center gap-8">
                <label class="text-[#344054] text-sm font-semibold flex items-center w-[32.3%]">
                    Страна
                </label>
                <el-form-item class="!m-0 w-[66%]">
                    <el-select v-model="form.region" placeholder="Выбрать" size="large" class=" !w-full">
                        <el-option v-for="item in ['Россия', 'США', 'Казахстан']" :key="item" :label="item" :value="item" />
                    </el-select>
                </el-form-item>
            </div>
            <hr class=" my-6" />
            <div class="flex items-center gap-8">
                <label class="text-[#344054] text-sm font-semibold flex items-center w-[32.3%]">
                    Время
                </label>
                <el-form-item class="!m-0 w-[66%]">
                    <el-select v-model="form.utc" placeholder="Выбрать" size="large" class=" !w-full">
                        <template #prefix>
                            <Clock class=" w-5 h-5" color="rgba(102, 112, 133, 1)" />
                        </template>
                        <el-option v-for="item in ['Россия', 'США', 'Казахстан']" :key="item" :label="item" :value="item" />
                    </el-select>
                </el-form-item>
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
import { reactive } from 'vue';
import { QuestionFilled, Message, Clock } from '@element-plus/icons-vue'

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
<style lang="scss" scoped></style>