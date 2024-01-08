import { defineStore } from 'pinia';
import api from '../../src/axios';

export const useStore = defineStore({
  id: 'main',
  state: () => ({
    skills: [],
  }),
  actions: {
    // Fetch skills from the server
    async fetchSkills() {
      // Make an Axios request to your API
      // For demo purposes, we'll mock the response
      const response = await api.get('/skills');
      this.skills = response.data;
    },

    // Add a new skills
    async addSkills(newSkills) {
      // Make an Axios request to your API
      // For demo purposes, we'll mock the response
      const response = await api.post('/skills', newSkills);
      this.skills.push(response.data);
    },

    // Update an existing skills
    async updateSkills(updatedSkills) {
      // Make an Axios request to your API
      // For demo purposes, we'll mock the response
      const response = await api.put(`/skills/${updatedSkills.id}`, updatedSkills);
      const index = this.skills.findIndex((p) => p.id === updatedSkills.id);
      this.skillss[index] = response.data;
    },

    // Delete a skills
    async deleteSkills(skillsId) {
      // Make an Axios request to your API
      // For demo purposes, we'll mock the response
      await mockApi.delete(`/skills/${skillsId}`);
      this.skills = this.skills.filter((p) => p.id !== skillsId);
    },
  },
});