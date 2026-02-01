import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink to="/" className="navbar-brand fw-bold">
          John Doe
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Basculer la navigation"
          aria-expanded={open}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${open ? "show" : ""}`}
          id="mainNav"
        >
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setOpen(false)}
              >
                Accueil
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setOpen(false)}
              >
                Services
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setOpen(false)}
              >
                Portfolio
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setOpen(false)}
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/mentions"
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
                onClick={() => setOpen(false)}
              >
                Mentions légales
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}