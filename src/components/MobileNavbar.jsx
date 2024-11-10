import { Link } from "react-router-dom"; 
import navbarItems from "./navbarItems";

const MobileNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-secondary to-secondary-hover text-light p-4 w-full">
      <ul className="flex space-x-8 px-4 items-center justify-between">
        {navbarItems.map((item) => (
          <li key={item.name}>
            <Link 
              to={item.path} 
              className="flex items-center justify-center flex-col gap-2"
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
