import { createWebHistory, createRouter } from 'vue-router'
import booksLibrary from '../components/Library.vue'
import newBooks from '../components/Library-newBooks.vue'
import authorLibrary from '../components/Library-author.vue'
import bookTitles from '../components/Library-title.vue'
import editBook from '../components/EditBook.vue'
import bookDetails from '../components/bookDetails.vue'
// import AuthorBooks from '../components/AuthorBooks.vue'


const routes = [
    {
        name: 'Library',
        path: '/library',
        component: booksLibrary
    },
    {
        name: 'LibraryBook',
        path: '/library/book/:id',
        component: bookDetails,
        props: true
    },
    {
        name: 'Library-newBook',
        path: '/library/newBooks',
        component: newBooks
    },
    {
        name: 'Authors',
        path: '/library/authors',
        component: authorLibrary,
    },
            // {
            // name: 'Author Books',
            // path: '/library/authors/:author',
            // component: AuthorBooks
            // },
    
    {
        name: 'Title Shortlist',
        path: '/library/titles',
        component: bookTitles
    },
    {
        name: 'EditBook',
        path: '/library/editBook',
        component: editBook
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
