import { createWebHistory, createRouter } from "vue-router";
import DogsView from "../components/DogsView";
import SingleDogView from "../components/SingleDogView";
import DogList from "../components/Dog";
import FactButton from "../components/FactButton";
import FindUser from "../components/FindUser";
import FindRepos from "../components/FindRepos";
import CatList from "../components/CatList";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
