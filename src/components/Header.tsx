import { NavLink } from "react-router-dom";
import { navLinks } from "../data";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 className="logo">The Movie List</h1>
        <div className="links">
          {navLinks.map((link) => (
            <NavLink
              to={link.to}
              className={({ isActive }) => (isActive ? "link active" : "link")}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};
