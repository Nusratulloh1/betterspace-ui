<template>
    <div class="settings">
        <div>
            <h4 class="settings__title">Workspace</h4>
            <p class="settings__desc">Manage your workspace settings.</p>
        </div>
        <el-divider />
        <div>
            <h6 class="settings__subtitle">Logo</h6>
            <div class="w-16 h-16 rounded-full bg-[#C55BB9] flex items-center justify-center mt-5 mb-3 text-white text-lg font-medium">TE</div>
            <p class="settings__desc">Pick a logo for your workspace. Recommended size is 256x256px.</p>
        </div>
        <el-divider />
        <div class="w-full max-w-[256px]">
            <h6 class="settings__subtitle">General</h6>
            <el-form @keyup.enter="submitForm()" ref="ruleFormRef" :hide-required-asterisk="true" label-position="top" class="!text-[13px] mt-5">
                <el-form-item prop="name" label="Workspace name">
                    <el-input class="!h-8" v-model.trim="form.name" type="text" autocomplete="off" placeholder="Text" />
                </el-form-item>
                <el-form-item prop="name" class="!mt-7" label="Workspace URL">
                    <el-input class="!h-8" v-model.trim="form.url" type="url" autocomplete="off" placeholder="Text" />
                </el-form-item>
                <el-button class="!text-xs !h-8" round type="primary" @click="submitForm()" :loading="loading"> Update </el-button>
            </el-form>
        </div>
        <el-divider />
        <h6 class="settings__subtitle">Delete workspace</h6>
        <p class="settings__desc !mt-3">
            If you want to permanently delete this workspace and all of its data, including but not limited to users, issues, and comments, you can do
            so below.
        </p>
        <el-button @click="deleteSpace" round class="mt-5 !bg-[#EB5656] !text-[13px] !text-white !font-medium !border-[#DC484B]">
            Delete this workspace
        </el-button>
    </div>
</template>
<script lang="ts" setup>
import { ElMessageBox } from 'element-plus'
import { reactive, ref } from 'vue'

const form = reactive({
    name: '',
    url: '',
})
const loading = ref(false)
const submitForm = () => {}

const deleteSpace = () => {
    ElMessageBox.confirm('Are you sure delete this workspace. Continue?', 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
        draggable: true,
    })
        .then(() => {})
        .catch((err) => {
            console.log(err)
        })
}
</script>