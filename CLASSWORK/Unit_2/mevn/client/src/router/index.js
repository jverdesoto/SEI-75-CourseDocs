import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import singleDogView from '../components/singleDogView'
import AllDogs from'../components/Dog'
import CatFacts from '../components/CatFacts'


const routes = [
    {
        name: 'Home',
        path: '/',
        component: DogsView
    },
    {
        name: 'Dog',
        path:'/dogs',
        component: AllDogs
    },
    {
        name: 'Dog',
        path: '/dogs/:id',
        component: singleDogView
    },
    {
        name: 'CatFacts',
        path:'/cat-facts',
        component: CatFacts
    }
    
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router