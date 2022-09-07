import { createApp } from "vue";
import App from "@/App.vue";
import "./assets/tailwind.css";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faSearch,
  faMountainCity,
  faLocationDot,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

// add router
import router from "./router";
// Add vuex store
import store from "./store";

/* add icons to the library */
library.add(faSearch);
library.add(faMountainCity);
library.add(faLocationDot);
library.add(faAngleUp);
library.add(faAngleDown);

createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
