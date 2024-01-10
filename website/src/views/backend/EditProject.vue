<template>
    <div class="">
      <admin-sidebar></admin-sidebar>
        
      <div class="p-4 sm:ml-64">
        <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
            <!-- Start block -->
            <section class="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5 antialiased">

                <form @submit.prevent="submitForm" class="max-w-sm mx-auto">
                    <div class="mb-5">
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Project name</label>
                        <input type="text" v-model="formData.name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required>
                       
                    </div>
                    <div class="mb-5">
                        <label for="tech_stack" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tech Stack</label>
                        <input type="text" v-model="formData.tech_stack" id="tech_stack" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required>
                       
                    </div>
                    <div class="mb-5">
                        <label for="description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                        
                        <textarea name="description" v-model="formData.description" id="description" cols="30" rows="10" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                    </div>

                    <div class="mb-5">
                        <label for="status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
                        
                        
                        <select name="status" id="status" v-model="formData.status" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="active" default>Active</option>
                            <option value="inactive">Inactive</option>
                        </select>
                    </div>
                    
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>
            </section>
            
        </div>
      </div>
  
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import AdminSidebar from '../../components/AdminSidebar.vue'
  export default {
    name: 'AddProject',
    components: { AdminSidebar },

    data(){
        return {
            formData: {
                name: '',
                description: '',
                tech_stack:'',
                status: 'active',
            },
        }
    },
    created() {
    
    },

  methods: {
        async submitForm() {
            try {
                // Make a POST request to the API to add a new Skill
                const id = this.$route.params.id;
                const response = await axios.put(`http://localhost:3000/api/project/${id}`, this.formData);
                // console.log(response);
                // Clear the form after successful submission
                // router.push('/dashboard/project');
            } catch (error) {
                console.error('Error adding product:', error);
            }
        },
    }
  
  }
  </script>
  
  <style>
  
  </style>