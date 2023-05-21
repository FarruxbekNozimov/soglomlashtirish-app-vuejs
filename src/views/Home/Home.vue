<script setup>
import { getAuth } from 'firebase/auth'
</script>
<template>
  <div class="p-5">
    <h2 class="text-3xl text-center text-blue-900">
      <span class="border-b-2 border-blue-900 rounded-xl py-2 px-10">Men haqimda</span>
    </h2>
    <div class="mt-10 mx-20 bg-white rounded-3xl p-5">
      <p class="text-lg font-normal">
        Men 1985-yil Toshkent shahri Yunusobod tumanida tug'ulganman. Toshkent medical universitetda
        5 yil o'qib, hozirda okulist bo'lib ishlamoqdaman. Kelajakda o'z ishimni mutaxasisi
        bo'lmoqchiman.
      </p>
      <div class="mt-7 flex items-center justify-around">
        <div class="text-lg">
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">F.I.O :</span>
            <span class="ml-2">{{ getAuth().currentUser.displayName }}</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Tug'ilgan sana :</span>
            <span class="ml-2">17 July 2007</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Website :</span>
            <span class="ml-2">www.example.com</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Kasbingiz :</span>
            <span class="ml-2">Stomotolog</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Manzil :</span>
            <span class="ml-2">Chilonzor tuman 10-uy</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Yoshi :</span>
            <span class="ml-2">19 yosh</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Telefon :</span>
            <span class="ml-2">+998(77) 777 77 77</span>
          </div>
        </div>
        <img
          :src="getAuth().currentUser.photoURL"
          alt=""
          class="w-[50%] rounded-full border-2 border-dashed border-blue-500"
        />
      </div>
    </div>
  </div>
</template>
<style></style>
