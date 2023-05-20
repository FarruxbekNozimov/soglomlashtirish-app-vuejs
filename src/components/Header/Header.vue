<script setup>
import Avatar from '../../UI/Avatar.vue'
import { useHeaderStore } from '/src/stores/header/header.js'
import Search from '/src/UI/Search.vue'
const store = useHeaderStore()
</script>

<template>
  <div>
    <nav class="bg-sky-100 border-b border-blue-500">
      <div class="py-3 px-5">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-between">
            <span
              class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-blue-900"
              >{{ store.GET_TITLE }}</span
            >
          </div>
          <Avatar />
        </div>
      </div>
    </nav>
  </div>
</template>

<style></style>
