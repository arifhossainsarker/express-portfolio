import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useAuthStore } from '../stores/authStore';

// const authStore = useAuthStore();
// const isAuthenticated = () => authStore.isAuthenticated;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skill',
      name: 'skill',
      component: () => import('../views/SkillView.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('../views/backend/LoginView.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/backend/DashboardView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/dashboard/skill',
      name: 'backend-skill',
      component: () => import('../views/backend/SkillView.vue')
    },
    {
      path: '/dashboard/add/skill',
      name: 'backend-ad-skill',
      component: () => import('../views/backend/AddSkill.vue')
    },
    {
      path: '/dashboard/edit/skill/:id',
      name: 'backend-edit-skill',
      component: () => import('../views/backend/EditSkill.vue')
    },
    {
      path: '/dashboard/project',
      name: 'backend-project',
      component: () => import('../views/backend/ProjectView.vue')
    },
    {
      path: '/dashboard/add/project',
      name: 'backend-ad-project',
      component: () => import('../views/backend/AddProject.vue')
    },
    {
      path: '/dashboard/edit/project/:id',
      name: 'backend-edit-project',
      component: () => import('../views/backend/EditProject.vue')
    },
  ]
});


// Route Navigation Guards
// router.beforeEach((to, from, next) => {
//   if (to.meta.requiresAuth && !isAuthenticated()) {
//     // If the route requires authentication and the user is not authenticated, redirect to login
//     next('/admin/login');
//   } else {
//     next(); // Proceed to the next route
//   }
// });

export default router
