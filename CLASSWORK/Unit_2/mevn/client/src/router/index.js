import { createWebHistory, createRouter } from 'vue-router'
import dogsView from '../components/dogsView'
import singleDogView from '../components/singleDogView'
import AllDogs from '../components/dog'
import catFacts from '../components/catFacts'
import catsList from '../components/catsList'
import gitHubUser from '../components/gitHubUser'
import gitHubRepos from '../components/gitHubRepos'
import addNewBook from '../components/library/addNewBook'
import allBooks from '../components/library/allBooks'
import allAuthors from '../components/library/allAuthors'
import singleAuthor from '../components/library/singleAuthor'
import singleBook from '../components/library/singleBook'
import landingPage from '../components/library/landingPage'
import editBook from '../components/library/editBook'
import loginPage from '../components/authentication/loginPage'

const routes = [
    {
        name: 'Home',
        path: '/',
        component: dogsView
    },
    {
        name: 'Dog',
        path: '/dogs/:id',
        component: singleDogView
    },
    {
        name: 'Dogs',
        path: '/dogs',
        component: AllDogs

    },
    {
        name: 'CatFacts',
        path: '/cat-facts',
        component: catFacts
    },
    {
        name: 'CatsList',
        path: '/cats',
        component: catsList
    },
    {
        name: 'GitHubUser',
        path: '/user/:user',
        component: gitHubUser
    },
    {
        name: 'GitHubRepos',
        path: '/repos/:user/:reponame',
        component: gitHubRepos
    },  
    {
        name: 'addNewBook',
        path: '/library/addnewbook',
        component: addNewBook
    }, 
    {
        name: 'allBooks',
        path: '/library/books',
        component: allBooks
    },
    {
        name: 'allAuthors',
        path: '/library/authors',
        component: allAuthors
    }, 
    {
        name: 'singleAuthor',
        path: '/library/authors/:id',
        component: singleAuthor
    }, 
    {
        name: 'singleBook',
        path: '/library/books/:id',
        component: singleBook
    },
    {
        name: 'landingPage',
        path: '/library',
        component: landingPage
    }, 
    {
        name: 'editBook',
        path: '/library/books/editbook/:id',
        component: editBook
    }, 
    {
        name: 'loginPage',
        path: '/library/login',
        component: loginPage
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router