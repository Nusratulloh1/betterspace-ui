<template>
    <div class="settings">
        <div>
            <h4 class="settings__title">Workspace labels</h4>
            <p class="settings__desc">Manage workspace labels</p>
        </div>
        <el-divider />
        <p class="settings__desc">
            Use labels and label groups to help organize and filter issues in your workspace. Labels created in this section are available for all
            teams to use. To create labels or label groups that only apply to certain teams, add them in the team-specific label settings.
        </p>
        <div class="flex justify-end mt-4">
            <el-button round type="primary"> New label </el-button>
        </div>
        <div class="flex flex-col gap-1 max-w-screen-sm mt-4">
            <Label :label="label" v-for="(label, i) in labels" :key="i" />
        </div>
    </div>
</template>
<script lang="ts" setup>
import Label from './components/Label.vue'
const labels: any = [
    {
        color: '#EB5757',
        title: 'Bug',
    },
    {
        color: '#BB87FC',
        title: 'Feature',
    },
    {
        color: '#4EA7FC',
        title: 'Improvement',
    },
]
</script>