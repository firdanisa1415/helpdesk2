import axios from "axios";

export default function apiClient() {
    const apiClient = axios.create({
        baseURL: "https://114a-182-253-162-134.ap.ngrok.io",
        withCredentials:true,
    });

  return apiClient;
}



