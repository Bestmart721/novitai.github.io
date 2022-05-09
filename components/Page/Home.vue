<template >
      <div class="background-overlay ">
   <video
        class=" right-0 top-0  h-4/6  "
        style="opacity: 90%; "
        autoplay
        loop
        muted
        poster="https://github.com/novitai/novitai.github.io/raw/master/assets/images/poster.png">
        <source
          src="https://github.com/novitai/novitai.github.io/raw/master/assets/tracking.mp4"
          type="video/mp4">
      </video>
      <div
          class="absolute top-0 left-0 transform translate-x-64 translate-y-4 h-14 w-14 rounded-full bg-gray-900 dark:bg-white"
        ></div>
        <div
          class="absolute hidden md:block top-0 left-0 transform translate-x-18 translate-y-20 h-28 w-28 rounded-full bg-blue-600 linear-wipe"
        ></div>
        <div
          class="absolute hidden md:block bottom-0 right-0 transform -translate-x-4 -translate-y-40 h-16 w-16 rounded bg-purple-600 linear-wipe"
        ></div>
        <div class="absolute bottom-0 right-0 triangle-shape"></div>
      </div>
      <div class="flex flex-col z-10 " id="home">
        <h1 class="text-center">
          <span
            v-for="(item, i) in $t('pages.index.title').split(',')"
            :key="i"
            class="linear-wipe-text drop-shadow-xl text-5xl xl:text-6xl 2xl:text-6xl block font-bold "
          >
            {{ item }}
          </span>
        </h1>
        <!-- contact us button -->
        <div class="flex justify-center pt-4 items-center">
          <button
            class="bg-blue-600  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            @click="$router.push('/#contact')"
          >
            {{ $t('pages.home.callToAction') }}
          </button>
        </div>
       
      </div>
      
</template>