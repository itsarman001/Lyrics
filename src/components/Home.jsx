import React from "react";
import { Card } from "./";

const Home = () => {
  const src =
    "https://c.saavncdn.com/306/Lost-Found-Hindi-2024-20240517153134-150x150.jpg?bch=480362";
  return (
    <div>
      <Card
        isRounded={false}
        src={src}
        alt="Lost and Found, Ishq"
        name="Ishq, Lost and Found"
        desc="Lost;Found  by Amir Ameer, Faheem Abdullah, Rauhan Malik"
        id="1234"
      />
    </div>
  );
};

export default Home;
