<template>
    <h1 class="mt-6 text-xl font-bold leading-6 text-neutral-700 max-md:max-w-full">Issue title</h1>
    <p class="mt-7 text-base font-medium text-neutral-400 max-md:max-w-full">Add description...</p>
    <div class="flex gap-1.5 items-start mt-7 text-center max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div class="flex flex-col self-stretch">
            <div class="flex gap-1 text-base whitespace-nowrap text-stone-500">
                <div class="flex flex-1 gap-3 px-4 py-3 border border-solid bg-neutral-100 bg-opacity-80 border-zinc-100 rounded-[1321.429px]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ccb7d6d32f0b787e83597e890085a9fe5bd18a1173f4ee7f6a7b0a330f08769f?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                        class="shrink-0 self-start aspect-square w-[15px]"
                        alt=""
                    />
                    <span>Project</span>
                </div>
                <div class="flex flex-1 gap-3 px-4 py-3 border border-solid bg-neutral-100 bg-opacity-80 border-zinc-100 rounded-[1321.429px]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/53bc8f379d5caa59b30d1f29188eb0184f7bb0a210562dab28cd0c9a825b1756?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                        class="shrink-0 aspect-square w-[15px]"
                        alt=""
                    />
                    <span class="my-auto">Todo</span>
                </div>
                <div class="flex flex-1 gap-3.5 px-4 py-3 border border-solid bg-neutral-100 bg-opacity-80 border-zinc-100 rounded-[1321.429px]">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c56a80d9d889250513e6b8957a2425abf47c97f3068741db5f1ae84e7053633?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                        class="shrink-0 aspect-square w-[15px]"
                        alt=""
                    />
                    <span>Prior</span>
                </div>
            </div>
            <button
                class="justify-center p-3.5 mt-5 text-xs border border-solid bg-neutral-100 bg-opacity-80 border-zinc-100 rounded-[1000px] text-zinc-600"
            >
                Add sub-issues
            </button>
        </div>
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/50c662c42be61b0c64e902c6a53c425f21ed07de4578d331d4abb59cff809ff6?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
            class="shrink-0 max-w-full border border-solid aspect-[3.23] border-zinc-100 rounded-[1321.429px] w-[118px]"
            alt=""
        />
        <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7eec09a903e72b2afd2aa3fbfca3ab0ed3f3fe6e61e907d20c85f75b5e700bd5?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
            class="shrink-0 aspect-square w-[38px]"
            alt=""
        />
        <button
            class="flex gap-2.5 px-3.5 py-2.5 text-base whitespace-nowrap border border-solid bg-neutral-100 bg-opacity-80 border-zinc-100 rounded-[1321.429px] text-stone-500"
        >
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d53421e6cd872a0a4fa2e9b4e82f80997e2324f19852fe6bd200827ec1b5bc7?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                class="shrink-0 self-start w-4 border-2 border-black border-dashed aspect-square stroke-[2px] stroke-black"
                alt=""
            />
            <span>Sprint</span>
        </button>
        <button
            class="justify-center items-start px-10 py-3.5 text-base whitespace-nowrap border border-solid bg-neutral-100 bg-opacity-80 border-zinc-100 rounded-[1321.429px] text-stone-500 max-md:pl-5"
        >
            Milestone
        </button>
    </div>
    <div class="flex gap-5 justify-between mt-6 ml-3 w-full text-center max-md:flex-wrap max-md:max-w-full">
        <button class="flex gap-2.5 my-auto text-xs text-zinc-600">
            <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b79410c941b8fcd97430aa3698d4a441d04916c2b85db8f259a620a5bbfb8104?apiKey=6df31c50aa5a49cdb4a3bff6c462ecd6&"
                class="shrink-0 w-5 aspect-square"
                alt=""
            />
            <span class="my-auto">Add preview</span>
        </button>
        <button class="justify-center px-6 py-3.5 text-lg font-medium text-white bg-blue-700 rounded-[1424.242px] max-md:px-5">Create issue</button>
    </div>
</template>