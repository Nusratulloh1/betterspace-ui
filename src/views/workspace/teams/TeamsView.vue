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
                <el-button size="small" round @click="openForm = true">
                    <Icon size="10" color="fillCurrent" class="mr-1.5" name="local-plus-bold" />
                    Add team
                </el-button>
            </div>
        </div>
        <hr />
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="Team name" min-width="120">
                <template #default="{ row }">
                    <div class="flex items-center gap-5">
                        <div class="flex items-center gap-2.5 font-medium">
                            <Icon size="18" color="#ED46E7" class="mr-1.5" name="local-book-pink" />
                            {{ row.date }}
                        </div>
                        <el-tag round color="#EDEEF2" size="small" class="!text-[#5C5C5E] !border-[#DCDCDC]">
                            <div class="flex items-center gap-1">
                                <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.25311 2.24845C8.48818 2.50814 8.50005 2.94321 8.27972 3.22021L3.90473 8.72018C3.79668 8.85603 3.64652 8.9344 3.48857 8.93743C3.33062 8.94039 3.17839 8.86779 3.06669 8.73613L0.733354 5.98614C0.505549 5.71765 0.505549 5.28235 0.733354 5.01387C0.961161 4.74538 1.3305 4.74538 1.55831 5.01387L3.46565 7.26179L7.4286 2.27979C7.64893 2.00279 8.0181 1.98876 8.25311 2.24845Z"
                                        fill="#5C5C5E"
                                    />
                                </svg>

                                Joined
                            </div>
                        </el-tag>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="Identifier" min-width="80" />
            <el-table-column prop="address" label="Members" min-width="80">
                <img src="/@/assets/images/home/team.svg" alt="" />
            </el-table-column>
            <el-table-column prop="address" label="Projects" min-width="80">
                <template #default="{ row }">
                    <div class="flex items-center gap-2">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M10.927 12.232L9.573 13.012C8.636 13.552 8.167 13.823 7.669 13.929C7.22792 14.0227 6.77208 14.0227 6.331 13.929C5.833 13.823 5.364 13.553 4.427 13.012L3.073 12.232C2.136 11.691 1.667 11.421 1.326 11.042C1.02434 10.7075 0.796409 10.3133 0.657 9.88502C0.5 9.40102 0.5 8.86102 0.5 7.78002V6.22002C0.5 5.13802 0.5 4.59802 0.657 4.11402C0.797 3.68502 1.025 3.29102 1.327 2.95702C1.667 2.57802 2.136 2.30802 3.073 1.76702L4.427 0.987019C5.364 0.447019 5.833 0.17602 6.331 0.0700195C6.77208 -0.0236654 7.22792 -0.0236654 7.669 0.0700195C8.167 0.17602 8.636 0.446019 9.573 0.987019L10.927 1.76702C11.864 2.30802 12.333 2.57802 12.674 2.95702C12.975 3.29102 13.204 3.68502 13.343 4.11402C13.5 4.59802 13.5 5.13802 13.5 6.22002V7.78002C13.5 8.86202 13.5 9.40202 13.343 9.88602C13.203 10.315 12.975 10.709 12.673 11.043C12.333 11.422 11.864 11.691 10.927 12.232ZM5.176 11.712L3.823 10.932C2.798 10.341 2.584 10.198 2.44 10.038C2.27939 9.85959 2.15809 9.64937 2.084 9.42102C2.017 9.21702 2 8.96202 2 7.78002V6.22002C2 5.84202 2.002 5.55902 2.006 5.34202L5.027 6.85202C5.39546 7.04081 5.70469 7.3276 5.92065 7.68082C6.1366 8.03405 6.25092 8.44001 6.251 8.85402V12.311C5.88745 12.1216 5.52899 11.9225 5.176 11.714V11.712ZM7.751 12.309C7.963 12.204 8.283 12.025 8.824 11.713L10.177 10.933C11.203 10.341 11.416 10.198 11.56 10.038C11.72 9.86002 11.842 9.64902 11.916 9.42102C11.982 9.21702 12 8.96202 12 7.77902V6.22002C12 5.84202 11.998 5.55902 11.994 5.34202L8.994 6.84202L8.987 6.84502C8.61524 7.0327 8.30286 7.31987 8.08464 7.67457C7.86642 8.02927 7.75092 8.43757 7.751 8.85402V12.31V12.309ZM11.508 3.90702L8.324 5.49902L8.314 5.50302L8.007 5.65702C7.69451 5.81332 7.3499 5.89469 7.0005 5.89469C6.6511 5.89469 6.30649 5.81332 5.994 5.65702L5.704 5.51202L5.678 5.49902L2.492 3.90602C2.642 3.76302 2.912 3.59102 3.822 3.06602L5.176 2.28602C6.201 1.69402 6.432 1.58102 6.643 1.53602C6.878 1.48602 7.122 1.48602 7.357 1.53602C7.568 1.58102 7.799 1.69402 8.824 2.28602L10.177 3.06602C11.089 3.59102 11.358 3.76402 11.508 3.90702Z"
                                fill="#5C5C5E"
                            />
                        </svg>
                        {{ row.address }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="sprint" label="Sprints" min-width="80" />
            <el-table-column prop="issue" label="Issues" min-width="80" />
            <el-table-column prop="" label="" min-width="80">
                <button >
                    <Icon size="12" color="#5C5C5E" class="mr-1.5" name="el-icon-MoreFilled" />
                </button>
            </el-table-column>
        </el-table>
    </div>
</template>
<script lang="ts" setup>
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
        date: 'Marketing',
        name: '123',
        address: '2',
        sprint: 'Not available',
        issue: '1/3',
    },
    {
        date: 'Digital',
        name: 'TES',
        address: '1',
        sprint: 'Not available',
        issue: '5/10',
    },
]
const openForm = ref(false)
</script>