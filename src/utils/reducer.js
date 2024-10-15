import { reducerCases } from "./Constants";

export const initialState = {
  token: null,
  userInfo: null,
  userPlaylists: [],
  selectedPlaylist: null,
  selectedPlaylistId: "37i9dQZF1DX0XUfTFmNBRM",
  currentlyPlaying: null,
  playerState: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case reducerCases.SET_USER: {
      return {
        ...state,
        userInfo: action.userInfo,
      };
    }
    case reducerCases.SET_USER_PLAYLISTS: {
      return {
        ...state,
        userPlaylists: action.userPlaylists,
      };
    }
    case reducerCases.SET_PLAYLIST: {
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };
    }
    case reducerCases.SET_PLAYLIST_ID: {
      return {
        ...state,
        selectedPlaylistId: action.selectedPlaylistId,
      };
    }
    case reducerCases.SET_PLAYING: {
      return {
        ...state,
        currentlyPlaying: action.currentlyPlaying,
      };
    }
    case reducerCases.SET_PLAYER_STATE: {
      return {
        ...state,
        playerState: action.playerState,
      };
    }

    default:
      return state;
  }
};

export default reducer;
