import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaCar,
  FaUsers,
  FaHospital,
  FaShoppingCart,
  FaGlobe,
  FaLaptopCode,
  FaExternalLinkAlt,
  FaGithub,
  FaCheck,
} from "react-icons/fa";

const categories = ["All", "Java", "React", "PHP", "JavaFX", "Python"];

const projects = [
  {
    title: "Vehicle Rental System",
    icon: <FaCar />,
    category: "JavaFX",
    tech: "Java • JavaFX • SQLite",
    description:
      "A desktop system for managing vehicles, customers, bookings and payments.",
    features: ["Vehicle Management", "Customer Management", "Bookings", "Reports"],
    live: "https://ntsoaki-ui.github.io/tsolovehiclerentalsystem/",
    github: "https://github.com/ntsoaki-ui/Tsolo-vehicle-rental-system",
  },
  {
    title: "Payroll Management System",
    icon: <FaUsers />,
    category: "JavaFX",
    tech: "Java • JavaFX • MySQL",
    description:
      "System for calculating salaries, generating payslips and managing employees.",
    features: ["Salary Calculation", "Payslips", "Employee Records", "Reports"],
    live: "https://ntsoaki-ui.github.io/tsolopayrollsystem/",
    github: "https://github.com/ntsoaki-ui/Tsolo-payroll-management-system",
  },
  {
    title: "Secure Health Management System",
    icon: <FaHospital />,
    category: "JavaFX",
    tech: "Java • JavaFX • MySQL",
    description:
      "Secure hospital system for patient records and appointments.",
    features: ["Patient Records", "Appointments", "Doctor Management", "Security"],
    live: "https://patientselfscheduling.onrender.com/",
    github: "https://github.com/ntsoaki-ui/patientselfscheduling",
  },
  {
  title: "Sesotho Learning Chatbot",
  icon: <FaLaptopCode />,
  category: "Python",
  tech: "Python • Flask • NLP • AI",
  description:
    "An intelligent chatbot designed to help users learn and practice Sesotho language. Currently under active development.",
  features: [
    "Sesotho Language Learning",
    "AI Chat Responses",
    "NLP Processing",
    "Interactive Learning System",
  ],

},
  {
    title: "YoursTech Company Website",
    icon: <FaGlobe />,
    category: "React",
    tech: "React • CSS",
    description:
      "Modern company website with responsive design and animations.",
    features: ["Responsive UI", "Services Page", "Contact Form", "Animations"],
    live: " https://yourstech-website.onrender.com",
    github: "https://github.com/ntsoaki-ui/yourstech-website",
  },
  {
    title: "Personal Portfolio",
    icon: <FaLaptopCode />,
    category: "React",
    tech: "React • Tailwind • Framer Motion",
    description:
      "My personal portfolio showcasing skills, projects and experience.",
    features: ["Project Showcase", "Animations", "Responsive Design", "Contact"],
   
  },
];

export default function Projects({ theme = "dark" }) {
  const [active, setActive] = useState("All");
  const navigate = useNavigate();

  // The parent application is the single source of truth for theme state.
  // Pass theme="light" or theme="dark" from the same state used by the Navbar.
  const isLight = theme === "light";

  // FIXED FILTER LOGIC (Java includes JavaFX)
  const filtered =
    active === "All"
      ? projects
      : active === "Java"
      ? projects.filter(
          (p) => p.category === "Java" || p.category === "JavaFX"
        )
      : projects.filter((p) => p.category === active);

  return (
    <section
      className="relative min-h-screen overflow-hidden px-6 py-20 transition-colors duration-300"
      style={{
        backgroundColor: isLight ? "#F5F7FB" : "#0D0D14",
        color: isLight ? "#111827" : "#F3F4F6",
      }}
    >
      {/* Subtle electric-blue background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-[#3B82F6]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-[#3B82F6]/10 blur-3xl"
      />
      <div className="relative z-10">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold">
          My <span style={{ color: isLight ? "#2563EB" : "#60A5FA" }}>Projects</span>
        </h1>
        <p className="mt-3" style={{ color: isLight ? "#526174" : "#A6ADBB" }}>
          A collection of my development work and systems
        </p>
      </div>

      {/* FILTERS */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className="px-5 py-2 rounded-full border transition-colors duration-300"
            style={{
              backgroundColor: active === cat ? "#3B82F6" : "transparent",
              color: active === cat ? "#FFFFFF" : (isLight ? "#526174" : "#C0C4CC"),
              borderColor: active === cat ? "#3B82F6" : (isLight ? "#DCE3ED" : "rgba(255,255,255,0.14)"),
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PROJECT GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {filtered.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1"
            style={{
              backgroundColor: isLight ? "#FFFFFF" : "#15151F",
              borderColor: isLight ? "#DCE3ED" : "#292D3A",
              boxShadow: isLight
                ? "0 8px 24px rgba(17,24,39,0.04)"
                : "0 8px 24px rgba(0,0,0,0.16)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#3B82F6"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = isLight ? "#DCE3ED" : "#292D3A"; }}
          >

            <div className="text-3xl" style={{ color: isLight ? "#2563EB" : "#60A5FA" }}>{p.icon}</div>

            <h2 className="text-xl font-bold mt-4">{p.title}</h2>

            <p className="text-sm mt-1" style={{ color: isLight ? "#2563EB" : "#60A5FA" }}>{p.tech}</p>

            <p className="text-sm mt-3 leading-6" style={{ color: isLight ? "#526174" : "#A6ADBB" }}>{p.description}</p>

            {/* FEATURES */}
            <div className="mt-4 space-y-2">
              {p.features.map((f) => (
                <div
                  key={f}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: isLight ? "#526174" : "#C0C4CC" }}
                >
                  <FaCheck style={{ color: isLight ? "#2563EB" : "#60A5FA" }} />
                  {f}
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 mt-6">
              <a
                href={p.live}
                className="flex-1 py-2 rounded text-center flex items-center justify-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB]"
                style={{ backgroundColor: "#3B82F6" }}
              >
                Live <FaExternalLinkAlt />
              </a>

              <a
                href={p.github}
                className="flex-1 border py-2 rounded text-center flex items-center justify-center gap-2 text-sm transition-colors duration-300 hover:bg-[#3B82F6]/10"
                style={{
                  borderColor: isLight ? "#DCE3ED" : "#3B82F6",
                  color: isLight ? "#2563EB" : "#60A5FA",
                }}
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-20 text-center">
        {[
          ["6+", "Projects"],
          ["4+", "Technologies"],
          ["100%", "Dedication"],
          ["2+", "Years Learning"],
        ].map(([num, label]) => (
          <div
            key={label}
            className="rounded-xl border p-6 transition-colors duration-300"
            style={{
              backgroundColor: isLight ? "#FFFFFF" : "#15151F",
              borderColor: isLight ? "#DCE3ED" : "#292D3A",
            }}
          >
            <h3 className="text-2xl font-bold" style={{ color: isLight ? "#2563EB" : "#60A5FA" }}>{num}</h3>
            <p style={{ color: isLight ? "#526174" : "#A6ADBB" }}>{label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">
          Interested in working together?
        </h2>
        <p className="mt-2" style={{ color: isLight ? "#526174" : "#A6ADBB" }}>
          Let’s build something amazing together.
        </p>

        <button
          onClick={() => navigate("/contact")}
          className="mt-6 px-8 py-3 rounded-full bg-[#3B82F6] text-white font-semibold transition-colors duration-300 hover:bg-[#2563EB]"
        >
          Contact Me
        </button>
      </div>
      </div>
    </section>
  );
}