import apiClient from "../../utils/apiClient";
import {
  SET_GUEST,
  UPDATE_GUEST,
  UPDATE_GUESTS,
  CREATE_GUEST,
  GET_ALL_GUEST,
  DELETE_GUEST,
} from "../constant";

const mailModules = {
  state: {
    guestList: [],
    isLoading: false,
    guest: null,
    isUpdating: false,
    updatedData: null,
  },
  mutations: {
    [GET_ALL_GUEST](state, guests) {
      state.guestList = guests;
    },
    [SET_GUEST](state, payload) {
      state = payload;
    },
    [CREATE_GUEST](state, guest) {
      state.guestList.push(guest);
    },
    [UPDATE_GUEST](state, payload) {
      let index = state.guestList.findIndex(
        (item) => item.id === payload.id
      );
      state.guestList.splice(index, 1, payload);
    },
    [UPDATE_GUESTS](state, payload) {
      state.guestList.push(payload);
    },
    [DELETE_GUEST](state, payload) {
      const index = state.guestList.findIndex(
        (post) => post.id === payload
      );
      state.guestList.splice(index, 1);
    },
  },
  actions: {
    // async getAllGuests({ commit }) {
    //   await apiClient()
    //     .get(`/api/pelaporan`)
    //     .then((res) => {
    //       const reports = res?.data?.data;
    //       commit(GET_ALL_REPORT, reports);
    //       console.log(reports);
    //     });
    // },
    async createGuest({ commit }, payload) {
      await apiClient()
        .post(`/api/send-email`, payload)
        .then((res) => {
          /**
           * @todo Perlu cek bentukan data di create pelaporan controller.
           * @argument
           * {
           *    status: "success",
           *    data: ...newGuest
           * }
           * @example brarti kalau di frontend nya harus mengikuti BE ditambah pakai argumentnya dari axios (res.data).
           * @example Misal bentukan existing di BE, kita mau set data barunya. Jadi tinggal response.data.data;
           *
           */
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(CREATE_GUEST, data);
        });
    },
    // async updateReport({ commit }, { id_pelaporan, ...rest }) {
    //   await apiClient()
    //     .put(`/api/pelaporan/${id_pelaporan}`, rest)
    //     .then((res) => {
    //       const { status: statusDariBackend, data: dataDariBackend } = res.data;
    //       console.log(statusDariBackend);
    //       const data = dataDariBackend ?? {};
    //       commit(UPDATE_REPORT, data);
    //     });
    // },
    // async deleteReport({commit}, payload) {
    //   await apiClient()
    //     .delete(`/api/pelaporan/${payload}`)
    //     .then((res) => {
    //       const { status: statusDariBackend, data: dataDariBackend } = res.data;
    //       console.log(statusDariBackend);
    //       const data = dataDariBackend ?? {};
    //       commit(DELETE_REPORT, data);
    //     });
    // },
  },
};

export default mailModules;