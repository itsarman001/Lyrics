import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
// error while importing env file output undefined
const clientId = import.meta.env.VITE_SPOTIFY_WEBAPI_CLIENT_ID;
const redirectUrl = "http://localhost:5173";
const scopes = ["user-library-read", "playlist-read-private"];
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({ baseURL: "https://api.spotify.com/v1/" });

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
  });
};

export default apiClient;
