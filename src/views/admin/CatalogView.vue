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
            <el-button @click="openForm" size="large" type="primary">
                <Icon class="mr-2" size="17" color="transparent" name="local-user-plus" />
                Добавить новую категорию
            </el-button>
        </div>
        <div class="bg-white mt-10 border rounded-xl overflow-hidden" style="box-shadow: 0px 1px 2px 0px #1018280d">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Категории" min-width="280">
                    <template #default="{}">
                        <div class="flex items-center gap-3">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="40" height="40" rx="10" fill="#505050"/>
<g opacity="0.08">
<rect x="0.375" y="0.375" width="39.25" height="39.25" rx="19.625" stroke="black" stroke-width="0.75"/>
</g>
</svg>

                            <div>
                                <span class="font-medium"> Образование и карьера </span>
                                <p>
                                    Target every aspect of your wellbeing
                                </p>
                            </div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="Эмоции категорий" min-width="180">
                    <template #default="{}">
                        <div class="flex items-center gap-1">
                            <el-tag round class="!border-[#E9D7FE] !bg-[#F9F5FF]"> <span class="text-[#6941C6]"> Label </span> </el-tag>
                            <el-tag round class="!border-[#B2DDFF] !bg-[#EFF8FF]"> <span class="text-[#175CD3]"> Label </span> </el-tag>
                            <el-tag round class="!border-[#C7D7FE] !bg-[#EEF4FF]"> <span class="text-[#3538CD]"> Label </span> </el-tag>
                            <el-tag round type="info"> +4</el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="Топ-мерчанты" min-width="180">
                    <template #default="{}">
                        <div class="flex items-center gap-1">
                            <el-tag round class="!rounded-full !px-3" type="info"> </el-tag>
                            <el-tag round class="!rounded-full !px-3" type="info"> </el-tag>
                            <el-tag round class="!rounded-full !px-3" type="info"> </el-tag>
                            <el-tag round class="!rounded-full !px-3" type="info"></el-tag>
                            <el-tag round class="!rounded-full !px-2" type="info"></el-tag>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="address" label="Количество мерчантов" min-width="250" align="center"> 25 </el-table-column>
                <el-table-column>
                    <template #default="{}">
                        <div class="flex items-center gap-6">
                            <button class="hover:opacity-70">
                                <Icon size="20" color="transparent" name="local-trash" />
                            </button>
                            <button class="hover:opacity-70">
                                <Icon size="18" color="transparent" name="local-edit" />
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
            <CategoryForm @onSubmit="submitForm" />
        </teleport>
    </div>
</template>
<script lang="ts" setup>
import CategoryForm from './components/CategoryForm.vue'
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
    modal.setTitle('Добавление новой категории')
}


const submitForm = (data: any) => {
    alert(data)
}
</script>