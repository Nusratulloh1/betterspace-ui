<template>
    <div>
        <div class="flex justify-between items-center mb-5">
            <div>
                <h6 class="text-[#101828] text-lg font-semibold">
                    Профиль компании
                </h6>
                <p class="text-[#475467] text-sm">
                    Обновление информации в личном кабинете может послужить изменению данных в маркетплейсах!
                </p>
            </div>
            <el-upload ref="uploadRef" class="upload-demo" :show-file-list="false"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :auto-upload="false">
                <template #trigger>
                    <div class=" rounded-full border  p-[10.5px] opacity-80">
                        <Icon size="35" name="local-sky-upload" class=" !fill-none "
                            style="stroke: rgba(71, 84, 103, 1);" />
                    </div>
                </template>
            </el-upload>
        </div>
        <hr />
    </div>
</template>
<script lang="ts" setup>

</script>
<style lang="scss" scoped></style>