import './assets/main.css'
import 'vue3-toastify/dist/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD-CwO2f7_iA0RCFKS3u2HhGk3_hq8RqcM',
  authDomain: 'soglomlashtirish.firebaseapp.com',
  projectId: 'soglomlashtirish',
  storageBucket: 'soglomlashtirish.appspot.com',
  messagingSenderId: '887365633771',
  appId: '1:887365633771:web:2da4f22f3a148c79aa60ae',
  measurementId: 'G-96NH1JGKRB'
}

initializeApp(firebaseConfig)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// project-887365633771