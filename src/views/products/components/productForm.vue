<template>
    <el-drawer v-model="props.visible" direction="rtl" size="40%">

    </el-drawer>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { ElDrawer, ElMessageBox } from 'element-plus'

const props = defineProps({
    visible: {
        type: Boolean,
        required: true,
        default: false
    }
})
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
  