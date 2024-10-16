<template>
    <div class="py-11">
        <div class="grid grid-cols-2 2xl:grid-cols-3 gap-x-12 gap-y-10">
            <div class="card" v-for="(card, i) in mock" :key="i">
                <h3 class="card__title">{{ card.title }}</h3>
                <h2 class="card__value">{{ card.value }}</h2>
                <p class="card__info" v-if="card.incr">
                    <span class="card__info__incr">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 12.8332V1.1665M7 1.1665L1.16666 6.99984M7 1.1665L12.8333 6.99984"
                                stroke="#17B26A"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                        {{ card.incr }}
                    </span>
                    по сравнению с прошлым месяцем
                </p>
                <div v-else></div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { computed, onMounted } from 'vue'

const mock = [
    {
        title: 'Количество мерчей',
        value: '150',
        incr: '12%',
    },
    {
        title: 'Количество компаний',
        value: '50',
        incr: '12%',
    },
    {
        title: 'Средняя уровень скидки для клиента',
        value: '25%',
        incr: null,
    },
    {
        title: 'Средняя сумма сэкономленных одному клиенту',
        value: '25.000.000 UZS',
        incr: null,
    },
    {
        title: 'Количество конечных пользователей',
        value: '3,500',
        incr: null,
    },
    {
        title: 'Общая сумма сэкономленных денег клиентам',
        value: '250.000.000 UZS',
        incr: null,
    },
    {
        title: 'Средний процент вовлеченности',
        value: '25%',
        incr: null,
    },
]

onMounted(() => {})
</script>
<style lang="scss" scoped>
.card {
    box-shadow: 0px 1px 2px 0px #1018280d;
    border: 1px solid #eaecf0;
    background: #ffffff;
    padding: 20px 24px 24px 24px;
    gap: 36px;
    border-radius: 12px;
    height: 186px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    &__title {
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
    }
    &__value {
        font-size: 46px;
        font-weight: 600;
        line-height: 40px;
        margin-top: -10px;
    }
    &__info {
        display: flex;
        align-items: center;
        gap: 8px;
        color: #475467;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        // margin-top: -10px;

        &__incr {
            display: flex;
            align-items: center;
            gap: 6px;
            color: #067647;
        }
    }
}
</style>