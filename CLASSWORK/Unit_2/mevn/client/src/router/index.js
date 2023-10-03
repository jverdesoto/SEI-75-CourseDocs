import { createWebHistory, createRouter } from 'vue-router'
// import SingleDogView from '../components/SingleDogView'
// import AllDogs from '../components/Dog'
// import CatFact from '../components/Cat'
import Library from '../components/Library/Library'
import AddBook from '../components/Library/AddBook'
import AllBooks from '../components/Library/AllBooks'
import AllAuthors from '../components/Library/AllAuthors'
import Author from '../components/Library/Author'
import Book from '../components/Library/Book'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Library
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
        name: 'AllAuthors',
        path: '/AllAuthors',
        component: AllAuthors
    },
    {
        name: 'Author',
        path: '/AllAuthors/:id',
        component: Author
    },
    {
        name: 'Book',
        path: '/AllBooks/:id',
        component: Book
    },
    // {
    //     name: 'Dogs',
    //     path: '/dogs',
    //     component: AllDogs
    // },
    // {
    //     name: 'Dog',
    //     path: '/dogs/:id',
    //     component: SingleDogView
    // },
    // {
    //     name: 'Cats',
    //     path: '/cat-facts',
    //     component: CatFact
    // },
    // {
    //     name: 'NodeCatFacts',
    //     path: '/cat-back',
    //     component: CatBack
    // },
    // {
    //     name: 'CatName-db',
    //     path: '/cat-pet',
    //     component: CatPets
    // },
    // {
    //     name: 'GitUser',
    //     path: '/user/:user',
    //     component: GitUser
    // }
    // {
    //     name: 'Github-user-repo',
    //     path: 'repo/:user/:reponame',
    //     component: User
    // }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router;