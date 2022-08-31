import { createRouter, createWebHashHistory } from "vue-router";
// import Homeview from "@/views/HomeView.vue"
// import JobResultView from "@/views/JobResultView.vue"
// import JobView from "@/views/JobView.vue"
const HomeView = () => import("@/views/HomeView.vue")
const JobResultView = () => import(/*webpackChunkName: "jobs"*/"@/views/JobResultView.vue")
const JobView = () => import(/*webpackChunkName: "jobs"*/"@/views/JobView.vue")


const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView
  },
  {
    path: "/job/result",
    name: "JobResult",
    component: JobResultView

  },
  {
    path: "/job/result/:id",
    name: "JobView",
    component: JobView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(){
    return {top: 0, left: 0,  behavior: 'smooth',}
  }

})

export default router