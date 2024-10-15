<template>
    <header>
        <h4 class="text-[#101828] font-semibold text-[30px]">
            {{ currentRoute.title }}
        </h4>
        <p class="text-[#475467] text-base">
            {{ currentRoute.desc }}
        </p>
    </header>
</template>
  
  <script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentRoute = computed(() => route.meta)
</script>