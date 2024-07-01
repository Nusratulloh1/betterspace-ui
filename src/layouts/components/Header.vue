<template>
    <header
        class="flex flex-col justify-center items-start py-3.5 pr-6 pl-8 text-sm whitespace-nowrap border-b border-solid border-neutral-200 text-zinc-800 max-md:px-5 max-md:max-w-full"
    >
        <nav class="flex gap-1.5 py-1.5">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7023a5193d5752f5d7ee4cd92ccce3265cb81142ccb34954f3ae3347580e438e?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                class="shrink-0 w-4 aspect-square"
                alt=""
            />
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