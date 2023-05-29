<script setup>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'
import { ref } from 'vue'

const router = useRouter()
const who = ref('')

const signInGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(getAuth(), provider)
    .then((res) => {
      toast.success(`Successfully registered`, {
        autoClose: 1000,
        theme: 'light'
      })
      router.push('/')
    })
    .catch((err) => {
      let error = err.code.split('/')[1]
      error = error.replace(/-/g, ' ').toUpperCase()
      toast.error(`${error}`, {
        autoClose: 1000,
        theme: 'light'
      })
    })
}
</script>
<template lang="">
  <div>
    <section class="bg-blue-400">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          class="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <img
            src="https://media.tenor.com/rk07qeKj1y0AAAAM/cool-sunglasses.gif"
            alt=""
            class="w-full rounded-xl shadow-2xl border"
          />
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center"
            >
              Tizimga kiring
            </h1>
            <button
              @click="signInGoogle"
              class="w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center gap-2"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s"
                alt=""
                class="h-[20px] w-[20px] rounded-full"
              />
              Google orqali kirish
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
