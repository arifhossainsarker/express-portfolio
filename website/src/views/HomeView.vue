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
      console.log(response);
      this.data = response.data;
    } catch (error) {
      console.error(error);
    }
  },
  };
</script>

<template>
  <main>
    <div>
      <!-- Home Slider Section -->
      <div class="slider h-80 w-full bg-slate-300">
          {{ data }}
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

      <!-- Project View -->
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
    </div>
  </main>
</template>
