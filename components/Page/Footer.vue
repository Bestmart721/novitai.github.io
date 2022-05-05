<template>
  <footer class="border-t lg:border-gray-900/10 dark:border-gray-50/[0.2]">
    <section class="max-w-8xl mx-auto px-4 lg:px-8 flex-1 flex w-full space-x-20">
      <div class="w-full py-4 text-center md:text-left">

        <div class="text-xs text-gray-600 dark:text-gray-400">
          Copyright © {{ year }} Novit. All rights reserved. Made with
          <span class="text-red-500">❤</span>
        </div>
      </div>
    </section>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
