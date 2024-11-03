import { Link } from "react-router-dom"; 
import navbarItems from "./navbarItems";
import { BrandName } from "./";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-secondary to-secondary-hover text-light p-4 flex items-center justify-between">
      <BrandName />
      <ul className="flex space-x-8">
        {navbarItems.map((item) => (
          <li key={item.name} className="hidden lg:block">
            <Link
              to={item.path} 
              className="flex items-center text-light hover:text-accent transition"
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
