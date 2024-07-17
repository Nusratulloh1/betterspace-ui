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
                    <button class="w-4 h-4 bg-[#17171720] rounded text-[11px] flex items-center justify-center">F</button>
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
            <el-button size="small" round @click="openForm">
                <Icon size="10" color="fillCurrent" class="mr-1.5" name="local-plus-bold" />
                Add issues
            </el-button>
        </div>
        <hr />
        <div>
            <!-- <div class="pt-3.5 px-[30px]">
                <el-input v-model="inputSearch" size="small" class="!w-[181px]" placeholder="Search issue" :prefix-icon="Search" />
            </div> -->
            <div class="h-[80vh] hidden items-center justify-center">
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
            <div class="issues">
                <div class="issue flex items-center justify-between py-[18px] px-[30px] border-b text-[13px] text-[#5C5C5E]">
                    <div class="flex items-center gap-2">
                        <Icon size="14" color="#F2994A" name="local-warning-squere" />
                        <span> 123-13 </span>
                        <Icon size="14" color="#BEC2C8" name="local-loader" />
                        <span class="text-[#1B1B1B]"> 123 </span>
                    </div>
                    <div class="flex items-center gap-2">
                        <el-button size="small" round class="!text-[#5C5C5E]">
                            <Icon size="12" color="fillCurrent" class="mr-1.5" name="local-cubik" />
                            Test for UI
                        </el-button>
                        <span> Jun 21 </span>
                        <span> Jun 21 </span>
                        <button>
                            <Icon size="20" color="#5C5C5E" name="local-user-circle" />
                        </button>
                    </div>
                </div>
                <div class="issue flex items-center justify-between py-[18px] px-[30px] border-b text-[13px] text-[#5C5C5E]">
                    <div class="flex items-center gap-2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13 2H12C11.4477 2 11 2.44772 11 3V13C11 13.5523 11.4477 14 12 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2Z"
                                fill="#858699"
                            />
                            <path
                                d="M3 8H2C1.44772 8 1 8.44772 1 9V13C1 13.5523 1.44772 14 2 14H3C3.55228 14 4 13.5523 4 13V9C4 8.44772 3.55228 8 3 8Z"
                                fill="#858699"
                            />
                            <path
                                d="M8 5H7C6.44772 5 6 5.44772 6 6V13C6 13.5523 6.44772 14 7 14H8C8.55228 14 9 13.5523 9 13V6C9 5.44772 8.55228 5 8 5Z"
                                fill="#858699"
                            />
                        </svg>
                        <span> 123-13 </span>
                        <Icon size="14" color="#F17272" name="el-icon-CircleCloseFilled" />
                        <span class="text-[#1B1B1B]"> 123 </span>
                    </div>
                    <div class="flex items-center gap-2">
                        <el-button size="small" round class="!text-[#5C5C5E]">
                            <Icon size="12" color="fillCurrent" class="mr-1.5" name="local-cubik" />
                            Test for UI
                        </el-button>
                        <span> Jun 21 </span>
                        <span> Jun 21 </span>
                        <button>
                            <Icon size="20" color="#5C5C5E" name="local-user-circle" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <el-drawer v-model="visible" :show-close="false" :size="`${currentWidth}%`">
            <template #header="{}">
                <div class="flex items-center gap-3">
                    <button @click="visible = false">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.06427 0.184632C5.85948 -0.0437519 5.50832 -0.0628776 5.27994 0.141913C5.05156 0.346705 5.03243 0.697858 5.23723 0.926251L8.88913 4.99887L5.23721 9.07151C5.03243 9.29989 5.05156 9.65105 5.27994 9.85584C5.50832 10.0606 5.85948 10.0415 6.06427 9.81313L9.71619 5.74049C10.0946 5.31849 10.0946 4.67927 9.71619 4.25726L6.06427 0.184632ZM0.968958 0.184628C0.764171 -0.0437564 0.413012 -0.0628832 0.184627 0.141908C-0.043757 0.346701 -0.0628827 0.697858 0.141909 0.92624L3.79383 4.99887L0.141909 9.07151C-0.0628827 9.29989 -0.043757 9.65104 0.184627 9.85584C0.413011 10.0606 0.764171 10.0415 0.968958 9.81312L4.62088 5.74049C4.99929 5.31849 4.99929 4.67926 4.62088 4.25726L0.968958 0.184628Z"
                                fill="#9E9E9E"
                            />
                        </svg>
                    </button>
                    <button @click="currentWidth == 100 ? (currentWidth = 50) : (currentWidth = 100)">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 0.454545V3.18182C10 3.30237 9.95211 3.41799 9.86687 3.50323C9.78162 3.58847 9.66601 3.63636 9.54545 3.63636C9.4249 3.63636 9.30929 3.58847 9.22404 3.50323C9.1388 3.41799 9.09091 3.30237 9.09091 3.18182V1.5517L6.23068 4.4125C6.14539 4.49779 6.02971 4.54571 5.90909 4.54571C5.78847 4.54571 5.67279 4.49779 5.5875 4.4125C5.50221 4.32721 5.45429 4.21153 5.45429 4.09091C5.45429 3.97029 5.50221 3.85461 5.5875 3.76932L8.4483 0.909091H6.81818C6.69763 0.909091 6.58201 0.861201 6.49677 0.775958C6.41153 0.690714 6.36364 0.575098 6.36364 0.454545C6.36364 0.333993 6.41153 0.218377 6.49677 0.133133C6.58201 0.0478896 6.69763 0 6.81818 0H9.54545C9.66601 0 9.78162 0.0478896 9.86687 0.133133C9.95211 0.218377 10 0.333993 10 0.454545ZM3.76932 5.5875L0.909091 8.4483V6.81818C0.909091 6.69763 0.861201 6.58201 0.775958 6.49677C0.690714 6.41153 0.575098 6.36364 0.454545 6.36364C0.333993 6.36364 0.218377 6.41153 0.133133 6.49677C0.0478896 6.58201 0 6.69763 0 6.81818V9.54545C0 9.66601 0.0478896 9.78162 0.133133 9.86687C0.218377 9.95211 0.333993 10 0.454545 10H3.18182C3.30237 10 3.41799 9.95211 3.50323 9.86687C3.58847 9.78162 3.63636 9.66601 3.63636 9.54545C3.63636 9.4249 3.58847 9.30929 3.50323 9.22404C3.41799 9.1388 3.30237 9.09091 3.18182 9.09091H1.5517L4.4125 6.23068C4.49779 6.14539 4.54571 6.02971 4.54571 5.90909C4.54571 5.78847 4.49779 5.67279 4.4125 5.5875C4.32721 5.50221 4.21153 5.45429 4.09091 5.45429C3.97029 5.45429 3.85461 5.50221 3.76932 5.5875Z"
                                fill="#9E9E9E"
                            />
                        </svg>
                    </button>
                    <el-dropdown popper-class=" !rounded-[40px] !overflow-hidden">
                        <button>
                            <img class="w-3.5" :src="sidePeek" alt="sidePeek" />
                        </button>
                        <template #dropdown>
                            <el-dropdown-menu class="w-[208px]">
                                <el-dropdown-item
                                    @click="activeType = item.id"
                                    class="!flex !items-center !justify-between !w-full !text-[#2E2E2E] !pr-1"
                                    v-for="item in formTypes"
                                    :key="item.id"
                                >
                                    <div class="flex items-center gap-2.5">
                                        <img :src="item.icon" class="w-4" :alt="item.title" />
                                        {{ item.title }}
                                    </div>
                                    <div class="flex items-center gap-2" v-if="activeType == item.id">
                                        <span class="text-[9px] underline"> Mark as default </span>
                                        <Icon size="12" color="#5C5C5E" name="el-icon-Check" />
                                    </div>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </template>
            <IssueSidebarForm />
        </el-drawer>
        <el-dialog v-model="visibleDialog" width="912px">
            <template #header="{}">
                <div class="flex items-center text-[#303031] gap-1.5 text-[13px]">
                    <p>Commands</p>
                    <Icon size="6" color="#5E5E5F" name="el-icon-ArrowRightBold" />
                    <Icon size="12" color="#5E5E5F" name="local-scan" />
                    <p>New issue</p>
                    <Icon size="6" color="#5E5E5F" name="el-icon-ArrowRightBold" />
                    <el-button size="small" round>
                        <Icon size="16" class="mr-1" color="#5D85FF" name="local-terminal" />
                        Digital
                    </el-button>
                </div>
            </template>
            <IssueDialogForm />
        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
import sidePeek from '/@/assets/images/icons/side-peek.svg'
import centerPeek from '/@/assets/images/icons/center-peek.svg'
import fullPage from '/@/assets/images/icons/full-page.svg'
import IssueSidebarForm from './components/IssueSidebarForm.vue'
import IssueDialogForm from './components/IssueDialogForm.vue'
import { ref } from 'vue'

const visible = ref(false)
const currentWidth = ref<number>(50)
const inputSearch = ref('')
const visibleDialog = ref(false)
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
const activeType = ref(1)
const formTypes = ref([
    {
        id: 1,
        title: 'Side peek',
        icon: sidePeek,
        active: true,
    },
    {
        id: 2,
        title: 'Center peek',
        icon: centerPeek,
        active: false,
    },
    {
        id: 3,
        title: 'Full page',
        icon: fullPage,
        active: false,
    },
])

const openForm = () => {
    if (activeType.value == 1) {
        visible.value = true
    } else {
        visibleDialog.value = true
    }
}
</script>