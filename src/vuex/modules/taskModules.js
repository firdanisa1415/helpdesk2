import apiClient from "../../utils/apiClient";
import { DELETE_TASK, CREATE_TASK, GET_ALL_TASK } from "../constant";

const taskModules = {
  state: {
taskList: [],
    isLoading: false,
    task: null,
    isUpdating: false,
    updatedData: null,
  },
  mutations: {
    [GET_ALL_TASK](state, task) {
      state.taskList = task;
    },
    [CREATE_TASK](state, task) {
      state.taskList.push(task);
    },
    [DELETE_TASK](state, payload) {
      const index = state.taskList.findIndex((post) => post.id_tugas === payload);
      state.taskList.splice(index, 1);
    },
  },
  actions: {
    async getTask({ commit }) {
      await apiClient()
        .get(`/api/tugas`)
        .then((res) => {
          const task = res?.data?.data;
          commit(GET_ALL_TASK, task);
          console.log(task);
        });
    },

    async createTask({ commit }, { story_id, ...rest }) {
      await apiClient()
        .post(`/api/tugas/${story_id}`, rest)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(CREATE_TASK, data);
        });
    },
    async deleteTask({ commit }, payload) {
      await apiClient()
        .delete(`/api/tugas/${payload}`)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(DELETE_TASK, data);
        });
    },
  },
};
export default taskModules;
