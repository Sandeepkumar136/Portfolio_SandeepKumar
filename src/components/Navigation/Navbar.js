import React, { useState } from "react";

const Navbar = () => {
  const [isToggleSidebarOpen , setToggleSidebarOpen] = useState(false);

  const ToggleSidebar = ()=>{
    setToggleSidebarOpen(!isToggleSidebarOpen);
  }

  return (
    <div className="navbar">
      <nav className="nav-container">
        <div className="navbar-contents">
          <div className="logo-contain">
            <i className="bx bx-code-alt"></i>
            <span className="logo">Sandeep Kumar</span>
          </div>
          <ul className="nav-contain">
            <li className="nav-items">services</li>
            <li className="nav-items">books</li>
            <li className="nav-items">contributers</li>
            <li className="nav-items">projects</li>
            <li className="nav-items">education</li>
          </ul>
        </div>
        <div className="d-nav-contents">
          <ul className="d-nav-list">
            <li className="d-nav-items">Resume</li>
            <li className="d-nav-items">Achievements</li>
            <li className="d-nav-items">About</li>
          </ul>
            <div className="d-nav-items-theme"><i className="bx bx-sun"></i></div>
        <div onClick={ToggleSidebar} className="toggle-btn">
          <i className={`bx ${isToggleSidebarOpen ? 'bx-x': 'bx-menu'}`}></i>
        </div>
        </div>
      </nav>
      <aside className={`sidebar ${isToggleSidebarOpen ? 'open': ''}`}>
        <ul className="side-contents">
          <li className="side-items"><span className="side-icon"><i className="bx bx-book-content"></i></span> <span className="side-text">Services</span></li>
          <li className="side-items"><span className="side-icon"><i className="bx bx-book"></i></span> <span className="side-text">Books</span></li>
          <li className="side-items"><span className="side-icon"><i className="bx bxs-graduation"></i></span> <span className="side-text">Education</span></li>
          <li className="side-items"><span className="side-icon"><i className="bx bx-detail"></i></span> <span className="side-text">Projects</span></li>
          <li className="side-items"><span className="side-icon"><i className="bx bx-group"></i></span> <span className="side-text">Contributors</span></li>
          <li className="side-items"><span className="side-icon"><i className="bx bx-trophy"></i></span> <span className="side-text">Achievements</span></li>
          <li className="side-items"><span className="side-icon"><i className="bx bxs-file-pdf"></i></span> <span className="side-text">Resume</span></li>
          <li className="side-items"><span className="side-icon"><i className="bx bx-user"></i></span> <span className="side-text">About us</span></li>
        </ul>
      </aside>
    </div>
  );
};

export default Navbar;
