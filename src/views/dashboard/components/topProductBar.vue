<template>
    <div class="flex items-center gap-10">
        <div class="h-52 w-52 relative">
            <canvas id="myChart" class="w-full h-full"></canvas>
            <div class=" absolute top-[40%] left-[23%]">
                <h6 class="text-[#9DA4AE] text-sm font-medium">
                    Общая прибыль
                </h6>
                <p class="text-lg font-medium text-[#171725]">
                    125 млн. сум
                </p>
            </div>
        </div>
        <div>
            <h6 class="text-[#111927] font-semibold textxl">
                Топ-5 продаваемых товаров
            </h6>
            <ul class="flex flex-col gap-3 mt-3">
                <li class="text-[#7F56D9] text-sm font-bold flex items-center gap-1">
                    <div class=" h-2 w-2 bg-[#7F56D9] rounded-full"></div> #1: <span
                        class="text-[#6C737F] text-base font-medium">Samsung Galaxy S23</span>
                </li>
                <li class="text-[#7F56D9] text-sm font-bold flex items-center gap-1">
                    <div class=" h-2 w-2 bg-[#C056FB] rounded-full"></div> #2: <span
                        class="text-[#6C737F] text-base font-medium">AirPods max</span>
                </li>
                <li class="text-[#7F56D9] text-sm font-bold flex items-center gap-1">
                    <div class=" h-2 w-2 bg-[#FFA281] rounded-full"></div> #3: <span
                        class="text-[#6C737F] text-base font-medium">iPhone 13 Pro max</span>
                </li>
                <li class="text-[#7F56D9] text-sm font-bold flex items-center gap-1">
                    <div class=" h-2 w-2 bg-[#FFB499] rounded-full"></div> #4: <span
                        class="text-[#6C737F] text-base font-medium">Nothing Phone</span>
                </li>
                <li class="text-[#7F56D9] text-sm font-bold flex items-center gap-1">
                    <div class=" h-2 w-2 bg-[#FDC7B3] rounded-full"></div> #5: <span
                        class="text-[#6C737F] text-base font-medium">Чехол для Samsung S23</span>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { onMounted, ref } from "vue";
import Chart from 'chart.js/auto'
const label = (context: any) => {

    let lbl = ' ' + context.formattedValue + '.000 ' + 'сум'
    return lbl
}
onMounted(() => {
    const ctx = document.getElementById('myChart');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Samsung Galaxy S23', 'AirPods max', 'iPhone 13 Pro max', 'Nothing Phone', 'Чехол для Samsung S23'],
            datasets: [{
                label: 'Price',
                data: [2000, 3700, 1300, 1900, 2700],
                backgroundColor: ["#AB24F5", "#C056FB", "#FFA281", "#FFB499", "#FDC7B3"],
                borderWidth: 0
            }]
        },
        options: {
            cutout: 60,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: label,
                    },
                }

            },

        },
    });

})
</script>
  
<style scoped></style>