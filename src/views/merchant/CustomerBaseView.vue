<template>
    <div>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
                <el-input v-model="value" class="!w-[320px] search" size="large" placeholder="Поиск">
                    <template #prefix>
                        <Search class="w-5" color="#667085" />
                    </template>
                </el-input>
            </div>
            <el-button size="large" type="primary">
                <Icon class="mr-2" size="18" color="#FFFFFF" name="local-xls" />
                Скачать файл
            </el-button>
        </div>
        <div class="bg-white mt-10 border rounded-xl overflow-hidden" style="box-shadow: 0px 1px 2px 0px #1018280d">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Клиент" min-width="180">
                    <template #default="{}">
                        <div class="flex items-center gap-3">
                            <img width="40" height="40" src="/@/assets/images/avatars/olivia.png" alt="betterspace" />
                            <span class="font-medium"> Olivia Rhye </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="Дата" min-width="180" align="center">
                    <template #default="{}">
                        22.07.08
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="Уровень скидки" min-width="180" align="center">
                    15%</el-table-column>
                <el-table-column>
                    <template #default="{}">
                        <el-dropdown size="large">
                            <button>
                                <Icon class=" rotate-90" size="20" color="#98A2B3" name="el-icon-MoreFilled" />
                            </button>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <el-dropdown-item class="flex items-center gap-2">
                                        <Icon size="20" color="transparent" name="local-trash" />
                                        Удалить
                                    </el-dropdown-item>
                                    <el-dropdown-item class="flex items-center gap-2">
                                        <Icon size="18" color="transparent" name="local-edit" />
                                        Редактировать
                                    </el-dropdown-item>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </template>
                </el-table-column>
            </el-table>
            <div class="mt-5 px-6 py-4 border-t">
                <el-pagination prev-text="Назад" next-text="Вперед" background layout="prev, pager, next" :total="50" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const value = ref('')

const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom1',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tomi',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom2',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom3',
        address: 'No. 189, Grove St, Los Angeles',
    },
]

</script>