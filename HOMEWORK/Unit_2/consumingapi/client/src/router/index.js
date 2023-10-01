import { createWebHistory, createRouter } from 'vue-router'
import UsersView from '../components/UsersView'
import SingleUserView from '../components/SingleUserView'
import UserReposListView from '../components/UserReposListView'

const routes = [
    {
        name: 'Users',
        path: '/',
        component: UsersView
    },
    {
        name: 'A User',
        path: '/users/:id',
        component: SingleUserView
    },
    {
        name: 'A User Repository',
        path: '/users/:id/repos',
        component: UserReposListView
    }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router