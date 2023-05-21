<script setup>
import { navLinks } from '../../constants/navLink'
import { onMounted, ref } from 'vue'
import { getAuth, signOut, onAuthStateChanged } from 'firebase/auth'
import { useRouter } from 'vue-router'
const user = getAuth().currentUser
const router = useRouter()

const isLoggedIn = ref(false)
let auth
onMounted(() => {
  auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    isLoggedIn.value = !isLoggedIn.value
  })
})
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push('/login')
  })
}
console.log(getAuth().currentUser)
</script>

<template>
  <div>
    <aside
      id="logo-sidebar"
      class="fixed top-0 left-0 z-40 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r border-blue-500 shadow-lg p-3 bg-sky-300"
      aria-label="Sidebar"
    >
      <div class="bg-white rounded-xl h-[96vh]">
        <div class="w-full text-center py-10">
          <img
            :src="getAuth().currentUser.photoURL"
            alt=""
            class="h-[100px] w-[100px] mx-auto rounded-full border border-dashed border-blue-500"
          />
          <h2 class="text-xl pt-4 text-blue-900">{{ user.displayName }}</h2>
        </div>
        <div class="h-full px-4 pb-4 overflow-y-auto">
          <ul class="space-y-2 font-medium">
            <li v-for="link in navLinks" :key="link.id">
              <router-link
                :to="link.link"
                exact-active-class="router-link-active"
                class="flex items-center p-2 px-7 rounded-lg text-blue-700 hover:bg-sky-600 bg-sky-100 hover:text-white duration-200 text-md"
              >
                <i :title="link.title" :class="link.icon" class="text-2xl"></i>
                <span class="ml-3">{{ link.title }}</span>
              </router-link>
            </li>
            <li>
              <button
                @click="handleSignOut"
                class="flex items-center p-2 px-7 rounded-lg text-red-700 hover:text-white bg-red-100 hover:bg-red-700 w-full duration-200 text-md"
              >
                <i class="bx bx-exit text-2xl"></i>
                <span class="ml-3">Chiqish</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  </div>
</template>

<style>
.router-link-active {
  background: rgb(0, 119, 255);
  color: white;
  font-weight: bold;
}
</style>
