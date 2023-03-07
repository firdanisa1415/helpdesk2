import apiClient from "../../utils/apiClient";
import { convertToEncodedURL } from "../../utils/usefulFunctions";
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
  },
  mutations: {
    [GET_ALL_STORY](state, story) {
      state.storyList = story;
    },
    [SET_STORY](state, payload) {
      state = payload;
    },
    [CREATE_STORY](state, story) {
      state.storyList.push(story);
    },
    [UPDATE_STORY](state, story) {
      let index = state.storyList.findIndex(
        (item) => item.id_story === story.id_story
      );
      state.storyList.splice(index, 1, story);
    },
    [UPDATE_STORYS](state, payload) {
      state.storyList.push(payload);
    },
    [DELETE_STORY](state, payload) {
      const index = state.storyList.findIndex(
        (post) => post.id_story === payload
      );
      state.storyList.splice(index, 1);
    },
  },
  actions: {
    async getAllStories({ commit }, obj) {
      let params = "";
      if (obj) {
        params = convertToEncodedURL(obj);
        params = params.length ? "?" + params : "";
      }
      await apiClient()
        .get(`/api/story` + params)
        .then((res) => {
          const story = res?.data?.data;
          commit(GET_ALL_STORY, story);
          console.log(story);
        });
    },
    async createStory({ commit }, { epic_id, ...rest }) {
      await apiClient()
        .post(`/api/story/${epic_id}`, rest)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(CREATE_STORY, data);
        });
    },
    async updateStory({ commit }, { id_story, ...rest }) {
      await apiClient()
        .put(`/api/story/${id_story}`, rest)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(UPDATE_STORY, data);
        });
    },
    async deleteStories({ commit }, payload) {
      await apiClient()
        .delete(`/api/story/${payload}`)
        .then((res) => {
          const { status: statusDariBackend, data: dataDariBackend } = res.data;
          console.log(statusDariBackend);
          const data = dataDariBackend ?? {};
          commit(DELETE_STORY, data);
        });
    },
  },
};
export default storyModules;
