import apiClient from "../../utils/apiClient";
import {
  SET_REPORT,
  DELETE_REPORT,
  UPDATE_REPORT,
  CREATE_REPORT,
  GET_ALL_REPORT,
} from "../constant";

const reportModules = {
  state: {
    reportList: [],
    isLoading: false,
    report: null,
    // judul_laporan: "",
    // isi_laporan: "",
    // harapan: "",
    // product: "",
    // jenis_pelaporan: "",
    // status: "",
    // lampiran: "",
  },
  mutations: {
    [GET_ALL_REPORT](state, reports) {
      state = reports;
    },
    [SET_REPORT](state, payload) {
      state = payload;
    },
    [CREATE_REPORT](state, report) {
      state = report;
    },
    // [UPDATE_REPORT](state, payload) {
    //   const list = [...state.reportData];
    // },
    [DELETE_REPORT](state) {
      state = {};
    },
  },
  actions: {
    async getAllReports({ commit }, payload) {
      await apiClient()
        .get("/api/pelaporan")
        .then((res) => {
          const reports = res?.data?.data;
          commit(GET_ALL_REPORT, reports);
        });
    },
    async createReport({ commit }, payload) {
      await apiClient()
        .post("/api/pelaporan", payload)
        .then((res) => {
          const data = res.data ?? {};
          commit(CREATE_REPORT, data);
        });
    },
  },
};

export default reportModules;
