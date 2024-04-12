<template>
    <div class="max-w-6xl xl:max-w-7xl mx-auto mt-16">
        <div>
            <h4 class="text-[#F1F1F1] font-bold text-4xl">Welcome, Russel</h4>
            <p class="text-[#8D8D8D] text-3xl mt-2">Where do we start our journey this time?</p>
        </div>
        <div class="mt-12">
            <h6 class="font-bold text-lg text-[#F1F1F1]">Your spaces</h6>
            <p class="text-[#8D8D8D] text-sm">Manage your spaces for better productivity</p>
        </div>
        <div class="grid grid-cols-4 gap-9 mt-16">
            <div
                class="rounded-[14px] h-[305px] bg-[#1265E9] flex items-center cursor-pointer justify-center transition-all hover:shadow-md !shadow-white"
            >
                <div class="space-y-4">
                    <Icon color="#ffffff" name="el-icon-Plus" class="ml-1" size="64" />
                    <p class="font-bold text-lg text-white">Add space</p>
                </div>
            </div>
            <div
                class="rounded-[14px] h-[305px] bg-[#C1757054] border border-[#EAECF033] flex flex-col items-start pt-[22px] pb-8 px-6 cursor-pointer justify-between transition-all hover:shadow-md !shadow-white"
            >
                <h3 class="font-semibold text-3xl text-white">Work</h3>
                <div class="space-y-[14px]">
                    <p class=" font-medium text-sm text-[#F1F1F1]">Priority:</p>
                </div>
            </div>
            <div
                class="rounded-[14px] h-[305px] bg-[#A97F4154] flex items-center cursor-pointer justify-center transition-all hover:shadow-md !shadow-white"
            >
                <div class="space-y-4">
                    <Icon color="#ffffff" name="el-icon-Plus" class="ml-1" size="64" />
                    <p class="font-bold text-lg text-white">Add space</p>
                </div>
            </div>
            <div
                class="rounded-[14px] h-[305px] bg-[#404040] flex items-center cursor-pointer justify-center transition-all hover:shadow-md !shadow-white"
            >
                <div class="space-y-4">
                    <Icon color="#ffffff" name="el-icon-Plus" class="ml-1" size="64" />
                    <p class="font-bold text-lg text-white">Add space</p>
                </div>
            </div>
        </div>
    </div>
</template>