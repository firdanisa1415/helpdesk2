import { createStore } from "vuex";
import reportModules from "./modules/reportModules";
import userModules from "./modules/userModules";
import epicModules from "./modules/epicModules";
import storyModules from "./modules/storyModules";
import rolesModules from "./modules/rolesModules";
import divisiModules from "./modules/divisiModules";
import sprintModules from "./modules/sprintModules";
import taskModules from "./modules/taskModules";


const store = createStore({
  modules: {
    report: reportModules,
    user: userModules,
    epic:epicModules,
    story:storyModules,
    roles:rolesModules,
    divisi:divisiModules,
    sprint:sprintModules,
    task: taskModules,
  },
});

export default store;
