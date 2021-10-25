import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
function Header() {
  useEffect(() => {
    if (window.innerWidth <= 768) {
      function openCloseMenu() {
        document.querySelector("body").classList.toggle("open-menu");
      }
      document.querySelector("#check").addEventListener("click", openCloseMenu);
      var allList = document.querySelectorAll(".nav-bar ul li");
      allList.forEach((li) => li.addEventListener("click", openCloseMenu));
    }
  }, []);

  const [darkMode, setDarkMode] = useState(false);
  function scrolled(e) {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.querySelector(".nav-bar").classList.add("scrolled");
    } else {
      document.querySelector(".nav-bar").classList.remove("scrolled");
    }
  }
  window.addEventListener("scroll", scrolled);
  function changed() {
    if (!darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }

  return (
    <div className="nav-bar">
      <div className="nav-bar-innercontainer">
        <Link to="/" style={{ textDecoration: "none" }}>
          <p
            className="nav-logo"
            // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Sinplay
          </p>
        </Link>
        <ul className="options">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <li
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="option"
            >
              Home
            </li>
          </Link>
          <HashLink
            smooth
            to="/#services"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li
              // onClick={() => {
              //   document
              //     .querySelector(".services-container")
              //     .scrollIntoView({ behavior: "smooth" });
              // }}
              className="option"
            >
              Our Services
            </li>
          </HashLink>
          <HashLink
            smooth
            to="/#about"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <li
              // onClick={() => {
              //   document
              //     .querySelector(".about-container")
              //     .scrollIntoView({ behavior: "smooth" });
              // }}
              className="option"
            >
              About
            </li>
          </HashLink>

          <Link to="/contact" style={{ textDecoration: "none" }}>
            <li className="contact-button">Contact Us</li>
          </Link>
          <li>
            <div className="toggle">
              <input
                type="checkbox"
                id="toggle"
                onChange={() => {
                  setDarkMode((old) => !old);
                  changed();
                }}
              />
              <label for="toggle"></label>
            </div>
          </li>
        </ul>
        <div className="hamburger">
          <input type="checkbox" id="check" />
          <label for="check">
            <p className="bars">
              <FontAwesomeIcon icon={faBars} />
            </p>
            <p className="cancel">
              <FontAwesomeIcon icon={faTimes} />
            </p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Header;
