import apiClient from "../../utils/apiClient";
import {
  SET_REPORT,
  // DELETE_REPORT,
  UPDATE_REPORT,
  UPDATE_REPORTS,
  CREATE_REPORT,
  GET_ALL_REPORT,
  DELETE_REPORT,
  GET_MONTHLY_REPORT,
  GET_STATUS_REPORT,
  GET_PRODUCT_REPORT,
  GET_PIC_REPORT,
} from "../constant";

const reportModules = {
  state: {
    reportList: [],
    monthlyList: [],
    statusList: [],
    productList: [],
    picList: [],
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
      let index = state.reportList.findIndex((item) => item.id === payload.id);
      state.reportList.splice(index, 1, payload);
    },
    [UPDATE_REPORTS](state, payload) {
      state.reportList.push(payload);
    },
    [DELETE_REPORT](state, payload) {
      const index = state.reportList.findIndex((post) => post.id_pelaporan === payload);
      state.reportList.splice(index, 1);
    },
    [GET_MONTHLY_REPORT](state, monthly) {
      state.monthlyList = monthly;
    },
    [GET_STATUS_REPORT](state, status) {
      state.statusList = status;
    },
    [GET_PRODUCT_REPORT](state, product) {
      state.productList = product;
    },
    [GET_PIC_REPORT](state, pic) {
      state.picList = pic;
    },
  },
  actions: {
    async getAllReports({ commit }) {
      await apiClient()
        .get(`/api/pelaporan`)
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
          const { status: statusDariBackend, data: dataDariBackend, file_url } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          data.file_url = file_url;
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
    async deleteReport({ commit }, payload) {
      await apiClient()
        .delete(`/api/pelaporan/${payload}`)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(DELETE_REPORT, data);
        });
    },
    async getMonthlyReports({ commit }) {
      await apiClient()
        .get(`/api/bulan`)
        .then((res) => {
          const monthly = res?.data;
          commit(GET_MONTHLY_REPORT, monthly);
          console.log("monthly", res?.data);
        });
    },
    async getStatusReports({ commit }) {
      await apiClient()
        .get(`/api/status`)
        .then((res) => {
          const status = res?.data;
          commit(GET_STATUS_REPORT, status);
          console.log("status", res?.data);
        });
    },
    async getProductReports({ commit }) {
      await apiClient()
        .get(`/api/product`)
        .then((res) => {
          const product = res?.data;
          commit(GET_PRODUCT_REPORT, product);
          console.log("product", res?.data);
        });
    },
    async getPicReports({ commit }) {
      await apiClient()
        .get(`/api/pic`)
        .then((res) => {
          const pic = res?.data;
          commit(GET_PIC_REPORT, pic);
          console.log("pic", res?.data);
        });
    },
  },
};

export default reportModules;
