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
                <el-dropdown size="large">
                    <el-button class=" !border-none mb-2">
                        <Icon size="19" name="local-burger-menu" class="!fill-none" />
                    </el-button>
                    <template #dropdown>
                        <el-dropdown-menu class=" w-[284px]">
                            <el-dropdown-item command="export">
                                <div class="flex items-center justify-between w-full text-sm font-medium text-[#344054]">
                                    <div class="flex items-center gap-2">
                                        <Icon size="16" name="local-export" class="!fill-none" />
                                        Выгрузить данные
                                    </div>
                                    <span class="text-[#667085] font-normal text-xs">
                                        Shift+D+E
                                    </span>
                                </div>
                            </el-dropdown-item>

                            <el-dropdown-item command="import">
                                <div class="flex items-center justify-between w-full text-sm font-medium text-[#344054]">
                                    <div class="flex items-center gap-2">
                                        <Icon size="16" name="local-import" class="!fill-none" />
                                        Импортировать данные
                                    </div>
                                    <span class="text-[#667085] font-normal text-xs">
                                        Shift+D+I
                                    </span>
                                </div>
                            </el-dropdown-item>
                            <el-dropdown-item command="student">
                                <div class="flex items-center justify-between w-full text-sm font-medium text-[#344054]">
                                    <div class="flex items-center gap-2">
                                        <Icon size="16" name="local-doc" class="!fill-none" />
                                        Акт и накладная
                                    </div>
                                    <span class="text-[#667085] font-normal text-xs">
                                        Shift+D+R
                                    </span>
                                </div>
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </div>
        </div>
        <div class="flex items-center justify-between mt-8">
            <div class="flex items-center gap-4">
                <el-input class="!w-[374px] m-2" size="large" placeholder="Введите товар, артикул или штрихкод"
                    :suffix-icon="Search" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { Search } from '@element-plus/icons-vue'



</script>
<style lang="scss" scoped></style>