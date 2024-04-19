<template>
    <el-popover placement="top-end" :width="390" :offset="10" trigger="click">
        <template #reference>
            <button class="flex items-center justify-center w-12 h-12 hover:bg-primary">
                <Icon class="!fill-current" name="local-checkers" size="18" />
            </button>
        </template>
        <div>
            <div class="flex items-center justify-between px-5 pt-6">
                <h5 class="font-bold text-[#D9D9D9] text-[17px]">
                    My Tasks <span v-if="props.active" class="text-[#828282] font-medium">(05)</span>
                </h5>
                <button>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.53906 10.7002H19.795" stroke="#D9D9D9" stroke-width="1.82559" stroke-linecap="round" />
                        <path d="M10.668 1.57227L10.668 19.8282" stroke="#D9D9D9" stroke-width="1.82559" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            <div class="flex items-center gap-4 px-5 py-6">
                <button class="customBtn">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5.25163 0.789062H1.9047C1.60882 0.789063 1.32505 0.906603 1.11583 1.11583C0.906603 1.32505 0.789063 1.60882 0.789062 1.9047V5.25163C0.789063 5.54751 0.906603 5.83128 1.11583 6.0405C1.32505 6.24973 1.60882 6.36727 1.9047 6.36727H5.25163C5.54751 6.36727 5.83128 6.24973 6.0405 6.0405C6.24973 5.83128 6.36727 5.54751 6.36727 5.25163V1.9047C6.36727 1.60882 6.24973 1.32505 6.0405 1.11583C5.83128 0.906603 5.54751 0.789063 5.25163 0.789062ZM5.25163 5.25163H1.9047V1.9047H5.25163V5.25163ZM11.9455 0.789062H8.59855C8.30266 0.789063 8.01889 0.906603 7.80967 1.11583C7.60045 1.32505 7.48291 1.60882 7.48291 1.9047V5.25163C7.48291 5.54751 7.60045 5.83128 7.80967 6.0405C8.01889 6.24973 8.30266 6.36727 8.59855 6.36727H11.9455C12.2414 6.36727 12.5251 6.24973 12.7343 6.0405C12.9436 5.83128 13.0611 5.54751 13.0611 5.25163V1.9047C13.0611 1.60882 12.9436 1.32505 12.7343 1.11583C12.5251 0.906603 12.2414 0.789063 11.9455 0.789062ZM11.9455 5.25163H8.59855V1.9047H11.9455V5.25163ZM5.25163 7.48291H1.9047C1.60882 7.48291 1.32505 7.60045 1.11583 7.80967C0.906603 8.01889 0.789063 8.30266 0.789062 8.59855V11.9455C0.789063 12.2414 0.906603 12.5251 1.11583 12.7343C1.32505 12.9436 1.60882 13.0611 1.9047 13.0611H5.25163C5.54751 13.0611 5.83128 12.9436 6.0405 12.7343C6.24973 12.5251 6.36727 12.2414 6.36727 11.9455V8.59855C6.36727 8.30266 6.24973 8.01889 6.0405 7.80967C5.83128 7.60045 5.54751 7.48291 5.25163 7.48291ZM5.25163 11.9455H1.9047V8.59855H5.25163V11.9455ZM11.9455 7.48291H8.59855C8.30266 7.48291 8.01889 7.60045 7.80967 7.80967C7.60045 8.01889 7.48291 8.30266 7.48291 8.59855V11.9455C7.48291 12.2414 7.60045 12.5251 7.80967 12.7343C8.01889 12.9436 8.30266 13.0611 8.59855 13.0611H11.9455C12.2414 13.0611 12.5251 12.9436 12.7343 12.7343C12.9436 12.5251 13.0611 12.2414 13.0611 11.9455V8.59855C13.0611 8.30266 12.9436 8.01889 12.7343 7.80967C12.5251 7.60045 12.2414 7.48291 11.9455 7.48291ZM11.9455 11.9455H8.59855V8.59855H11.9455V11.9455Z"
                            fill="#D9D9D9"
                        />
                    </svg>
                    Work
                </button>
                <button class="customBtn">
                    <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3.59383 10.5399L3.01727 11.5161C2.98466 11.5713 2.9415 11.6195 2.89025 11.6581C2.83899 11.6966 2.78066 11.7246 2.71856 11.7406C2.59316 11.7729 2.46007 11.754 2.34859 11.6881C2.2371 11.6223 2.15634 11.5148 2.12407 11.3894C2.0918 11.264 2.11067 11.131 2.17653 11.0195L2.7537 10.0433C2.78553 9.98659 2.82836 9.93682 2.87968 9.89691C2.93101 9.857 2.98978 9.82775 3.05257 9.81087C3.11535 9.79398 3.18088 9.78982 3.24529 9.79861C3.30971 9.80739 3.37172 9.82896 3.42769 9.86205C3.48366 9.89513 3.53245 9.93906 3.5712 9.99126C3.60996 10.0435 3.63789 10.1029 3.65337 10.166C3.66885 10.2292 3.67155 10.2948 3.66133 10.359C3.6511 10.4232 3.62816 10.4847 3.59383 10.5399ZM13.823 7.85113H10.9067L9.0318 4.67853C8.99997 4.62184 8.95714 4.57207 8.90581 4.53216C8.85449 4.49225 8.79571 4.463 8.73293 4.44612C8.67015 4.42924 8.60462 4.42507 8.5402 4.43386C8.47579 4.44264 8.41377 4.46421 8.35781 4.4973C8.30184 4.53038 8.25305 4.57431 8.21429 4.62651C8.17554 4.67871 8.1476 4.73813 8.13213 4.80128C8.11665 4.86442 8.11394 4.93002 8.12417 4.99423C8.13439 5.05843 8.15734 5.11995 8.19167 5.17516L11.9384 11.5161C12.0042 11.6276 12.1117 11.7083 12.2371 11.7406C12.3625 11.7729 12.4956 11.754 12.6071 11.6881C12.7186 11.6223 12.7993 11.5148 12.8316 11.3894C12.8639 11.264 12.845 11.131 12.7791 11.0195L11.4839 8.82732H13.823C13.9525 8.82732 14.0766 8.77589 14.1682 8.68436C14.2597 8.59282 14.3111 8.46867 14.3111 8.33922C14.3111 8.20977 14.2597 8.08562 14.1682 7.99409C14.0766 7.90255 13.9525 7.85113 13.823 7.85113ZM8.36067 7.85113H5.18257L9.36248 0.778055C9.42834 0.666566 9.44721 0.533482 9.41494 0.408079C9.38268 0.282675 9.30191 0.175226 9.19043 0.109368C9.07894 0.0435105 8.94585 0.0246389 8.82045 0.0569051C8.69505 0.0891712 8.5876 0.169932 8.52174 0.281421L7.47783 2.04832L6.43392 0.278981C6.40131 0.223777 6.35815 0.175536 6.3069 0.137014C6.25564 0.0984915 6.1973 0.0704411 6.13521 0.0544645C6.00981 0.0221984 5.87672 0.04107 5.76523 0.106928C5.65375 0.172786 5.57298 0.280235 5.54072 0.405638C5.50845 0.531041 5.52732 0.664126 5.59318 0.775615L6.91103 3.00559L4.04898 7.85113H1.13262C1.00317 7.85113 0.879025 7.90255 0.78749 7.99409C0.695955 8.08562 0.644531 8.20977 0.644531 8.33922C0.644531 8.46867 0.695955 8.59282 0.78749 8.68436C0.879025 8.77589 1.00317 8.82732 1.13262 8.82732H8.36067C8.49012 8.82732 8.61427 8.77589 8.7058 8.68436C8.79734 8.59282 8.84876 8.46867 8.84876 8.33922C8.84876 8.20977 8.79734 8.08562 8.7058 7.99409C8.61427 7.90255 8.49012 7.85113 8.36067 7.85113Z"
                            fill="#D9D9D9"
                        />
                    </svg>
                    All apps
                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.53915 2.29395L3.35161 4.48149L1.16406 2.29395" stroke="#D9D9D9" stroke-width="1.48752" stroke-linecap="round" />
                    </svg>
                </button>
            </div>
            <el-progress class="px-5" v-if="props.active" color="#1265E9" :text-inside="true" :stroke-width="25" :percentage="50" status="exception">
                <p class="text-white font-semibold text-xs absolute left-2 top-1.5">
                    Tasks status：
                    <span class="text-[#C2C2C2]">25</span>
                    /50
                </p>
            </el-progress>
            <div class="flex flex-col px-5 pb-6" v-if="!props.active">
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm font-medium text-[#D9D9D9]">
                        <span> 01 </span>
                        <span> Create Wireframe </span>
                    </div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8097" cy="15.5949" r="11.0558" stroke="#D9D9D9" stroke-width="1.84264" />
                        <path d="M9.28125 14.366L13.8878 18.9726L20.9513 11.9092" stroke="#D9D9D9" stroke-width="1.84264" />
                    </svg>
                </div>
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm font-medium text-[#D9D9D9]">
                        <span> 02 </span>
                        <span> Slack Logo Deisgn </span>
                    </div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8097" cy="15.5949" r="11.0558" stroke="#D9D9D9" stroke-width="1.84264" />
                        <path d="M9.28125 14.366L13.8878 18.9726L20.9513 11.9092" stroke="#D9D9D9" stroke-width="1.84264" />
                    </svg>
                </div>
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm font-medium text-[#D9D9D9]">
                        <span> 03 </span>
                        <span> Dashboard Design </span>
                    </div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8097" cy="15.5949" r="11.0558" stroke="#D9D9D9" stroke-width="1.84264" />
                        <path d="M9.28125 14.366L13.8878 18.9726L20.9513 11.9092" stroke="#D9D9D9" stroke-width="1.84264" />
                    </svg>
                </div>
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm opacity-60 font-medium text-[#555555]">
                        <span> 04 </span>
                        <span class="line-through"> Create Wireframe </span>
                    </div>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8096" cy="14.919" r="12.2842" fill="#00C271" />
                    </svg>
                </div>
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm opacity-60 font-medium text-[#555555]">
                        <span> 05 </span>
                        <span class="line-through"> Slack Logo Deisgn </span>
                    </div>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8096" cy="14.919" r="12.2842" fill="#00C271" />
                    </svg>
                </div>
                <div class="flex items-center justify-between py-3">
                    <div class="flex items-center gap-4 text-sm font-medium text-[#D9D9D9]">
                        <span> 06 </span>
                        <span> App Icon Design </span>
                    </div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="14.8097" cy="15.5949" r="11.0558" stroke="#D9D9D9" stroke-width="1.84264" />
                        <path d="M9.28125 14.366L13.8878 18.9726L20.9513 11.9092" stroke="#D9D9D9" stroke-width="1.84264" />
                    </svg>
                </div>
            </div>
            <div class="mt-4 space-y-4" v-if="props.active">
                <div class="px-5">
                    <h5 class="font-medium text-[#D9D9D9]">Miro</h5>
                </div>
                <div class="flex items-center justify-between bg-[#CDDEF880]">
                    <div class="flex items-center gap-3">
                        <div class="h-11 w-[5px] bg-[#1265E9]"></div>
                        <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.58108 15.7354C10.9072 15.7354 13.6036 13.039 13.6036 9.71292C13.6036 6.38679 10.9072 3.69043 7.58108 3.69043C4.25495 3.69043 1.55859 6.38679 1.55859 9.71292C1.55859 13.039 4.25495 15.7354 7.58108 15.7354Z"
                                stroke="#1265E9"
                                stroke-width="1.24603"
                                stroke-miterlimit="10"
                            />
                            <path
                                d="M7.5815 9.71333L7.57388 5.14355C7.57769 5.14355 7.57769 5.14355 7.5815 5.14355C10.0873 5.14355 12.1513 7.20757 12.1513 9.71333C12.1513 12.2191 10.0873 14.2831 7.5815 14.2831C5.07574 14.2831 3.01553 12.2229 3.01172 9.72095L7.5815 9.71333Z"
                                fill="#1265E9"
                            />
                            <path d="M4.25977 1.19824H10.9053" stroke="#1265E9" stroke-width="1.24603" stroke-miterlimit="10" />
                            <path d="M8.20502 1.19824H6.95898V4.10565H8.20502V1.19824Z" fill="#1265E9" />
                            <path d="M1.81662 4.72831L0.935547 5.60938L2.25715 6.93098L3.13822 6.04991L1.81662 4.72831Z" fill="#1265E9" />
                            <path d="M14.2268 5.69259L13.3457 4.81152L12.0241 6.13313L12.9052 7.0142L14.2268 5.69259Z" fill="#1265E9" />
                        </svg>
                        <p class="text-xs font-medium text-black mt-0.5">Create Wireframe</p>
                    </div>
                    <div class="flex items-center">
                        <p class="text-sm font-medium text-black mr-3">25m 20s</p>
                        <div class="w-[22px] h-[22px] rounded-[3px] bg-[#1265E9] mr-1.5"></div>
                        <button class="mr-5">
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10.6249" cy="4.85931" r="1.24603" fill="#65676D" />
                                <circle cx="10.6249" cy="15.6591" r="1.24603" fill="#65676D" />
                                <circle cx="10.6249" cy="10.2597" r="1.24603" fill="#65676D" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="px-5">
                    <h5 class="font-medium text-[#D9D9D9]">Figma</h5>
                </div>
                <div class="px-5 space-y-3 pb-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.58499 15.2549C10.9111 15.2549 13.6075 12.5586 13.6075 9.23245C13.6075 5.90632 10.9111 3.20996 7.58499 3.20996C4.25886 3.20996 1.5625 5.90632 1.5625 9.23245C1.5625 12.5586 4.25886 15.2549 7.58499 15.2549Z"
                                    stroke="#D9D9D9"
                                    stroke-width="1.24603"
                                    stroke-miterlimit="10"
                                />
                                <path
                                    d="M7.58345 9.23286L7.57583 4.66309C7.57964 4.66309 7.57964 4.66309 7.58345 4.66309C10.0892 4.66309 12.1532 6.7271 12.1532 9.23286C12.1532 11.7386 10.0892 13.8026 7.58345 13.8026C5.07769 13.8026 3.01748 11.7424 3.01367 9.24048L7.58345 9.23286Z"
                                    fill="#D9D9D9"
                                />
                                <path d="M4.26172 0.717773H10.9072" stroke="#D9D9D9" stroke-width="1.24603" stroke-miterlimit="10" />
                                <path d="M8.20697 0.717773H6.96094V3.62518H8.20697V0.717773Z" fill="#D9D9D9" />
                                <path d="M1.81857 4.24784L0.9375 5.12891L2.2591 6.45051L3.14017 5.56944L1.81857 4.24784Z" fill="#D9D9D9" />
                                <path d="M14.2307 5.21212L13.3496 4.33105L12.028 5.65266L12.9091 6.53373L14.2307 5.21212Z" fill="#D9D9D9" />
                            </svg>

                            <p class="text-xs font-medium text-[#D9D9D9] mt-0.5">Slack Logo Design</p>
                        </div>
                        <div class="flex items-center">
                            <p class="text-xs font-medium text-[#D9D9D9] mt-1 mr-2">30m 0s</p>
                            <button>
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect
                                        x="4.16797"
                                        y="4.56445"
                                        width="22.4286"
                                        height="22.4286"
                                        rx="2.49206"
                                        stroke="#D2D2D2"
                                        stroke-width="0.934524"
                                    />
                                    <path
                                        d="M18.9447 16.3767L13.4622 20.4886C12.9693 20.8582 12.266 20.5066 12.266 19.8905L12.266 11.6667C12.266 11.0506 12.9693 10.699 13.4622 11.0686L18.9447 15.1805C19.3435 15.4796 19.3435 16.0776 18.9447 16.3767Z"
                                        fill="#D2D2D2"
                                    />
                                </svg>
                            </button>

                            <button>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.6249" cy="5.37884" r="1.24603" fill="#D9D9D9" />
                                    <circle cx="10.6249" cy="16.1786" r="1.24603" fill="#D9D9D9" />
                                    <circle cx="10.6249" cy="10.7792" r="1.24603" fill="#D9D9D9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.58499 15.2549C10.9111 15.2549 13.6075 12.5586 13.6075 9.23245C13.6075 5.90632 10.9111 3.20996 7.58499 3.20996C4.25886 3.20996 1.5625 5.90632 1.5625 9.23245C1.5625 12.5586 4.25886 15.2549 7.58499 15.2549Z"
                                    stroke="#D9D9D9"
                                    stroke-width="1.24603"
                                    stroke-miterlimit="10"
                                />
                                <path
                                    d="M7.58345 9.23286L7.57583 4.66309C7.57964 4.66309 7.57964 4.66309 7.58345 4.66309C10.0892 4.66309 12.1532 6.7271 12.1532 9.23286C12.1532 11.7386 10.0892 13.8026 7.58345 13.8026C5.07769 13.8026 3.01748 11.7424 3.01367 9.24048L7.58345 9.23286Z"
                                    fill="#D9D9D9"
                                />
                                <path d="M4.26172 0.717773H10.9072" stroke="#D9D9D9" stroke-width="1.24603" stroke-miterlimit="10" />
                                <path d="M8.20697 0.717773H6.96094V3.62518H8.20697V0.717773Z" fill="#D9D9D9" />
                                <path d="M1.81857 4.24784L0.9375 5.12891L2.2591 6.45051L3.14017 5.56944L1.81857 4.24784Z" fill="#D9D9D9" />
                                <path d="M14.2307 5.21212L13.3496 4.33105L12.028 5.65266L12.9091 6.53373L14.2307 5.21212Z" fill="#D9D9D9" />
                            </svg>

                            <p class="text-xs font-medium text-[#D9D9D9] mt-0.5">Dashboard Design</p>
                        </div>
                        <div class="flex items-center">
                            <p class="text-xs font-medium text-[#D9D9D9] mt-1 mr-2">30m 0s</p>
                            <button>
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect
                                        x="4.16797"
                                        y="4.56445"
                                        width="22.4286"
                                        height="22.4286"
                                        rx="2.49206"
                                        stroke="#D2D2D2"
                                        stroke-width="0.934524"
                                    />
                                    <path
                                        d="M18.9447 16.3767L13.4622 20.4886C12.9693 20.8582 12.266 20.5066 12.266 19.8905L12.266 11.6667C12.266 11.0506 12.9693 10.699 13.4622 11.0686L18.9447 15.1805C19.3435 15.4796 19.3435 16.0776 18.9447 16.3767Z"
                                        fill="#D2D2D2"
                                    />
                                </svg>
                            </button>

                            <button>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.6249" cy="5.37884" r="1.24603" fill="#D9D9D9" />
                                    <circle cx="10.6249" cy="16.1786" r="1.24603" fill="#D9D9D9" />
                                    <circle cx="10.6249" cy="10.7792" r="1.24603" fill="#D9D9D9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-3">
                            <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7.58499 15.2549C10.9111 15.2549 13.6075 12.5586 13.6075 9.23245C13.6075 5.90632 10.9111 3.20996 7.58499 3.20996C4.25886 3.20996 1.5625 5.90632 1.5625 9.23245C1.5625 12.5586 4.25886 15.2549 7.58499 15.2549Z"
                                    stroke="#D9D9D9"
                                    stroke-width="1.24603"
                                    stroke-miterlimit="10"
                                />
                                <path
                                    d="M7.58345 9.23286L7.57583 4.66309C7.57964 4.66309 7.57964 4.66309 7.58345 4.66309C10.0892 4.66309 12.1532 6.7271 12.1532 9.23286C12.1532 11.7386 10.0892 13.8026 7.58345 13.8026C5.07769 13.8026 3.01748 11.7424 3.01367 9.24048L7.58345 9.23286Z"
                                    fill="#D9D9D9"
                                />
                                <path d="M4.26172 0.717773H10.9072" stroke="#D9D9D9" stroke-width="1.24603" stroke-miterlimit="10" />
                                <path d="M8.20697 0.717773H6.96094V3.62518H8.20697V0.717773Z" fill="#D9D9D9" />
                                <path d="M1.81857 4.24784L0.9375 5.12891L2.2591 6.45051L3.14017 5.56944L1.81857 4.24784Z" fill="#D9D9D9" />
                                <path d="M14.2307 5.21212L13.3496 4.33105L12.028 5.65266L12.9091 6.53373L14.2307 5.21212Z" fill="#D9D9D9" />
                            </svg>

                            <p class="text-xs font-medium text-[#D9D9D9] mt-0.5">Create Wireframe</p>
                        </div>
                        <div class="flex items-center">
                            <p class="text-xs font-medium text-[#D9D9D9] mt-1 mr-2">30m 0s</p>
                            <button>
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect
                                        x="4.16797"
                                        y="4.56445"
                                        width="22.4286"
                                        height="22.4286"
                                        rx="2.49206"
                                        stroke="#D2D2D2"
                                        stroke-width="0.934524"
                                    />
                                    <path
                                        d="M18.9447 16.3767L13.4622 20.4886C12.9693 20.8582 12.266 20.5066 12.266 19.8905L12.266 11.6667C12.266 11.0506 12.9693 10.699 13.4622 11.0686L18.9447 15.1805C19.3435 15.4796 19.3435 16.0776 18.9447 16.3767Z"
                                        fill="#D2D2D2"
                                    />
                                </svg>
                            </button>

                            <button>
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="10.6249" cy="5.37884" r="1.24603" fill="#D9D9D9" />
                                    <circle cx="10.6249" cy="16.1786" r="1.24603" fill="#D9D9D9" />
                                    <circle cx="10.6249" cy="10.7792" r="1.24603" fill="#D9D9D9" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </el-popover>
</template>

<script lang="ts" setup>
const props = defineProps(['active'])
</script>
<style lang="scss" >
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
.active {
    button {
        svg {
            rect {
                fill: #1265e9;
            }
        }
        &:hover {
            background: #f4f4f4 !important;
            .el-icon,
            svg {
                color: #0b0b0b !important;
                rect {
                    fill: #ececec;
                }
            }
        }
    }
}
.el-progress-bar__outer {
    border-radius: 6px !important;
    background: #d9d9d9 !important;
}
.el-progress-bar__inner {
    border-radius: 6px !important;
}
.customBtn{
    background: #82828280;
    padding: 6px 9px;
    border-radius: 6.69px;
    display: flex;
    align-items: center;
    gap: 7px;
    font-weight: 500;
    color: #D9D9D9;
    font-size: 11px;
    line-height: 12.5px;
}
</style>