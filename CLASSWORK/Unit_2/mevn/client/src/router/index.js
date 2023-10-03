import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFacts from '../components/CatFacts'
import CatAddNew from '../components/CatAddNew'

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
    {
        name: 'CatFacts',
        path: '/cat-facts',
        component: CatFacts
    },
    {
        name: 'AddCat',
        path: '/cat/new',
        component: CatAddNew
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router