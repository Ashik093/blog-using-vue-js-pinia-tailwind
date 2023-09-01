<script setup>
import {onBeforeMount,ref} from 'vue'
import { useCategoryStore } from '../store/category';
let isMobileMenuOpen = ref(false)

const toggleMobileMenu=()=> {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}
const categoryStore =useCategoryStore()
  onBeforeMount(() => {
    categoryStore.getAllCategory()
  })



</script>
  
<template>
  <nav
    class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <router-link to="/" class="flex items-center">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8 mr-3"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
          >খবরপত্রিকা</span
        >
      </router-link>
      
      <div class="flex md:order-2">
        
        
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        
      >
        <ul
          class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >

          
          <li v-for="(item,index) in categoryStore.category" :key="index">
            <router-link
            :to="'/news/'+item.name+'/' + item.id"
              class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >{{item.name}}</router-link
            >
          </li>
          
          
        </ul>
      </div>
      <button
      data-collapse-toggle="navbar-sticky"
      type="button"
      class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      @click="toggleMobileMenu"
      :aria-expanded="isMobileMenuOpen"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        class="w-5 h-5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 17 14"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M1 1h15M1 7h15M1 13h15"
        />
      </svg>
    </button>

    <div
      class="md:hidden mobile-sidebar"
      :class="{ 'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen }"
    >
      <ul>
        <li v-for="(item, index) in categoryStore.category" :key="index">
          <router-link  @click="toggleMobileMenu"
            :to="'/news/' + item.name + '/' + item.id"
            class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
          >
            {{ item.name }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>

  </nav>
</template>
<style scoped>
.mobile-sidebar{
  position: absolute;
    background-color: white;
    right: 0;
    width: 100%;
    text-align: center;
    height: 100vh;
    top: 91%;
}
</style>
