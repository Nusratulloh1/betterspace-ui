<template>
    <el-button @click="login" class="!w-full" round size="large">
        <img class="mr-1.5" src="/@/assets/images/applications/google.svg" alt="google" />
        Sign in with Google
    </el-button>
</template>
<script lang="ts" setup>
import { googleSdkLoaded } from 'vue3-google-login'
const login = () => {
    googleSdkLoaded((google) => {
        google.accounts.oauth2
            .initCodeClient({
                client_id: '1006123200595-mpadesgaspg0dhdi17teaaehj79ht45h.apps.googleusercontent.com',
                scope: 'email profile openid',
                callback: (response) => {
                    console.log('Handle the response', response)
                },
            })
            .requestCode()
    })
}
</script>