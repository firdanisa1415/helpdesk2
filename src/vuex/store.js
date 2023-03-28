import { createStore } from "vuex";
import reportModules from "./modules/reportModules";
import userModules from "./modules/userModules";
import epicModules from "./modules/epicModules";
import storyModules from "./modules/storyModules";
import mailModules from "./modules/mailModules";
import rolesModules from "./modules/rolesModules";
import divisiModules from "./modules/divisiModules";
import sprintModules from "./modules/sprintModules";

const store = createStore({
  modules: {
    report: reportModules,
    user: userModules,
    epic:epicModules,
    story:storyModules,
    guest:mailModules,
    roles:rolesModules,
    divisi:divisiModules,
    sprint:sprintModules,

  },
});

export default store;
