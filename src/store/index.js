import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isLogedIn: false,
    };
  },
  mutations: {
    LOGIN_USER(state) {
      state.isLogedIn = true;
    },
    LOGOUT_USER(state) {
      state.isLogedIn = false;
    },
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
