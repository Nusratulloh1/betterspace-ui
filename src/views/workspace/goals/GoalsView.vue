<template>
    <div class="px-0.5">
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
            <div class="flex">
                <el-button size="small" round @click="openForm = true">
                    <svg class="mr-2" width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.5 9.5C8.63261 9.5 8.75979 9.55268 8.85355 9.64645C8.94732 9.74021 9 9.86739 9 10V13C9 13.1326 8.94732 13.2598 8.85355 13.3536C8.75979 13.4473 8.63261 13.5 8.5 13.5H7.5C7.36739 13.5 7.24021 13.4473 7.14645 13.3536C7.05268 13.2598 7 13.1326 7 13V10C7 9.86739 7.05268 9.74021 7.14645 9.64645C7.24021 9.55268 7.36739 9.5 7.5 9.5H8.5ZM6 10.5V12H0.75C0.551088 12 0.360322 11.921 0.21967 11.7803C0.0790177 11.6397 0 11.4489 0 11.25C0 11.0511 0.0790177 10.8603 0.21967 10.7197C0.360322 10.579 0.551088 10.5 0.75 10.5H6ZM13.25 10.5C13.4489 10.5 13.6397 10.579 13.7803 10.7197C13.921 10.8603 14 11.0511 14 11.25C14 11.4489 13.921 11.6397 13.7803 11.7803C13.6397 11.921 13.4489 12 13.25 12H10V10.5H13.25ZM4.5 5C4.63261 5 4.75979 5.05268 4.85355 5.14645C4.94732 5.24021 5 5.36739 5 5.5V8.5C5 8.63261 4.94732 8.75979 4.85355 8.85355C4.75979 8.94732 4.63261 9 4.5 9H3.5C3.36739 9 3.24021 8.94732 3.14645 8.85355C3.05268 8.75979 3 8.63261 3 8.5V5.5C3 5.36739 3.05268 5.24021 3.14645 5.14645C3.24021 5.05268 3.36739 5 3.5 5H4.5ZM2 6.25V7.75H0.75C0.551088 7.75 0.360322 7.67098 0.21967 7.53033C0.0790177 7.38968 0 7.19891 0 7C0 6.80109 0.0790177 6.61032 0.21967 6.46967C0.360322 6.32902 0.551088 6.25 0.75 6.25H2ZM13.25 6.25C13.4489 6.25 13.6397 6.32902 13.7803 6.46967C13.921 6.61032 14 6.80109 14 7C14 7.19891 13.921 7.38968 13.7803 7.53033C13.6397 7.67098 13.4489 7.75 13.25 7.75H6V6.25H13.25ZM10.5 0.75C10.6326 0.75 10.7598 0.802678 10.8536 0.896447C10.9473 0.990215 11 1.11739 11 1.25V4.25C11 4.38261 10.9473 4.50979 10.8536 4.60355C10.7598 4.69732 10.6326 4.75 10.5 4.75H9.5C9.36739 4.75 9.24021 4.69732 9.14645 4.60355C9.05268 4.50979 9 4.38261 9 4.25V1.25C9 1.11739 9.05268 0.990215 9.14645 0.896447C9.24021 0.802678 9.36739 0.75 9.5 0.75H10.5ZM8 2V3.5H0.75C0.551088 3.5 0.360322 3.42098 0.21967 3.28033C0.0790177 3.13968 0 2.94891 0 2.75C0 2.55109 0.0790177 2.36032 0.21967 2.21967C0.360322 2.07902 0.551088 2 0.75 2H8ZM13.25 2C13.4489 2 13.6397 2.07902 13.7803 2.21967C13.921 2.36032 14 2.55109 14 2.75C14 2.94891 13.921 3.13968 13.7803 3.28033C13.6397 3.42098 13.4489 3.5 13.25 3.5H12V2H13.25Z"
                            fill="currentColor"
                        />
                    </svg>
                    Display
                </el-button>
                <el-button @click="openForm = true" size="small" round>
                    <Icon size="10" color="fillCurrent" class="mr-1.5" name="local-plus-bold" />
                    Add goal
                </el-button>
            </div>
        </div>
        <hr />
        <div class="py-2.5 px-8">
            <GoalForm v-if="openForm" @close="openForm = false" />
        </div>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Title" min-width="120">
                <template #default="{ row }">
                    <div class="flex items-center gap-3 font-medium">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.0905 5.83358C15.047 5.69783 14.9642 5.57807 14.8525 5.48947C14.7408 5.40087 14.6054 5.34743 14.4633 5.33593L12.4278 5.16366L11.6337 3.31249C11.5777 3.18271 11.4849 3.07218 11.3668 2.99452C11.2487 2.91687 11.1104 2.87549 10.969 2.87549C10.8277 2.87549 10.6894 2.91687 10.5713 2.99452C10.4531 3.07218 10.3603 3.18271 10.3043 3.31249L9.51023 5.16421L7.47422 5.33593C7.33284 5.34728 7.19799 5.40025 7.08669 5.48815C6.97538 5.57606 6.8926 5.69495 6.84878 5.82985C6.80497 5.96474 6.80208 6.10959 6.84049 6.24612C6.8789 6.38266 6.95689 6.50476 7.06461 6.59702L8.60461 7.90952L8.14359 9.8635C8.11118 10.0005 8.11983 10.1439 8.16846 10.276C8.21709 10.4081 8.30354 10.5229 8.41703 10.6062C8.53186 10.6905 8.669 10.7391 8.8113 10.7459C8.9536 10.7527 9.09475 10.7174 9.21711 10.6444L10.9671 9.60538L12.7171 10.6444C12.8395 10.7174 12.9806 10.7527 13.1229 10.7459C13.2652 10.7391 13.4024 10.6905 13.5172 10.6062C13.6307 10.523 13.7172 10.4081 13.7659 10.2761C13.8145 10.144 13.8231 10.0005 13.7906 9.8635L13.3296 7.90952L14.8691 6.59702C14.9774 6.50599 15.0563 6.38484 15.0957 6.24893C15.1352 6.11302 15.1333 5.96847 15.0905 5.83358ZM12.692 7.31014C12.5912 7.39552 12.5161 7.50716 12.4749 7.63267C12.4338 7.75817 12.4283 7.89263 12.459 8.02108L12.8587 9.71639L11.3395 8.8135C11.2274 8.74665 11.0993 8.71136 10.9688 8.71136C10.8382 8.71136 10.7101 8.74665 10.598 8.8135L9.07875 9.71093L9.47851 8.01561C9.50966 7.88722 9.50441 7.75269 9.46336 7.62711C9.4223 7.50153 9.34707 7.38988 9.24609 7.30468L7.91937 6.17702L9.6743 6.02827C9.80455 6.01734 9.92936 5.97115 10.0353 5.89465C10.1413 5.81815 10.2245 5.71423 10.2759 5.59405L10.9688 3.98186L11.66 5.59405C11.7115 5.71416 11.7947 5.81802 11.9006 5.8945C12.0066 5.97099 12.1313 6.01722 12.2616 6.02827L14.0165 6.17702L12.692 7.31014ZM6.68453 8.87202L3.62203 11.9345C3.53994 12.0166 3.4286 12.0627 3.3125 12.0627C3.1964 12.0627 3.08506 12.0166 3.00297 11.9345C2.92088 11.8524 2.87476 11.7411 2.87476 11.625C2.87476 11.5089 2.92088 11.3975 3.00297 11.3155L6.06547 8.25296C6.14756 8.17086 6.2589 8.12474 6.375 8.12474C6.4911 8.12474 6.60244 8.17086 6.68453 8.25296C6.76662 8.33505 6.81274 8.44639 6.81274 8.56249C6.81274 8.67858 6.76662 8.78993 6.68453 8.87202ZM7.55953 11.9345L4.49703 14.997C4.45638 15.0377 4.40813 15.0699 4.35502 15.0919C4.30191 15.1139 4.24498 15.1252 4.1875 15.1252C4.13001 15.1252 4.07309 15.1139 4.01998 15.0919C3.96687 15.0699 3.91862 15.0377 3.87797 14.997C3.83732 14.9564 3.80508 14.9081 3.78308 14.855C3.76108 14.8019 3.74976 14.745 3.74976 14.6875C3.74976 14.63 3.76108 14.5731 3.78308 14.52C3.80508 14.4669 3.83732 14.4186 3.87797 14.378L6.94047 11.3155C7.02256 11.2334 7.1339 11.1872 7.25 11.1872C7.3661 11.1872 7.47744 11.2334 7.55953 11.3155C7.64162 11.3975 7.68774 11.5089 7.68774 11.625C7.68774 11.7411 7.64162 11.8524 7.55953 11.9345ZM11.497 11.3155C11.5377 11.3561 11.57 11.4043 11.592 11.4575C11.614 11.5106 11.6253 11.5675 11.6253 11.625C11.6253 11.6825 11.614 11.7394 11.592 11.7925C11.57 11.8456 11.5377 11.8939 11.497 11.9345L8.43453 14.997C8.39388 15.0377 8.34563 15.0699 8.29252 15.0919C8.23941 15.1139 8.18248 15.1252 8.125 15.1252C8.06751 15.1252 8.01059 15.1139 7.95748 15.0919C7.90437 15.0699 7.85612 15.0377 7.81547 14.997C7.77482 14.9564 7.74258 14.9081 7.72058 14.855C7.69858 14.8019 7.68726 14.745 7.68726 14.6875C7.68726 14.63 7.69858 14.5731 7.72058 14.52C7.74258 14.4669 7.77482 14.4186 7.81547 14.378L10.878 11.3155C10.9186 11.2748 10.9669 11.2425 11.02 11.2205C11.0731 11.1985 11.13 11.1871 11.1875 11.1871C11.245 11.1871 11.3019 11.1985 11.355 11.2205C11.4081 11.2425 11.4564 11.2748 11.497 11.3155Z"
                                fill="#FFE600"
                            />
                            <rect width="18" height="18" rx="9" fill="#FCC829" fill-opacity="0.18" />
                        </svg>

                        {{ row.date }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="Identifier" min-width="80" />
            <el-table-column prop="address" label="Resp. teams" min-width="80">
                <div class="flex flex-col gap-1">
                    <div class="flex items-center gap-1">
                        <Icon size="18" color="#ED46E7" class="mr-1.5" name="local-book-pink" />
                        Marketing
                    </div>
                    <div class="flex items-center gap-1">
                        <Icon size="18" color="#5D85FF" class="mr-1.5" name="local-terminal" />
                        Digital
                    </div>
                </div>
            </el-table-column>
            <el-table-column prop="address" label="Goal progression" min-width="80">
                <template #default="{}">
                    <div>
                        <el-progress :width="76" :percentage="60" color="#00902F" class="!w-36 !text-xs" />
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="sprint" label="Milestones" min-width="80">
                <span class="flex items-center gap-2">
                    <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            opacity="0.3"
                            d="M5.3406 1.32C5.68741 0.893332 6.31259 0.893332 6.6594 1.32L10.7903 6.402C11.0699 6.74597 11.0699 7.25403 10.7903 7.598L6.6594 12.68C6.31259 13.1067 5.68741 13.1067 5.3406 12.68L1.2097 7.598C0.9301 7.25403 0.9301 6.74597 1.2097 6.402L5.3406 1.32Z"
                            stroke="#F2BE00"
                            stroke-width="2"
                            stroke-linejoin="round"
                        />
                    </svg>
                    6/13
                </span>
            </el-table-column>
            <el-table-column prop="issue" label="Projects health" min-width="80">
                <div class="flex items-center gap-1.5">
                    <div class="w-2 h-2 rounded-full bg-[#00902F]"></div>
                    <span> 1 </span>
                </div>
            </el-table-column>
            <el-table-column prop="" label="Target date" min-width="80">
                <div class="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.8125 1H10.2188V0.5C10.2188 0.367392 10.1628 0.240215 10.0632 0.146447C9.96352 0.0526784 9.8284 0 9.6875 0C9.5466 0 9.41148 0.0526784 9.31185 0.146447C9.21222 0.240215 9.15625 0.367392 9.15625 0.5V1H3.84375V0.5C3.84375 0.367392 3.78778 0.240215 3.68815 0.146447C3.58852 0.0526784 3.4534 0 3.3125 0C3.1716 0 3.03648 0.0526784 2.93685 0.146447C2.83722 0.240215 2.78125 0.367392 2.78125 0.5V1H1.1875C0.905707 1 0.635456 1.10536 0.436199 1.29289C0.236942 1.48043 0.125 1.73478 0.125 2V12C0.125 12.2652 0.236942 12.5196 0.436199 12.7071C0.635456 12.8946 0.905707 13 1.1875 13H11.8125C12.0943 13 12.3645 12.8946 12.5638 12.7071C12.7631 12.5196 12.875 12.2652 12.875 12V2C12.875 1.73478 12.7631 1.48043 12.5638 1.29289C12.3645 1.10536 12.0943 1 11.8125 1ZM2.78125 2V2.5C2.78125 2.63261 2.83722 2.75979 2.93685 2.85355C3.03648 2.94732 3.1716 3 3.3125 3C3.4534 3 3.58852 2.94732 3.68815 2.85355C3.78778 2.75979 3.84375 2.63261 3.84375 2.5V2H9.15625V2.5C9.15625 2.63261 9.21222 2.75979 9.31185 2.85355C9.41148 2.94732 9.5466 3 9.6875 3C9.8284 3 9.96352 2.94732 10.0632 2.85355C10.1628 2.75979 10.2188 2.63261 10.2188 2.5V2H11.8125V4H1.1875V2H2.78125ZM11.8125 12H1.1875V5H11.8125V12Z"
                            fill="#0F0F0F"
                        />
                    </svg>
                    Mar 29
                </div>
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts" setup>
import GoalForm from './components/GoalForm.vue'
import { ref } from 'vue'

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
const tableData = [
    {
        date: 'Be the best project management app',
        name: 'GOAL1',
        address: '2',
        sprint: 'Not available',
        issue: '1/3',
    },
]
const openForm = ref(false)
</script>