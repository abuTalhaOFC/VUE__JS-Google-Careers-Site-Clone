import { createRouter, createWebHashHistory } from "vue-router";
// import HomeView from "@/views/HomeView.vue";
// import JobResultsView from "@/views/JobResultsView.vue";

const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () =>
  import(/*webpackChunkName: "jobs"*/ "@/views/JobResultsView.vue");
const JobView = () =>
  import(/*webpackChunkName: "jobs"*/ "@/views/JobView.vue");

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
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
});

export default router;