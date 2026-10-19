import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0B0616] border-t border-purple-500/20 py-3 px-4">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">

        {/* LEFT SIDE */}
        <div className="text-center md:text-left">
          <p className="text-white text-xs">
            © {new Date().getFullYear()} Ntsoaki Tsolo
          </p>

          <p className="text-gray-500 text-[10px] mt-1">
            Software Developer • Network Technician • Problem Solver
          </p>
        </div>

        {/* RIGHT SIDE (ICONS) */}
        <div className="flex gap-5 text-base text-gray-400">
          <a href="https://github.com" className="hover:text-purple-400 transition">
            <FaGithub />
          </a>

          <a href="https://linkedin.com" className="hover:text-purple-400 transition">
            <FaLinkedin />
          </a>

          <a href="mailto:your@email.com" className="hover:text-purple-400 transition">
            <FaEnvelope />
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;