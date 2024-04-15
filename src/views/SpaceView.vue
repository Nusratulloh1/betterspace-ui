<template>
    <div class="min-h-screen pb-5 bg-[#8B494554]">
        <div class=" container px-4 lg:max-w-6xl xl:max-w-7xl mx-auto pt-16">
            <h4 class="font-semibold text-[40px] text-[#F1F1F1]">Work</h4>
            <div class="flex items-center gap-3 mt-8">
                <p class="font-medium text-[21px] text-[#F1F1F1]">Priority:</p>
                <el-select v-model="selected1" class="w-40 danger">
                    <el-option aria-selected v-for="item in ['High 4hr/day']" :key="item" :label="item" :value="item"></el-option>
                </el-select>
            </div>
            <div
                class="mt-11 bg-[#58585899] flex items-center justify-between border border-[#7C7C7C4D] rounded-[10px] w-full max-w-[605px] px-3 py-[14px]"
            >
                <div>
                    <h1 class="text-lg font-semibold text-[#F1F1F1E5]">Islam Akramov</h1>
                    <p class="font-semibold text-[10px] text-[#F1F1F1E5] mt-[9px]">i.akramov@ai-lab.uz</p>
                    <p class="text-[9px] text-[#F1F1F1E5]">Lead engineer at Figma, Pitch, and Protocol Labs.</p>
                </div>
                <button class="mt-2">
                    <Icon color="#ffffff" name="el-icon-Edit" size="24" />
                </button>
            </div>
            <div class="mt-9">
                <h4 class="font-semibold text-[22px] text-[#F1F1F1]">Applications</h4>
                <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7 mt-6">
                    <div class="card" v-for="item in applications" :key="item.id">
                        <img :class="{' !w-9 !object-cover': item.id == 1}" :src="item.img" alt="figma" />
                        <h6>
                            {{ item.title }}
                        </h6>
                        <p>
                            {{ item.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- <iframe class="w-full h-screen" src="https://e.notionhero.io/e1/p/3e5960c-241ebc5b1ebd86k3c3t3h6208ed5b0" style="border: none;"></iframe> -->
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import imageSrc1 from '/@/assets/images/applications/figma.png'
import imageSrc2 from '/@/assets/images/applications/gmail.png'
import imageSrc3 from '/@/assets/images/applications/jira.png'
import imageSrc4 from '/@/assets/images/applications/meet.png'
import imageSrc5 from '/@/assets/images/applications/notion.png'
import imageSrc6 from '/@/assets/images/applications/miro.png'
const selected1 = ref('High 4hr/day')

const applications = ref([
    {
        id: 1,
        title: 'Figma',
        desc: 'Monitor the notifications, response for comments, without leaving Opus',
        img: imageSrc1,
    },
    {
        id: 2,
        title: 'Gmail',
        desc: 'Monitor the notifications, response for comments, without leaving Opus',
        img: imageSrc2,
    },
    {
        id: 3,
        title: 'Atlassian',
        desc: 'Monitor the notifications, response for comments, without leaving Opus',
        img: imageSrc3,
    },
    {
        id: 4,
        title: 'Atlassian',
        desc: 'Monitor the notifications, response for comments, without leaving Opus',
        img: imageSrc3,
    },
    {
        id: 5,
        title: 'Google Meet',
        desc: 'Monitor the notifications, response for comments, without leaving Opus',
        img: imageSrc4,
    },
    {
        id: 6,
        title: 'MIro',
        desc: 'Monitor the notifications, response for comments, without leaving Opus',
        img: imageSrc6,
    },
    {
        id: 7,
        title: 'Notion',
        desc: 'Monitor the notifications, response for comments, without leaving Opus',
        img: imageSrc5,
    },
    {
        id: 8,
        title: 'Gmail',
        desc: 'Monitor the notifications, response for comments, without leaving Opus',
        img: imageSrc2,
    },
])
</script>
<style lang="scss" scoped>
.card {
    border: 1px solid rgba(16, 24, 40, 0.05);
    border-radius: 9.3px;
    padding: 9.3px, 13.03px, 9.3px, 13.03px;
    background: rgba(88, 88, 88, 0.5);
    padding: 16px;
    img {
        width: 42px;
        height: 42px;
        object-fit: contain;
        border-radius: 9.3px;
        
    }
    h6 {
        color: #f1f1f1;
        font-weight: 700;
        font-size: 13px;
        margin: 6px 0;
    }
    p {
        color: #f1f1f1;
        font-weight: 500;
        font-size: 9px;
    }
}
</style>