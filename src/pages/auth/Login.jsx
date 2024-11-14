import { BrandName } from "../../components";

const Login = () => {
  const clientId = process.env.REACT_APP_SPOTIFY_WEBAPI_CLIENT_ID;
   const redirectUri = "https://lyrics-red.vercel.app/";

  // For Development Purpose only
  // const redirectUri = "http://localhost:3000/";
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
  return (
    <main className="bg-secondary text-light h-dvh w-screen flex items-center justify-center">
      <section className="text-center text-white-smoke">
        <BrandName />
        <button
          onClick={useAuth}
          className="my-4 px-3 py-2 rounded-md bg-accent hover:bg-accent-hover text-dark"
        >
          Sign In or Sign Up
        </button>
      </section>
    </main>
  );
};

export default Login;
