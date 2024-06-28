<template>
    <div class="min-h-screen">
        <div class="h-[95vh] flex items-center justify-center">
            <template v-for="step in formSteps" :key="step.id">
                <div class="text-center w-full max-w-[370px]" v-if="currentStep == step.query">
                    <p class="text-primary font-semibold text-xs">{{ step.sub_title }}</p>
                    <h5 class="font-medium text-[19px] mt-4">{{ step.title }}</h5>
                    <hr class="!w-full mt-3 mb-6" />
                     <component :is="step.component" />
                </div>
            </template>
        </div>
        <div class="flex items-center justify-center gap-5">
            <button
                v-for="step in formSteps"
                :key="step.id"
                class="w-2 h-2 rounded-full bg-[#B6BCC9]"
                @click="
                    router.replace({
                        query: {
                            step: step.query,
                        },
                    }),
                        (currentStep = step.query)
                "
                :class="{ ' !bg-primary': currentStep == step.query }"
            ></button>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { onMounted, onUnmounted, reactive, ref } from 'vue'
import { useUsersStore } from '/@/stores'
import { useRoute, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import sha1 from 'sha1'
import Add from './components/Add.vue'
import Configure from './components/Configure.vue'
import Team from './components/Team.vue'
import Invite from './components/Invite.vue'

const i18n = useI18n()
const store = useUsersStore()
const router = useRouter()
const route = useRoute()
const ruleForm = reactive({
    email: '',
    password: '',
})
const currentStep = ref(route.query.step || 'configure')
const formSteps = ref([
    {
        id: 1,
        title: 'Let’s configure your account',
        sub_title: 'Welcome to the new way of collaboration!',
        query: 'configure',
        component: Configure,
    },
    {
        id: 2,
        title: 'Create your first team',
        sub_title: 'Now set up your workspace',
        query: 'team',
        component: Team,
    },
    {
        id: 3,
        title: 'Don’t work alone! Collaborate with your teammates.',
        sub_title: 'Invite your colleagues',
        query: 'invite',
        component: Invite,
    },
    {
        id: 4,
        title: 'Download our browser extension, to start capturing your issues in context.',
        sub_title: 'One more thing.',
        query: 'add',
        component: Add,
    },
])

const loading = ref(false)
const submitForm = async () => {
    try {
        loading.value = true
        const data = {
            ...ruleForm,
            password: sha1(ruleForm.password),
        }
        await store.login(data as any)
        await store.getUserInfo()
        loading.value = false
        router.push('/dashboard')
    } catch (error: any) {
        console.log('error', error.message)
        loading.value = false
    }
}
</script>