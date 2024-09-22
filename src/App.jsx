import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { Navbar, MobileNav, Home } from "./components";

const App = () => {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <main className="bg-primary h-dvh w-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <div className="w-full md:hidden">
            <MobileNav />
          </div>
        </main>
      </BrowserRouter>
    </UserContextProvider>
  );
};

export default App;
