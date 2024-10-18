import type { IUser, ILoginInfo } from '../models/backend'
import { defineStore } from 'pinia'
import { 
    removeAccessToken, 
    removeRefreshToken, 
    setAccessToken, 
    getAccessToken, 
    setRefreshToken, 
    setUserInfo, 
    getUserInfo 
} from '../utils/cookies'
import request from '../utils/request'
import { AxiosError } from 'axios'

interface UserState {
    token?: string
    user: IUser | null,
    screenSplit: boolean,
    users: Array<{ email: string, password: string }>
}

export const useUsersStore = defineStore('users', {
    state: (): UserState => ({
        token: getAccessToken(),
        user: getUserInfo(),
        screenSplit: false,
        users: [
            {
                email: 'admin@gmail.com',
                password: 'admin'
            },
            {
                email: 'merchant@gmail.com',
                password: 'merchant'
            },
            {
                email: 'hr@gmail.com',
                password: 'hr'
            }
        ]
    }),
    actions: {
        async login(data: { email: string, password: string }) {
            // Check if email and password match one of the users
            const foundUser = this.users.find(user => 
                user.email === data.email && user.password === data.password
            );
            console.log(foundUser);
            
            if (foundUser) {
                this.token = 'generated_access_token';
                setAccessToken(this.token);
                setRefreshToken(this.token);
                this.user = { email: foundUser.email, role: data.password } as IUser;
                setUserInfo(this.user);
            } else {
                return Promise.reject('Invalid email or password')
            }
        },
        
        async getUserInfo() {
            // Simulate fetching user info from the backend
            // const user = await request.post('/auth/get-user')
            // this.user = user;
            return this.user;
        },

        resetToken() {
            removeAccessToken();
            removeRefreshToken();
            this.token = '';
            this.user = null;
        },
    },
    getters: {
        getUser: (state) => state.user,
        getToken: (state) => state.token,
    },
});
