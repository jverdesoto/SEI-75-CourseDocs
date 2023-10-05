import { createWebHistory, createRouter } from "vue-router";
import DogsView from "../components/DogsView";
import SingleDogView from "../components/SingleDogView";
import DogList from "../components/Dog";
import FactButton from "../components/FactButton";
import FindUser from "../components/FindUser";
import FindRepos from "../components/FindRepos";
import CatList from "../components/CatList";
import LibraryHome from "../components/library/LibraryHome";
import Authors from "../components/library/Authors";
import Titles from "../components/library/Titles";
import AuthorsBooks from "../components/library/AuthorsBooks";
import TitleDetails from "../components/library/TitleDetails";
import UpdateTitle from "../components/library/UpdateTitle";

const routes = [
  {
    name: "Home",
    path: "/",
    component: DogsView,
  },
  {
    name: "DogList",
    path: "/dogs",
    component: DogList,
  },
  {
    name: "Dog",
    path: "/dogs/:id",
    component: SingleDogView,
  },
  {
    name: "CatFact",
    path: "/cat-facts",
    component: FactButton,
  },
  {
    name: "FindUser",
    path: "/user/:user",
    component: FindUser,
  },
  {
    name: "FindReops",
    path: "/repo/:user/:reponame",
    component: FindRepos,
  },
  {
    name: "CatList",
    path: "/cats",
    component: CatList,
  },
  {
    name: "LibraryHome",
    path: "/library",
    component: LibraryHome,
  },
  {
    name: "Authors",
    path: "/library/author",
    component: Authors,
  },
  {
    name: "Titles",
    path: "/library/title",
    component: Titles,
  },
  {
    name: "AuthorsBooks",
    path: "/library/author/:name",
    component: AuthorsBooks,
  },
  {
    name: "TitleDetails",
    path: "/library/title/:title",
    component: TitleDetails,
  },
  {
    name: "UpdateTitle",
    path: "/library/title/update/:title",
    component: UpdateTitle,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
