import apiClient from "../../utils/apiClient";
import {
  SET_REPORT,
  // DELETE_REPORT,
  UPDATE_REPORT,
  UPDATE_REPORTS,
  CREATE_REPORT,
  GET_ALL_REPORT,
  DELETE_REPORT,
} from "../constant";

const reportModules = {
  state: {
    reportList: [],
    isLoading: false,
    report: null,
    isUpdating: false,
    updatedData: null,
  },
  mutations: {
    [GET_ALL_REPORT](state, reports) {
      state.reportList = reports;
    },
    [SET_REPORT](state, payload) {
      state = payload;
    },
    [CREATE_REPORT](state, report) {
      state.reportList.push(report);
    },
    [UPDATE_REPORT](state, payload) {
      let index = state.reportList.findIndex(
        (item) => item.id === payload.id
      );
      state.reportList.splice(index, 1, payload);
    },
    [UPDATE_REPORTS](state, payload) {
      state.reportList.push(payload);
    },
    [DELETE_REPORT](state, payload) {
      const index = state.reportList.findIndex(
        (post) => post.id_pelaporan === payload
      );
      state.reportList.splice(index, 1);
    },
  },
  actions: {
    async getAllReports({ commit }) {
      await apiClient()
        .get("/api/pelaporan")
        .then((res) => {
          const reports = res?.data?.data;
          commit(GET_ALL_REPORT, reports);
          console.log(reports);
        });
    },
    async createReport({ commit }, payload) {
      await apiClient()
        .post(`/api/pelaporan`, payload)
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
          commit(CREATE_REPORT, data);
        });
    },
    async updateReport({ commit }, { id, ...rest }) {
      await apiClient()
        .put(`/api/pelaporan/${id}`, rest)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(UPDATE_REPORT, data);
        });
    },
    async deleteReport(_, payload) {
      await apiClient()
        .delete("/api/pelaporan/{id}", payload)
        .then(() => {});
    },
  },
};

export default reportModules;