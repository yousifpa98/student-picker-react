import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./css/Navigation.css";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Set the active link based on the current path
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const navItems = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Names", path: "/names" },
    { id: 3, name: "Stats", path: "/stats" },
    { id: 4, name: "Settings", path: "/settings" },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
        {navItems.map((item) => (
          <li className="nav-item" key={item.id}>
            <NavLink
              to={item.path}
              className={`nav-link ${activeLink === item.path ? "active" : ""}`}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
