<template>
    <div>
        <div class="flex items-center justify-between px-[30px] pb-2">
            <el-popover
                placement="bottom-start"
                popper-class=" !top-[60px] !rounded-[40px] !border-[#CCCCCC70] !ml-[-20px] !overflow-hidden"
                :width="210"
                trigger="click"
            >
                <template #reference>
                    <button
                        class="border flex items-center gap-1 border-[#313248] border-dashed rounded-full px-3 py-0.5 text-xs text-[#AEAEAE] font-medium hover:border-primary hover:text-primary"
                    >
                        <Icon size="8" color="fillCurrent" name="el-icon-Plus" />
                        Filter
                    </button>
                </template>
                <div class="flex items-center justify-between pt-3 pb-2 px-5">
                    <input type="text" placeholder="Filter..." class="text-[13px]" />
                    <button class="w-4 h-4 bg-[#17171720] rounded font-inter text-[11px] flex items-center justify-center">F</button>
                </div>
                <hr />
                <div v-for="tag in tags" :key="tag.id">
                    <div class="flex items-center gap-3 route !text-[#2E2E2E]">
                        <Icon size="14" color="fillCurrent" :name="tag.icon" />
                        {{ tag.title }}
                    </div>
                    <hr v-if="tag.hasBottomBorder" />
                </div>
            </el-popover>
            <el-button size="small" round>
                <Icon size="10" color="fillCurrent" class="mr-1.5" name="local-plus-bold" />
                Add issues
            </el-button>
        </div>
        <hr />
        <div class="pt-3.5 px-[30px]">
            <el-input v-model="inputSearch" size="small" class="!w-[181px]" placeholder="Search issue" :prefix-icon="Search" />
            
            <div class="h-[80vh] flex items-center justify-center">
                <div class="text-center">
                    <img class="w-[416px]" src="/@/assets/images/bg/empty.png" alt="empty" />
                    <h4 class="text-[#676C76] text-[15px] mt-5">There are no issues here yet.</h4>
                    <p class="text-[#9DA6B6] text-xs">Start by creating a new issue.</p>
                    <el-button size="small" round class="!h-7 !text-sm mt-4">
                        <Icon size="10" color="fillCurrent" class="mr-1.5" name="local-plus-bold" />
                        Add issues
                    </el-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'

const visible = ref(false)

const inputSearch = ref('')

const tags = [
    {
        id: 1,
        title: 'Status',
        icon: 'local-loader',
        hasBottomBorder: false,
    },
    {
        id: 2,
        title: 'Assignee',
        icon: 'local-user-circle',
        hasBottomBorder: false,
    },
    {
        id: 1,
        title: 'Status',
        icon: 'local-loader',
        hasBottomBorder: false,
    },
    {
        id: 2,
        title: 'Assignee',
        icon: 'local-user-circle',
        hasBottomBorder: false,
    },
    {
        id: 1,
        title: 'Status',
        icon: 'local-loader',
        hasBottomBorder: false,
    },
    {
        id: 2,
        title: 'Assignee',
        icon: 'local-user-circle',
        hasBottomBorder: false,
    },
    {
        id: 1,
        title: 'Status',
        icon: 'local-loader',
        hasBottomBorder: true,
    },
    {
        id: 2,
        title: 'Assignee',
        icon: 'local-user-circle',
        hasBottomBorder: false,
    },
    {
        id: 1,
        title: 'Status',
        icon: 'local-loader',
        hasBottomBorder: false,
    },
    {
        id: 2,
        title: 'Assignee',
        icon: 'local-user-circle',
        hasBottomBorder: false,
    },
    {
        id: 1,
        title: 'Status',
        icon: 'local-loader',
        hasBottomBorder: true,
    },
    {
        id: 2,
        title: 'Assignee',
        icon: 'local-user-circle',
        hasBottomBorder: false,
    },
    {
        id: 2,
        title: 'Assignee',
        icon: 'local-user-circle',
        hasBottomBorder: false,
    },
    {
        id: 2,
        title: 'Assignee',
        icon: 'local-user-circle',
        hasBottomBorder: false,
    },
    {
        id: 2,
        title: 'Assignee',
        icon: 'local-user-circle',
        hasBottomBorder: false,
    },
]
</script>