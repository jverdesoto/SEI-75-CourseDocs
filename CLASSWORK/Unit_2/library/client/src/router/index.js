import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../components/HomeView'
import AddBookView from '../components/AddBookView'
import AllBooksView from '../components/AllBooksView'
import AllAuthorsView from '../components/AllAuthorsView'
import SingleAuthorView from '../components/SingleAuthorView'
import SingleBookView from '../components/SingleBookView'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: HomeView
    },
    {
        name: 'All Books',
        path: '/books',
        component: AllBooksView
    },
    {
        name: 'A Book',
        path: '/books/:id',
        component: SingleBookView
    },
    {
        name: 'Add Or Edit Book',
        path: '/books/addOrUpdate/:id',
        component: AddBookView
    },
    {
        name: 'All Authors',
        path: '/authors',
        component: AllAuthorsView
    },
    {
        name: 'An Author',
        path: '/authors/:id',
        component: SingleAuthorView
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router