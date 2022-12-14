import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import JobResultsView from "@/views/JobResultsView.vue";

const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () =>
  import(/*webpackChunkName: "jobs"*/ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/*webpackChunkName: "jobs"*/ "@/views/JobView.vue");
const TeamsView = () => import("@/views/TeamsView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/teams",
    name: "Teames",
    component: TeamsView,
  },
  {
    path: "/job/result",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/job/result/:id",
    neme: "JobView",
    component: JobView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" };
  },
});

export default router;
