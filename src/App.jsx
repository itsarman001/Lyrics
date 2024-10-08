import React from "react";
import { Routes, Route } from "react-router-dom";
import { useStateProvider } from "./utils/StateProvider";
import { Login, Sidebar, Navbar, Home, Explore, Library } from "./components";
import useAuthToken from "./hooks/useAuthToken";

const App = () => {
  useAuthToken()
  const [{ token }] = useStateProvider();


  // if (!token) return <Login />;

  return (
    <main className="h-screen w-screen relative flex items-center gap-0">
      <Sidebar />
      <section className="min-h-full w-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/library" element={<Library />} />
      </Routes>
      </section>
    </main>
  );
};

export default App;
