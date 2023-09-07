import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");

  const handleClick = (e) => {
    if (e.target.tagName === "A") {
      setIsActive(e.target.id);
    }
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <a href="#" onClick={handleClick} id="home">
            首页
          </a>
        </li>
        <li>
          <a href="#" onClick={handleClick} id="works">
            作品
          </a>
        </li>
        <li>
          <a href="#" onClick={handleClick} id="docs">
            文档
          </a>
        </li>
        <li>
          <a href="#" onClick={handleClick} id="contact">
            联系我
          </a>
        </li>
      </ul>
      <div className="navbar-toggle" onClick={handleClick}>
        {isActive === "" ? "导航" : isActive}
      </div>
    </nav>
  );
};

export default Navbar;
