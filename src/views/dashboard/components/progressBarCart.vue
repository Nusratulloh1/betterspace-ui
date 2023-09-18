<template>
    <div>
        <div class="flex items-center justify-between">
            <h6 class="text-xl font-semibold text-[#111927]">
                {{ card.title }}
            </h6>
            <RouterLink class="text-[#9D9D9D] text-sm font-semibold hover:underline" to="/">
                Открыть
            </RouterLink>
        </div>
        <div class="flex items-center justify-between mt-8">
            <h6 class="text-xl font-semibold ">
                {{ card.desc }}
            </h6>
            <p>
                {{ card.percent }}%
            </p>
        </div>
        <el-progress class="w-full mt-4 !h-2" :color="card.color" :percentage="card.percent" :show-text="false" />
        <div class="flex items-center justify-between mt-8">
            <h6 class=" font-medium">
                Sello.uz
            </h6>
            <p class=" font-medium">
                3
            </p>
        </div>
        <div class="flex items-center justify-between mt-2">
            <h6 class=" font-medium">
                Wildberries
            </h6>
            <p class=" font-medium">
                6
            </p>
        </div>
        <div class="flex items-center justify-between mt-2">
            <h6 class=" font-medium">
                Zoodmall
            </h6>
            <p class=" font-medium">
                4
            </p>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'

const props = defineProps({
    card: {
        type: Object,
        required: true,
        default: null
    }
})

</script>
<style lang="scss" ></style>