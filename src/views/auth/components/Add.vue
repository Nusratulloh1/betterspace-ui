<template>
    <div>
        <div class="relative h-[461px] w-[649px] mx-auto">
            <img class="w-full h-full absolute top-0 right-[23%]" :src="img" alt="" />
        </div>
        <div class="flex flex-col space-y-4 mt-8">
            <el-button class="w-full !bg-[#000000] !text-white" size="large" round @click="donwload" :loading="loading">
                <img src="../../../assets/images/applications/chrome.svg" class=" mr-1.5" alt="chrome" />
                Download
            </el-button>
            <button class="text-[#4C4F6B] text-xs hover:underline" @click="emit('onSubmit')">I'll do this later</button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import img from '../../../assets/images/bg/extension.jpg'
const emit = defineEmits(['onSubmit'])

const loading = ref(false)
const donwload = () => {}
</script>