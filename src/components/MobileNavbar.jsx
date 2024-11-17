import { Link } from "react-router-dom";
import navbarItems from "./navbarItems";

const MobileNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-secondary to-secondaryHover text-light p-4 w-full">
      <ul className="flex space-x-8 px-4 items-center justify-between">
        {navbarItems.map((item) => (
          <li key={item.name}>
            <Link
              to={item.path}
              className="flex items-center justify-center flex-col gap-2 text-light hover:text-accent transition duration-200"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
