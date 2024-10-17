<template>
    <el-form :inline="false" label-position="top" label-width="120px">
        <el-form-item>
            <el-select class="!w-full" v-model="filters.userCount" placeholder="Выберите Пользователи">
                <el-option label="Пользователей < 100" value="lessThan100"></el-option>
                <el-option label="Пользователей > 100" value="moreThan100"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-select class="!w-full" v-model="filters.status" placeholder="Выберите статус">
                <el-option label="Активные" value="active"></el-option>
                <el-option label="Временно отключены" value="disabled"></el-option>
                <el-option label="Оплачено" value="paid"></el-option>
                <el-option label="Ожидание" value="pending"></el-option>
            </el-select>
        </el-form-item>

        <el-form-item>
            <el-select class="!w-full" v-model="filters.systemUsage" placeholder="Выберите Использование">
                <el-option label="Использование < 50%" value="lessThan50"></el-option>
                <el-option label="Использование > 50%" value="moreThan50"></el-option>
                <el-option label="Использование > 75%" value="moreThan75"></el-option>
            </el-select>
        </el-form-item>
        <div class="flex justify-end">
            <el-button plain type="danger" @click="applyFilters">Сброс</el-button>
            <el-button type="primary" @click="applyFilters">Применить</el-button>
        </div>
    </el-form>
</template>
  <script setup lang="ts">
import { ref, computed } from 'vue'

interface User {
    name: string
    status: string
    userCount: number
    systemUsage: number
}

const filters = ref({
    userCount: '',
    status: '',
    systemUsage: '',
})

const applyFilters = () => {
    // Handle filter application if needed
}
</script>
  