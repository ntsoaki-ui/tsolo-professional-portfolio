
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaDownload,
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const isLight = theme === "light";

  const link = `relative transition-colors duration-300 ${
    isLight
      ? "text-[#526174] hover:text-[#2563EB]"
      : "text-[#C0C4CC] hover:text-[#60A5FA]"
  }`;

  const active = ({ isActive }) =>
    isActive
      ? `${link} ${isLight ? "text-[#2563EB]" : "text-[#60A5FA]"}`
      : link;

  // CV DOWNLOAD NOTIFICATION
  const handleDownloadCV = () => {
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbz5btFV5JIh1Ns7Lb7YnI9eEAnFXGcEgveJpEensvV3HQOe8H0w9_Gu2K3EmUApHGF7/exec";

    fetch(`${scriptUrl}?event=cv_download`, {
      method: "GET",
      mode: "no-cors",
      cache: "no-store",
    }).catch((error) => {
      console.error("CV notification request failed:", error);
    });
  };

  const navBackground = isLight
    ? "bg-[#F5F7FB]/95 border-[#111827]/10"
    : "bg-[#0D0D14]/95 border-white/10";

  const menuBackground = isLight
    ? "bg-[#F5F7FB]"
    : "bg-[#11111A]";

  const cvButton = `inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 font-semibold text-sm transition-all duration-300 hover:scale-[1.03] ${
    isLight
      ? "bg-[#3B82F6] text-white hover:bg-[#2563EB]"
      : "bg-[#3B82F6] text-white hover:bg-[#2563EB]"
  }`;

  const navItems = [
    ["Home", "/"],
    ["About", "/about"],
    ["Projects", "/projects"],
    ["Contact", "/contact"],
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 ${navBackground}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-10">
        {/* LOGO */}
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#3B82F6] shadow-md shadow-blue-500/20">
            <span className="text-lg font-bold text-white">NT</span>
          </div>

          <div>
            <h2
              className={`text-lg font-bold ${
                isLight ? "text-[#111827]" : "text-white"
              }`}
            >
              Ntsoaki Tsolo
            </h2>

            <p
              className={`text-xs ${
                isLight ? "text-[#2563EB]" : "text-[#60A5FA]"
              }`}
            >
              Software Developer
            </p>
          </div>
        </NavLink>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map(([label, path]) => (
            <NavLink key={path} to={path} className={active}>
              {({ isActive }) => (
                <>
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-underline"
                      className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-[#3B82F6]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            title={`Switch to ${isLight ? "dark" : "light"} mode`}
            className={`flex items-center justify-center gap-2 rounded-full border px-3 py-2 transition-colors duration-300 ${
              isLight
                ? "border-[#DCE3ED] text-[#111827] hover:bg-white"
                : "border-white/15 text-[#F3F4F6] hover:bg-white/5"
            }`}
          >
            {isLight ? <FaMoon /> : <FaSun />}
            <span className="text-sm">{isLight ? "Dark" : "Light"}</span>
          </button>

          {/* DOWNLOAD CV */}
          <a
            href="/NTSOAKI%20TSOLO'S%20PROFESSIONAL%20CV.pdf"
            download
            onClick={handleDownloadCV}
            className={cvButton}
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
            className={`rounded-full p-2 text-xl transition-colors ${
              isLight
                ? "text-[#111827] hover:text-[#2563EB]"
                : "text-[#F3F4F6] hover:text-[#60A5FA]"
            }`}
          >
            {isLight ? <FaMoon /> : <FaSun />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className={`text-2xl transition-colors ${
              isLight
                ? "text-[#111827] hover:text-[#2563EB]"
                : "text-white hover:text-[#60A5FA]"
            }`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`overflow-hidden border-t md:hidden ${
              isLight ? "border-[#DCE3ED]" : "border-white/10"
            } ${menuBackground}`}
          >
            <div className="flex flex-col gap-5 p-6">
              {navItems.map(([label, path]) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setOpen(false)}
                  className={active}
                >
                  {label}
                </NavLink>
              ))}

              <a
                href="/NTSOAKI%20TSOLO'S%20PROFESSIONAL%20CV.pdf"
                download
                onClick={() => {
                  handleDownloadCV();
                  setOpen(false);
                }}
                className={cvButton}
              >
                <FaDownload />
                Download CV
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
