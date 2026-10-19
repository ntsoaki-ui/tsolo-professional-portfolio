
import profile from "../assets/profile.jpg";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
  FaDownload,
  FaCheckCircle,
} from "react-icons/fa";

function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 80, damping: 25 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 25 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 150);
      mouseY.set(e.clientY - 150);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <section
      className="relative min-h-screen overflow-hidden flex items-center px-6 py-16 transition-colors duration-300"
      style={{
        backgroundColor: "var(--page-bg)",
        color: "var(--text-primary)",
      }}
    >
      {/* Mouse-following glow */}
      <motion.div
        aria-hidden="true"
        className="fixed z-0 pointer-events-none w-[320px] h-[320px] rounded-full blur-[120px] bg-blue-500/10"
        style={{ translateX: springX, translateY: springY }}
      />

      {/* Background glow */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-[150px] pointer-events-none"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            className="uppercase tracking-[0.3em] text-xs font-semibold"
            style={{ color: "var(--accent)" }}
          >
            Software Developer • Network Technician
          </p>

          <h1 className="mt-5 text-5xl md:text-6xl font-black leading-tight">
            Hi,
            <br />
            I'm{" "}
            <span style={{ color: "var(--accent)" }}>
              Ntsoaki Tsolo
            </span>
          </h1>

          <div
            className="mt-5 text-xl h-8"
            style={{ color: "var(--accent)" }}
          >
            <Typewriter
              options={{ autoStart: true, loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full Stack Developer")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("Network Technician")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("System Analyst")
                  .pauseFor(1200)
                  .deleteAll()
                  .typeString("Cybersecurity Enthusiast")
                  .pauseFor(1200)
                  .start();
              }}
            />
          </div>

          <p
            className="mt-6 leading-7 max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Information Technology graduate from Limkokwing University
            of Creative Technology, passionate about software development,
            networking, cybersecurity, and building modern digital solutions.
          </p>

          <div className="flex gap-4 mt-8 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-white flex items-center gap-3 hover:scale-105 transition"
              style={{ backgroundColor: "var(--accent)" }}
            >
              Explore Projects <FaArrowRight />
            </a>

            <a
              href="/Ntsoaki_Tsolo_CV.pdf"
              download
              className="px-6 py-3 rounded-full border flex items-center gap-3 transition-colors duration-300 hover:bg-blue-500/10"
              style={{
                borderColor: "var(--border-color)",
                color: "var(--text-primary)",
              }}
            >
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            {[
              {
                href: "https://github.com/ntsoaki-ui",
                label: "GitHub",
                icon: <FaGithub />,
              },
              {
                href: "https://www.linkedin.com/in/ntsoaki-tsolo-11233a2b4",
                label: "LinkedIn",
                icon: <FaLinkedin />,
              },
              {
                href: "mailto:ntsoakitsolo372@gmail.com",
                label: "Email",
                icon: <FaEnvelope />,
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors duration-300 hover:bg-blue-500/10"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--accent)",
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          <div
            aria-hidden="true"
            className="absolute w-[350px] h-[350px] rounded-full bg-blue-500/10 blur-[120px]"
          />

          <motion.img
            src={profile}
            alt="Ntsoaki Tsolo"
            className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full object-cover border-4"
            style={{ borderColor: "var(--accent)" }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Availability badge */}
          <motion.div
            className="absolute bottom-5 left-2 sm:left-10 rounded-xl border px-4 py-3 shadow-lg"
            style={{
              backgroundColor: "var(--surface-bg)",
              borderColor: "var(--border-color)",
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-500" />
              <div>
                <p className="font-semibold text-sm">Available</p>
                <p
                  className="text-xs"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Open for Opportunities
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
