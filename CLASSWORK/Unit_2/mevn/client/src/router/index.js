import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/animals/DogsView'
import SingleDogView from '../components/animals/SingleDogView'
import AllDogs from '../components/animals/Dog'
import CatFacts from '../components/animals/CatFacts'
import CatAddNew from '../components/animals/CatAddNew'
import LibrayView from '../components/library/LibrayView'
import NewBook from '../components/library/NewBook'
import AuthorList from '../components/library/AuthorList'
import BookList from '../components/library/BookList'
import SingleBook from '../components/library/SingleBook'
import SingleAuthor from '../components/library/SingleAuthor'
import EditBook from '../components/library/EditBook'
import LoginForm from '../components/auth/Login'

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
        name: 'AddCat',
        path: '/cat/new',
        component: CatAddNew
    },
    {
        name: 'LibrayHome',
        path: '/library',
        component: LibrayView
    },
    {
        name: 'LibrayNewBook',
        path: '/library/book/new',
        component: NewBook
    },
    {
        name: 'LibrayAuthorList',
        path: '/library/author',
        component: AuthorList
    },
    {
        name: 'LibrayBookList',
        path: '/library/book',
        component: BookList
    },
    {
        name: 'LibrayBookSingle',
        path: '/library/book/:id',
        component: SingleBook
    },
    {
        name: 'LibrayAuthorSingle',
        path: '/library/author/:id',
        component: SingleAuthor
    },
    {
        name: 'LibrayBookEdit',
        path: '/library/book/edit/:id',
        component: EditBook
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