import { createWebHistory, createRouter } from 'vue-router'
// import homeLibrary from '../component/homeLibrary'
import SubmitNewBook from '../components/addbook'
import TitleList from '../components/titlesearch'

const routes = [
	// {
    //     name: 'Home',
    //     path: '/',
    //     component: homeLibrary
    // },
    {
		name: 'Add a new book to the database',
		path: '/books/add',
		component: SubmitNewBook
	},
	{
		name: 'All Book Titles',
		path:'/books/titlesearch',
		component: TitleList
	}
 ]



const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router