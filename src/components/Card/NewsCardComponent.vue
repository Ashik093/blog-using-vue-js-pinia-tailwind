<script setup>
defineProps({
  news: Object
});
</script>
<template>
  <router-link :to="'/news/view/'+item.id" v-for="(item, index) in news" key="index">
    <div class="rounded overflow-hidden shadow-lg">
      <div class="relative">
        <img class="w-full" :src="item.img" alt="Sunset in the mountains" />
        <div
          class="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"
        ></div>
  
      
      </div>
      <div class="px-6 py-4">
        <p
          class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >{{ item.title }}</p>
        <p class="text-gray-500 text-sm">{{ item.short }}</p>
      </div>
      <div class="px-6 py-4 flex flex-row items-center">
        <span
          href="#"
          class="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center"
        >
          <svg
            height="13px"
            width="13px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            style="enable-background:new 0 0 512 512;"
            xml:space="preserve"
          >
            <g>
              <g>
                <path
                  d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
          c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
          c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"
                />
              </g>
            </g>
          </svg>
          <span class="ml-1">{{(new Date(item.created_at)).toLocaleDateString("bn-BD",{ year: 'numeric', month: 'long', day: 'numeric' })}}</span>
        </span>
      </div>
    </div>
    
  </router-link>
  
</template>