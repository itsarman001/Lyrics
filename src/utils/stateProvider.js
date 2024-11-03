import { useContext, createContext, useState, } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [queue, setQueues] = useState([]);
    const [userInfo, setUserInfo] = useState({});
    const [userPlaylist, setUserPlaylist] = useState(null);
    const [currentTrackId, setCurrentTrackId] = useState("");
    const [currentTrack, setCurrentTrack] = useState("");
    const [activePlaylistId, setActivePlaylistId] = useState("");
    const [activePlaylistData, setActivePlaylistData] = useState(null);

    return (
        <StateContext.Provider value={{
            queue, setQueues,
            userInfo, setUserInfo,
            userPlaylist, setUserPlaylist,
            currentTrackId, setCurrentTrackId,
            currentTrack, setCurrentTrack,
            activePlaylistId, setActivePlaylistId,
            activePlaylistData, setActivePlaylistData,
        }}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateProvider = () => useContext(StateContext);