<template>
    <div>
        <h5 class="title">
            Подключение маркетплейсов
        </h5>
        <p class="desc mt-2">
            Заполните свои данные, чтобы мы могли открыть аккаунты за Вас!
        </p>
        <div class="card !p-6 h-[424px]">
            <el-form ref="ruleFormRef" :hide-required-asterisk="true" label-position="top" class=" w-full">
                <div class="grid grid-cols-2 gap-6">
                    <el-form-item class="!m-0" label="Фамилия">
                        <el-input size="large" v-model="form.first_name" placeholder="Text" />
                    </el-form-item>
                    <el-form-item class="!m-0" label="Имя">
                        <el-input size="large" v-model="form.last_name" placeholder="Text" />
                    </el-form-item>
                </div>
                <div class="flex items-center gap-8 my-8">
                    <el-form-item label="Номер телефона" class="!m-0 w-[32%]">
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
                    <el-form-item label="Электронная почта" class="!m-0 w-[66.5%]">
                        <el-input size="large" v-model="form.email" placeholder="Email">
                            <template #prefix>
                                <Message class=" w-5 h-5" color="rgba(102, 112, 133, 1)" />
                            </template>
                        </el-input>
                    </el-form-item>
                </div>
                <div class="grid grid-cols-3 gap-x-6 gap-y-8">
                    <el-form-item class="!m-0" label="Выбор юридической формы">
                        <el-select v-model="form.company_type" placeholder="Выбрать" size="large" class=" !w-full">
                            <el-option v-for="item in ['AAA', 'AUYTT', 'AUNN']" :key="item" :label="item" :value="item" />
                        </el-select>
                    </el-form-item>
                    <el-form-item class="!m-0" label="Юридическое название">
                        <el-input size="large" v-model="form.company_name" placeholder="Text" />
                    </el-form-item>
                    <el-form-item class="!m-0" label="ИНН компании">
                        <el-input size="large" v-model="form.company_code" placeholder="Text">
                            <template #prefix>
                                <OfficeBuilding class=" w-5 h-5" color="rgba(102, 112, 133, 1)" />
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item class="!m-0" label="№ расчетного счета">
                        <el-select v-model="form.billing" placeholder="Выбрать" size="large" class=" !w-full">
                            <el-option v-for="item in ['16341B123', '123AC1А12', '12341BA123']" :key="item" :label="item"
                                :value="item" />
                        </el-select>
                    </el-form-item>
                    <el-form-item class="!m-0" label="Код МФО">
                        <el-input size="large" v-model="form.mfo" placeholder="Text" />
                    </el-form-item>
                    <el-form-item class="!m-0" label="ОКЭД">
                        <el-input size="large" v-model="form.oked" placeholder="Text" />
                    </el-form-item>
                </div>
            </el-form>
        </div>
        <div class="w-[80%] mx-auto">
            <el-button @click="$router.push('/onboarding?step=3')" type="primary" class="gradient !h-12 !w-full">
                Продолжить
            </el-button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { QuestionFilled, Message, OfficeBuilding } from '@element-plus/icons-vue'
const form = reactive({
    first_name: "Зиедулла",
    last_name: "Ахмоджонов",
    category: "Мебель и домашние изделия ",
    email: "islamakramov.b@gmail.com",
    phone: "90-001-50-50",
    role: "Директор",
    region: "Узбекистан",
    utc: "Город Ташкент UTC+5",
    company_type: "OOO",
    company_name: "SovdaWash",
    company_code: "21315-2315",
    billing: "12341А123",
    mfo: "21315-2315",
    oked: "21315-2315"
})
</script>
<style lang="scss" scoped></style>