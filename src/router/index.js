import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostCreateView from '../views/PostCreateView.vue';
import InicioView from '../views/InicioView.vue';
import AyudasView from '../views/AyudasView.vue';


const routes = [
  {
    path: '/inicio',
    name: 'inicio',
    component: InicioView,
  },
  {
    path: '/ayudas',
    name: 'ayudas',
    component: AyudasView
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    
  },
  {
    path: '/post/create',
    name: 'post-create',
    component: PostCreateView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
