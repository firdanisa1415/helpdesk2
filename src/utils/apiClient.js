import axios from "axios";

export default function apiClient() {
    const apiClient = axios.create({
        baseURL: process.env.VUE_APP_API_URL,
        withCredentials:true,
    });

  return apiClient;
}



