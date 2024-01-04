<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        projects: [],
      };
    },
    async created() {
    try {
      const projects = await axios.get('http://localhost:3000/frontend/project');
      this.projects = projects.data.data;
    } catch (error) {
      console.error(error);
    }
  },
  };
</script>
<template>
    <div>
         <!-- Breadcumb Section -->
        <div class="slider h-80 w-full bg-slate-300">
            <h4 class=" text-center text-orange-500 font-extrabold text-4xl pt-28">Skills</h4>
        </div>
        <!-- Project Section -->
        <div class="skill pl-20 pr-20 pt-10 pb-10 bg-gray-100">
          <div class="headline mb-10">
            <h4 class=" text-center font-extrabold text-2xl text-black">Projects</h4>
          </div>
          <div class="skills grid gap-4 grid-cols-3 grid-rows-3">
              <div class=" border border-gray-400 rounded p-5" v-for="item in projects" :key="item.id">
                  <h4 class=" font-bold text-center text-xl text-black mb-3">{{ item.name }}</h4>
                  <p class=" text-justify text-sm text-black pb-5">{{ item.description }}</p>
                  <span class=" mt-5 bg-slate-300 h-8 w-full p-2 rounded-md">{{ item.tech_stack }}</span>
              </div>
          </div>
      </div>
    </div>
    
  </template>
  
  <style>
  
  </style>
  