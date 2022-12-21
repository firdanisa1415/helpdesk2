import { createStore } from "vuex";
import reportModules from "./modules/reportModules";

const store = createStore({
  modules: {
    report: reportModules,
  },
});

export default store;
