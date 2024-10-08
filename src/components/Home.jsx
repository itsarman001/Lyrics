import React, { useEffect } from "react";
import { useStateProvider } from "../utils/StateProvider";
import useFetchUser from "../hooks/useFetchUser";
import { Card } from "./index";

const Home = () => {
  const [{ token }] = useStateProvider();
  useFetchUser(token)
  const src = ""

  return (
    <section className="flex items-center justify-between">
      <Card artistName="Arman" isRounded={false} imageSrc="" />
    </section>
  );
};

export default Home;
