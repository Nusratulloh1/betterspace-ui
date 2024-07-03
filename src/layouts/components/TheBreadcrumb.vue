<template>
    <div class="flex items-center justify-between">
        <el-breadcrumb :separator-icon="ArrowRight" class="app-breadcrumb">
            <el-breadcrumb-item
                class="!cursor-pointer hover:!text-primary"
                v-for="item of breadcrumbItems"
                :key="item.name"
                :class="{ active: $route.name == item.name }"
                @click="getPath(item)"
            >
                <div class="flex gap-2 items-center text-[#292929] text-[13px] font-medium font-inter">
                    <Icon size="16" class="shrink-0 aspect-square" :name="item.icon" />
                    {{ getTitle(item) }}
                </div>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
  
  <script lang="ts" setup>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { IBreadcrumb } from '/@/models/frontend'
import { ArrowRight } from '@element-plus/icons-vue'

const route = useRoute()
const router = useRouter()
let breadcrumbItems = ref<IBreadcrumb[]>([])
const dynamicRoutes = ref()
const getPath = (item: any) => {
    if (item.disabled) {
        return '#'
    } else {
        return router.push({ name: item.name })
    }
}
const getTitle = (item: any) => {
    if (item.dynamic) {
        console.log(dynamicRoutes.value?.[item.name])
        return dynamicRoutes.value?.[item.name] || item.title
    } else {
        return item.title
    }
}
watch(
    () => route.name,
    () => {
        breadcrumbItems.value = route.meta.breadcrumb as any

        dynamicRoutes.value = JSON.parse(sessionStorage.getItem('router') as any)
    },
    { immediate: true }
)
</script>
  
  <style lang="scss" scoped></style>
  