<template>
    <div class="flex flex-col justify-between items-start pt-4 pb-7 px-7 bg-white border border-solid border-neutral-200 h-[431px] rounded-[58px]">
        <div>
            <button class="justify-center px-3 py-1 text-xs leading-5 text-white bg-blue-800 bg-opacity-30 rounded-[100px]">
                Command: {{ data.command }}
            </button>
            <h2 class="mt-4 text-xl tracking-normal leading-6 text-neutral-900 max-w-[230px]">{{ data.title }}</h2>
        </div>
        <Icon size="62" color="#A7A7A7" class="self-center aspect-square w-[62px] mt-24" :name="`local-${data.icon}`" />
        <div class="flex gap-2 items-center mt-28 text-sm whitespace-nowrap">
            <Icon size="13" color="#9DA0A2" class="shrink-0 self-stretch my-auto w-3.5 aspect-square" name="local-fire" />
            <p class="self-stretch my-auto leading-[140%] text-[#0A121766] text-opacity-40">Command:</p>
            <kbd
                class="flex justify-center items-center self-stretch px-3 border border-solid border-[#0A121766] text-[13px] leading-[150%] rounded-[50px] text-[#0A121766]"
            >
                <span> ⌘ </span>{{ data.co }}
            </kbd>
        </div>
    </div>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IssueCreationCard',
    props: ['data'],
})
</script>