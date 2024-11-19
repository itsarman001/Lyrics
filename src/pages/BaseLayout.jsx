import { Navbar, MobileNavbar } from "../components";
import { Home, Search, Player, Library, Profile, Login } from "./";
import { Routes, Route } from "react-router-dom";

const BaseLayout = () => {
  return (
    <main className="h-screen w-screen bg-base text-light flex flex-col">
      <Navbar />

      {/* Main content area with padding for mobile navbar */}
      <section className="flex-1 overflow-auto py-8 pb-16 lg:pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          {/* Dynamic ID parameter */}
          <Route path="/player/:id" element={<Player />} />
          <Route path="/library/:id" element={<Library />} />{" "}
          {/* For direct access without ID */}
          <Route path="/player" element={<Player />} />
          <Route path="/library" element={<Library />} />{" "}
          <Route path="/profile" element={<Profile />} />
          <Route path="/signin" element={<Login />} />

        </Routes>
      </section>

      {/* Mobile Navbar for smaller screens */}
      <section className="lg:hidden w-full">
        <MobileNavbar />
      </section>
    </main>
  );
};

export default BaseLayout;
