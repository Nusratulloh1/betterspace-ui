<template>
    <div class="settings">
        <div>
            <h4 class="settings__title">Projects</h4>
            <p class="settings__desc">Manage project settings for your workspace</p>
        </div>
        <el-divider />
        <div>
            <h4 class="settings__subtitle">Project statuses</h4>
            <p class="settings__desc">Customize project statuses for your workspace</p>
        </div>
        <section class="flex flex-col px-4 mt-6 pt-[18px] pb-1 max-w-screen-sm text-sm bg-white border border-solid border-neutral-200 rounded-[40px] overflow-hidden">
            <TaskStatusItem v-for="(status, index) in taskStatuses" :key="index" :status="status" :icon-src="status.iconSrc" />
        </section>
    </div>
</template>
<script setup lang="ts">
import TaskStatusItem from './component/TaskStatusItem.vue'

interface TaskStatus {
    name: string
    iconSrc: string
}

const taskStatuses: TaskStatus[] = [
    {
        name: 'Backlog',
        iconSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/bcdd88b0a81a98683ddeedf2e8a8bcb0446c53c7088c57d76534fe8f50bac26c?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&&apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6',
    },
    {
        name: 'Planned',
        iconSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/88e12ccca5eb1a100f9bcb602029cd14b1395f91f259482aee192e022d0197c7?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&&apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6',
    },
    {
        name: 'In Progress',
        iconSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/88168ba427fafb3667498311073a7de373211e452b861281a92013090996d514?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&&apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6',
    },
    {
        name: 'Completed',
        iconSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/88fca05542101110689b021c35af2e0081e07a5275584fb2c1527e8b5cf4f281?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&&apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6',
    },
    {
        name: 'Canceled',
        iconSrc:
            'https://cdn.builder.io/api/v1/image/assets/TEMP/fcb96850c5658c0a18a97bb95ed717e51202e940cae33db7a0b437c77a035db7?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&&apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6',
    },
]
</script>