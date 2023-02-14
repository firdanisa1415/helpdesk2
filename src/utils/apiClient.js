import axios from "axios";
import CookieHandler from "./cookieHandler";
const cookieHandler = new CookieHandler();

export default function apiClient() {
  const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    withCredentials: true,
  });
  /**
   * @description Axios interceptor adalah sebuah fitur yang memungkinkan kita 
   * untuk melakukan manipulasi data sebelum atau sesudah melakukan request dengan Axios. 
   * Contohnya adalah menambahkan header pada setiap request.
   */
  apiClient.interceptors.request.use((config) => {
    // Mengambil token dari cookie
    const token = cookieHandler.get("token");
    // Jika token ada, tambahkan header authorization
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return apiClient;
}
