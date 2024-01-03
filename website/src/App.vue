<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class=" h-16 w-full bg-slate-700">
    <div class=" flex pt-5 pl-10 pr-10">
        <div class="logo w-1/3 ">
          <span class=" text-orange-700 font-bold text-2xl italic">Protfolio</span>
        </div>

        <nav class=" w-2/3 text-center">
          <RouterLink class=" text-orange-600 text-lg p-3" to="/">Home</RouterLink>
          <RouterLink class=" text-orange-600 text-lg p-3" to="/about">Skills</RouterLink>
          <RouterLink class=" text-orange-600 text-lg p-3" to="/about">Projects</RouterLink>
        </nav>
    </div>
  </header>
  <!-- Home Slider Section -->
  <div class="slider h-80 w-full bg-slate-300">
      <h4 class=" text-center text-orange-500 font-extrabold text-4xl pt-28">This My portfolio project</h4>
  </div>

  <!-- Skill View -->
  <div class="skill pl-20 pr-20 pt-10 pb-10">
      <div class="headline mb-10">
        <h4 class=" text-center font-extrabold text-2xl text-black">Skills</h4>
      </div>
      <div class="skills grid gap-4 grid-cols-4 grid-rows-4">
          <div class=" border border-gray-100 rounded p-5">
              <h4 class=" font-bold text-center text-xl text-black mb-3">Html</h4>
              <p class=" text-justify text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt?</p>
          </div>

          <div class=" border border-gray-100 rounded p-5">
              <h4 class=" font-bold text-center text-xl text-black mb-3">Html</h4>
              <p class=" text-justify text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt?</p>
          </div>

          <div class=" border border-gray-100 rounded p-5">
              <h4 class=" font-bold text-center text-xl text-black mb-3">Html</h4>
              <p class=" text-justify text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt?</p>
          </div>

          <div class=" border border-gray-100 rounded p-5">
              <h4 class=" font-bold text-center text-xl text-black mb-3">Html</h4>
              <p class=" text-justify text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt?</p>
          </div>
      </div>
  </div>

  <!-- Skill View -->
  <div class="skill pl-20 pr-20 pt-10 pb-10 bg-gray-100">
      <div class="headline mb-10">
        <h4 class=" text-center font-extrabold text-2xl text-black">Projects</h4>
      </div>
      <div class="skills grid gap-4 grid-cols-3 grid-rows-3">
          <div class=" border border-gray-400 rounded p-5">
              <h4 class=" font-bold text-center text-xl text-black mb-3">Html</h4>
              <p class=" text-justify text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt?</p>
          </div>

          <div class=" border border-gray-400 rounded p-5">
              <h4 class=" font-bold text-center text-xl text-black mb-3">Html</h4>
              <p class=" text-justify text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt?</p>
          </div>

          <div class=" border border-gray-400 rounded p-5">
              <h4 class=" font-bold text-center text-xl text-black mb-3">Html</h4>
              <p class=" text-justify text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt?</p>
          </div>

          <div class=" border border-gray-400 rounded p-5">
              <h4 class=" font-bold text-center text-xl text-black mb-3">Html</h4>
              <p class=" text-justify text-sm text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, incidunt?</p>
          </div>
      </div>
  </div>
  <RouterView />
  <footer class=" bg-orange-400 h-10 w-full">
    <p class=" text-white text-center pt-2 text-sm">Design and Develop by Arif</p>
  </footer>
</template>

<style scoped>

</style>
