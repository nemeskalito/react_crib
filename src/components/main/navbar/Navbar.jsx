import "./navbar.css";
import { NavLink } from "react-router";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__items">
        <NavLink to="/bundlers">
          <div className="navbar__item">Сборщики. Vite VS Webpack</div>
        </NavLink>
        <NavLink to="/structured">
          <div className="navbar__item">Структура проекта. Modules VS FSD</div>
        </NavLink>
      </div>
    </div>
  );
};
