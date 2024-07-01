<template>
    <div class="pt-8 px-8">
        <h4 class="text-[#0A1217] font-medium text-[28px] leading-7">Hello, {{ user.name }}</h4>
        <p class="text-[#0A121740] font-medium text-[25px]">How can I help you today?</p>
        <!-- <el-scrollbar height="100%" class="w-[80vw]"> -->
            <div class="flex items-center flex-wrap gap-6 mt-9">
                <IssueCreationCard v-for="(data, i) in issues" :key="i" :data="data" />
            </div>
        <!-- </el-scrollbar> -->
    </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import IssueCreationCard from './components/IssueCreationCard.vue'
import { useUsersStore } from '/@/stores'

const usersStore = useUsersStore()
const user = computed(() => JSON.parse(usersStore.getUser))
const issues = [
    {
        command: 'Create issue',
        title: 'Create a new issue for any team and project',
        co: 'i',
    },
    {
        command: 'Create team',
        title: 'Create new team for collaboration work',
        co: 't',
    },
    {
        command: 'Create project',
        title: 'Create new projects for teams',
        co: 'p',
    },
    {
        command: 'Create milestone',
        title: 'Create new milestone for better productivity of your team',
        co: 'c',
    },
]
</script>