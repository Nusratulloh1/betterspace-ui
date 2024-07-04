<template>
    <div class="pt-8 px-8 flex h-[80vh] items-center justify-center container mx-auto">
        <div class="text-center">
            <h4 class="text-[#343330] font-bold text-[30px] leading-9">Hello, {{ user.name }}</h4>
            <p class="text-[#0A121740] text-[25px] mt-1">From which command you want to start today?</p>
            <div class="grid grid-cols-2 gap-x-12 gap-y-8 mt-11">
                <IssueCreationCard v-for="(data, i) in issues" :key="i" :data="data" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import IssueCreationCard from './components/IssueCreationCard.vue'
import { useUsersStore } from '/@/stores'

const usersStore = useUsersStore()
const user = computed(() => (typeof usersStore.getUser == 'string' ? JSON.parse(usersStore.getUser) : usersStore.getUser))

const issues = [
    {
        command: 'Create issue',
        title: 'Create a new issue for any team and project',
        co: 'i',
        icon: 'scan',
    },
    {
        command: 'Create team',
        title: 'Create new team for collaboration work',
        co: 't',
        icon: 'cross',
    },
    {
        command: 'Create project',
        title: 'Create new projects for teams',
        co: 'p',
        icon: 'teams',
    },
    {
        command: 'Create milestone',
        title: 'Create new milestone for better productivity of team',
        co: 'c',
        icon: 'scan',
    },
]
onMounted(() => {
    console.log(typeof usersStore.getUser)
})
</script>