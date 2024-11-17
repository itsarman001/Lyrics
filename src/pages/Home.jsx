import React from "react";
import { useNavigate } from "react-router-dom";
import { useFetchCategories, useFetchNewReleases } from "../hooks";
import { Heading, Card } from "../components";
import { useStateProvider } from "../utils/StateProvider";

const Home = () => {
  const navigate = useNavigate();
  const { setSelectedId, setSelectedIdType } = useStateProvider();
  const categories = useFetchCategories();
  const { releases, error } = useFetchNewReleases(5);

  // Debugging releases
  console.log("Releases:", releases); // Add this line to debug the releases

  if (!categories) {
    return <div className="text-center text-light">Loading categories...</div>;
  }

  if (error) {
    return <div className="text-center text-light">Error: {error}</div>;
  }

  if (!releases) {
    return <div className="text-center text-light">Loading new releases...</div>;
  }

  const handleReleaseClick = (id, type = "album") => {
    setSelectedId(id);
    setSelectedIdType(type); // Set the type to 'album' for releases
    navigate(`/library/${id}`);
  };

  return (
    <section className="p-4 lg:p-6 lg:pt-2 w-full bg-base text-light">
      <div className="mb-8">
        <ul className="flex gap-4 overflow-x-auto p-2 hide-scrollbar">
          {categories.map((category) => (
            <li
              key={category.id}
              className="bg-secondary hover:bg-secondaryHover rounded-full px-4 py-2 shadow-md transition-all"
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
          <Heading children="New Releases" className="mb-6 text-accent" />
        </div>
        <div>
          <ul
            className="p-2 flex gap-4 overflow-x-auto sm:grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 sm:gap-5 hide-scrollbar"
            style={{ flexWrap: "nowrap" }}
          >
            {Array.isArray(releases) && releases.length > 0 ? (
              releases.map((release) => (
                <li key={release.id} className="flex-shrink-0 w-48 sm:w-auto">
                  <Card
                    name={release.name}
                    image={release.images}
                    total_tracks={release.total_tracks}
                    artists={release.artists}
                    className="bg-primary hover:bg-primaryHover rounded-lg shadow-md"
                    onClick={() => handleReleaseClick(release.id, "album")} // Pass the 'album' type
                  />
                </li>
              ))
            ) : (
              <li>No new releases found</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Home;
