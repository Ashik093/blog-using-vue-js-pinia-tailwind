<script setup>
import {onBeforeMount} from 'vue'
import { useCategoryStore } from '../store/category';
const categoryStore =useCategoryStore()
  onBeforeMount(() => {
    categoryStore.getAllCategory()
  })
</script>
<template>
    
    
  <footer class="bg-white">
    <div class="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
      <nav class="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
        

        <div class="px-5 py-2" v-for="(item,index) in categoryStore.category" :key="index">
          <router-link
          :to="'/news/'+item.name+'/' + item.id" class="text-base text-gray-500 hover:text-gray-900">
          {{item.name}}
          </router-link>
        </div>
  

      </nav>
      
      <p class="mt-8 text-center text-base text-gray-400">
        &copy; 2023 খবরপত্রিকা. All rights reserved.
      </p>
    </div>
  </footer>




</template>