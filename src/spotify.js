const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = import.meta.env.VITE_SPOTIFY_WEBAPI_CLIENTID;
const redirectUrl = "http://localhost:5173";
const scopes = ['user-library-read', 'playlist-read-private']
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;