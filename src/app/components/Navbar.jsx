"use client";
import { useState, useMemo } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import UniversalBtn from "./buttons/UniversalBtn";
import React from "react";

export default React.memo(function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      document.documentElement.setAttribute("data-theme", newTheme);
      return newTheme;
    });
  };

  const pages = ["home", "work", "resume", "shelf"];
  // Extract the first segment of the pathname
  const currentPage =
    pathname === "/" ? "home" : pathname.split("/")[1] || "home";
  const filteredPages = useMemo(() => {
    return pages.filter((page) => page !== currentPage);
  }, [currentPage]);

  return (
    <nav className="navbar w-full ">
      <div className="container-md">
        <div className="navbar-logo">
          <Link href="/">
            <Image
              className="logo-img"
              src={
                theme === "light" ? "/images/logo.svg" : "/images/logo_dark.svg"
              }
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>
        </div>

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
          <button
            onClick={toggleTheme}
            className="mode-btn bg-none border-none cursor-pointer text-[1.5rem] text-[var(--text-color)] mr-8 h-8 w-8"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          <UniversalBtn type="primary">Contact me</UniversalBtn>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </div>
      </div>
    </nav>
  );
});
