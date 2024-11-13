import React from "react";
import { useFetchCategories, useFetchNewReleases, useFetchAlbum } from "../hooks";
import { Heading, Card } from "../components";

const Home = () => {
  const categories = useFetchCategories();
  const releases = useFetchNewReleases(5);
  // console.log(releases)
  // const album = useFetchAlbum("6mHNMtHrXIdUWWuZD9njsG")
  // console.log(album)

  if (!categories || !releases) {
    return <div className="text-center text-light">Loading...</div>;
  }

  return (
    <section className="p-4 lg:p-6 lg:pt-2 w-full bg-primary text-light">
      <div className="mb-8">
        <ul className="flex gap-4 overflow-x-auto p-2 hide-scrollbar">
          {categories.map((category) => (
            <li
              key={category.id}
              className="bg-dark hover:bg-dark-hover rounded-full px-4 py-2 shadow-md transition-all"
            >
              <span className="whitespace-nowrap text-accent font-medium">
                {category.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div>
          <Heading children="New Releases" className="mb-6" />
        </div>
        <div>
          <ul
            className="p-2 flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-5 hide-scrollbar"
            style={{ flexWrap: "nowrap" }}
          >
            {releases.map((release) => (
              <li key={release.id} className="flex-shrink-0 w-48 sm:w-auto">
                <Card
                  name={release.name}
                  image={release.images}
                  total_tracks={release.total_tracks}
                  artists={release.artists}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
