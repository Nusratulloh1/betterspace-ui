<template>
    <div class="px-4 pb-5 container pt-10 min-h-screen lg:max-w-6xl xl:max-w-7xl mx-auto flex items-center">
        <div class="w-full pb-16">
            <div>
                <h4 class="text-[#F1F1F1] font-bold text-4xl">Welcome, Russel</h4>
                <p class="text-[#8D8D8D] text-3xl mt-2">Where do we start our journey this time?</p>
            </div>
            <div class="mt-12">
                <h6 class="font-bold text-lg text-[#F1F1F1]">Your spaces</h6>
                <p class="text-[#8D8D8D] text-sm">Manage your spaces for better productivity</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-9 mt-16">
                <div
                    @click="spaceVisible = true"
                    class="rounded-[14px] h-[305px] bg-[#1265E9] flex items-center cursor-pointer justify-center transition-all hover:shadow-lg !shadow-black hover:translate-y-[-4px]"
                >
                    <div class="space-y-4">
                        <Icon color="#ffffff" name="el-icon-Plus" class="ml-1" size="64" />
                        <p class="font-bold text-lg text-white">Add space</p>
                    </div>
                </div>
                <div
                    @click="spaceVisible2 = true"
                    class="rounded-[14px] h-[305px] bg-[#C1757054] border border-[#EAECF033] flex flex-col items-start pt-[22px] pb-8 px-6 cursor-pointer justify-between transition-all hover:shadow-lg !shadow-black hover:translate-y-[-4px]"
                >
                    <h3 class="font-semibold text-3xl text-white">Work</h3>
                    <div class="space-y-2">
                        <p class="font-medium text-sm text-[#F1F1F1]">Priority:</p>
                        <el-select v-model="selected1" class="w-36 danger" size="small">
                            <el-option aria-selected v-for="item in ['High 4hr/day']" :key="item" :label="item" :value="item"></el-option>
                        </el-select>
                        <p class="font-medium text-sm text-[#F1F1F1]">Applications:</p>
                        <div class="flex items-center gap-3">
                            <img src="/@/assets/images/applications/gmail.png" class="w-5 h-5 object-contain" alt="gmail" />
                            <img src="/@/assets/images/applications/figma.png" class="w-6 h-5 object-contain" alt="gmail" />
                            <img src="/@/assets/images/applications/slack.png" class="w-6 h-5 object-contain" alt="gmail" />
                            <img src="/@/assets/images/applications/jira.png" class="w-6 h-5 object-contain" alt="gmail" />
                            <span class="font-semibold text-[10px] text-[#F1F1F1]"> +5 </span>
                        </div>
                    </div>
                </div>
                <div
                    @click="spaceVisible2 = true"
                    class="rounded-[14px] h-[305px] bg-[#A97F4154] flex flex-col items-start pt-[22px] pb-8 px-6 cursor-pointer justify-between transition-all hover:shadow-lg !shadow-black hover:translate-y-[-4px]"
                >
                    <h3 class="font-semibold text-3xl text-white">Personal</h3>
                    <div class="space-y-2">
                        <p class="font-medium text-sm text-[#F1F1F1]">Priority:</p>
                        <el-select v-model="selected2" class="w-40 warning" size="small">
                            <el-option aria-selected v-for="item in ['High 4hr/day']" :key="item" :label="item" :value="item"></el-option>
                        </el-select>
                        <p class="font-medium text-sm text-[#F1F1F1]">Applications:</p>
                        <div class="flex items-center gap-3">
                            <img src="/@/assets/images/applications/gmail.png" class="w-5 h-5 object-contain" alt="gmail" />
                            <img src="/@/assets/images/applications/figma.png" class="w-6 h-5 object-contain" alt="gmail" />
                            <img src="/@/assets/images/applications/slack.png" class="w-6 h-5 object-contain" alt="gmail" />
                            <img src="/@/assets/images/applications/jira.png" class="w-6 h-5 object-contain" alt="gmail" />
                            <span class="font-semibold text-[10px] text-[#F1F1F1]"> +5 </span>
                        </div>
                    </div>
                </div>
                <div
                    @click="spaceVisible2 = true"
                    class="rounded-[14px] h-[305px] bg-[#404040] flex flex-col items-start pt-[22px] pb-8 px-6 cursor-pointer justify-between transition-all hover:shadow-lg !shadow-black hover:translate-y-[-4px]"
                >
                    <h3 class="font-semibold text-3xl text-white">Freelance</h3>
                    <div class="space-y-2">
                        <p class="font-medium text-sm text-[#F1F1F1]">Priority:</p>
                        <el-select v-model="selected3" class="w-32" size="small">
                            <el-option aria-selected v-for="item in ['High 4hr/day']" :key="item" :label="item" :value="item"></el-option>
                        </el-select>
                        <p class="font-medium text-sm text-[#F1F1F1]">Applications:</p>
                        <div class="flex items-center gap-3">
                            <img src="/@/assets/images/applications/gmail.png" class="w-5 h-5 object-contain" alt="gmail" />
                            <img src="/@/assets/images/applications/figma.png" class="w-6 h-5 object-contain" alt="gmail" />
                            <img src="/@/assets/images/applications/slack.png" class="w-6 h-5 object-contain" alt="gmail" />
                            <img src="/@/assets/images/applications/jira.png" class="w-6 h-5 object-contain" alt="gmail" />
                            <span class="font-semibold text-[10px] text-[#F1F1F1]"> +5 </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <el-dialog v-model="spaceVisible" tabindex="34234" :width="isMobile ? '90%' : 1010">
        <addSpace />
    </el-dialog>
    <el-dialog v-model="spaceVisible2" custom-class="custom" tabindex="34234" :width="isMobile ? '90%' : 1200">
        <spaceView />
    </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import addSpace from './components/addSpace.vue'
import spaceView from './components/SpaceView.vue'
const router = useRouter()
const isMobile = ref(window.innerWidth <= 991)
const selected1 = ref('High 4hr/day')
const selected2 = ref('Medium 2hr/day')
const selected3 = ref('Low 1hr/day')

const spaceVisible = ref(false)
const spaceVisible2 = ref(false)
</script>