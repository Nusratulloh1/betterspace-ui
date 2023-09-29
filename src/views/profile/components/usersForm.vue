<template>
    <div class=" pb-10 pr-5">
        <div class="flex items-center justify-between">
            <div>
                <h6 class="text-[#101828] text-lg font-semibold">
                    Пользователи
                </h6>
                <p class="text-[#475467] text-sm">
                    You’re on the following teams. You can create a new team here.
                </p>
            </div>
            <el-button class="!text-[#344054] !h-10 !text-sm">
                Создать команду
            </el-button>
        </div>
        <hr class="my-5" />
        <div class="flex items-start">
            <div class=" w-[30%]">
                <span class="text-sm text-[#344054] font-semibold">
                    Пригласить членов команды
                </span>
                <p class="text-[#475467] text-sm">
                    Ускорьте реализацию своих проектов, пригласив свою команду
                </p>
            </div>
            <div class=" w-[70%] pl-8 space-y-6">
                <div class="flex items-center gap-4" v-for="form in forms" :key="form.id">
                    <el-input size="large" v-model="form.email" placeholder="you@example.com">
                        <template #prefix>
                            <Message color="#667085" class="w-5 h-5" />
                        </template>
                    </el-input>
                    <el-select v-model="form.role" size="large" placeholder="Select" class=" !w-[40%]">
                        <el-option v-for="item in ['Админ', 'Контент менеджер', 'Только чтение']" :key="item" :label="item"
                            :value="item" />
                    </el-select>
                </div>
                <div class="flex items-center justify-between">
                    <button class="flex items-center gap-2 text-[#475467] text-sm font-semibold">
                        <Plus class="w-5 h-5" color="#475467"></Plus>
                        Добавить еще
                    </button>
                    <el-button type="primary" class="gradient !h-11 !text-sm">
                        <Message color="#FFFFFF" class="w-5 h-5 mr-2" />
                        Отправить приглашение
                    </el-button>
                </div>
            </div>
        </div>
        <div class="flex items-center mt-6">
            <div class=" w-[30%]">
                <span class="text-sm text-[#344054] font-semibold">
                    Члены команды
                </span>
                <p class="text-[#475467] text-sm">
                    Управляйте существующей командой и меняйте роли/разрешения.
                </p>
            </div>
            <div class=" w-[70%] pl-8">
                <el-table class="usersTable" :data="users" style="width: 100%">
                    <el-table-column label="Имя" min-width="250">
                        <template #default="{ row }">
                            <div class="flex gap-3">
                                <object type="image/svg+xml" width="40" height="" :data="row.image">svg-image</object>
                                <!-- <img :src="row.image" width="40" height="40" alt="dena"> -->
                                <div>
                                    <span class=" font-medium">
                                        {{ row.name }}
                                    </span>
                                    <p>
                                        {{ row.email }}
                                    </p>
                                </div>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column prop="role" label="Роль" min-width="150">
                        <template #default="{ row }">
                            <span class=" !text-[#475467]">
                                {{ row.role }}
                            </span>
                        </template>
                    </el-table-column>
                    <el-table-column label="" min-width="100">
                        <div class="flex items-center justify-end">
                            <button class="p-2.5">
                                <Icon size="20" name="local-trash" class=" !fill-none" />
                            </button>
                            <button class="p-2.5">
                                <Icon size="20" name="local-edit-pen" class=" !fill-none !stroke-[#475467]" />
                            </button>
                        </div>
                    </el-table-column>
                </el-table>
                <div class="float-right mt-6">
                    <el-button class="!h-11 !text-sm !text-[#344054] !font-semibold">
                        Отмена
                    </el-button>
                    <el-button type="primary" class="gradient !h-11 !text-sm">
                        Сохранять
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Message, Plus } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import user_1 from '/@/assets/images/avatars/1.svg'
import user_2 from '/@/assets/images/avatars/2.svg'
import user_3 from '/@/assets/images/avatars/3.svg'
import user_4 from '/@/assets/images/avatars/4.svg'
import user_5 from '/@/assets/images/avatars/5.svg'
const forms = reactive([
    {
        id: 1,
        email: '',
        role: 'Только чтение'
    },
    {
        id: 2,
        email: '',
        role: 'Только чтение'
    },
    {
        id: 3,
        email: '',
        role: 'Только чтение'
    }
])
const users = ref([
    {
        image: user_1,
        id: 1,
        name: 'Оливия Рай',
        email: 'olivia@untitledui.com',
        role: 'Админ'
    },
    {
        image: user_2,
        id: 2,
        name: 'Феникс Бейкер',
        email: 'phoenix@untitledui.com',
        role: 'Админ'
    },
    {
        image: user_3,
        id: 3,
        name: 'Лана Штайнер',
        email: 'лана@untitledui.com',
        role: 'Контент менеджер'
    },
    {
        image: user_4,
        id: 4,
        name: 'Деми Уилкинсон',
        email: 'demi@untitledui.com',
        role: 'Контент менеджер'
    },
    {
        image: user_5,
        id: 5,
        name: 'Кэндис Ву',
        email: 'candice@untitledui.com',
        role: 'Контент менеджер'
    }
])
</script>
<style lang="scss" scoped></style>