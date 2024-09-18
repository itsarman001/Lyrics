import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { Navbar } from "./components";

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <main className="bg-primary h-dvh w-screen">
            <Navbar />
          <Routes>
            <Route></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
