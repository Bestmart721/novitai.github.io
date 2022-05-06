<template>
  <transition name="fade">
    <div
      class="rounded-full cursor-pointer flex bg-gray-200 p-4 text-gray-500 items-center hover:shadow-md dark:bg-gray-800"
      @click="goTop"
    >
      <!-- <IconChevron up class="h-6 w-6" /> -->
      <IconMdi:home-roof />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { IApp } from '~/utils/app'
const { t } = useLang()
const goTop = () => {
  window.scrollTo(0, 0)
}
const app = useState<IApp>('app')
const isActive = computed(() => {
    let position = window.scrollX
  return position > 0
})
</script>