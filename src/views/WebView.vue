<template>
    <div class="pb-20 min-h-screen bg-[#000000]" :class="{ 'flex items-center gap-2 pt-3 px-2': screenSplit }">
        <transition name="slide-bottom">
        <img v-if="!screenSplit" src="/@/assets/images/desktop.jpg" class="w-full h-full" alt="" />
        </transition>
        <transition name="slide-right">
            <div
                v-if="screenSplit"
                class="overflow-hidden min-h-[92vh] relative"
                :class="{ ' w-1/2 border-4  border-[#2B2B2B] rounded-xl': screenSplit }"
            >
                <img
                    src="/@/assets/images/desktop.jpg"
                    :class="{ 'absolute right-0 top-0 object-cover object-left': screenSplit }"
                    class="w-full h-full"
                    alt=""
                />
            </div>
        </transition>
        <transition name="slide-left">
            <div v-if="screenSplit" class="w-1/2 h-full border-4 border-[#2B2B2B] rounded-xl overflow-hidden min-h-[92vh] relative">
                <img src="/@/assets/images/desktop-2.jpg" class="w-full h-full absolute right-0 top-0 object-cover object-left" alt="ds" />
            </div>
        </transition>
        <!-- <iframe src="https://lms.eduplus.uz/teacher/courses/65b399cb1d31bf0001249562" class="w-full h-screen" frameborder="5"></iframe> -->
    </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { useUsersStore } from '../stores/user'

const userStore = useUsersStore()

const screenSplit = computed(() => userStore.screenSplit)
</script>