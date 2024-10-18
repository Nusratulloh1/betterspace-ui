<template>
    <div>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
                <el-input v-model="value" class="!w-[320px] search" size="large" placeholder="Поиск">
                    <template #prefix>
                        <Search class="w-5" color="#667085" />
                    </template>
                </el-input>
                <el-popover placement="bottom" :width="320" trigger="click">
                    <template #reference>
                        <el-button size="large">
                            <Icon class="mr-2" size="17" color="transparent" name="local-filter" />
                            Фильтры
                        </el-button>
                    </template>
                    <FilterForm />
                </el-popover>
            </div>
            <el-button @click="openForm" size="large" type="primary">
                <Icon class="mr-2" size="17" color="transparent" name="local-user-plus" />
                Добавить новую компанию
            </el-button>
        </div>
        <div class="bg-white mt-10 border rounded-xl overflow-hidden" style="box-shadow: 0px 1px 2px 0px #1018280d">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Компания" min-width="180">
                    <template #default="{}">
                        <div class="flex items-center gap-3">
                            <img width="40" height="40" src="/@/assets/images/applications/betterspace.png" alt="betterspace" />
                            <span class="font-medium"> Catalog </span>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="Статус" min-width="180">
                    <template #default="{ row }">
                        <el-tag v-if="row.name == 'Tom1'" round type="success"> Оплачено </el-tag>
                        <el-tag v-else-if="row.name == 'Tom2'" round type="danger"> Приостановлено </el-tag>
                        <el-tag v-else-if="row.name == 'Tom3'" round type="warning"> Тест </el-tag>
                        <el-tag v-else type="info" round> Ожидание </el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="Любимые категории" min-width="180">
                    <template #default="{}">
                        <div class="flex items-center gap-1">
                            <el-tag round class="!border-[#E9D7FE] !bg-[#F9F5FF]"> <span class="text-[#6941C6]"> Label </span> </el-tag>
                            <el-tag round class="!border-[#B2DDFF] !bg-[#EFF8FF]"> <span class="text-[#175CD3]"> Label </span> </el-tag>
                            <el-tag round class="!border-[#C7D7FE] !bg-[#EEF4FF]"> <span class="text-[#3538CD]"> Label </span> </el-tag>
                            <el-tag round type="info"> +4</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="Пользователи" min-width="180">
                    <template #default="{}">
                        <div class="flex items-center gap-1">
                            <el-tag round class="!rounded-full !px-3" type="info"> </el-tag>
                            <el-tag round class="!rounded-full !px-3" type="info"> </el-tag>
                            <el-tag round class="!rounded-full !px-3" type="info"> </el-tag>
                            <el-tag round class="!rounded-full !px-3" type="info"></el-tag>
                            <el-tag round class="!rounded-full !px-2" type="info"> +5</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="Использование системы" min-width="250" align="center"> 75% </el-table-column>
                <el-table-column>
                    <template #default="{}">
                        <div class="flex items-center gap-6">
                            <button class="hover:opacity-70">
                                <Icon size="20" color="transparent" name="local-trash" />
                            </button>
                            <button class="hover:opacity-70">
                                <Icon size="18" color="transparent" name="local-power" />
                            </button>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <div class="mt-5 px-6 py-4 border-t">
                <el-pagination prev-text="Назад" next-text="Вперед" background layout="prev, pager, next" :total="50" />
            </div>
        </div>
        <teleport to="#modal" v-if="showModal">
            <CustomerForm @onSubmit="submitForm" />
        </teleport>
    </div>
</template>
<script lang="ts" setup>
import FilterForm from './components/FilterForm.vue'
import CustomerForm from './components/CustomerForm.vue'
import { Search } from '@element-plus/icons-vue'
import { computed, ref } from 'vue'
import { useModal } from '/@/composables'

const modal = useModal()

const showModal = computed(() => modal.show.value)
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

const openForm = () => {
    modal.showModal()
    modal.setWidth('792px')
    modal.setTitle('Добавление новой организации')
}
const submitForm = (data: any) => {
    alert(data)
}
</script>