import { createWebHistory, createRouter } from "vue-router";
import DogsView from "../components/DogsView";
import SingleDogView from "../components/SingleDogView";
import DogList from "../components/Dog";
import FactButton from "../components/FactButton";

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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
