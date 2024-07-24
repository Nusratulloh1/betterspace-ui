<template>
    <div class="settings">
        <div>
            <h4 class="settings__title">Members</h4>
            <p class="settings__desc">Manage who has access to this workspace</p>
        </div>
        <el-divider />
        <div class="!mt-11 !mb-16">
            <h4 class="settings__subtitle !font-normal">Invite link</h4>
            <p class="settings__desc">Share this link with others you'd like to join your workspace.</p>
            <div class="flex items-center gap-3 mt-3">
                <div class="flex w-full relative">
                    <el-input v-model="link" class="!text-xs"> </el-input>
                    <button class="absolute right-3 top-2 bg-[#FBFBFB] p-1">
                        <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.4746 13.9426C11.0728 14.8073 9.43901 15.1563 7.82928 14.9348C6.21955 14.7134 4.72487 13.9339 3.57948 12.7187C2.64334 11.7255 1.98377 10.4871 1.66335 9.1388C1.54846 8.65536 1.93726 8.21973 2.43439 8.21973C2.84389 8.21973 3.18635 8.52037 3.29371 8.91536C3.55811 9.88806 4.05165 10.7799 4.73424 11.5041C5.62512 12.4493 6.78769 13.0555 8.03974 13.2278C9.29179 13.4001 10.5625 13.1286 11.6529 12.456C11.8402 12.3405 12.0204 12.2142 12.1927 12.078L10.9444 10.7519C10.594 10.3796 10.858 9.76884 11.3694 9.76884H14.9164C15.2387 9.76884 15.5 10.03 15.5 10.3522V14.0245C15.5 14.5421 14.8757 14.8033 14.5068 14.4401L13.3542 13.3051C13.0774 13.5388 12.7835 13.752 12.4746 13.9426Z"
                                fill="#5C5C5E"
                            />
                            <path
                                d="M4.52678 2.09145C5.92926 1.19864 7.56381 0.838339 9.17428 1.067C10.7848 1.29567 12.2801 2.10038 13.426 3.35502C14.3697 4.38819 15.0324 5.67838 15.3503 7.08261C15.4597 7.56632 15.0712 8 14.5751 8C14.1639 8 13.8202 7.6973 13.7166 7.29958C13.4532 6.28841 12.9577 5.36118 12.2708 4.60907C11.3795 3.63321 10.2164 3.0073 8.96372 2.82944C7.71109 2.65158 6.43973 2.93183 5.34889 3.62626C5.16149 3.74556 4.98124 3.87592 4.80881 4.01649L6.0577 5.38566C6.40831 5.77003 6.14411 6.40062 5.63246 6.40062H2.08387C1.76141 6.40062 1.5 6.13098 1.5 5.79836V2.00685C1.5 1.47246 2.12458 1.20278 2.49364 1.57782L3.64675 2.74964C3.92376 2.50837 4.21771 2.2882 4.52678 2.09145Z"
                                fill="#5C5C5E"
                            />
                        </svg>
                    </button>
                </div>
                <el-button class="!h-[38px]" round type="primary">
                    <svg class="mr-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M11.75 15C12.1768 15 12.5994 14.9159 12.9937 14.7526C13.388 14.5893 13.7463 14.3499 14.0481 14.0481C14.3499 13.7463 14.5893 13.388 14.7526 12.9937C14.9159 12.5994 15 12.1768 15 11.75V7.25C15 6.8232 14.9159 6.40059 14.7526 6.00628C14.5893 5.61197 14.3499 5.25369 14.0481 4.9519C13.7463 4.65011 13.388 4.41072 12.9937 4.24739C12.5994 4.08406 12.1768 4 11.75 4H8.25C7.38805 4 6.5614 4.34241 5.9519 4.9519C5.34241 5.5614 5 6.38805 5 7.25V11.75C5 12.1768 5.08406 12.5994 5.24739 12.9937C5.41072 13.388 5.65011 13.7463 5.9519 14.0481C6.5614 14.6576 7.38805 15 8.25 15H11.75ZM13.5 11.75C13.5 12.2141 13.3156 12.6592 12.9874 12.9874C12.6592 13.3156 12.2141 13.5 11.75 13.5H8.25C7.78587 13.5 7.34075 13.3156 7.01256 12.9874C6.68437 12.6592 6.5 12.2141 6.5 11.75V7.25C6.5 6.284 7.284 5.5 8.25 5.5H11.75C12.716 5.5 13.5 6.284 13.5 7.25V11.75Z"
                            fill="currentColor"
                        />
                        <path
                            d="M10.957 1.864C11.444 2.315 11.019 3 10.355 3C10.111 3 9.883 2.895 9.677 2.765C9.39909 2.59121 9.07778 2.49936 8.75 2.5H5.25C4.773 2.5 4.341 2.69 4.025 3H4V3.025C3.69 3.341 3.5 3.773 3.5 4.25V8.75C3.5 9.09 3.597 9.408 3.765 9.677C3.895 9.883 4 10.111 4 10.355C4 11.019 3.315 11.445 2.864 10.957C2.30744 10.357 1.99874 9.56842 2 8.75V4.25C2 3.38805 2.34241 2.5614 2.95191 1.9519C3.5614 1.34241 4.38805 1 5.25 1H8.75C9.602 1 10.377 1.328 10.957 1.864Z"
                            fill="currentColor"
                        />
                    </svg>
                    Copy
                </el-button>
            </div>
        </div>
        <el-divider />
        <div class="!mt-11 !mb-10">
            <h4 class="settings__subtitle !font-normal">Manage membersk</h4>
            <p class="settings__desc">
                On the Free plan all members in a workspace are administrators. Upgrade to a paid plan to add the ability to assign or remove
                administrator roles.
                <router-link class="text-primary text-[13px] font-medium ml-1" to="/settings/workspace/plans"> Go to Plans → </router-link>
            </p>
            <div class="flex justify-end mt-5">
                <el-button class="" round type="primary" @click="visibleDialog = true"> Invite people </el-button>
            </div>
            <h4 class="settings__subtitle !text-xs mt-3">Active members</h4>
            <div class="flex items-center justify-between mt-6">
                <div class="flex items-center gap-2.5">
                    <div class="h-[26px] w-[26px] bg-black text-white rounded-full flex items-center justify-center text-xs">IA</div>
                    <div>
                        <span class="text-[13px] font-medium text-[#1B1B1B]"> Islam Akramov </span>
                        <p class="text-[13px] text-[#5C5C5E] mt-[-4px]">islamakramov.b@gmail.com</p>
                    </div>
                </div>
                <p class="text-[13px] text-[#2F2F31]">Role: Admin</p>
                <button>
                    <Icon size="15" color="#5C5C5E" name="el-icon-MoreFilled" />
                </button>
            </div>
        </div>
        <el-divider />
        <div class="!mt-11 flex justify-between items-center">
            <div>
                <h4 class="settings__subtitle !font-normal">Export members list</h4>
                <p class="settings__desc">Export a CSV with information of all the members in your workspace.</p>
            </div>
            <el-button class="" round type="primary"> Export CSV </el-button>
        </div>
        <el-dialog v-model="visibleDialog" width="600px" >
            <div class="flex items-center gap-4 mt-[-20px] pl-5">
                <div class="h-[47px] w-[47px] bg-black text-white rounded-full flex items-center justify-center text-base">TE</div>
                <h5 class="text-xl text-black tracking-[-0.6%]" style="">Invite to your workspace</h5>
            </div>
            <el-divider />
            <el-form @keyup.enter="submitForm()" ref="ruleFormRef" :hide-required-asterisk="true" label-position="top" class="!text-[13px] mt-5 px-5">
                <el-form-item prop="name" label="Email">
                    <el-input
                        size="large"
                        v-model.trim="form.email"
                        class="transparent"
                        type="text"
                        autocomplete="off"
                        placeholder="email@example.com"
                    />
                </el-form-item>
                <el-form-item prop="name" label="Add to team">
                    <el-input size="large" v-model.trim="form.team" class="transparent" type="url" autocomplete="off" placeholder="Text" />
                </el-form-item>
                <div class="flex items-center justify-between">
                    <button class="flex items-center gap-2 text-primary text-sm font-semibold tracking-[-0.6%]">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.5304 6.46975C13.6001 6.53941 13.6555 6.62212 13.6932 6.71317C13.7309 6.80422 13.7504 6.90182 13.7504 7.00038C13.7504 7.09894 13.7309 7.19654 13.6932 7.28758C13.6555 7.37863 13.6001 7.46135 13.5304 7.531L7.53041 13.531C7.46072 13.6007 7.378 13.656 7.28695 13.6937C7.19591 13.7314 7.09833 13.7508 6.99978 13.7508C6.90123 13.7508 6.80365 13.7314 6.71261 13.6937C6.62156 13.656 6.53884 13.6007 6.46915 13.531C6.39947 13.4613 6.3442 13.3786 6.30649 13.2875C6.26877 13.1965 6.24936 13.0989 6.24936 13.0004C6.24936 12.9018 6.26877 12.8043 6.30649 12.7132C6.3442 12.6222 6.39947 12.5394 6.46915 12.4698L12.4692 6.46975C12.5388 6.40002 12.6215 6.3447 12.7126 6.30696C12.8036 6.26922 12.9012 6.24979 12.9998 6.24979C13.0983 6.24979 13.1959 6.26922 13.287 6.30696C13.378 6.3447 13.4608 6.40002 13.5304 6.46975ZM18.2123 1.78788C17.7248 1.30031 17.146 0.913554 16.509 0.649684C15.872 0.385813 15.1893 0.25 14.4998 0.25C13.8103 0.25 13.1276 0.385813 12.4906 0.649684C11.8536 0.913554 11.2748 1.30031 10.7873 1.78788L7.96915 4.60507C7.82842 4.7458 7.74936 4.93667 7.74936 5.13569C7.74936 5.33471 7.82842 5.52559 7.96915 5.66632C8.10989 5.80705 8.30076 5.88611 8.49978 5.88611C8.6988 5.88611 8.88968 5.80705 9.03041 5.66632L11.8485 2.85382C12.5544 2.16349 13.504 1.77936 14.4912 1.7848C15.4785 1.79024 16.4238 2.1848 17.122 2.88286C17.8202 3.58092 18.2149 4.52615 18.2205 5.51343C18.2261 6.5007 17.8422 7.45037 17.152 8.15632L14.3329 10.9744C14.1922 11.115 14.1131 11.3058 14.113 11.5047C14.1129 11.7037 14.1918 11.8945 14.3324 12.0352C14.473 12.176 14.6638 12.2551 14.8627 12.2552C15.0617 12.2552 15.2525 12.1763 15.3932 12.0357L18.2123 9.21288C18.6998 8.72536 19.0866 8.14658 19.3505 7.50959C19.6143 6.8726 19.7502 6.18986 19.7502 5.50038C19.7502 4.81089 19.6143 4.12816 19.3505 3.49117C19.0866 2.85417 18.6998 2.27539 18.2123 1.78788ZM10.9692 14.3335L8.15103 17.1516C7.80423 17.5062 7.39053 17.7885 6.93389 17.9821C6.47725 18.1757 5.98674 18.2768 5.49076 18.2795C4.99477 18.2823 4.50318 18.1866 4.04443 17.998C3.58569 17.8094 3.1689 17.5317 2.81822 17.181C2.46753 16.8302 2.18991 16.4134 2.00143 15.9546C1.81294 15.4959 1.71734 15.0042 1.72016 14.5083C1.72298 14.0123 1.82416 13.5218 2.01785 13.0652C2.21154 12.6086 2.49388 12.1949 2.84853 11.8482L5.66572 9.031C5.80645 8.89027 5.88551 8.6994 5.88551 8.50038C5.88551 8.30136 5.80645 8.11048 5.66572 7.96975C5.52499 7.82902 5.33412 7.74996 5.13509 7.74996C4.93607 7.74996 4.7452 7.82902 4.60447 7.96975L1.78728 10.7879C0.802664 11.7725 0.249512 13.1079 0.249512 14.5004C0.249512 15.8928 0.802664 17.2283 1.78728 18.2129C2.7719 19.1975 4.10732 19.7506 5.49978 19.7506C6.89224 19.7506 8.22766 19.1975 9.21228 18.2129L12.0304 15.3938C12.171 15.2531 12.25 15.0623 12.2499 14.8633C12.2498 14.6644 12.1707 14.4736 12.0299 14.333C11.8892 14.1924 11.6984 14.1135 11.4994 14.1136C11.3005 14.1137 11.1098 14.1928 10.9692 14.3335Z"
                                fill="#1458DD"
                            />
                        </svg>

                        Invite with link
                    </button>
                    <el-button class="!text-sm" size="large" round type="primary" @click="submitForm()" :loading="loading">
                        <span class="text-sm font-semibold">Send invites</span>
                    </el-button>
                </div>
            </el-form>
        </el-dialog>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const visibleDialog = ref(false)
const link = ref('https://opus.app/testaiislam/join/4bdc3b709919b0ed1734b9c0e7ab061d?s=1')

const loading = ref(false)

const form = ref({
    email: '',
    team: '',
})

const submitForm = () => {}
</script>