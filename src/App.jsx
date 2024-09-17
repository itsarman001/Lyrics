import React from "react";
import { Navbar, MobileNav, Sidebar, Home } from "./components"; // Importing necessary components
import { UserContextProvider } from "./context/UserContext"; // Importing the UserContextProvider
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing routing-related components

function App() {
  return (
    <UserContextProvider> {/* Wrapping the entire app with UserContextProvider */}
      <BrowserRouter> {/* Setting up the router */}
        <main className="flex h-screen bg-primary">
          <Sidebar /> {/* Displaying the sidebar */}
          <div className="flex-grow bg-gray-100">
            <Navbar /> {/* Displaying the navbar */}
            <Routes>
              {/* Defining a route for the Home component */}
              <Route path="/" element={<Home />} />
            </Routes>
            <MobileNav /> {/* Displaying the mobile navigation */}
          </div>
        </main>
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;

