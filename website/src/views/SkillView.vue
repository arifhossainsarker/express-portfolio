<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        data: [],
      };
    },
    async created() {
    try {
      const response = await axios.get('http://localhost:3000/frontend/skill');
      this.data = response.data.data;
    } catch (error) {
      console.error(error);
    }
  },
  };
</script>
<template>
  <div class="about">
    <!-- Breadcumb Section -->
    <div class="slider h-80 w-full bg-slate-300">
          <h4 class=" text-center text-orange-500 font-extrabold text-4xl pt-28">Skills</h4>
      </div>

      <!-- Skill View -->
      <div class="skill pl-20 pr-20 pt-10 pb-10">
          <div class="headline mb-10">
            <h4 class=" text-center font-extrabold text-2xl text-black">Skills</h4>
          </div>
          <div class="skills grid gap-4 grid-cols-4 grid-rows-4">
              <div class=" border border-gray-100 rounded p-5" v-for="item in data" :key="item.id">
                  <h4 class=" font-bold text-center text-xl text-black mb-3">{{ item.name }}</h4>
                  <p class=" text-justify text-sm text-black">{{ item.description }}</p>
              </div>

          </div>
      </div>
  </div>
</template>

<style>

</style>
