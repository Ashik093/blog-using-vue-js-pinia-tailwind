<script setup>

import { useNewsStore } from '../store/news';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import DataNotFound from './DataNotFound.vue';

const newsStore = useNewsStore()
const route = useRoute();

onMounted(()=>{
  newsStore.getNewsById(route.params.newsId)
})


</script>
<template>
  <div class="relative" v-if="newsStore.newsById && typeof newsStore.newsById === 'object' && Object.keys(newsStore.newsById).length !== 0">
    <div class="max-w-5xl mb-10 rounded overflow-hidden flex flex-col mx-auto text-center">
      <img class="w-full my-4"
        :src="newsStore.newsById.img"
        alt="Sunset in the mountains">
      <div class="py-5 text-sm font-regular text-gray-900 flex items-center justify-center">
        <span class="mr-3 flex flex-row items-center">
          <svg class="text-indigo-600" fill="currentColor" height="13px" width="13px" version="1.1" id="Layer_1"
            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
            <g>
              <g>
                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z" />
              </g>
            </g>
          </svg>
          <span class="ml-1">{{(new Date(newsStore.newsById.created_at)).toLocaleDateString("bn-BD",{ year: 'numeric', month: 'long', day: 'numeric' })}}</span></span>
      </div>
      <hr />

    </div>
    <div class="max-w-5xl mx-auto">
      <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
        <div class="">
          <p
          class="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
        >{{newsStore.newsById.title}}</p>

          <p class="text-base leading-8 my-5">
            {{ newsStore.newsById.content }}
            </p>
        </div>

      </div>
    </div>
  </div>
  <DataNotFound v-else></DataNotFound>
</template>