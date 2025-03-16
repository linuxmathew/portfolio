"use client";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import UniversalBtn from "./buttons/UniversalBtn";

export default function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(""); // Store the path after hydration
  const pathname = usePathname(); // Get the current path

  useEffect(() => {
    setCurrentPath(pathname); // Ensure it's set on the client
  }, [pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Define pages
  const pages = ["home", "work", "resume", "shelf"];
  const currentPage =
    currentPath === "/" ? "home" : currentPath.replace("/", "");

  // Filter pages but ensure Home is included if not already on it
  const filteredPages = pages.filter((page) => page !== currentPage);

  return (
    <nav style={styles.navbar} className="navbar">
      <div className="container-md">
        <div className="navbar-logo">
          <Link href="/">
            <Image
              className="logo-img"
              src="/images/logo.svg"
              alt="Logo"
              width={50}
              height={50}
              priority
            />
          </Link>
        </div>

        {/* Dynamic Navbar Menu */}
        <ul className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {filteredPages.map((page) => (
            <li key={page}>
              <Link
                href={page === "home" ? "/" : `/${page}`}
                onClick={() => setIsOpen(false)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <button onClick={toggleTheme} style={styles.themeButton}>
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <UniversalBtn type="primary">Contact me</UniversalBtn>
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
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: "1000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    backgroundColor: "var(--bg-color)",
    color: "var(--text-color)",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
    borderBottom: "1px solid #aaaadd",
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
