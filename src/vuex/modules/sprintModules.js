import apiClient from "../../utils/apiClient";
import { SET_SPRINT, UPDATE_SPRINT,
  UPDATE_SPRINTS,DELETE_SPRINT, CREATE_SPRINT, GET_ALL_SPRINT } from "../constant";

const sprintModules = {
  state: {
    sprintList: [],
    isLoading: false,
    sprint: null,
    isUpdating: false,
    updatedData: null,
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
    [UPDATE_SPRINT](state, payload) {
      let index = state.sprintList.findIndex(
        (item) => item.id_sprint === payload.id_sprint
      );
      state.sprintList.splice(index, 1, payload);
    },
    [UPDATE_SPRINTS](state, payload) {
      state.sprintList.push(payload);
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
    async updateSprint({ commit }, { id_sprint, ...rest }) {
      await apiClient()
        .put(`/api/sprint/${id_sprint}`, rest)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(UPDATE_SPRINT, data);
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
