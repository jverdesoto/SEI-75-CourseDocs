import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFactButton from '../components/CatFactButton'
import CatSubmitter from '../components/CatSubmitter'
import LibraryHome from '../components/LibraryHome'
import LibraryForm from '../components/LibraryForm'
import BookList from '../components/BookList'
import AuthorList from '../components/AuthorList'
import JustOneAuthor from '../components/JustOneAuthor'
import JustOneBook from '../components/JustOneBook'
import EditBook from '../components/EditBook'

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
        name: 'Cat',
        path: '/cat-facts',
        component: CatFactButton
    },
    {
        name: 'Cats',
        path: '/cats/new',
        component: CatSubmitter
    },
    {
        name: 'Library',
        path: '/library',
        component: LibraryHome
    },
    {
        name: 'libraryAuthorList',
        path: '/library/author',
        component: AuthorList
    },
    {
        name: 'libraryBookList',
        path: '/library/book',
        component: BookList
    },
    {
        name: 'libraryBookAdd',
        path: '/library/book/add',
        component: LibraryForm
    },
    {
        name: 'librayEditBook',
        path: '/library/book/edit/:id',
        component: EditBook
    },
    {
        name: 'libraryOneAuthorView',
        path: '/library/author/:id',
        component: JustOneAuthor
    },
    {
        name: 'libraryOneBookView',
        path: '/library/book/:id',
        component: JustOneBook
    },
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router