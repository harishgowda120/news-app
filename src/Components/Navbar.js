import React from 'react';
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // User Icon

const Navbar = () => {
  return (
    <>
      {/* Custom Styling */}
      <style>
        {`
          .navbar-custom {
            background: linear-gradient(45deg, #17a2b8, #138496);
            padding: 12px 0;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }

          .nav-brand-custom {
            font-size: 1.5rem;
            font-weight: bold;
            color: white !important;
            letter-spacing: 1px;
          }

          .nav-hover {
            transition: color 0.3s ease-in-out, transform 0.2s ease-in-out;
            font-weight: 500;
            color: white !important;
          }

          .nav-hover:hover {
            color: #ffeb3b !important; /* Yellowish on hover */
            transform: translateY(-2px);
            text-decoration: none;
          }

          .dropdown-menu {
            background-color: #138496;
            border: none;
            box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
          }

          .dropdown-item {
            color: white !important;
            transition: background 0.3s ease-in-out;
          }

          .dropdown-item:hover {
            background: #17a2b8;
            color: #ffeb3b !important;
          }

          .user-icon {
            transition: transform 0.3s ease-in-out;
            cursor: pointer;
            color: white;
          }

          .user-icon:hover {
            transform: scale(1.1);
            color: #ffeb3b;
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand nav-brand-custom" to="/">NewsApp</Link>

          {/* Mobile Toggle Button */}
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link nav-hover" to="/">Home</Link>
              </li>

              {/* Dropdown for Categories */}
              <li className="nav-item dropdown">
                <Link 
                  className="nav-link dropdown-toggle nav-hover" 
                  to="/" 
                  id="navbarDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false"
                >
                  Categories
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/business">Business</Link></li>
                  <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                  <li><Link className="dropdown-item" to="/health">Health</Link></li>
                  <li><Link className="dropdown-item" to="/science">Science</Link></li>
                  <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                  <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                </ul>
              </li>
            </ul>

            {/* User Icon */}
            <div className="d-flex align-items-center">
              <FaUserCircle size={30} className="user-icon me-2" />
              <span className="text-white fw-bold">Profile</span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
