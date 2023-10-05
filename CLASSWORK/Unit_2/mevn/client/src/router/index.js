import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatAddNew from '../components/CatAddNew'
import LibraryHome from '../components/Library'
import SearchByAuthor from '../components/SearchByAuthor'
import SearchByTitle from '../components/SearchByTitle'
import SingleAuthor from '../components/SingleAuthor'
import SingleBook from '../components/SingleBook'
import LoginForm from '../components/auth/login'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: DogsView
    },
    {
        name: 'Dogs',
        path: '/dogs',
        component: AllDogs
    },
    {
        name: 'Dog',
        path: '/dogs/:id',
        component: SingleDogView
    },
    // {
    //     name: 'CatFacts',
    //     path: '/catfacts',
    //     component: CatFactsView
    // },
    {
        name: 'AddCat',
        path: '/cat/new',
        component: CatAddNew
    },
    {
        name: 'Library',
        path: '/library',
        component: LibraryHome
    },
    {
        name: 'SearchByAuthor',
        path: '/library/search-by-author',
        component: SearchByAuthor
    },
    {
    name: 'SearchByTitle',
    path: '/library/search-by-title',
    component: SearchByTitle
    },
    {
        name: 'SingleAuthor',
        path: '/library/search-by-author/:id',
        component: SingleAuthor
    },
    {
        name: 'SingleBook',
        path: '/library/search-by-title/:id',
        component: SingleBook
    },
    {
        name: 'LoginForm',
        path: '/login',
        component: LoginForm
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router