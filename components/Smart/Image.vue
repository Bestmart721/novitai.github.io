<template>
  <div
    :style="
      loaded === true && {
        backgroundImage: `url('${getBackgroundUrl}')`,
        backgroundPosition: 'center',
        backgroundSize: fit,
      }
    "
    :class="{
      'bg-gray-100 animate-pulse dark:bg-gray-700 bg-no-repeat':
        loaded === false,
    }"
    :smart-image="true"
    :title="title"
  >
    <img
      :src="getBackgroundUrl || src"
      :alt="alt || title || 'image'"
      class="invisible"
      @error="
        error = true
        loaded = true
      "
      @load="loaded = true"
    />
  </div>
</template>
<script lang="ts" setup>
    const props = defineProps({
        src: {
            type: String,
            default: '',
        },
        alt: {
            type: String,
            default: '',
        },
        width: {
            type: String,
            default: '',
        },
        height: {
            type: String,
            default: '',
        },
        fit: {
            type: String,
            default: 'cover',
        },
        title: {
            type: String,
            default: '',
        },
    })
    const loaded = ref(false)
    const error = ref(false)
    const getBackgroundUrl = computed(() => {
        if (error.value) {
            return ''
        }
        if (loaded.value) {
            return props.src
        }
        return ''
    })
</script>