import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFactButton from '../components/CatFactButton'
import CatSubmitter from '../components/CatSubmitter'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: DogsView
    },
    {
        name: 'Dogs',
        path: '/dogs/',
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
        component: CatFactButton
    },
    {
        name: 'Cats',
        path: '/cats',
        component: CatSubmitter
    },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router