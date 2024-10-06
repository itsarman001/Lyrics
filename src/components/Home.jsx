import React from "react";
import { Navbar, Sidebar, Library, Card, Footer } from "./index";

const track = {
  album: {
    album_type: "album",
    artists: [
      {
        name: "Dummy Artist",
        type: "artist",
      },
    ],
    images: [
      {
        url: "https://via.placeholder.com/150",
      },
    ],
    name: "Dummy Album",
    type: "album",
  },
  artists: [
    {
      name: "Dummy Artist",
      type: "artist",
    },
  ],
  name: "Dummy Track",
  type: "track",
  uri: "spotify:track:dummyuri",
};

const Home = () => {
  return (
    <section className="bg-primary w-full flex items-center justify-between">
      <div>
        {/* Sidebar Section */}
        <Sidebar />
      </div>
      <div>
        {/* <Card track={track} /> */}
      </div>
    </section>
  );
};

export default Home;
