<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from './views/HomeView.vue'
</script>

<template>
  <header class=" h-16 w-full bg-slate-700">
    <div class=" flex pt-5 pl-10 pr-10">
        <div class="logo w-1/3 ">
          <span class=" text-orange-700 font-bold text-2xl italic">Protfolio</span>
        </div>

        <nav class=" w-2/3 text-center">
          <RouterLink class=" text-orange-600 text-lg p-3" to="/">Home</RouterLink>
          <RouterLink class=" text-orange-600 text-lg p-3" to="/skill">Skills</RouterLink>
          <RouterLink class=" text-orange-600 text-lg p-3" to="/project">Projects</RouterLink>
        </nav>
    </div>
  </header>
  
  <RouterView />
  <footer class=" bg-orange-400 h-10 w-full">
    <p class=" text-white text-center pt-2 text-sm">Design and Develop by Arif</p>
  </footer>
</template>

<style scoped>

</style>
