import { createStore } from "vuex";
import getJobs from "@/api/getJobs";

export const LOGIN_USER = "LOGIN_USER";
export const RECEIVE_JOBS = "RECEIVE_JOBS";
export const FATCH_JOBS = "FATCH_JOBS";

//state start___________________

export const state = () => {
  return {
    isLogedIn: false,
    jobs: [],
  };
};

// state end ___________________________

// mutations start __________________

export const mutations = {
  [LOGIN_USER](state) {
    state.isLogedIn ? (state.isLogedIn = false) : (state.isLogedIn = true);
  },
  [RECEIVE_JOBS](state, jobs) {
    state.jobs = jobs;
  },
};

// mutitions end____________

//action start________________

export const actions = {
  [FATCH_JOBS]: async (context) => {
    const jobListings = await getJobs();
    context.commit(RECEIVE_JOBS, jobListings);
  },
};

// action end___________________

const store = createStore({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
