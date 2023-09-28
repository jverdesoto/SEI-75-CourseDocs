import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFact from '../components/Cat'
import CatNode from '../components/Cats'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: DogsView
    },
    {
        name: 'Cats',
        path: '/cat-facts',
        component: CatFact
    },
    {
        name: 'Cat',
        path: '/cat-front',
        component: CatNode
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