import React from "react";
import "../styles/NavTabs.css";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <ul className="nav d-flex justify-content-around" id="nav">
      <li className="nav-item">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active text-secondary" : "nav-link text-secondary" }
        >
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/work"
          className={
            location.pathname === "/work" ? "nav-link active text-secondary" : "nav-link text-secondary"
          }
        >
          Work
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/resume"
          className={
            location.pathname === "/resume" ? "nav-link active text-secondary" : "nav-link text-secondary"
          }
        >
          Résumé
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/contact"
          className={
            location.pathname === "/contact" ? "nav-link active text-secondary" : "nav-link text-secondary"
          }
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;
