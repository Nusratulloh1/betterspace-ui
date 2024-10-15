<template>
    <div class="flex items-center justify-between gap-5 px-5 py-4 bg-white border border-solid border-neutral-200 rounded-[40px] w-full cursor-pointer transition-all hover:translate-y-[-2px] hover:shadow-lg">
        <div class="flex items-center gap-5">
            <Icon size="26" color="#A7A7A7" class="self-center aspect-square w-[62px]" :name="`local-${data.icon}`" />
            <h2 class="text-[15px] text-start tracking-normal leading-6 text-neutral-900">{{ data.title }}</h2>
        </div>
        <kbd
            class="flex justify-center capitalize items-center px-2 border border-solid border-[#0A121766] text-[13px] leading-5 rounded-[50px] text-[#0A121766]"
        >
            <span> ⌘ </span>{{ data.co }}
        </kbd>
    </div>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IssueCreationCard',
    props: ['data'],
})
</script>