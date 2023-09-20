<template>
    <div class=" mt-6">
        <div class="flex items-center justify-between border-b">
            <div class="flex items-center gap-2 mb-4 cursor-pointer">
                <h5 class="text-[#111927] font-medium text-2xl">
                    Магазин №1
                </h5>
                <Icon size="20" name="local-arrow" class=" !fill-none" />
            </div>
            <div class="flex items-center gap-2">
                <button class=" text-sm font-semibold py-4 px-1 border-b-[3px] border-black">
                    Актуальные
                </button>
                <button class=" text-sm font-semibold py-4 px-1 text-[#6C737F] border-b-[3px] border-transparent mx-4">
                    Архив
                </button>
                <el-button type="primary" class="gradient !h-10 !w-[184px] mb-2">
                    <Icon size="19" name="local-plus" class="mr-2 !fill-none" />
                    Добавить товары
                </el-button>
                <el-popover placement="bottom-start" :width="296" trigger="click" style=" padding: 4px 6px !important;">
                    <ul>
                        <li>
                            <button class="flex items-center justify-between w-full text-sm font-medium text-[#344054] hover:bg-slate-300 p-[9px]">
                                <div class="flex items-center gap-2">
                                    <Icon size="16" name="local-export" class="!fill-none" />
                                    Выгрузить данные
                                </div>
                                <span class="text-[#667085] font-normal text-xs">
                                    Shift+D+E
                                </span>
                            </button>
                        </li>
                    </ul>
                    <template #reference>
                        <el-button class=" !border-none mb-2">
                            <Icon size="19" name="local-burger-menu" class="!fill-none" />
                        </el-button>
                    </template>

                </el-popover>
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';




</script>
<style lang="scss" scoped></style>