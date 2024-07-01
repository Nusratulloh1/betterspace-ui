import type { IUser, ILoginInfo } from '../models/backend'
import { defineStore } from 'pinia'
import { removeAccessToken, removeRefreshToken, setAccessToken, getAccessToken, setRefreshToken, setUserInfo, getUserInfo } from '../utils/cookies'
import request from '../utils/request'

interface UserState {
    token?: string
    user: any | null,
    screenSplit: boolean
}

export const useUsersStore = defineStore('users', {
    state: (): UserState => ({
        token: getAccessToken(),
        user: getUserInfo(),
        screenSplit: false
    }),
    actions: {
        async login(token: string, userInfo: any) {
            this.user = userInfo
            this.token = token
            setAccessToken(token);
            setRefreshToken(token);
            setUserInfo(JSON.stringify(userInfo))
        },
        // async getUserInfo() {
        //     const user = await request.post('/auth/get-user')
        //     this.user = user
        // },

        resetToken() {
            removeAccessToken()
            removeRefreshToken()
            this.token = ''
            this.user = null
        },
    },
    getters: {
    getUser: (state) => state.user,
    getToken: (state) => state.token,
},
})
