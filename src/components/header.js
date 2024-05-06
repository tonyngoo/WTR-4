import React, { useState } from "react";
import "../App.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar" >
      <span className="nav-logo">Work Term Report</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="#scroll-top">Introduction</a>
        <a href="#intro-section">Employer Info.</a>
        <a href="#info-section">Goals</a>
        <a href="#job-section">Job Description</a>
        <a href="#conclusion">Conclusion</a>
        <a href="#acknowledgements">Acknowledgements</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Header;