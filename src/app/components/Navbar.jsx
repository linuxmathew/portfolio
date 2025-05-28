"use client";
import { useState, useMemo, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./Navbar.css";
import UniversalBtn from "./buttons/UniversalBtn";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";

export default React.memo(function Navbar() {
  const [theme, setTheme] = useState("light");
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Load theme from localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("tayoTheme");
    const initialTheme = storedTheme === "dark" ? "dark" : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("tayoTheme", newTheme);
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
    <nav className="navbar w-full">
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
          <span className="d-md-none" style={{}}>
            <button
              className=""
              onClick={() => {}}
              style={{
                border: "1px solid var(--text-color)",
                width: "100%",
                backgroundColor: "transparent",
                color: "var(--text-color)",
                borderRadius: "20px",
                padding: "12px 16px",
                fontSize: "16px",
                fontWeight: "var(--font-weight-medium)",
                marginTop: "64px",
              }}
            >
              Contact me
            </button>
          </span>
        </ul>

        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            className="mode-btn bg-none border-none cursor-pointer text-[1.5rem] text-[var(--text-color)] mr-8 h-8 w-8"
          >
            {theme === "light" ? (
              <FaMoon
                style={{
                  transform: "scaleX(-1)",
                }}
              />
            ) : (
              <FaSun />
            )}
          </button>
          <UniversalBtn type="primary">Contact me</UniversalBtn>
        </div>

        <div className="navbar-toggle">
          {!isOpen && (
            <button onClick={toggleTheme} className="btn border-none">
              {theme === "light" ? (
                <FaMoon
                  className="theme-toggler"
                  style={{
                    width: "29px",
                    height: "29px",
                    transform: "scaleX(-1)",
                  }}
                />
              ) : (
                <FaSun
                  className="theme-toggler"
                  style={{ width: "29px", height: "29px" }}
                />
              )}
            </button>
          )}

          <span onClick={toggleMenu}>
            {isOpen ? (
              <IoMdClose style={{ width: "32px", height: "32px" }} />
            ) : (
              <HiMenuAlt3 style={{ width: "32px", height: "32px" }} />
            )}
          </span>
        </div>
      </div>
    </nav>
  );
});
