import type { IUser, ILoginInfo } from '../models/backend'
import { defineStore } from 'pinia'
import { removeAccessToken, removeRefreshToken, setAccessToken, getAccessToken, setRefreshToken } from '../utils/cookies'
import request from '../utils/request'

interface UserState {
    token?: string
    user: IUser | null
}

export const useUsersStore = defineStore('users', {
    state: (): UserState => ({
        token: getAccessToken(),
        user: null,
    }),
    actions: {
        async login(loginInfo: ILoginInfo) {
            const response = await request.post("/auth/login", loginInfo);

            this.token = response.access_token;
            setAccessToken(response.access_token);
            setRefreshToken(response.refresh_token);
        },
        async getUserInfo() {
            const user = await request.post('/auth/get-user')
            this.user = user
        },

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
