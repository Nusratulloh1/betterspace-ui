<template>
    <div class="layout-logo">
        <div class="logo" data-v-d5556f18="">
            <Icon color="#000000" class=" sm:hidden" size="40" name="local-logo" />
            <Icon color="#000000" size="45" class=" hidden sm:block" name="local-logo" />
        </div>
    </div>
</template>
<script setup lang="ts">
</script>

<style scoped lang="scss">
.layout-logo {
    // width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: start;
    box-sizing: border-box;
    // background: #182857;
}

.logo {
    display: flex;
    align-items: center;

    .logo-img {
        width: 30px;
        height: 38px;
    }

    .logo-text {
        font-weight: 400;
        font-size: 24px;
        line-height: 48px;
        color: #000;
        margin-left: 5px;
    }
}

.website-name {
    padding-left: 4px;
    font-size: var(--el-font-size-extra-large);
    font-weight: 600;
}

.fold {
    margin-left: auto;
}

.unfold {
    margin: 0 auto;
}
</style>
