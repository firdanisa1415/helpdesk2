import apiClient from "../../utils/apiClient";
import {
  GET_ALL_DIVISI,
} from "../constant";

const divisiModules = {
  state: {
    divisiList: [],
    isLoading: false,
    divisi: null,
  },
  mutations: {
    [GET_ALL_DIVISI](state, divisi) {
      state.divisiList = divisi;
    },
  },
  actions: {
    async getAllDivisi({ commit }) {
      await apiClient()
        .get(`/api/divisi`)
        .then((res) => {
          const divisi = res?.data?.data;
          commit(GET_ALL_DIVISI, divisi);
          console.log(divisi);
        });
    },
}}
export default divisiModules;