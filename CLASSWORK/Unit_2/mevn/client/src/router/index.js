import { createWebHistory, createRouter } from 'vue-router'
import homeLibrary from '../components/homeLibrary'
import SubmitNewBook from '../components/addbook'
import TitleList from '../components/titlesearch'
import TitleSingle from '../components/titledetails'
import AuthorSingle from '../components/authordetails'
import AuthorList from '../components/authorsearch'
import EditBook from '../components/editbook'
import LoginForm from '../components/auth/login'

const routes = [
	{
        name: 'Home',
        path: '/homeLibrary',
        component: homeLibrary
    },
    {
		name: 'Add a new book to the database',
		path: '/books/add',
		component: SubmitNewBook
	},
	{
		name: 'EditBook',
		path: '/books/edit/:id',
		component: EditBook
	},
	{
		name: 'titleList',
		path:'/books/titlesearch',
		component: TitleList
	},
	{
		name: 'titleDetails',
		path:'/books/titledetails/:id',
		component: TitleSingle
	},
	{
		name:'authorDetails',
		path: '/books/authordetails/:id',
		component: AuthorSingle
	},
	{
		name: 'authorList',
		path: '/books/authorsearch',
		component: AuthorList
	}, 
	{
		name: 'LoginForm',
		path: '/login',
		component: LoginForm
	}
 ]



const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router