<script setup>
import notification from '/src/assets/img/notification.png'
import settings from '/src/assets/img/settings.png'
</script>

<template>
  <div class="flex items-center justify-center gap-5">
    <button
      class="bg-sky-200 hover:bg-sky-400 duration-300 px-3 py-2 rounded-full h-[50px] relative"
    >
      <img :src="notification" alt="" class="" />
      <div class="absolute h-[8px] w-[8px] rounded-full bg-blue-600 top-1 right-1"></div>
    </button>
    <button
      class="bg-sky-200 hover:bg-sky-400 duration-300 px-3 py-2 rounded-full h-[50px] relative"
    >
      <img :src="settings" alt="" class="" />
    </button>
  </div>
</template>

<style></style>
