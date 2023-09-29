import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFact from '../components/CatFact'
import kittyCats from '../components/kittyCats'

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
        name: 'Cat',
        path: '/cat-facts',
        component: CatFact
    },
    {
        name: 'Cats',
        path: '/kitty-cats',
        component: kittyCats
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
