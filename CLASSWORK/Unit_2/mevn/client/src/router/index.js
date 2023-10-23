import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFacts from '../components/CatFacts'
import MyCatDatabase from '../components/MyCatDatabase'
import FindUser from  '../components/FindUser'
import MattLibrary from '../components/MattLibrary'
import AuthorList from '../components/AuthorList'
import BookList from '../components/BookList'
import BookDetail from '../components/BookDetail'
import AuthorDetail from '../components/AuthorDetail'
import BookUpdate from '../components/BookUpdate'
import LoginForm from '../components/auth/login'

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
        name: 'CatFacts',
        path: '/cat-facts',
        component: CatFacts
    },
    {
        name: 'CatDatabase',
        path: '/cat-database',
        component: MyCatDatabase
    },
    {
        name: 'FindUser',
        path: '/user/:user',
        component: FindUser
    },
    {
        name: 'MattLibrary',
        path: '/library',
        component: MattLibrary
    },
    {
        name: 'AuthorList',
        path: '/library/authors',
        component: AuthorList
    },
    {
        name: 'BookList',
        path: '/library/titles',
        component: BookList
    },
    {
        name: 'BookDetail',
        path: '/library/titles/:title',
        component: BookDetail
    },
    {
        name: 'AuthorDetail',
        path: '/library/authors/:author',
        component: AuthorDetail
    },
    {
        name: 'BookUpdate',
        path: '/library/edit/:title',
        component: BookUpdate
    },
    {
        name: 'LoginForm',
        path: '/login',
        component: LoginForm
    },
    
    

]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router