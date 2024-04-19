<template>
    <el-popover placement="top-end" :width="390" :offset="10" trigger="click">
        <template #reference>
            <button class="flex items-center justify-center w-12 h-12 hover:bg-primary">
                <Icon class="!fill-current" name="local-checkers" size="18" />
            </button>
        </template>
        <div class="px-5 py-6">
            <div class="flex items-center justify-between">
                <h5 class="font-bold text-[#D9D9D9] text-[17px]">
                    My Tasks <span v-if="props.active" class="text-[#828282] font-medium">(05)</span>
                </h5>
                <button>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.53906 10.7002H19.795" stroke="#D9D9D9" stroke-width="1.82559" stroke-linecap="round" />
                        <path d="M10.668 1.57227L10.668 19.8282" stroke="#D9D9D9" stroke-width="1.82559" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            <div class="flex flex-col">
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm font-medium text-[#D9D9D9]">
                        <span> 01 </span>
                        <span> Create Wireframe </span>
                    </div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8097" cy="15.5949" r="11.0558" stroke="#D9D9D9" stroke-width="1.84264" />
                        <path d="M9.28125 14.366L13.8878 18.9726L20.9513 11.9092" stroke="#D9D9D9" stroke-width="1.84264" />
                    </svg>
                </div>
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm font-medium text-[#D9D9D9]">
                        <span> 02 </span>
                        <span> Slack Logo Deisgn </span>
                    </div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8097" cy="15.5949" r="11.0558" stroke="#D9D9D9" stroke-width="1.84264" />
                        <path d="M9.28125 14.366L13.8878 18.9726L20.9513 11.9092" stroke="#D9D9D9" stroke-width="1.84264" />
                    </svg>
                </div>
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm font-medium text-[#D9D9D9]">
                        <span> 03 </span>
                        <span> Dashboard Design </span>
                    </div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8097" cy="15.5949" r="11.0558" stroke="#D9D9D9" stroke-width="1.84264" />
                        <path d="M9.28125 14.366L13.8878 18.9726L20.9513 11.9092" stroke="#D9D9D9" stroke-width="1.84264" />
                    </svg>
                </div>
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm opacity-60 font-medium text-[#555555]">
                        <span> 04 </span>
                        <span class=" line-through"> Create Wireframe </span>
                    </div>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8096" cy="14.919" r="12.2842" fill="#00C271" />
                    </svg>
                </div>
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm opacity-60 font-medium text-[#555555]">
                        <span> 05 </span>
                        <span class="line-through"> Slack Logo Deisgn </span>
                    </div>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8096" cy="14.919" r="12.2842" fill="#00C271" />
                    </svg>
                </div>
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm font-medium text-[#D9D9D9]">
                        <span> 06 </span>
                        <span> App Icon Design </span>
                    </div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8097" cy="15.5949" r="11.0558" stroke="#D9D9D9" stroke-width="1.84264" />
                        <path d="M9.28125 14.366L13.8878 18.9726L20.9513 11.9092" stroke="#D9D9D9" stroke-width="1.84264" />
                    </svg>
                </div>
            </div>
        </div>
    </el-popover>
</template>

<script lang="ts" setup>
const props = defineProps(['active'])
</script>
<style lang="scss" scoped>
button {
    .el-icon,
    svg {
        color: #ececec !important;
        rect {
            fill: #2c2c2c;
        }
    }
    &:hover {
        svg {
            rect {
                fill: #1265e9;
            }
        }
    }
}
.active {
    button {
        svg {
            rect {
                fill: #1265e9;
            }
        }
        &:hover {
            background: #f4f4f4 !important;
            .el-icon,
            svg {
                color: #0b0b0b !important;
                rect {
                    fill: #ececec;
                }
            }
        }
    }
}
</style>