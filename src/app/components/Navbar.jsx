"use client"; // Required for client-side interactivity
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";
import UniversalBtn from "./buttons/UniversalBtn";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav style={styles.navbar} className="navbar">
      <div className="container-md">
        <div className="navbar-logo">
          <Image
            className="logo-img" // Add a direct class for styling
            src="/images/logo.svg" // Path to the image in the `public` folder
            alt="Logo"
            width={50} // Desired width
            height={50} // Desired height
            priority // Ensures the image is loaded immediately
          />
        </div>

        {/* Navbar Menu */}
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          <li>
            <Link href="/work" onClick={() => setIsOpen(false)}>
              My Work
            </Link>
          </li>
          <li>
            <Link href="/resume" onClick={() => setIsOpen(false)}>
              Resume
            </Link>
          </li>
          <li>
            <Link href="/shelf" onClick={() => setIsOpen(false)}>
              Shelf
            </Link>
          </li>
        </ul>
        <div className="navbar-actions">
          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} style={styles.themeButton}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          {/* Contact Me Button (Hidden in Small Screens) */}
          {/* <button className="contact-btn">Contact Me</button>
           */}
          <UniversalBtn type="primary">Contact me</UniversalBtn>
          {/* <button className="">Contact me</button> */}
        </div>
        {/* Hamburger Menu for Small Screens */}
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid #aaaadd",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    margin: 0,
  },
  themeButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "var(--text-color)",
    marginRight: "2rem",
    height: "32px",
    width: "32px",
  },
};
