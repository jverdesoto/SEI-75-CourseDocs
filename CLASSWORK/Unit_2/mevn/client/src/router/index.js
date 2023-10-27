import{ createWebHistory, createRouter } from 'vue-router'
// import dogsView from '../components/dogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFacts from '../components/Cat'
import nodeCatFacts from '../components/nodeCat'
import CatAddNew from '../components/CatAddNew'
import Library from '../components/Library/Library'
import AddBook from '../components/Library/AddBook'
import AllBooks from '../components/Library/AllBooks'
import Authors from '../components/Library/Authors'
import Author from '../components/Library/Author'
import Book from '../components/Library/Book'
import Editbook from '../components/Library/EditBook'
import LoginForm from '../components/auth/Login'

const routes = [
    {
        name: 'homeVue',
        path: '/',
        component: Library
    },
    {
        name: 'EditBook',
        path: '/EditBook/:id',
        component: Editbook
    },
    {
        name: 'AddNewBook',
        path: '/AddBook',
        component: AddBook
    },
    {
        name: 'AllBooks',
        path: '/AllBooks',
        component: AllBooks
    },
    {
        name: 'Authors',
        path: '/Authors',
        component: Authors
    },
    {
        name: 'Author',
        path: '/Author/:id',
        component: Author
    },
    {
        name: 'Book',
        path: '/Book/:id',
        component: Book
    },
    {
        name: 'Cat',
        path: '/cat-facts',
        component: CatFacts
    },
    {
        name: 'nodeCat',
        path: '/node-cat-facts',
        component: nodeCatFacts
    },
    {
        name: 'Dogs',
        path: '/dogs',
        component: AllDogs    
    },
    {
        name:'Dog',
        path: '/dogs/:id',
        component: SingleDogView
    },
    {
        name: "Addcat",
        path: '/cat/new',
        component: CatAddNew
    },
    {
        name: 'LoginForm',
        path: '/Login',
        component: LoginForm
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router