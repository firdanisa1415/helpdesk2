import apiClient from "../../utils/apiClient";
import CookieHandler from "../../utils/cookieHandler";
import { DELETE_USER, SET_IS_LOADING, SET_USER, UPDATE_USER, GET_ALL_USER, LOGOUT_USER, GET_ALL_OPERATOR } from "../constant";
const cookieHandler = new CookieHandler();
const userModules = {
  state: {
    data: null,
    users: [],
    isSubmitting: false,
    operatorList: [],
  },
  mutations: {
    [GET_ALL_USER](state, user) {
      state.users = user;
    },
    [SET_IS_LOADING](state, payload) {
      state.isSubmitting = payload;
    },
    [SET_USER](state, payload) {
      state.data = payload;
    },
    [DELETE_USER](state, payload) {
      const index = state.users.findIndex((post) => post.nrp === payload);
      state.users.splice(index, 1);
    },
    [UPDATE_USER](state, payload) {
      const index = state.users.findIndex((item) => item.nrp === payload.nrp);
      state.users.splice(index, 1, payload);
    },
    [LOGOUT_USER](state) {
      state.data = null;
    },
    [GET_ALL_OPERATOR](state, operator) {
      state.operatorList = operator;
    },
  },
  actions: {
    async getAllUser({ commit }, params) {
      await apiClient()
        .get("api/user", {
          params,
        })
        .then(async (res) => {
          const user = res?.data?.data;
          await commit(GET_ALL_USER, user);
        });
    },
    async getAllOperator({ commit }) {
      await apiClient()
        .get(`/api/operator`)
        .then((res) => {
          const operator = res?.data?.data;
          commit(GET_ALL_OPERATOR, operator);
          console.log(operator);
        });
    },
    async getUser({ commit }, params) {
      const token = cookieHandler.get("token");
      try {
        const res = await apiClient().get("api/user", {
          params,
        });
        const responseUser = res.data.data[0];
        if (responseUser) {
          const userData = {
            user: responseUser,
            token,
          };
          const storedUserCookies = {
            token: token,
            nama_karyawan: userData.user.nama_karyawan,
            nrp: userData.user.nrp,
          };
          cookieHandler.store(storedUserCookies, {
            sameSite: true,
          });
          await commit(SET_USER, userData);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async login({ commit }, payload) {
      await commit(SET_IS_LOADING, true);
      await apiClient()
        .get("sanctum/csrf-cookie")
        .then(
          async () =>
            await apiClient()
              .post("api/login", payload)
              .then(async (res) => {
                await commit(SET_IS_LOADING, false);
                const userData = res.data.data;
                if (userData) {
                  const storedUserCookies = {
                    token: userData.token,
                    nama_karyawan: userData.user.nama_karyawan,
                    nrp: userData.user.nrp,
                    role: userData.user.role_id,
                  };

                  cookieHandler.store(storedUserCookies, {
                    sameSite: true,
                  });
                  await commit(SET_USER, userData);
                }
              })
              .catch(() => {
                commit(SET_IS_LOADING, false);
              })
        )
        .catch(() => {
          commit(SET_IS_LOADING, false);
        });
    },
    async register({ commit }, payload) {
      await apiClient()
        .post("api/register", payload)
        .then(async (res) => {
          const storedUserCookies = {
            token: res.data.data.token,
            nama_karyawan: res.data.data.user?.nama_karyawan,
            nrp: res.data.data.user?.nrp,
          };
          cookieHandler.store(storedUserCookies, { sameSite: true });
          await commit(SET_USER, res.data.data);
        });
    },
    deleteUser({ commit }, payload) {
      commit(DELETE_USER, payload);
    },
    async logOut({ commit }) {
      const token = cookieHandler.get("token");
      await apiClient()
        .post("api/logout", undefined, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async () => {
          await commit(LOGOUT_USER);
          cookieHandler.deleteMultiple(["token", "nama_karyawan", "nrp"]);
        });
    },
  },
};

export default userModules;
