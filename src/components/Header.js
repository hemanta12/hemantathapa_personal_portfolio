import React, { useState, useEffect } from "react";
import "../App.css";
import { FaBars } from "react-icons/fa";
import { FiMoon, FiSun, FiX } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [dark, setDark] = useState(false);

  // on-mount: init theme + scroll listener
  useEffect(() => {
    // theme
    const root = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      root.classList.add("dark");
      setDark(true);
    } else {
      root.classList.remove("dark");
      setDark(false);
    }

    // scroll shadow + active link
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
      NAV_ITEMS.forEach(({ href }) => {
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop - 80;
          const bottom = top + el.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (dark) {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(false);
    } else {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(true);
    }
  };

  const handleNavClick = (id) => {
    setActive(id);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={` max-w-[1440px] w-full m-auto relative sticky top-0 z-50 bg-white dark:bg-gray-900 transition-shadow ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="  flex items-center justify-between px-6 py-4 md:px-10 ">
        {/* ─── LEFT: Logo ───────────────────────────────────────────────────── */}
        <div
          className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide"
          style={{ fontFamily: "serif" }}
        >
          HT
        </div>

        {/* ─── RIGHT-ALIGNED: Desktop Links ────────────────────────────────── */}
        <ul className="hidden md:flex space-x-10 ml-auto mr-8">
          {NAV_ITEMS.map(({ label, href }) => {
            const id = href.slice(1);
            const isActive = active === id;
            return (
              <li key={id}>
                <a
                  href={href}
                  onClick={() => handleNavClick(id)}
                  className={`text-lg transition-colors duration-200 ${
                    isActive
                      ? "text-purple-500"
                      : "text-gray-900 dark:text-gray-300 hover:text-purple-500"
                  }`}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* ─── RIGHT: Theme Toggle + Mobile Menu Button ────────────────────── */}
        <div className="flex items-center space-x-4">
          {/* Dark/Light Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {dark ? (
              <FiSun className="w-6 h-6 text-yellow-400" />
            ) : (
              <FiMoon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen((o) => !o)}
            aria-label="Toggle Menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            className="md:hidden p-2 text-2xl text-gray-900 dark:text-white rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {isMenuOpen ? <FiX /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* ─── MOBILE MENU ───────────────────────────────────────────────────── */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-md border-b border-gray-300 dark:border-gray-700"
        >
          <ul className="divide-y divide-gray-200 dark:divide-gray-700 ">
            {NAV_ITEMS.map(({ label, href }) => {
              const id = href.slice(1);
              const isActive = active === id;
              return (
                <li key={id} className="w-full">
                  <a
                    href={href}
                    onClick={() => handleNavClick(id)}
                    className={`block w-full text-center py-4 text-xl font-medium 
                          transition-colors duration-200
                          ${
                            isActive
                              ? "text-purple-500"
                              : "text-gray-900 dark:text-gray-300"
                          }
                          hover:text-purple-500 dark:hover:text-purple-500
                          hover:bg-gray-100 dark:hover:bg-gray-800`}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
