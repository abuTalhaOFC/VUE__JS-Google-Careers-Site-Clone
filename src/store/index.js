import { createStore } from "vuex";

export const LOGIN_USER = "LOGIN_USER";

export const state = () => {
  return {
    isLogedIn: false,
  };
};
export const mutations = {
  [LOGIN_USER](state) {
    state.isLogedIn ? (state.isLogedIn = false) : (state.isLogedIn = true);
  },
};

const store = createStore({
  state,
  mutations,
  strict: process.env.NODE_ENV !== "production",
});

export default store;
