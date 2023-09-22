<template>
    <el-drawer v-model="visible" title="I have a nested table inside!" direction="rtl" size="50%">
        <el-table :data="gridData">
            <el-table-column property="date" label="Date" width="150" />
            <el-table-column property="name" label="Name" width="200" />
            <el-table-column property="address" label="Address" />
        </el-table>
    </el-drawer>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElDrawer, ElMessageBox } from 'element-plus'
const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

const form = reactive({
    name: '',
    region: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})




</script>