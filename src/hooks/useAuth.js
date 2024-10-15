// const clientId = import.meta.env.VITE_SPOTIFY_WEBAPI_CLIENT_ID;
// const clientId = ""; // Due to some issue had to use hard coded clientid will fix it later
const redirectUri = "http://localhost:5173";
const apiUrl = "https://accounts.spotify.com/authorize";
const scopes = [
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-email",
  "user-read-private",
  "user-read-playback-position",
  "user-top-read",
  "user-read-recently-played",
].join(" ");

const useAuth = () =>
  (window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes}&response_type=token&show_daialog=true;`);

export default useAuth;
