import { createRouter, createWebHistory } from 'vue-router';
import DogsView from './components/DogsView.vue';
import SingleDogsView from './components/SingleDogsView.vue';
import CatFacts from './components/CatFacts.vue'

const routes = [
    { path: '/', component: DogsView },  // Default route
    { path: '/dogs', component: DogsView },
    { path: '/dogs/:id', component: SingleDogsView },
    { path: '/cat-facts', component: CatFacts}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
