import apiClient from "../../utils/apiClient";
import { SET_REPORT, DELETE_REPORT } from "../constant";

const reportModules= {
  state: {
    judul_laporan: "",
    isi_laporan: "",
    harapan: "",
    product: "",
    jenis_pelaporan: "",
    status: "",
    lampiran: ""
    },
  mutations: {
    [SET_REPORT](state, payload) {
      state = payload;
    },
    [DELETE_REPORT](state) {
      state = {};
    },
  },
  actions: {
    async createReport({ commit }, payload) {
      await apiClient()
        .post("/api/pelaporan")
        .then(async () => {
          commit(SET_REPORT,)
        });
    },
}
};

export default reportModules;