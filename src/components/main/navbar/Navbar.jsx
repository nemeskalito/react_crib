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
        <NavLink to="/components">
          <div className="navbar__item">Components</div>
        </NavLink>
        <NavLink to="/props">
          <div className="navbar__item">Props</div>
        </NavLink>
        <NavLink to="/state">
          <div className="navbar__item">State</div>
        </NavLink>
      </div>
    </div>
  );
};
