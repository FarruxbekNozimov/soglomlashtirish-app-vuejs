<script setup>
import { getAuth } from 'firebase/auth'
import { db } from '@/main'
import { collection, onSnapshot, updateDoc, doc } from 'firebase/firestore'
import { ref, reactive, onMounted } from 'vue'

let nowUser = reactive({
  fullname: '',
  address: '',
  age: '',
  phone: '',
  birthday: '',
  job: '',
  website: '',
  email: '',
  description: ''
})

onSnapshot(collection(db, 'doctor'), (querySnapshot) => {
  querySnapshot.forEach((doc) => {
    if (getAuth().currentUser.uid == doc.data().uid) {
      nowUser.fullname = doc.data().fullname
      nowUser.address = doc.data().address
      nowUser.age = doc.data().age
      nowUser.phone = doc.data().phone
      nowUser.birthday = doc.data().birthday
      nowUser.job = doc.data().job
      nowUser.website = doc.data().website
      nowUser.email = doc.data().email
      nowUser.description = doc.data().description
    }
  })
})
</script>
<template>
  <div class="p-5">
    <h2 class="text-3xl text-center text-blue-900">
      <span class="border-b-2 border-blue-900 rounded-xl py-2 px-10">Men haqimda</span>
    </h2>
    <div class="mt-10 md:mx-1 lg:mx-20 bg-white rounded-3xl p-5">
      <p v-if="nowUser.description" class="text-lg font-normal">
        {{ nowUser.description }}
      </p>
      <p v-else class="text-3xl text-center text-red-600">HALI YO'Q</p>
      <div class="mt-7 md:block lg:flex items-center justify-around">
        <div class="text-lg">
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">F.I.O :</span>
            <span v-if="nowUser.fullname" class="ml-2">{{ nowUser.fullname }}</span>
            <span v-else class="ml-2 text-red-600">HALI YO'Q</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Tug'ilgan sana :</span>
            <span v-if="nowUser.birthday" class="ml-2">{{ nowUser.birthday }}</span>
            <span v-else class="ml-2 text-red-600">HALI YO'Q</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Website :</span>
            <span v-if="nowUser.website" class="ml-2">{{ nowUser.website }}</span>
            <span v-else class="ml-2 text-red-600">HALI YO'Q</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Kasbingiz :</span>
            <span v-if="nowUser.job" class="ml-2">{{ nowUser.job }}</span>
            <span v-else class="ml-2 text-red-600">HALI YO'Q</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Manzil :</span>
            <span v-if="nowUser.address" class="ml-2">{{ nowUser.address }}</span>
            <span v-else class="ml-2 text-red-600">HALI YO'Q</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Yoshi :</span>
            <span v-if="nowUser.age" class="ml-2">{{ nowUser.age }}</span>
            <span v-else class="ml-2 text-red-600">HALI YO'Q</span>
          </div>
          <div class="mb-6 flex items-center border-b-2 rounded-xl pb-2 px-3 border-blue-500">
            <span class="font-mono font-semibold">Telefon :</span>
            <span v-if="nowUser.phone" class="ml-2">{{ nowUser.phone }}</span>
            <span v-else class="ml-2 text-red-600">HALI YO'Q</span>
          </div>
        </div>
        <img
          :src="getAuth().currentUser.photoURL"
          alt=""
          class="sm:w-[100%] lg:w-[50%] rounded-2xl border-2 border-dashed border-blue-500"
        />
      </div>
    </div>
  </div>
</template>
<style></style>
