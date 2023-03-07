import { createStore } from "vuex";
import reportModules from "./modules/reportModules";
import userModules from "./modules/userModules";
import epicModules from "./modules/epicModules";
import storyModules from "./modules/storyModules";
import mailModules from "./modules/mailModules";



const store = createStore({
  modules: {
    report: reportModules,
    user: userModules,
    epic:epicModules,
    story:storyModules,
    guest:mailModules,
  },
});

export default store;
