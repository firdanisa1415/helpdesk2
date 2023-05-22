import apiClient from "../../utils/apiClient";
import {
  GET_ALL_ROLES,
} from "../constant";

const rolesModules = {
  state: {
    roleList: [],
    isLoading: false,
    role: null,
  },
  mutations: {
    [GET_ALL_ROLES](state, roles) {
      state.roleList = roles;
    },
  },
  actions: {
    async getAllRoles({ commit }) {
      await apiClient()
        .get(`/api/role`)
        .then((res) => {
          const roles = res?.data?.data;
          commit(GET_ALL_ROLES, roles);
          console.log(roles);
        });
    },
}}
export default rolesModules;