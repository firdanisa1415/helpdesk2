import apiClient from "../../utils/apiClient";
import {
  SET_STORY,
  DELETE_STORY,
  UPDATE_STORY,
  UPDATE_STORYS,
  CREATE_STORY,
  GET_ALL_STORY,
} from "../constant";

const storyModules = {
  state: {
    storyList: [],
    isLoading: false,
    story: null,
    isUpdating: false,
    updatedData: null,
    // judul_laporan: "",
    // isi_laporan: "",
    // harapan: "",
    // product: "",
    // jenis_pelaporan: "",
    // status: "",
    // lampiran: "",
  },
  mutations: {
    [GET_ALL_STORY](state, storys) {
      state.storyList = storys;
    },
    [SET_STORY](state, payload) {
      state = payload;
    },
    [CREATE_STORY](state, story) {
      state.storyList.push(story);
    },
    [UPDATE_STORY](state, story) {
      state.storyList.push(story);
    },
    [UPDATE_STORYS](state, payload) {
      state.storyList.push(payload);
    },
    [DELETE_STORY](state, payload) {
      state.storyList.push(payload);
    },
  },
  actions: {
    async getAllStories({ commit }) {
      await apiClient()
        .get("/api/story")
        .then((res) => {
          const story = res?.data?.data;
          commit(GET_ALL_STORY, story);
          console.log(story);
        });
    },
    async createstory({ commit }, payload) {
      await apiClient()
        .post("/api/story", payload)
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
          commit(CREATE_STORY, data);
        });
    },
    async updatestory({ commit }, payload) {
      await apiClient()
        .put("/api/story/{id}", payload)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(UPDATE_STORY, data);
        });
    },
    async deletestory({ commit }, payload) {
      await apiClient()
      .delete("/api/story/{id}", payload)
      .then((res) => {
        const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(DELETE_STORY, data);
      })
    }
  }
}
export default storyModules;
