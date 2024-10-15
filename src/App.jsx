import React from "react";
import { useStateProvider } from "../utils/StateProvider";
import { IndexPage, Login } from "./components";
import { useAuthToken } from "./hooks";

const App = () => {
  const [{ token }] = useStateProvider();
  useAuthToken();

  return token ? <IndexPage /> : <Login />;
};

export default App;
