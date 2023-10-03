import { createWebHistory, createRouter } from 'vue-router'
import dogsView from '../components/dogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFacts from '../components/CatFacts'
import AddCatForm from "../components/CatAddNew"




const routes = [
    {
        name: 'Home',
        path: '/',
        component: dogsView
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
        name: 'CatFacts',
        path: '/CatFacts',
        component: CatFacts
    },
    {
        name: "AddNewCatPage",
        path: "/cat/new",
        component:AddCatForm
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router