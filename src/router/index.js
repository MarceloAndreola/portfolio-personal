import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/HomeView.vue';
import AboutMe from '../views/AboutMeView.vue';
import ProjectsView from '../views/ProjectsView.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/sobre-mi', name: 'AboutMe', component: AboutMe },
  { path: '/proyectos', name: 'Projects', component: ProjectsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
