import { createRouter, createWebHashHistory } from "vue-router";
import Homeview from "@/views/HomeView.vue"
import JobView from "@/views/JobView.vue"


const routes = [
  {
    path: "/",
    name: "Home",
    component: Homeview
  },
  {
    path: "/job/result",
    name: "JobResult",
    component: JobView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,

})

export default router