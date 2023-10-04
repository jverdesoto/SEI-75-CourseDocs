import { createWebHistory, createRouter } from 'vue-router'
import homeLibrary from '../components/homeLibrary'
import SubmitNewBook from '../components/addbook'
import TitleList from '../components/titlesearch'
import TitleSingle from '../components/titledetails'
import AuthorSingle from '../components/authordetails'
import AuthorList from '../components/authorsearch'

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
	}
 ]



const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router