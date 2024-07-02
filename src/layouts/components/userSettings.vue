<template>
    <el-popover placement="bottom-start" popper-class="!top-[60px]" :width="181" trigger="click">
        <template #reference>
            <div class="flex items-center gap-1 cursor-pointer">
                <LogoIcon class="w-[18px]" />
                <span class="text-base text-black font-medium">Opus</span>
                <Icon size="8" color="#939496" name="el-icon-ArrowDown" />
            </div>
        </template>
        <div>
            <el-popover placement="right-start" :width="240" trigger="click">
                <template #reference>
                    <div class="flex items-center justify-between route">
                        <div class="flex items-center gap-1.5">
                            <div
                                class="w-[14px] h-[14px] bg-black rounded-full flex items-center justify-center text-[6px] font-inter pt-0.5 text-white"
                            >
                                IA
                            </div>
                            {{ user.name }}
                        </div>
                        <Icon size="8" color="#343330" name="el-icon-ArrowRightBold" />
                    </div>
                </template>
                <div class="flex items-center gap-1.5 route">
                    <div
                        class="w-[14px] h-[14px] bg-black rounded-full flex items-center justify-center text-[6px] leading-[0px] font-inter text-white pt-0.5"
                    >
                        IA
                    </div>
                    {{ user.email }}
                </div>
                <hr />
                <div class="flex items-center gap-1.5 route">
                    <div
                        class="w-[14px] h-[14px] bg-black rounded-full flex items-center justify-center text-[6px] leading-[0px] font-inter text-white pt-0.5"
                    >
                        IA
                    </div>
                    i.akramov@ai-lab.uz
                </div>
                <hr />
                <div class="flex items-center gap-1.5 route">
                    <div
                        class="w-[14px] h-[14px] bg-black rounded-full flex items-center justify-center text-[6px] leading-[0px] font-inter text-white pt-0.5"
                    >
                        IA
                    </div>
                    i.akramov@centralasian.uz
                </div>
                <div class="flex items-center gap-1.5 route !text-[#9D9D9F]">
                    <Icon size="12" class="mb-0.5" color="#343330" name="el-icon-Plus" />
                    Add new account
                </div>
                <hr />
                <div @click="logOut" class="flex items-center gap-1.5 route !text-[#FF0000] !bg-[#FFE8E8]">
                    <Icon size="14" class="mb-0.5" color="#FF0000" name="el-icon-Plus" />
                    Log out
                </div>
            </el-popover>
            <el-popover placement="right-start" :width="240" trigger="click">
                <template #reference>
                    <div class="flex items-center justify-between route">
                        <div class="flex items-center gap-1.5">
                            <Icon size="14" color="#5C5C5E" name="local-switch" />
                            Switch workspace
                        </div>
                        <Icon size="8" color="#343330" name="el-icon-ArrowRightBold" />
                    </div>
                </template>
                <div class="flex items-center gap-1.5 route !py-2.5 !text-[#444444]">
                    <div
                        class="w-[24px] h-[24px] border bg-[#2F3640] rounded-full flex items-center justify-center text-[9px] leading-[0px] font-inter text-white"
                    >
                        AI
                    </div>
                    AI Lab
                </div>
                <hr />
                <div class="flex items-center gap-1.5 !py-2.5 route !text-[#444444]">
                    <div
                        class="w-[24px] h-[24px] border bg-[#2F3640] rounded-full flex items-center justify-center text-[9px] leading-[0px] font-inter text-white"
                    >
                        P
                    </div>
                    Private projects
                </div>
                <hr />
                <div class="flex items-center gap-1.5 route !text-[#9D9D9F]">
                    <Icon size="12" class="mb-0.5" color="#343330" name="el-icon-Plus" />
                    Add new workspace
                </div>
            </el-popover>
            <hr />
            <div class="flex items-center gap-1.5 route">
                <Icon size="14" color="#343330" name="local-setting" />
                Workspace settings
            </div>
            <div class="flex items-center gap-1.5 route">
                <Icon size="14" color="#343330" name="local-users" />
                Manage members
            </div>
            <div class="flex items-center gap-1.5 route">
                <Icon size="14" color="#343330" name="local-credit" />
                Billing
            </div>
            <hr />
            <div class="flex items-center gap-1.5 route">
                <Icon size="14" color="#343330" name="local-help" />
                Help
            </div>
        </div>
    </el-popover>
</template>
<script lang="ts" setup>
import LogoIcon from '/@/components/icons/LogoIcon.vue'
const props = defineProps({
    user: {
        default: null,
        type: Object,
    },
})
const emit = defineEmits(['logut'])
const logOut = () => {
    emit('logut')
}
</script>