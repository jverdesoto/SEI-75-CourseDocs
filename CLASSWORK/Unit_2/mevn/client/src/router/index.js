import { createWebHistory, createRouter } from 'vue-router'
// import DogsView from '../components/DogsView'
// import SingleDogView from '../components/SingleDogView'
// import AllDogs from '../components/Dog'
// import CatAddNew from '../components/CatAddNew'
import LibraryView from '../components/Library/LibraryView.vue'
import AddNewBook from '../components/Library/AddNewBook.vue'
import EditBook from '../components/Library/EditBook.vue'
import AuthorList from '../components/Library/AuthorList.vue'
import BookList from '../components/Library/BookList.vue'
import SingleBook from '../components/Library/SingleBook.vue'
import SingleAuthor from '../components/Library/SingleAuthor.vue'
import LoginForm from '../components/auth/LoginForm'

const routes = [
   //  {
   //      name: 'Home',
   //      path: '/',
   //      component: DogsView
   //  },
   //  {
   //      name: 'Dog',
   //      path: '/dogs/:id',
   //      component: SingleDogView
   //   },   
   //   {
   //      name: 'Dogs',
   //      path: '/dogs',
   //      component: AllDogs

   //   },
   //   {
   //      name: 'AddCat',
   //      path: '/cat/new',
   //      component: CatAddNew
   //   },
     {
        name: 'LibraryView',
        path: '/books',
        component: LibraryView
     },
     {
        name: 'AddNewBook',
        path: '/books/add',
        component: AddNewBook
     },
     {
      name: 'EditBook',
      path: '/books/edit/:id',
      component: EditBook
   },
     {
      name: 'BookList',
      path: '/books/list',
      component: BookList
   },
   {
      name: 'AuthorList',
      path: '/books/authors',
      component: AuthorList
   },
   {
      name: 'SingleBook',
      path: '/books/list/:id', 
      component: SingleBook,      
    },
    {
      name: 'SingleAuthor',
      path: '/books/authors/:id', 
      component: SingleAuthor,      
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