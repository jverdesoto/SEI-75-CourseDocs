import { createWebHistory, createRouter } from 'vue-router'
import dogsView from '../components/dogsView'
import singleDogView from '../components/singleDogView'
import AllDogs from '../components/dog'
import catFacts from '../components/catFacts'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: dogsView
    },
    {
        name: 'Dog',
        path: '/dogs/:id',
        component: singleDogView
    },
    {
        name: 'Dogs',
        path: '/dogs',
        component: AllDogs

    },
    {
        name: 'CatFacts',
        path: '/cat-facts',
        component: catFacts
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router