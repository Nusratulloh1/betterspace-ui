<template>
    <div class="layout-logo">
        <div class="logo" data-v-d5556f18="">
            <img src="/@/assets/images/icons/logo-main.svg" alt="logoMain">
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '/@/store'
import { closeShade } from '/@/utils/pageShade'
const store = useStore()
const layoutConfig = computed(() => store.state.config.layout)

const onMenuCollapse = function () {
    if (layoutConfig.value.shrink && !layoutConfig.value.menuCollapse) {
        closeShade()
    }

    store.commit('config/setAndCache', {
        name: 'layout.menuCollapse',
        value: !layoutConfig.value.menuCollapse,
    })
}
</script>

<style scoped lang="scss">
.layout-logo {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    // background: #182857;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;

    .logo-text {
        color: #111927;
        font-family: 'Pangram';
        font-size: 25.883px;
        font-weight: 700;

        span {
            background: linear-gradient(91deg, #B540F6 52.01%, #F18F8C 86.64%, #FB9D79 96.11%);
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }
}
</style>
