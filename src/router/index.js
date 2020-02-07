import Vue from 'vue';
import VueRouter from 'vue-router';

// authentication guard
import { authGuard } from '../auth/authGuard';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/schedule',
    name: 'schedule',
    component: () => import('../views/Schedule.vue'),
  },
  {
    path: '/engagements',
    name: 'engagements',
    component: () => import('../views/Engagements.vue'),
  },
  // NEW - add the route to the /profile component
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue'),
    beforeEnter: authGuard,
  },
  {
    path: '/people',
    name: 'people',
    component: () => import('../views/People.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'active',
});

export default router;
