import React, { useEffect } from "react";
import { useAuthToken, useFetchUser } from "./hooks";
import { BaseLayout, Login } from "./components";

const App = () => {
  const { token } = useAuthToken();
  useFetchUser(token);

  return <>{token ? <BaseLayout /> : <Login />}</>;
};

export default App;
