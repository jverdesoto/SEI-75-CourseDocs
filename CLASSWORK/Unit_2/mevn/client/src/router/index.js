import { createWebHistory, createRouter } from 'vue-router'
import DogsView from '../components/DogsView'
import SingleDogView from '../components/SingleDogView'
import AllDogs from '../components/Dog'
import CatFact from '../components/CatFact'
import CatFactDouble from '../components/CatFactDouble'
import CatButton from '../components/CatButton'
import CatForm from '../components/CatForm'
import GitHubProfile from '../components/GitHubProfile'
import LibraryHome from '../components/LibraryHome'
import AllBooks from '../components/AllBooks'
import AllAuthors from '../components/AllAuthors'
import SingleBookView from '../components/SingleBookView'
import SingleAuthorView from '../components/SingleAuthorView'
import AddBook from '../components/AddBook'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: CatButton
    },
    {
        name: 'Dogs View',
        path: '/dogs-view',
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
        name: 'Cat Facts',
        path: '/cat-facts',
        component: CatFact
    },
    {
        name: 'Cat Button',
        path: '/cat-button',
        component: CatButton
    },
    {
        name: 'Cat Facts Double Fetch Edition',
        path: '/cat-facts-double',
        component: CatFactDouble
    },
    {
        name: 'Cat Form',
        path: '/cat-form',
        component: CatForm
    },
    {
        name: 'Git Hub Profile',
        path: '/git-hub-profile/:username',
        component: GitHubProfile
    },
    // ! Library application
    {
        name: 'Library Home',
        path: '/library',
        component: LibraryHome
    },
    {
        name: 'Add New Book',
        path: '/library/addbook',
        component: AddBook
    },
    {
        name: 'All Authors',
        path: '/library/author',
        component: AllAuthors
    },
    {
        name: 'All Books',
        path: '/library/title',
        component: AllBooks
    },
    {
        name: 'Single Author View',
        path: '/library/author/:name',
        component: SingleAuthorView
    },
    {
        name: 'Single Book View',
        path: '/library/title/:title',
        component: SingleBookView
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router