<template>
    <div class=" md:px-14 mt-2">
        <el-scrollbar class="layout-main-scrollbar" ref="mainScrollbarRef" :height="isMobile ? '80vh': ''">
        <div class="flex items-center flex-wrap md:flex-nowrap gap-4 md:gap-1.5">
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
        <div class="flex items-center flex-wrap md:flex-nowrap gap-2 md:gap-5 mt-9 !transition-all">
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
        <div class="grid grid-cols-4 sm:grid-cols-5 gap-4 pl-3 sm:pl-0 sm:gap-5 md:grid-cols-8 gap-y-8 md:gap-x-10 md:gap-y-16 mt-11">
            <div class=" space-y-2 w-16 text-center sm:ml-5 md:ml-0" v-for="app in apps" :key="app.id">
                <div class="bg-[#2E2E2E] flex items-center justify-center rounded-[14px] h-14 w-14 sm:h-16 sm:w-16 p-1">
                    <img class=" object-contain w-10 sm:w-12 h-9 sm:!h-11" :src="app.img" alt="img" />
                </div>
                <p class=" text-[#E2E2E2] font-medium">
                    {{ app.title }}
                </p>
            </div>
        </div>
        </el-scrollbar>
    </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { apps  } from '/@/mock/app.ts'
import { ref } from 'vue'
const activeButton = ref(1)
const search = ref('')
const isMobile = ref(window.innerWidth <= 991)
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
    const url: string = `/@/assets/images/applications/${img}`
    console.log(url);
    console.log(new URL(url, import.meta.url).href);
    return new URL(url, import.meta.url).href
}
</script>