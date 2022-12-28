import axios from "axios";

export default function apiClient() {
    const apiClient = axios.create({
        baseURL: "http://127.0.0.1:8000",
        withCredentials:true,
    });

  return apiClient;
}



