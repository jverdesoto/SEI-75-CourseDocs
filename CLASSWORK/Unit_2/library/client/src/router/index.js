import { createWebHistory, createRouter } from 'vue-router'
import HomeView from '../components/HomeView'
import AddBookView from '../components/AddBookView'
import AllBooksView from '../components/AllBooksView'
import AllAuthorsView from '../components/AllAuthorsView'

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
        name: 'Add Book',
        path: '/books/add',
        component: AddBookView
    },
    {
        name: 'All Authors',
        path: '/authors',
        component: AllAuthorsView
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router