import apiClient from "../../utils/apiClient";
import { SET_SPRINT, DELETE_SPRINT, CREATE_SPRINT, GET_ALL_SPRINT } from "../constant";

const sprintModules = {
  state: {
    sprintList: [],
    isLoading: false,
    sprint: null,
  },
  mutations: {
    [GET_ALL_SPRINT](state, sprint) {
      state.sprintList = sprint;
    },
    [SET_SPRINT](state, payload) {
      state = payload;
    },
    [CREATE_SPRINT](state, sprint) {
      state.sprintList.push(sprint);
    },
    [DELETE_SPRINT](state, payload) {
      const index = state.sprintList.findIndex((post) => post.id_sprint === payload);
      state.sprintList.splice(index, 1);
    },
  },
  actions: {
    async getAllSprint({ commit }) {
      await apiClient()
        .get("/api/sprint")
        .then((res) => {
          const sprint = res?.data?.data;
          commit(GET_ALL_SPRINT, sprint);
          console.log(sprint);
        });
    },
    async createSprint({ commit }, payload) {
      await apiClient()
        .post("/api/sprint", payload)
        .then((res) => {
          /**
           * @todo Perlu cek bentukan data di create pelaporan controller.
           * @argument
           * {
           *    status: "success",
           *    data: {...newPelaporan}
           * }
           * @example brarti kalau di frontend nya harus mengikuti BE ditambah pakai argumentnya dari axios (res.data).
           * @example Misal bentukan existing di BE, kita mau set data barunya. Jadi tinggal response.data.data;
           *
           */
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(CREATE_SPRINT, data);
        });
    },
    async deleteSprint({ commit }, payload) {
      await apiClient()
        .delete(`/api/sprint/${payload}`)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(DELETE_SPRINT, data);
        });
    },
  },
};
export default sprintModules;
