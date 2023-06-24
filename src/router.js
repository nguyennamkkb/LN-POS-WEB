import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue'; // Replace 'Home' with the actual path to your home component
import UserIndex from './views/user/index.vue'; // Replace 'SpaPage' with the actual path to your SPA page component
// import logos from './component/Logos'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/user',
    component: UserIndex
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
