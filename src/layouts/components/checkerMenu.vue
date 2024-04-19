<template>
    <el-popover placement="top-start" :width="250" trigger="click">
        <template #reference>
            <button class="flex items-center justify-center w-12 h-12 hover:bg-primary">
                <Icon class="!fill-current" name="local-checkers" size="18" />
            </button>
        </template>
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
</style>