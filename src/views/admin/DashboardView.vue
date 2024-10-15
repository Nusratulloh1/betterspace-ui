<template>
    <div class="pt-8 px-8 flex h-[80vh] items-center justify-center container mx-auto">
        
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'
import IssueCreationCard from './components/IssueCreationCard.vue'
import { useUsersStore } from '/@/stores'

const usersStore = useUsersStore()
const user = computed(() => (typeof usersStore.getUser == 'string' ? JSON.parse(usersStore.getUser) : usersStore.getUser))

onMounted(() => {})
</script>