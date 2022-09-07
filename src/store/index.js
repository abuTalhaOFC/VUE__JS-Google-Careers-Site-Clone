
import { createStore } from 'vuex'
import getJobs from "@/api/getJobs"


export const LOGIN_USER = "LOGIN_USER"
export const GETJOBS_LIST  = "GETJOBS_LIST"
export const FATCH_JOBS = "FATCH_JOBS"

// state start___________
export const state = () => {
  return {
    isLogedIn: false,
    jobs: [],
  }
}

// state end_____________
// start mutatution__________
export const mutations = {
    [LOGIN_USER](state){
      state.isLogedIn ? state.isLogedIn = false : state.isLogedIn = true
    },
    [GETJOBS_LIST](state, jobs){
          state.jobs = jobs
    },
};
// end mutatution__________
// start action__________
export const actions = {
    [FATCH_JOBS]: async (context) => {
      const jobListings = await getJobs()
      context.commit(GETJOBS_LIST, jobListings)
    }
}

// end actions______________

// start getters _______________

export const getters ={
  UNIQUE_ORGANIZATION: (state) => {

  const uniqueorganization = new Set()
  state.jobs.forEach((job) => uniqueorganization.add(job.organization))
  return uniqueorganization

  }
} 

// end of getters _______________

const store = createStore({
  state, 
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production",
})
export default store;

