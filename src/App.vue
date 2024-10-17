<template>
    <el-dialog v-model="show" :title="title" :width="width" :before-close="hideModal">
        <div id="modal"></div>
    </el-dialog>
    <router-view></router-view>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import iconfontInit from '/@/utils/iconfont'
import { useModal } from '/@/composables'
const { show, hideModal, title, width } = useModal()
onMounted(() => {
    iconfontInit()
})
</script>
<style lang="scss">
.el-dialog {
    background-color: #ffffff !important;
    border-radius: 16px !important;

    &__title {
        font-family: Onest;
        font-size: 16px !important;
        font-weight: 700;
        line-height: 24px;
        color: #000000;
    }

    &__close {
        font-size: 16px !important;
        color: black !important;
        font-weight: 700;
    }

    &__body {
        padding-top: 10px !important;
    }
}
</style>
