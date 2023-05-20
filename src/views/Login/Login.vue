<script setup>
import { ref } from 'vue'
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { toast } from 'vue3-toastify'

const email = ref('')
const password = ref('')
const router = useRouter()

const login = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then(() => {
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
    <section class="bg-blue-50">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div
          class="w-full bg-white rounded-lg shadow-xl dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center"
            >
              Tizimga kiring
            </h1>
            <form @submit.prevent="login" class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email</label
                >
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required=""
                  v-model="email"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  v-model="password"
                />
              </div>
              <div class="flex items-center justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="text-gray-500 dark:text-gray-300"
                      >Remember me</label
                    >
                  </div>
                </div>
                <a
                  href="#"
                  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  >Forgot password?</a
                >
              </div>
              <button
                @click=""
                type="submit"
                class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </button>
            </form>
            <button
              @click="signInGoogle"
              class="w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex items-center justify-center gap-2"
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu1PJmT_THldF0n5APcmt9p10utgu6KSw4cH2fQ5Xhpw&s"
                alt=""
                class="h-[20px] w-[20px] rounded-full"
              />
              Login With Google
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
