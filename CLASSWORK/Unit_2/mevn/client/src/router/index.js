import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import GetCatFact from '../components/GetCatFact'
import FactView from '../components/FactView'
import FactViewFronNode from '../components/FactViewFromNode'
import AllCatsView from '../components/AllCatsView'
import AddCatView from '../components/AddCatView'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: GetCatFact
    },
    {
        name: 'A fact',
        path: '/facts',
        component: FactView
    },
    {
        name: 'A fact from node',
        path: '/node/facts',
        component: FactViewFronNode
    },
    {
        name: 'Dog',
        path: '/dogs',
        component: DogsView
    },
    {
        name: 'Dog',
        path: '/dogs/:id',
        component: SingleDogView
    },
    {
        name: 'Cats',
        path: '/cats',
        component: AllCatsView
    },
    {
        name: 'Add Cats',
        path: '/add/cat/',
        component: AddCatView
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router