<template>
    <div class=" p-8 bg-[#F9FAFB] rounded-2xl mb-10">
        <div>
            <h6 class="text-[#101828] text-lg font-semibold">
                Notification settings
            </h6>
            <p class="text-[#475467] text-sm">
                We may still send you important notifications about your account outside of your notification settings.
            </p>
            <hr class="my-5" />
            <div class="flex items-start gap-16">
                <div class="max-w-[280px]">
                    <span class="text-sm text-[#344054] font-semibold">
                        Comments
                    </span>
                    <p class="text-[#475467] text-sm">
                        These are notifications for comments on your posts and replies to your comments.
                    </p>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <el-switch id="push" v-model="form.comments.push" />
                        <label for="push" class="cursor-pointer text-[#344054] text-sm font-medium">Push</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <el-switch id="email" v-model="form.comments.email" />
                        <label for="email" class="cursor-pointer text-[#344054] text-sm font-medium">Email</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <el-switch id="sms" v-model="form.comments.sms" />
                        <label for="sms" class="cursor-pointer text-[#344054] text-sm font-medium">SMS</label>
                    </div>
                </div>
            </div>
            <hr class="my-5" />
            <div class="flex items-start gap-16">
                <div class="max-w-[280px]">
                    <span class="text-sm text-[#344054] font-semibold">
                        Tags
                    </span>
                    <p class="text-[#475467] text-sm">
                        These are notifications for when someone tags you in a comment, post or story.
                    </p>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <el-switch id="tags.push" v-model="form.tags.push" />
                        <label for="tags.push" class="cursor-pointer text-[#344054] text-sm font-medium">Push</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <el-switch id="tags.email" v-model="form.tags.email" />
                        <label for="tags.email" class="cursor-pointer text-[#344054] text-sm font-medium">Email</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <el-switch id="tags.sms" v-model="form.tags.sms" />
                        <label for="tags.sms" class="cursor-pointer text-[#344054] text-sm font-medium">SMS</label>
                    </div>
                </div>
            </div>
            <hr class="my-5" />
            <div class="flex items-start gap-16">
                <div class="max-w-[280px]">
                    <span class="text-sm text-[#344054] font-semibold">
                        Reminders
                    </span>
                    <p class="text-[#475467] text-sm">
                        These are notifications to remind you of updates you might have missed.
                    </p>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <el-switch id="reminders.push" v-model="form.reminders.push" />
                        <label for="reminders.push" class="cursor-pointer text-[#344054] text-sm font-medium">Push</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <el-switch id="reminders.email" v-model="form.reminders.email" />
                        <label for="reminders.email" class="cursor-pointer text-[#344054] text-sm font-medium">Email</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <el-switch id="reminders.sms" v-model="form.reminders.sms" />
                        <label for="reminders.sms" class="cursor-pointer text-[#344054] text-sm font-medium">SMS</label>
                    </div>
                </div>
            </div>
            <hr class="my-5" />
            <div class="flex items-start gap-16">
                <div class="max-w-[280px]">
                    <span class="text-sm text-[#344054] font-semibold">
                        More activity about you
                    </span>
                    <p class="text-[#475467] text-sm">
                        These are notifications for posts on your profile, likes and other reactions to your posts, and
                        more.
                    </p>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <el-switch id="more.push" v-model="form.more.push" />
                        <label for="more.push" class="cursor-pointer text-[#344054] text-sm font-medium">Push</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <el-switch id="more.email" v-model="form.more.email" />
                        <label for="more.email" class="cursor-pointer text-[#344054] text-sm font-medium">Email</label>
                    </div>
                    <div class="flex items-center gap-2">
                        <el-switch id="more.sms" v-model="form.more.sms" />
                        <label for="more.sms" class="cursor-pointer text-[#344054] text-sm font-medium">SMS</label>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-6 bg-white rounded-xl border border-[#EAECF0] mt-6 shadow">
            <h6 class="text-[#101828] text-lg font-semibold">
                We’ve just released a new update!
            </h6>
            <p class="text-[#475467] text-sm">
                Check out the all new dashboard view. Pages and now load faster.
            </p>
            <div class="flex items-end gap-4 mt-5">
                <div>
                    <label for="" class="text-[#101828] text-sm font-medium">
                        Subscribe to updates
                    </label>
                    <el-input size="large" v-model="form.email" placeholder="you@untitledui.com">
                        <template #prefix>
                            <Message color="#667085" class="w-5 h-5" />
                        </template>
                    </el-input>
                </div>
                <el-button type="primary" class="gradient !h-12">
                    Subscribe
                </el-button>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { reactive } from "vue";
import { Message } from '@element-plus/icons-vue'
const form = reactive({
    comments: {
        push: true,
        email: true,
        sms: false
    },
    tags: {
        push: true,
        email: false,
        sms: false
    },
    reminders: {
        push: false,
        email: false,
        sms: false
    },
    more: {
        push: false,
        email: false,
        sms: false
    },
    email: ""
})
</script>
<style lang="scss">
.el-switch.is-checked .el-switch__core {
    border: none;
    background: linear-gradient(91deg, #B540F6 52.01%, #F18F8C 86.64%, #FB9D79 96.11%);
}

.el-switch__core {
    background: #F2F4F7;
    border: none;
}
</style>