import { NavLink } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-skin-700 text-skin-100 py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavLink to="/">Essentials</NavLink>
        </div>
        <nav className="flex gap-8 items-center">
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-skin-100 font-semibold border-b-2 border-skin-300"
                : "hover:text-skin-300 text-lg"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              isActive
                ? "text-skin-100 font-semibold border-b-2 border-skin-300 relative"
                : "hover:text-skin-300 text-lg relative"
            }
          >
            <AiFillShopping />
            <div className="absolute bottom-3 left-3 w-7 h-7 text-center bg-skin-100 text-skin-700 text-md rounded-full">
              0
            </div>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
