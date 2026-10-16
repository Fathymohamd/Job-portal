
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getCurrentUser, logout , setUser} from "../redux/slices/getCurrentUser";

import { res as logoutUser } from "../redux/slices/logout";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const user = useSelector((state) => state.UserMe.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCurrentUser());
     dispatch(setUser());
  }, [dispatch]);

  const closeMenu = () => {
    setIsOpen(false);
    setUserMenuOpen(false);
  };


const handleLogout = async () => {
try {
await dispatch(logoutUser()).unwrap();


dispatch(logout());


setUserMenuOpen(false);
setIsOpen(false);

navigate("/login");


} catch (error) {
console.error("Logout failed:", error);
}
};


  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Job<span>Hub</span>
        </Link>

        <nav className="navbar-links">
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/jobs" onClick={closeMenu}>
            Find Jobs
          </NavLink>
          <NavLink to="/companies" onClick={closeMenu}>
            Companies
          </NavLink>
          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </nav>

        <div className="navbar-actions">
          {user ? (
            <div
              className={`navbar-user-menu ${
                userMenuOpen ? "menu-open" : ""
              }`}
              onMouseEnter={() => setUserMenuOpen(true)}
              onMouseLeave={() => setUserMenuOpen(false)}
            >
              <button
                className="navbar-user-trigger"
                onClick={() => setUserMenuOpen((prev) => !prev)}
                aria-expanded={userMenuOpen}
              >
                <span className="navbar-avatar">
                  {user.name?.charAt(0)?.toUpperCase() || "U"}
                </span>
                <span>Hello, {user.name?.split(" ")[0] || "User"}</span>
                <span className="navbar-chevron">⌄</span>
              </button>

              <div className="navbar-dropdown">
                <div className="navbar-dropdown-user">
                  <strong>{user.name}</strong>
                  <span>{user.email}</span>
                </div>

                <div className="navbar-dropdown-divider" />

                <Link to="/profile" onClick={closeMenu}>
                  My Profile
                </Link>

                <Link to="/jobs" onClick={closeMenu}>
                  Find Jobs
                </Link>

                <button
                  className="navbar-logout"
                  onClick={handleLogout}
                >
                  ↪ Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link to="/login" className="login-btn">
                Login
              </Link>
              <Link to="/register" className="signup-btn">
                Sign Up
              </Link>
            </>
          )}
        </div>

        <button
          className={`menu-btn ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        <NavLink to="/" onClick={closeMenu}>
          Home
        </NavLink>
        <NavLink to="/jobs" onClick={closeMenu}>
          Find Jobs
        </NavLink>
        <NavLink to="/companies" onClick={closeMenu}>
          Companies
        </NavLink>
        <NavLink to="/about" onClick={closeMenu}>
          About
        </NavLink>

        {user ? (
          <div className="mobile-user-section">
            <span>Hello, {user.name}</span>
            <Link to="/profile" onClick={closeMenu}>
              My Profile
            </Link>
            <button onClick={handleLogout} className="navbar-logout">
              Logout
            </button>
          </div>
        ) : (
          <div className="mobile-auth-links">
            <Link to="/login" onClick={closeMenu}>
              Login
            </Link>
            <Link to="/register" onClick={closeMenu}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;