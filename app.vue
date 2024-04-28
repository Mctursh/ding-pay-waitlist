<template>
  <div class="h-screen" :class="{'bg-secondary': !isTabPersonal}">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { store } from './stores/index';

const isTabPersonal = ref<boolean>(store.isTabPersonal)

watch(
  () => store.isTabPersonal,
  (newValue: boolean) => isTabPersonal.value = newValue
)
</script>
