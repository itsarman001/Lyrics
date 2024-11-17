import { Link } from "react-router-dom";
import navbarItems from "./navbarItems";
import { BrandName } from "./";

const Navbar = () => {
  return (
    <nav className="bg-primary text-light p-4 flex items-center justify-between shadow-lg backdrop-blur-lg border-b-2 border-secondary">
      {/* Brand */}
      <BrandName />

      {/* Navbar Links */}
      <ul className="flex space-x-6">
        {navbarItems.map((item) => (
          <li key={item.name} className="hidden lg:block">
            <Link
              to={item.path}
              className="flex items-center text-light hover:text-accent transition duration-200"
            >
              {item.icon}
              <span className="ml-2">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
