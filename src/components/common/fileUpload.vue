<template>
    <el-upload action="#" class=" !w-full mt-6" list-type="picture-card" :auto-upload="false">
        <div>
            <div class="flex justify-center mb-3">
                <el-button class=" !h-11 mx-auto">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6.66699 13.3333L10.0003 10M10.0003 10L13.3337 13.3333M10.0003 10V17.5M16.667 13.9524C17.6849 13.1117 18.3337 11.8399 18.3337 10.4167C18.3337 7.88536 16.2816 5.83333 13.7503 5.83333C13.5682 5.83333 13.3979 5.73833 13.3054 5.58145C12.2187 3.73736 10.2124 2.5 7.91699 2.5C4.46521 2.5 1.66699 5.29822 1.66699 8.75C1.66699 10.4718 2.3632 12.0309 3.48945 13.1613"
                            stroke="#4D5761" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </el-button>
            </div>
            <p class="text-sm text-[#4D5761] text-center">
                <span class=" text-primary font-semibold">
                    Нажмите чтобы выбрать фото товара
                </span> или перетащите сюда файл
            </p>
            <p class="text-xs text-[#4D5761] text-center">
                SVG, PNG, JPG or GIF (макс разрешение 800x400px)
            </p>
        </div>

        <template #file="{ file }">
            <div>
                <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
                <span class="el-upload-list__item-actions">
                    <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
                        <el-icon><zoom-in /></el-icon>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleDownload(file)">
                        <el-icon>
                            <Download />
                        </el-icon>
                    </span>
                    <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
                        <el-icon>
                            <Delete />
                        </el-icon>
                    </span>
                </span>
            </div>
        </template>
    </el-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

import type { UploadFile } from 'element-plus'

const dialogImageUrl = ref('')
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
    console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
    dialogImageUrl.value = file.url!
}

const handleDownload = (file: UploadFile) => {
    console.log(file)
}
</script>
<style>
.el-upload-list {
    width: 100%;
}

.el-upload--picture-card {
    width: 100%;
    border-radius: 12px;
    border: 1px dashed var(--gray-neutral-200, #E5E7EB);
    background: var(--base-white, #FFF);
    padding: 16px 24px;
}
</style>
  