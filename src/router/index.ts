import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'mainPage',
    component: () => import('../pages/MainPage.vue'),
  },
  {
    path: '/ip-details/:ip',
    name: 'detailsPage',
    component: () => import('../pages/DetailsPage.vue'),
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
