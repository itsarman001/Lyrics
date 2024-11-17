import { useContext, createContext, useState, } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [userPlaylist, setUserPlaylist] = useState([]);
    const [userTheme, setUserTheme] = useState("catpuccinDark");
    const [currentTrackId, setCurrentTrackId] = useState("");
    const [selectedId, setSelectedId] = useState("");
    const [selectedIdType, setSelectedIdType] = useState("")
    const [selectedIdFetchedData, setSelectedIdFetchedData] = useState({});
    const [queue, setQueues] = useState([]);

    return (
        <StateContext.Provider value={{
            userInfo, setUserInfo,
            userPlaylist, setUserPlaylist,
            userTheme, setUserTheme,
            selectedId, setSelectedId,
            selectedIdType, setSelectedIdType,
            selectedIdFetchedData, setSelectedIdFetchedData,
            currentTrackId, setCurrentTrackId,
            queue, setQueues,
        }}>
            {children}
        </StateContext.Provider>
    )

}

export const useStateProvider = () => useContext(StateContext);