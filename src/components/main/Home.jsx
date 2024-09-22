import React from "react";
import { TrendingSection, Categories } from "./index";

const Home = () => {
  return (
    <main className="p-2">
      <Categories />
      <TrendingSection />
    </main>
  );
};

export default Home;
