import React, { useState } from "react";
import { motion } from "motion/react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      className="flex items-center justify-between w-full max-w-[1280px] mx-auto py-4 md:py-6 px-4 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo */}
      <div className="flex-shrink-0">
        <a href="#">
          <picture>
            <img src="../images/logo.svg" alt="logo" />
          </picture>
        </a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-8 lg:gap-12 flex-1 ml-12">
        <ul className="flex items-center gap-6 lg:gap-10">
          <li>
            <a
              href="#"
              className="text-greyNeutral-500 text-base lg:text-lg font-bold hover:text-greyNeutral-400 transition active:text-greyNeutral-950"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-greyNeutral-500 text-base lg:text-lg font-bold hover:text-greyNeutral-400 transition active:text-greyNeutral-950"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-greyNeutral-500 text-base lg:text-lg font-bold hover:text-greyNeutral-400 transition active:text-greyNeutral-950"
            >
              Resources
            </a>
          </li>
        </ul>
      </nav>

      {/* Desktop Auth Buttons */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        <button
          type="button"
          className="text-greyNeutral-500 text-base lg:text-lg font-bold bg-none hover:text-greyNeutral-400 transition"
        >
          Login
        </button>
        <motion.button
          type="button"
          className="text-white text-base lg:text-lg font-bold bg-bluePrimary-400 px-6 lg:px-8 py-2 lg:py-3 rounded-full hover:bg-bluePrimary-300 transition active:bg-opacity-80"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Sign Up
        </motion.button>
      </div>

      {/* Mobile Hamburger Menu Button */}
      <button
        type="button"
        className="md:hidden w-6 h-6 flex flex-col justify-center items-center gap-1.5"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`w-6 h-0.5 bg-greyNeutral-500 transition-transform ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-greyNeutral-500 transition-opacity ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-greyNeutral-500 transition-transform ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 p-8 bg-purplePrimary-950 md:hidden shadow-lg mt-2 rounded-lg mx-4 z-50">
          <ul className="flex flex-col py-3 text-center gap-6">
            <li>
              <a
                href="#"
                className="block px-6 text-white font-bold hover:text-bluePrimary-400 transition"
              >
                Features
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block px-6 text-white font-bold hover:text-bluePrimary-400 transition"
              >
                Pricing
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block px-6 text-white font-bold hover:text-bluePrimary-400 transition"
              >
                Resources
              </a>
            </li>

            {/* Divider line (MUST be inside <li> for valid syntax) */}
            <li>
              <div className="h-[1px] w-full bg-greyNeutral-400"></div>
            </li>

            <li className="pt-4">
              <a
                href="#"
                className="block px-6 text-white font-bold hover:text-bluePrimary-400 transition"
              >
                Login
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block px-6 bg-bluePrimary-400 text-white font-bold rounded-full text-center w-full py-3 active:bg-opacity-80 active:text-white"
              >
                Sign Up
              </a>
            </li>
          </ul>
        </nav>
      )}
    </motion.header>
  );
};

export default Header;
