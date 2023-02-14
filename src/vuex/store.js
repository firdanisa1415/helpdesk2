import { createStore } from "vuex";
import reportModules from "./modules/reportModules";
import userModules from "./modules/userModules";

const store = createStore({
  modules: {
    report: reportModules,
    user: userModules,
  },
});

export default store;
