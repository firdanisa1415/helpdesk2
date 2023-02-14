import { createStore } from "vuex";
import reportModules from "./modules/reportModules";
import epicModules from "./modules/epicModules";
import storyModules from "./modules/storyModules";

const store = createStore({
  modules: {
    report: reportModules,
    epic:epicModules,
    story:storyModules,
  },
});

export default store;
