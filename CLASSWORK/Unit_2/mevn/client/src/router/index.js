import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFact from '../components/Cat'
import CatNode from '../components/Cats'
import FindUser from '../components/user'
import MakeCats from '../components/MakeCat'

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
    },
    {
        name: 'FindUser',
        path: '/user/:user',
        component: FindUser
    },
    {
        name: 'MakeCats',
        path: '/make-cat',
        component: MakeCats
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router