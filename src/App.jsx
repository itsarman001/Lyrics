import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { Navbar, MobileNav, Home, LoginForm } from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    try {
      const token = window.localStorage.getItem('token');
  
      if (!token) {
        const hash = window.location.hash;
        window.location.hash = '';
        const _token = hash.split('&')[0].split('=')[1];
        window.localStorage.setItem('token', _token);
        setToken(_token);
      } else {
        setToken(token);
      }
    } catch (error) {
      console.log(`Error while login: ${error}`);
    }
  }, []);

  return (
    <UserContextProvider>
      <BrowserRouter>
        <main className="bg-primary h-dvh w-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
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
