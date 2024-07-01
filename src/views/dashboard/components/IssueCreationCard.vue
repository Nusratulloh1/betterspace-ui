<template>
    <div class="flex flex-col items-start pt-4 pr-16 pb-[30px] pl-7 bg-white border border-solid border-neutral-200 w-[331px] h-[431px] rounded-[58px]">
        <div class="justify-center px-3 py-1 text-xs leading-5 text-white bg-blue-800 bg-opacity-30 rounded-[100px]">Command: {{ data.command }}</div>
        <h2 class="mt-5 text-xl tracking-normal leading-6 text-neutral-900">{{ data.title }}</h2>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9789c987be9e9c40d431bda9e1b6e904a8a8410ba9fa78d54b8cd3553f9d8359?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
            class="self-center mt-24 aspect-square w-[62px]"
            alt="Create issue icon"
        />
        <div class="flex gap-2 items-center mt-28 text-sm whitespace-nowrap">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7236c444abf2f2ea2d07dde929810bd565a716e0046d16ae23bd57f38d6b4c6c?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                class="shrink-0 self-stretch my-auto w-3.5 aspect-square"
                alt="Command icon"
            />
            <p class="self-stretch my-auto leading-[140%] text-neutral-900 text-opacity-40">Command:</p>
            <kbd
                class="justify-center items-start self-stretch px-3 py-2 border border-solid border-neutral-400 leading-[150%] rounded-[50px] text-neutral-400"
            >
                ⌘{{ data.co }}
            </kbd>
        </div>
    </div>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'IssueCreationCard',
    props: ['data']
})
</script>