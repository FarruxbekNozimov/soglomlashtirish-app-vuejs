<script setup>
import { ref, reactive, onMounted } from 'vue'
import Search from '/src/UI/Search.vue'
import { db } from '@/main'
import { collection, onSnapshot } from 'firebase/firestore'

const orders = ref([])

onMounted(() => {
  onSnapshot(collection(db, 'patient'), (querySnapshot) => {
    let fbPatients = []
    querySnapshot.forEach((doc) => {
      fbPatients.push({
        id: doc.id,
        ...doc.data()
      })
    })
    orders.value = fbPatients
  })
})
</script>
<template>
  <div class="p-5 relative">
    <div class="w-full flex items-center justify-between">
      <Search />
    </div>
    <div class="max-w-full mt-5">
      <div class="flex flex-col">
        <div class="overflow-x-auto shadow-md sm:rounded-lg">
          <div class="inline-block min-w-full align-middle">
            <div class="overflow-hidden">
              <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead class="bg-gray-100 dark:bg-gray-700">
                  <tr>
                    <th scope="col" class="p-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-all"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-all" class="sr-only">checkbox</label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-sm"
                    >
                      <span class="text-xs">F.I.SH</span>
                      <i class="bx bx-down-arrow-alt"></i>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-sm"
                    >
                      <span class="text-xs">Email</span>
                      <i class="bx bx-down-arrow-alt"></i>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-sm"
                    >
                      <span class="text-xs">address</span>
                      <i class="bx bx-down-arrow-alt"></i>
                    </th>
                    <th
                      scope="col"
                      class="py-3 px-6 font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400 text-sm"
                    >
                      <span class="text-xs">time</span>
                      <i class="bx bx-down-arrow-alt"></i>
                    </th>
                  </tr>
                </thead>
                <tbody
                  class="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700"
                >
                  <tr v-for="order in orders" class="hover:bg-gray-100">
                    <td class="p-4 w-4">
                      <div class="flex items-center">
                        <input
                          id="checkbox-table-1"
                          type="checkbox"
                          class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label for="checkbox-table-1" class="sr-only">checkbox</label>
                      </div>
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900 flex items-center gap-3">
                      {{ order.fullname }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ order.email }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ order.address }}
                    </td>
                    <td class="py-4 px-6 text-sm font-medium text-gray-900">
                      {{ order.time }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
