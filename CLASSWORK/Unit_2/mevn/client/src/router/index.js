import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFact from '../components/Cat'
import CatBack from '../components/NodeCat'
import CatPets from '../components/CatName'

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
        name: 'Cats',
        path: '/cat-facts',
        component: CatFact
    },
    {
        name: 'NodeCatFacts',
        path: '/cat-back',
        component: CatBack
    },
    {
        name: 'CatName-db',
        path: '/cat-pet',
        component: CatPets
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router