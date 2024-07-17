<template>
    <div>
        <div class="text-center">
            <svg class="mx-auto" width="437" height="336" viewBox="0 0 437 336" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_107_18204)">
                    <g filter="url(#filter0_dd_107_18204)">
                        <path
                            d="M106 109.759C106 107.683 108.462 106 111.5 106H330.5C333.538 106 336 107.683 336 109.759V320.241C336 322.317 333.538 324 330.5 324H111.5C108.462 324 106 322.317 106 320.241V109.759Z"
                            stroke="#0F0F0F"
                            stroke-opacity="0.05"
                        />
                    </g>
                    <path
                        opacity="0.6"
                        d="M217 125H119C117.343 125 116 126.343 116 128C116 129.657 117.343 131 119 131H217C218.657 131 220 129.657 220 128C220 126.343 218.657 125 217 125Z"
                        fill="#B6BCC9"
                    />
                    <path
                        opacity="0.6"
                        d="M324 137H119C117.343 137 116 138.343 116 140C116 141.657 117.343 143 119 143H324C325.657 143 327 141.657 327 140C327 138.343 325.657 137 324 137Z"
                        fill="#E7EAF1"
                    />
                    <path
                        opacity="0.6"
                        d="M324 149H119C117.343 149 116 150.343 116 152C116 153.657 117.343 155 119 155H324C325.657 155 327 153.657 327 152C327 150.343 325.657 149 324 149Z"
                        fill="#E7EAF1"
                    />
                    <path
                        opacity="0.6"
                        d="M179 161H119C117.343 161 116 162.343 116 164C116 165.657 117.343 167 119 167H179C180.657 167 182 165.657 182 164C182 162.343 180.657 161 179 161Z"
                        fill="#E7EAF1"
                    />
                    <path
                        opacity="0.6"
                        d="M252 302H192C190.343 302 189 303.343 189 305C189 306.657 190.343 308 192 308H252C253.657 308 255 306.657 255 305C255 303.343 253.657 302 252 302Z"
                        fill="#E7EAF1"
                    />
                    <path
                        d="M311 187H132C128.686 187 126 189.686 126 193V290C126 293.314 128.686 296 132 296H311C314.314 296 317 293.314 317 290V193C317 189.686 314.314 187 311 187Z"
                        fill="#F1F2F6"
                    />
                </g>
                <defs>
                    <filter
                        id="filter0_dd_107_18204"
                        x="97.5"
                        y="101.5"
                        width="247"
                        height="235"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="4" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.615686 0 0 0 0 0.65098 0 0 0 0 0.713726 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_107_18204" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.615686 0 0 0 0 0.65098 0 0 0 0 0.713726 0 0 0 0.05 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_107_18204" result="effect2_dropShadow_107_18204" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_107_18204" result="shape" />
                    </filter>
                    <clipPath id="clip0_107_18204">
                        <rect width="437" height="336" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <h6 class="text-base text-[#676C76]">Here is no notes</h6>
            <p class="text-xs text-[#9DA6B6]">Create a note to get started.</p>
            <el-button @click="visible = true" class="mt-4" round type="primary" size="large">
                <Icon size="14" class="mr-2" color="#FFFFFF" name="local-note" />
                <span class="text-sm font-semibold"> New note </span>
            </el-button>
        </div>
        <el-drawer v-model="visible" :show-close="false" :size="`${currentWidth}%`">
            <template #header="{}">
                <div class="flex items-center gap-3">
                    <button @click="visible = false">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M6.06427 0.184632C5.85948 -0.0437519 5.50832 -0.0628776 5.27994 0.141913C5.05156 0.346705 5.03243 0.697858 5.23723 0.926251L8.88913 4.99887L5.23721 9.07151C5.03243 9.29989 5.05156 9.65105 5.27994 9.85584C5.50832 10.0606 5.85948 10.0415 6.06427 9.81313L9.71619 5.74049C10.0946 5.31849 10.0946 4.67927 9.71619 4.25726L6.06427 0.184632ZM0.968958 0.184628C0.764171 -0.0437564 0.413012 -0.0628832 0.184627 0.141908C-0.043757 0.346701 -0.0628827 0.697858 0.141909 0.92624L3.79383 4.99887L0.141909 9.07151C-0.0628827 9.29989 -0.043757 9.65104 0.184627 9.85584C0.413011 10.0606 0.764171 10.0415 0.968958 9.81312L4.62088 5.74049C4.99929 5.31849 4.99929 4.67926 4.62088 4.25726L0.968958 0.184628Z"
                                fill="#9E9E9E"
                            />
                        </svg>
                    </button>
                    <button @click="currentWidth == 100 ? (currentWidth = 50) : (currentWidth = 100)">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.5 0.75C1.08516 0.75 0.75 1.08516 0.75 1.5V3.75C0.75 4.16484 1.08516 4.5 1.5 4.5C1.91484 4.5 2.25 4.16484 2.25 3.75V2.25H3.75C4.16484 2.25 4.5 1.91484 4.5 1.5C4.5 1.08516 4.16484 0.75 3.75 0.75H1.5ZM2.25 8.25C2.25 7.83516 1.91484 7.5 1.5 7.5C1.08516 7.5 0.75 7.83516 0.75 8.25V10.5C0.75 10.9148 1.08516 11.25 1.5 11.25H3.75C4.16484 11.25 4.5 10.9148 4.5 10.5C4.5 10.0852 4.16484 9.75 3.75 9.75H2.25V8.25ZM8.25 0.75C7.83516 0.75 7.5 1.08516 7.5 1.5C7.5 1.91484 7.83516 2.25 8.25 2.25H9.75V3.75C9.75 4.16484 10.0852 4.5 10.5 4.5C10.9148 4.5 11.25 4.16484 11.25 3.75V1.5C11.25 1.08516 10.9148 0.75 10.5 0.75H8.25ZM11.25 8.25C11.25 7.83516 10.9148 7.5 10.5 7.5C10.0852 7.5 9.75 7.83516 9.75 8.25V9.75H8.25C7.83516 9.75 7.5 10.0852 7.5 10.5C7.5 10.9148 7.83516 11.25 8.25 11.25H10.5C10.9148 11.25 11.25 10.9148 11.25 10.5V8.25Z"
                                fill="#9E9E9E"
                            />
                        </svg>
                    </button>
                </div>
            </template>
            <div class="mt-[-10px] flex items-center justify-between">
                <input type="text" placeholder="Untitled" class="text-[#0F0F0F] font-semibold text-[32px] placeholder:text-[#0F0F0F]" />
                <Icon size="14" class="mr-2" color="#9E9E9E" name="el-icon-MoreFilled" />
            </div>
            <el-divider />
            <textarea
                class="w-full text-[#A4A6AA] placeholder:text-[#A4A6AA] font-medium text-sm"
                name="dfdsf"
                id="s"
                placeholder="Start typing..."
            ></textarea>
        </el-drawer>
    </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
const currentWidth = ref(50)
</script>