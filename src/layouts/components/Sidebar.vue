<template>
    <aside class="flex relative flex-col px-4 py-8 mx-auto w-full bg-white drop-shadow-lg rounded-[32px] max-md:pr-5">
        <header class="flex items-center gap-5 justify-between w-full text-base font-medium tracking-tighter text-black whitespace-nowrap">
            <div class="flex items-center gap-1 self-start cursor-pointer">
                <LogoIcon class="w-[18px]" />
                <span>Opus</span>
                <Icon size="7" class="shrink-0 my-auto aspect-[1.75] fill-neutral-400 w-[7px]" name="el-icon-ArrowDown" />
            </div>
            <Icon size="21" color="#343330" name="local-sidebar-simple" />
        </header>
        <button class="flex gap-5 justify-between px-3 py-1 mt-6 text-white bg-blue-700 rounded-[1000px]">
            <span class="my-auto text-[13px] font-medium text-center">New command</span>
            <span
                class="justify-center px-1.5 py-0.5 text-sm leading-5 whitespace-nowrap rounded-[9px] border border-solid border-indigo-50 border-opacity-30"
            >
                ⌘+
            </span>
        </button>
        <nav class="mt-7">
            <ul class="space-y-1">
                <li v-for="menu in mainMenus" :key="menu.id">
                    <router-link
                        :to="menu.path"
                        class="flex items-center gap-2.5 py-1 pr-0.5 pl-1.5 text-sm whitespace-nowrap rounded-[55px] text-zinc-800 transition-all hover:bg-zinc-200"
                        :class="{ '!bg-zinc-100': currentRoute.includes(menu.path) }"
                    >
                        <Icon size="14" class="shrink-0 aspect-square" :name="`local-${menu.icon}`" />
                        <span class="flex-1">{{ menu.title }}</span>
                    </router-link>
                </li>
            </ul>
        </nav>
        <section class="mt-6">
            <h2 class="flex gap-0 py-1 pr-1 text-xs font-medium whitespace-nowrap rounded text-neutral-400 max-md:pr-5">
                Workspace
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0b9c103dd0c1f69f29b5f46674a116b643806361f53ec29c3a6a519508c2540?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                    alt=""
                    class="shrink-0 w-4 aspect-square"
                />
            </h2>
            <ul>
                <li class="flex gap-2.5 py-1 pr-0.5 pl-1.5 text-sm whitespace-nowrap rounded text-zinc-800">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/daf73ec5378cfa6515399fa8842c1ee474b2e9df376be1d6145fc3b1292a1ca6?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                        alt=""
                        class="shrink-0 w-4 aspect-square"
                    />
                    <span class="flex-1">Goals</span>
                </li>
                <li class="flex gap-2.5 py-1 pr-0.5 pl-1.5 text-sm whitespace-nowrap rounded text-zinc-800">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa9930a661e107d0715000f66e98bc15eeedaccab2236cabf76901df3fd06340?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                        alt=""
                        class="shrink-0 w-4 aspect-square"
                    />
                    <span class="flex-1">Teams</span>
                </li>
            </ul>
        </section>
        <section class="mt-7">
            <h2 class="flex gap-0 py-1 pr-1 text-xs font-medium rounded text-neutral-400 max-md:pr-5">
                Your teams
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0b9c103dd0c1f69f29b5f46674a116b643806361f53ec29c3a6a519508c2540?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                    alt=""
                    class="shrink-0 w-4 aspect-square"
                />
            </h2>
            <ul>
                <li class="flex gap-2.5 py-1 rounded">
                    <div class="flex flex-col justify-center items-start p-0.5 bg-fuchsia-500 bg-opacity-20 rounded-[46px]">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ddca1059efa12756efdf545cd5f3470d2c1fa3097a528e49c227bf84dbb1a16?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                            alt=""
                            class="w-3.5 aspect-square"
                        />
                    </div>
                    <div class="flex gap-0 self-start pr-6 text-sm whitespace-nowrap text-zinc-800">
                        <span>Marketing</span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41d70b035d01efbffc0e008e9647cb09163f368cb85a1888ce67d9ef578dcf3b?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                            alt=""
                            class="shrink-0 w-4 aspect-square"
                        />
                    </div>
                </li>
                <li class="flex gap-2.5 py-1 rounded">
                    <div class="flex flex-col justify-center items-start p-0.5 rounded-3xl bg-indigo-500 bg-opacity-20">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8cbc996025675b470d1f7ef51f6787e722f68cd49d611c6b1c11f1064095cf6d?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                            alt=""
                            class="w-3.5 aspect-square"
                        />
                    </div>
                    <div class="flex gap-0 self-start pr-9 text-sm whitespace-nowrap text-zinc-800">
                        <span>Digital</span>
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/41d70b035d01efbffc0e008e9647cb09163f368cb85a1888ce67d9ef578dcf3b?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                            alt=""
                            class="shrink-0 w-4 aspect-square"
                        />
                    </div>
                </li>
            </ul>
        </section>
        <section class="mt-7">
            <h2 class="flex gap-0 py-1 pr-1 text-xs font-medium whitespace-nowrap rounded text-neutral-400 max-md:pr-5">
                Try
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f0b9c103dd0c1f69f29b5f46674a116b643806361f53ec29c3a6a519508c2540?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                    alt=""
                    class="shrink-0 w-4 aspect-square"
                />
            </h2>
            <ul>
                <li class="flex gap-2.5 py-1 pr-0.5 pl-1.5 text-sm rounded text-zinc-800">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d54163f5f2022f9473c854538c2aa7e0964a5b242372743a2c2636a57cdedfc5?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                        alt=""
                        class="shrink-0 w-4 aspect-square"
                    />
                    <span class="flex-1">Invite people</span>
                </li>
                <li class="flex gap-2.5 py-1 pr-0.5 pl-1.5 text-sm rounded text-zinc-800">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f0537cccc2b474053b8c657f8b1ebcadc129ef7fee71a4d22f6b60558f3a685?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                        alt=""
                        class="shrink-0 w-4 aspect-square"
                    />
                    <span class="flex-1">Cycles (sprints)</span>
                </li>
                <li class="flex gap-2.5 py-1 pr-0.5 pl-1.5 text-sm whitespace-nowrap rounded-[45px] text-zinc-800">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ba8102b8b5d5278a3f0c9750f199a921d56d9201238b64f6079f41f624751ef5?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                        alt=""
                        class="shrink-0 w-4 aspect-square"
                    />
                    <span class="flex-1">Notes</span>
                </li>
            </ul>
        </section>
        <div
            class="flex absolute bottom-7 flex-col p-3 mt-6 mr-3.5 bg-white border border-solid border-stone-950 border-opacity-10 rounded-[40px] max-md:px-5 max-md:mx-2.5"
        >
            <Icon size="12" class="self-end aspect-square mt-1 mr-1" name="el-icon-Close" />
            <Icon size="24" class="self-center aspect-square" name="local-chrome" />
            <p class="mt-3 text-sm font-inter text-center text-stone-950 text-opacity-50">Start capturing issues on live websites!</p>
            <a href="#" class="mt-2 text-xs font-semibold text-center font-inter leading-5 text-primary"> Download extension </a>
        </div>
    </aside>
</template>
  
  <script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import LogoIcon from '/@/components/icons/LogoIcon.vue'
const router = useRouter()
const currentRoute = computed(() => router.currentRoute.value.fullPath || 'default')
const mainMenus = ref([
    {
        id: 1,
        title: 'Home',
        icon: 'home',
        path: '/dashboard',
    },
    {
        id: 2,
        title: 'Inbox',
        icon: 'inbox',
        path: '/inbox',
    },
    {
        id: 3,
        title: 'My issues',
        icon: 'issue',
        path: '/issues',
    },
    {
        id: 4,
        title: 'Focus',
        icon: 'focus',
        path: '/focus',
    },
])
</script>