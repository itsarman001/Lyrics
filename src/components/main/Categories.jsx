import React from "react";
import { useUserContext } from "../../context/UserContext";
import { ListItem } from "./index";
import { Link } from "react-router-dom";

const Categories = () => {
  const { CATEGORIES } = useUserContext();
  return (
    <section>
      <ul className="flex items-center justify-start overflow-hidden hover:overflow-x-auto px-2 py-3 gap-3">
        {CATEGORIES.map((elem) => (
          <ListItem className='bg-secondary hover:bg-accent text-text text-nowrap transition ' children={<Link to={elem.path}>{elem.name}</Link>} />
        ))}
      </ul>
    </section>
  );
};

export default Categories;
