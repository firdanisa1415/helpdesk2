import apiClient from "../../utils/apiClient";
import {
  SET_EPIC,
  DELETE_EPIC,
  UPDATE_EPIC,
  UPDATE_EPICS,
  CREATE_EPIC,
  GET_ALL_EPIC,
} from "../constant";

const epicModules = {
  state: {
    epicList: [],
    isLoading: false,
    epic: null,
    isUpdating: false,
    updatedData: null,
  },
  mutations: {
    [GET_ALL_EPIC](state, epics) {
      state.epicList = epics;
    },
    [SET_EPIC](state, payload) {
      state = payload;
    },
    [CREATE_EPIC](state, epic) {
      state.epicList.push(epic);
    },
    [UPDATE_EPIC](state, payload) {
      let index = state.epicList.findIndex(
        (item) => item.id_epic === payload.id_epic
      );
      state.epicList.splice(index, 1, payload);
    },
    [UPDATE_EPICS](state, payload) {
      state.epicList.push(payload);
    },
    [DELETE_EPIC](state, payload) {
      const index = state.epicList.findIndex(
        (post) => post.id_epic === payload
      );
      state.epicList.splice(index, 1);
    },
  },
  actions: {
    async getAllEpics({ commit }) {
      await apiClient()
        .get(`/api/epic`)
        .then((res) => {
          const epics = res?.data?.data;
          commit(GET_ALL_EPIC, epics);
          console.log(epics);
        });
    },

    async createEpic({ commit }, payload) {
      await apiClient()
        .post(`/api/epic`, payload)
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
          commit(CREATE_EPIC, data);
        });
    },
    async updateEpic({ commit }, { id_epic, ...rest }) {
      await apiClient()
        .put(`/api/epic/${id_epic}`, rest)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(UPDATE_EPIC, data);
        });
    },
    async deleteEpics({ commit }, payload) {
      await apiClient()
      .delete(`/api/epic/${payload}`)
      .then((res) => {
        const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(DELETE_EPIC, data);
      })
    }
  }
}
export default epicModules;