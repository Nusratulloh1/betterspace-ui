<template>
    <div class="min-h-screen">
        <div class="h-[95vh] flex items-center justify-center">
            <div class="text-center w-full max-w-[340px]">
                <LogoIcon class="mx-auto" />
                <h5 class=" font-medium text-xl mt-9">Please verify your email</h5>
                <p class="text-black  text-[15px] mt-9">
                    Once you verify your email address, you and your team can get started in Iteration X.
                </p>

                <div class="flex items-center justify-between mx-auto mt-14 w-full max-w-[260px]">
                    <p class="text-[#686A6E]  text-xs !leading-[14.5px]">Didn't receive an email?</p>
                    <button to="/signin" class="text-xs  text-primary !leading-[14.5px] hover:underline">Resend email.</button>
                </div>
            </div>
        </div>
        <ul class="flex items-center justify-center gap-5">
            <li>
                <a href="#" class="text-[#AAAAAA] text-xs hover:underline"> Privacy Policy </a>
            </li>
            <li>
                <a href="#" class="text-[#AAAAAA] text-xs hover:underline"> Cookie Policy </a>
            </li>
            <li>
                <a href="#" class="text-[#AAAAAA] text-xs hover:underline"> Terms of Service </a>
            </li>
        </ul>
    </div>
</template>
<script lang="ts" setup>
import { LogoIcon } from '/@/components/icons'
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { useUsersStore } from '/@/stores'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import sha1 from 'sha1'
import Cookies from 'js-cookie'
const i18n = useI18n()
const store = useUsersStore()
const router = useRouter()
const route = useRoute()

const loading = ref(false)
const submitForm = async () => {
    try {
        loading.value = true
        // await store.login(route.query.email as any)
        // await store.getUserInfo()
        loading.value = false
        router.push('/home')
    } catch (error: any) {
        console.log('error', error.message)
        loading.value = false
    }
}
</script>