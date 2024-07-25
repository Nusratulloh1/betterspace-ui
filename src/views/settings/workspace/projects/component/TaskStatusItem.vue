<template>
    <article class="flex flex-col pb-3 whitespace-nowrap bg-white max-md:max-w-full">
        <header class="flex gap-5 justify-between items-center px-4 py-2.5 bg-gray-100 rounded-xl text-zinc-600 max-md:flex-wrap max-md:max-w-full">
            <h2 class="my-auto">{{ status.name }}</h2>

            <button>
                <svg class="shrink-0 w-4 aspect-square" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M6.25 1C6.25 0.58579 5.91421 0.25 5.5 0.25C5.08579 0.25 4.75 0.58579 4.75 1V4.25H1.5C1.08579 4.25 0.75 4.58579 0.75 5C0.75 5.41421 1.08579 5.75 1.5 5.75H4.75V9C4.75 9.4142 5.08579 9.75 5.5 9.75C5.91421 9.75 6.25 9.4142 6.25 9V5.75H9.5C9.9142 5.75 10.25 5.41421 10.25 5C10.25 4.58579 9.9142 4.25 9.5 4.25H6.25V1Z"
                        fill="#5E5E5F"
                    />
                </svg>
            </button>
        </header>
        <div class="flex gap-5 justify-between mt-3 w-full pl-3 text-zinc-900 max-md:flex-wrap pr-4 max-md:max-w-full">
            <div class="flex gap-3">
                <img :src="status.iconSrc" :alt="`${status.name} icon`" class="shrink-0 rounded-xl aspect-square w-[34px]" />
                <span class="my-auto">{{ status.name }}</span>
            </div>
            <button>
                <svg
                    class="shrink-0 my-auto w-4 aspect-square"
                    width="13"
                    height="4"
                    viewBox="0 0 13 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.5 0.5C1.89782 0.5 2.27936 0.658035 2.56066 0.93934C2.84196 1.22064 3 1.60218 3 2C3 2.39782 2.84196 2.77936 2.56066 3.06066C2.27936 3.34196 1.89782 3.5 1.5 3.5C1.10218 3.5 0.720644 3.34196 0.43934 3.06066C0.158035 2.77936 0 2.39782 0 2C0 1.60218 0.158035 1.22064 0.43934 0.93934C0.720644 0.658035 1.10218 0.5 1.5 0.5ZM6.5 0.5C6.89782 0.5 7.27936 0.658035 7.56066 0.93934C7.84196 1.22064 8 1.60218 8 2C8 2.39782 7.84196 2.77936 7.56066 3.06066C7.27936 3.34196 6.89782 3.5 6.5 3.5C6.10218 3.5 5.72064 3.34196 5.43934 3.06066C5.15804 2.77936 5 2.39782 5 2C5 1.60218 5.15804 1.22064 5.43934 0.93934C5.72064 0.658035 6.10218 0.5 6.5 0.5ZM11.5 0.5C11.8978 0.5 12.2794 0.658035 12.5607 0.93934C12.842 1.22064 13 1.60218 13 2C13 2.39782 12.842 2.77936 12.5607 3.06066C12.2794 3.34196 11.8978 3.5 11.5 3.5C11.1022 3.5 10.7206 3.34196 10.4393 3.06066C10.158 2.77936 10 2.39782 10 2C10 1.60218 10.158 1.22064 10.4393 0.93934C10.7206 0.658035 11.1022 0.5 11.5 0.5Z"
                        fill="#5E5E5F"
                    />
                </svg>
            </button>
        </div>
    </article>
</template>
  
  <script lang="ts">
import { defineComponent, PropType } from 'vue'

interface TaskStatus {
    name: string
    iconSrc: string
}

export default defineComponent({
    name: 'TaskStatusItem',
    props: {
        status: {
            type: Object as PropType<TaskStatus>,
            required: true,
        },
    },
})
</script>
  