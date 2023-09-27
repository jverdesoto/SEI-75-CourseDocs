import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFact from '../components/CatFact'
import CatFactDouble from '../components/CatFactDouble'
import CatButton from '../components/CatButton'

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
        name: 'Cat Facts',
        path: '/cat-facts',
        component: CatFact
    },
    {
        name: 'Cat Button',
        path: '/cat-button',
        component: CatButton
    },
    {
        name: 'Cat Facts Double Fetch Edition',
        path: '/cat-facts-double',
        component: CatFactDouble
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router