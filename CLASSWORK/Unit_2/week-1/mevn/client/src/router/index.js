import { createWebHistory, createRouter } from 'vue-router'
import dogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFacts from '../components/CatFacts'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: dogsView
    },
    {
        name: 'Cats',
        path: '/cat-facts',
        component: CatFacts
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router