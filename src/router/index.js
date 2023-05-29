import { createRouter, createWebHistory } from 'vue-router'
import { useHeaderStore } from '/src/stores/header/header.js'
import Dashboard from '/src/views/Dashboard.vue'
import Home from '/src/views/Home/Home.vue'
import Login from '/src/views/Login/Login.vue'
import Orders from '/src/views/Orders/Orders.vue'
import Settings from '/src/views/Settings/Settings.vue'
import Error from '/src/views/Error/Error.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: '/',
          name: 'Dashboard',
          component: Home
        },
        {
          path: '/orders',
          name: 'Orders',
          component: Orders
        },
        {
          path: '/settings',
          name: 'Settings',
          component: Settings
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: Error
    }
  ]
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener()
        resolve(user)
      },
      reject
    )
  })
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
  const headStore = useHeaderStore()
  headStore.CHANGE_TITLE(to.name)
  console.log(to.name)
  next()
})

export default router
