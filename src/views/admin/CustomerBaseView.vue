<template>
    <div>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
                <el-input v-model="value" class="!w-[320px] search" size="large" placeholder="Поиск">
                    <template #prefix>
                        <Search class="w-5" color="#667085" />
                    </template>
                </el-input>
                <el-button size="large">
                    <Icon class="mr-2" size="17" color="transparent" name="local-filter" />
                    Фильтры
                </el-button>
            </div>
            <el-button size="large" type="primary">
                <Icon class="mr-2" size="17" color="transparent" name="local-user-plus" />
                Добавить новую компанию
            </el-button>
        </div>
        <div class="bg-white mt-10 border rounded-xl overflow-hidden" style="box-shadow: 0px 1px 2px 0px #1018280d">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Date" width="180" />
                <el-table-column prop="name" label="Name" width="180" />
                <el-table-column prop="address" label="Address" />
            </el-table>
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
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
</script>