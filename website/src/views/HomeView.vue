<script>
  import axios from 'axios';
  import FrontendHeader from '../components/FrontendHeader.vue';
  import FrontendFooter from '../components/FrontendFooter.vue';
  export default {
  components: { FrontendHeader, FrontendFooter },
    data() {
      return {
        data: [],
        projects: [],
      };
    },
    async created() {
    try {
      const response = await axios.get('http://localhost:3000/frontend/skill');
      const projects = await axios.get('http://localhost:3000/frontend/project');
      this.data = response.data.data;
      this.projects = projects.data.data;
    } catch (error) {
      console.error(error);
    }
  },
  };
</script>

<template>
  <div>
    <frontend-header></frontend-header>
    <main>
      <div>
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
                <div class=" border border-gray-100 rounded p-5" v-for="item in data" :key="item.id">
                    <h4 class=" font-bold text-center text-xl text-black mb-3">{{ item.name }}</h4>
                    <p class=" text-justify text-sm text-black">{{ item.description }}</p>
                </div>

            </div>
        </div>

        <!-- Project View -->
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
    </main>
    <frontend-footer></frontend-footer>
  </div>
  
</template>
