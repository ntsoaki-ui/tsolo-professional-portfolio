
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VisitorTracker from "./components/VisitorTracker";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("portfolio-theme") || "light";
    } catch {
      return "light";
    }
  });

  const isDark = theme === "dark";

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    root.dataset.theme = theme;
    root.style.colorScheme = theme;

    root.style.setProperty("--accent", "#3B82F6");
    root.style.setProperty(
      "--accent-hover",
      isDark ? "#60A5FA" : "#2563EB"
    );
    root.style.setProperty(
      "--page-bg",
      isDark ? "#0D0D14" : "#F5F7FB"
    );
    root.style.setProperty(
      "--surface-bg",
      isDark ? "#15151F" : "#FFFFFF"
    );
    root.style.setProperty(
      "--text-primary",
      isDark ? "#F3F4F6" : "#111827"
    );
    root.style.setProperty(
      "--text-secondary",
      isDark ? "#A6ADBB" : "#526174"
    );
    root.style.setProperty(
      "--border-color",
      isDark ? "#292D3A" : "#DCE3ED"
    );

    body.style.backgroundColor = isDark ? "#0D0D14" : "#F5F7FB";
    body.style.color = isDark ? "#F3F4F6" : "#111827";
    body.style.transition =
      "background-color 300ms ease, color 300ms ease";

    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // Theme switching still works if storage is unavailable.
    }
  }, [theme, isDark]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  return (
    <BrowserRouter>
      {/* Background tracking only; no visible visitor counter. */}
      <VisitorTracker />

      <div
        className="min-h-screen flex flex-col transition-colors duration-300"
        style={{
          backgroundColor: "var(--page-bg)",
          color: "var(--text-primary)",
        }}
      >
        <Navbar
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <main className="flex-1 pt-20">
          <Routes>
            <Route
              path="/"
              element={<Home theme={theme} />}
            />
            <Route
              path="/about"
              element={<About theme={theme} />}
            />
            <Route
              path="/projects"
              element={<Projects theme={theme} />}
            />
            <Route
              path="/contact"
              element={<Contact theme={theme} />}
            />
          </Routes>
        </main>

        <Footer theme={theme} />
      </div>
    </BrowserRouter>
  );
}

export default App;
