import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./context/UserContext";
import { Navbar, MobileNav, Home, LoginForm } from "./components";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status on component mount
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // will write this later
        const user = await checkUserAuthentication();
        setIsLoggedIn(user !== null);
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    };

    checkAuthentication();
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