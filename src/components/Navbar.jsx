import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  // Theme State
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Pain-Point Analysis", path: "/pain-points" },
    { name: "Pricing & Plans", path: "/pricing" },
    { name: "Referral Program", path: "/referral" },
    { name: "Competitor Analysis", path: "/competitor" },
  ];

  return (
    <nav className="bg-amber-100/80 dark:bg-gray-900/90 border-b border-amber-200/60 dark:border-gray-800 sticky top-0 z-50 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link
            to="/"
            className="text-xl font-bold text-amber-900 dark:text-blue-400"
          >
            GrowthPlatform{" "}
            <span className="text-xs bg-amber-200 text-amber-900 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded-full">
              AI
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-amber-200/70 text-amber-950 dark:bg-blue-950/60 dark:text-blue-400 font-semibold"
                    : "text-amber-900/80 dark:text-gray-300 hover:bg-amber-200/50 dark:hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Controls */}
          <div className="flex items-center space-x-3">
            {/* Desktop Light/Dark Toggle (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center bg-amber-200/50 dark:bg-gray-800 p-1 rounded-xl border border-amber-300/50 dark:border-gray-700">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  theme === "light"
                    ? "bg-white text-amber-950 shadow-sm"
                    : "text-amber-800 dark:text-gray-400"
                }`}
              >
                Light
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  theme === "dark"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-amber-800 dark:text-gray-400"
                }`}
              >
                Dark
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-amber-900 dark:text-gray-300 p-2 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-amber-200 dark:border-gray-800 bg-amber-100/95 dark:bg-gray-900 px-4 pt-3 pb-4 space-y-2">
          {/* Navigation Links */}
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium ${
                  isActive
                    ? "bg-amber-200 text-amber-950 dark:bg-blue-950/60 dark:text-blue-400 font-semibold"
                    : "text-amber-900 dark:text-gray-300 hover:bg-amber-200/50 dark:hover:bg-gray-800"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Light / Dark Mode Toggle inside Mobile Dropdown */}
          <div className="pt-3 border-t border-amber-200/70 dark:border-gray-800 flex items-center justify-between px-1">
            <span className="text-sm font-medium text-amber-900 dark:text-gray-300">
              Theme Mode
            </span>
            <div className="flex items-center bg-amber-200/60 dark:bg-gray-800 p-1 rounded-xl border border-amber-300/60 dark:border-gray-700">
              <button
                type="button"
                onClick={() => setTheme("light")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  theme === "light"
                    ? "bg-white text-amber-950 shadow-sm"
                    : "text-amber-800 dark:text-gray-400"
                }`}
              >
                Light
              </button>
              <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  theme === "dark"
                    ? "bg-blue-600 text-white shadow-sm"
                    : "text-amber-800 dark:text-gray-400"
                }`}
              >
                Dark
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
