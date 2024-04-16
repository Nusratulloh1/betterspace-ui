<template>
    <div class="px-14 mt-2">
        <div class="flex items-center gap-1.5">
            <el-input v-model="search" clearable size="large" class="greyable" placeholder="Search for an application">
                <template #prefix>
                    <Icon color="#ffffff" name="el-icon-Search" size="17" />
                </template>
            </el-input>
            <el-button size="large" class="greyable">
                <div class="flex items-center gap-2">
                    <Icon color="#ffffff" name="local-love" size="17" />
                    <span> Don’t find an app? </span>
                </div>
            </el-button>
        </div>
        <div class="flex items-center gap-5 mt-9 !transition-all">
            <el-button
                v-for="button in buttons"
                class="!rounded-[4px] !text-xs"
                :key="button.id"
                :class="button.id === activeButton ? ' !bg-primary !text-white !border-primary' : '!bg-transparent !text-[#7C7C7C] !border-none'"
                @click="activeButton = button.id"
            >
                {{ button.title }}
            </el-button>
        </div>
        <div class="grid grid-cols-8 gap-x-10 gap-y-16 mt-11">
            <div class=" space-y-2 w-16 text-center" v-for="app in apps" :key="app.id">
                <div class="bg-[#2E2E2E] flex items-center justify-center rounded-[14px] h-16 w-16 p-1">
                    <img class=" object-contain w-12 !h-11" :src="getImgPath(app.img)" alt="img" />
                </div>
                <p class=" text-[#E2E2E2] font-medium">
                    {{ app.title }}
                </p>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import apps from '../../../mock/app.json'
import { ref } from 'vue'
const activeButton = ref(1)
const search = ref('')
const buttons = [
    {
        id: 1,
        title: 'All apps',
    },
    {
        id: 2,
        title: 'Popular',
    },
    {
        id: 3,
        title: 'AI',
    },
    {
        id: 4,
        title: 'Marketing',
    },
    {
        id: 5,
        title: 'Design',
    },
    {
        id: 6,
        title: 'Business',
    },
    {
        id: 7,
        title: 'Social',
    },
    {
        id: 8,
        title: 'Connected',
    },
    {
        id: 9,
        title: 'Added',
    },
]
const getImgPath = (img: string) => {
    console.log(img);
    console.log(`/@/assets/images/applications/${img}`);
    
    return new URL( `/@/assets/images/applications/${img}`, import.meta.url).href
}
</script>