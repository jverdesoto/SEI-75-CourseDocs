import { createWebHistory, createRouter } from 'vue-router'
import booksLibrary from '../components/Library.vue'
import newBooks from '../components/Library-newBooks.vue'
import authorLibrary from '../components/Library-author.vue'
import bookTitles from '../components/Library-title.vue'

const routes = [
    {
        name: 'Library',
        path: '/library',
        component: booksLibrary
    },
    {
        name: 'Library-newBook',
        path: '/library/newBooks',
        component: newBooks
    },
    {
        name: 'Autor Shortlist',
        path: '/library/author',
        component: authorLibrary
    },
    {
        name: 'Title Shortlist',
        path: '/library/title',
        component: bookTitles
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
