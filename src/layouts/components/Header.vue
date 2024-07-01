<template>
    <header
        class="flex flex-col justify-center items-start py-3.5 pr-6 pl-8 text-sm whitespace-nowrap border-b border-solid border-neutral-200 text-zinc-800 max-md:px-5 max-md:max-w-full"
    >
        <nav class="flex items-center gap-1.5 py-1.5">
            <Icon size="14" class="shrink-0 aspect-square" name="local-home" />
            <a href="/" tabindex="0">Home</a>
        </nav>
    </header>
</template>
  
  <script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'HeaderComponent',
})
</script>