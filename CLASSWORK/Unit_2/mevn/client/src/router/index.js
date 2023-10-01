import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import singleDogView from '../components/singleDogView'
import AllDogs from'../components/Dog'
import CatFacts from '../components/CatFacts'


const routes = [
    {
        name: 'Hodfdsme',
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
const constants={
    hostname: 'api.github.com',
    user_agent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36',
    error_message:'Oops! Something went wrong!'
}

module.exports=constants


const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router