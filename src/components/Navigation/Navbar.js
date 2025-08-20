import React, { useState } from "react";
import { useDarkMode } from "../../context/DarkModeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isToggleSidebarOpen , setToggleSidebarOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const ToggleSidebar = ()=>{
    setToggleSidebarOpen(!isToggleSidebarOpen);
  }

  return (
    <div className="navbar">
      <nav className="nav-container">
        <div className="navbar-contents">
          <Link to="/" className="logo-contain">
            <i className="bx bx-code-alt"></i> 
            <span className="logo">Sandeep Kumar</span>
          </Link>
          <ul className="nav-contain">
            <Link to="/services" className="nav-items">services</Link>
            <Link to="/books" className="nav-items">books</Link>
            <Link to="/contributors" className="nav-items">contributers</Link>
            <Link to="/projects" className="nav-items">projects</Link>
            <Link to="/education" className="nav-items">education</Link>
          </ul>
        </div>
        <div className="d-nav-contents">
          <ul className="d-nav-list">
            <Link to="/resume" className="d-nav-items">Resume</Link>
            <Link to="/achievements" className="d-nav-items">Achievements</Link>
            <Link to="/about" className="d-nav-items">About</Link>
          </ul>
            <div className="d-nav-items-theme"><i onClick={toggleDarkMode} className={`bx ${darkMode ? 'bx-sun': 'bx-moon'}`}></i></div>
        <div onClick={ToggleSidebar} className="toggle-btn">
          <i className={`bx ${isToggleSidebarOpen ? 'bx-x': 'bx-menu'}`}></i>
        </div>
        </div>
      </nav>
      <aside className={`sidebar ${isToggleSidebarOpen ? 'open': ''}`}>
        <ul className="side-contents">
          <Link onClick={ToggleSidebar} to="/services" className="side-items"><span className="side-icon"><i className="bx bx-book-content"></i></span> <span className="side-text">Services</span></Link>
          <Link onClick={ToggleSidebar} to="/books" className="side-items"><span className="side-icon"><i className="bx bx-book"></i></span> <span className="side-text">Books</span></Link>
          <Link onClick={ToggleSidebar} to="/education" className="side-items"><span className="side-icon"><i className="bx bxs-graduation"></i></span> <span className="side-text">Education</span></Link>
          <Link onClick={ToggleSidebar} to="/projects" className="side-items"><span className="side-icon"><i className="bx bx-detail"></i></span> <span className="side-text">Projects</span></Link>
          <Link onClick={ToggleSidebar} to="/contributors" className="side-items"><span className="side-icon"><i className="bx bx-group"></i></span> <span className="side-text">Contributors</span></Link>
          <Link onClick={ToggleSidebar} to="/achievements" className="side-items"><span className="side-icon"><i className="bx bx-trophy"></i></span> <span className="side-text">Achievements</span></Link>
          <Link onClick={ToggleSidebar} to="/resume" className="side-items"><span className="side-icon"><i className="bx bxs-file-pdf"></i></span> <span className="side-text">Resume</span></Link>
          <Link onClick={ToggleSidebar} to="/about" className="side-items"><span className="side-icon"><i className="bx bx-user"></i></span> <span className="side-text">About us</span></Link>
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
