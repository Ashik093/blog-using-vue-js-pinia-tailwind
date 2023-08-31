<script setup>
import NewsCardComponent from './Card/NewsCardComponent.vue';
import { useNewsStore } from '../store/news';
import { useRoute } from 'vue-router';
import { ref,watchEffect } from 'vue';



const newsStore = useNewsStore()
const route = useRoute();
const cat = ref(0)
watchEffect(()=>{
  cat.value = route.params.categoryId?route.params.categoryId:0
  newsStore.getNews(cat.value)
  console.log(cat.value)
})


</script>
<template>

    <div class="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      
      <h6 class="text-lg font-bold dark:text-white mb-5">{{$route.params.categoryName?$route.params.categoryName:"সাম্প্রতিক খবর" }}</h6>
      <hr/>

      <div class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
        <NewsCardComponent :news="newsStore.news"></NewsCardComponent>

      </div>
    </div>
    
</template>