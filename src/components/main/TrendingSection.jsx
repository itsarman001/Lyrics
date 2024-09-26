import React, { useState, useEffect } from "react";
import axios from "axios";
import { Title, Card } from "./index";

const TrendingSection = () => {
  // const link = import.meta.env.VITE_SPOTIFY_NOCODEAPI_ENDPOINT +
  // "search?q=trending&type=track&perPage=10";
  // console.log(link)

  // const [trendingData, setTrendingData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(link);
  //       setTrendingData(response.data);
  //       console.log(trendingData)
  //     } catch (error) {
  //       console.error('Error fetching trending data:', error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <section className="w-full text-text px-4 py-3 overflow-hidden">
      <div>
        <Title label="Trendig" />
      </div>
      <div className="flex items-center justify-start gap-2 overflow-y-auto">
        {/* <ul>
        {trendingData.map((data) => (
          <li key={data.id}><Card posterSrc={data.album.images.url} /></li>
          
        ))}
        </ul> */}
      </div>
    </section>
  );
};

export default TrendingSection;
