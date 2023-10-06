import { createRouter, createWebHistory } from 'vue-router';
import DogsView from './components/DogsView.vue';
import SingleDogsView from './components/SingleDogsView.vue';
import CatFacts from './components/CatFacts.vue';
import AuthorsView from './components/AuthorsView.vue';
import FuzzyKittensView from './components/FuzzyKittens.vue';
import LibraryView from './components/LibraryView.vue';
import SearchView from './components/SearchView.vue';
import BooksView from './components/BooksView.vue';
import AuthView from './components/AuthView.vue';



const routes = [
    { path: '/', component: DogsView },  // Default route
    { path: '/dogs', component: DogsView },
    { path: '/dogs/:id', component: SingleDogsView },
    { path: '/books', component: BooksView},
    { path: '/authors', component: AuthorsView},
    { path: '/cats', component: FuzzyKittensView},
    { path: '/library', component: LibraryView},
    { path: '/cat-facts', component: CatFacts},
    { path: '/search', component: SearchView},
    { path: '/login', component: AuthView},

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
