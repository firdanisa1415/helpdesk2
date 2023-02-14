import { createStore } from "vuex";
import reportModules from "./modules/reportModules";
import userModules from "./modules/userModules";
import epicModules from "./modules/epicModules";
import storyModules from "./modules/storyModules";


const store = createStore({
  modules: {
    report: reportModules,
    user: userModules,
    epic:epicModules,
    story:storyModules,
  },
});

export default store;
