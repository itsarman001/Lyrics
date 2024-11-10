import { Navbar, MobileNavbar } from "../components";
import { Home, Search, Player, Library, Profile } from "./";
import { Routes, Route } from "react-router-dom";

const BaseLayout = () => {
  return (
    <main className="h-screen w-screen bg-primary text-light flex flex-col">
      <Navbar />

      {/* Main content area with padding for mobile navbar */}
      <section className="flex-1 overflow-auto py-8 pb-16 lg:pb-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/player" element={<Player />} />
          <Route path="/library/:id" element={<Library />} />{" "}
          {/* Dynamic ID parameter */}
          <Route path="/library" element={<Library />} />{" "}
          {/* For direct access without ID */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </section>

      {/* Mobile Navbar for smaller screens */}
      <section className="lg:hidden fixed bottom-0 w-full">
        <MobileNavbar />
      </section>
    </main>
  );
};

export default BaseLayout;
