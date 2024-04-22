import type { IUser, ILoginInfo } from '../models/backend'
import { defineStore } from 'pinia'
import { removeAccessToken, removeRefreshToken, setAccessToken, getAccessToken, setRefreshToken } from '../utils/cookies'
import request from '../utils/request'

interface UserState {
    token?: string
    user: IUser | null,
    screenSplit: boolean
}

export const useUsersStore = defineStore('users', {
    state: (): UserState => ({
        token: getAccessToken(),
        user: null,
        screenSplit: false
    }),
    actions: {
        async login(loginInfo: ILoginInfo) {
            console.log(loginInfo);
           if(loginInfo.phone === '+998 90 123-12-31' && loginInfo.password === 'Ai3003008'){
            this.token = 'bj9q7FBZEpltbwpue1P62J7F?5fo?opjXbLHMFCjEFq=o7L?G8I1?X?9Lb9F66O?/q1b1fuu-c!vUva/mf7UadWhL8NYOro9wLa6sO9n9ziTRvElWwqc-typcSn-vX?MoKCyT7j-aA4MKEtddhW4ut7LGntUVbFMgSP1J==Jj6l37u9k9D4Am=JpLYl7tYkyDB=vU05-3/ehn9qMe1QKmW6KzqapPG9ZRDIv2wlsfuwVFj3EOmcpastM?bsaJU7b';
            setAccessToken(this.token);
            setRefreshToken(this.token);
           }
           else{
             throw new Error("User not found");
            
           }
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
