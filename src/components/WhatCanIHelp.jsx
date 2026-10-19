
import { motion } from "framer-motion";
import {
  FaCode,
  FaNetworkWired,
  FaShieldAlt,
  FaDatabase,
  FaDesktop,
  FaArrowRight,
} from "react-icons/fa";

function WhatCanIHelp() {
  const services = [
    {
      icon: FaCode,
      title: "Software Development",
      description:
        "Build modern web applications, desktop systems and practical software solutions.",
    },
    {
      icon: FaNetworkWired,
      title: "Network Support",
      description:
        "Assist with network configuration, connectivity, troubleshooting and infrastructure.",
    },
    {
      icon: FaShieldAlt,
      title: "Cybersecurity",
      description:
        "Help improve system security through secure practices, monitoring and basic protection.",
    },
    {
      icon: FaDatabase,
      title: "Database Solutions",
      description:
        "Design, manage and organise databases for reliable and efficient applications.",
    },
    {
      icon: FaDesktop,
      title: "IT Support",
      description:
        "Troubleshoot hardware, software, Windows systems, printers and other IT issues.",
    },
  ];

  return (
    <section className="relative overflow-hidden px-6 py-24">
      {/* Background Glow */}
      <div
        className="
          pointer-events-none absolute left-1/2 top-20
          h-[300px] w-[500px] -translate-x-1/2
          rounded-full bg-[#3B82F6]/10 blur-[120px]
        "
      />

      <div className="relative mx-auto max-w-6xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-[#3B82F6]">
            HOW I CAN HELP
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            What Can I
            <span className="text-[#3B82F6]">
              {" "}Help You With?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[var(--text-secondary)]">
            Whether you need software, technical support,
            networking or a digital solution, let's turn
            your idea or challenge into something practical.
          </p>
        </motion.div>

        {/* SERVICE CARDS */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="
                  group relative rounded-2xl border
                  border-[var(--border-color)]
                  bg-[var(--surface-bg)]/60 p-6
                  backdrop-blur-xl transition-all duration-300
                  hover:border-[#3B82F6]/50
                  hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]
                "
              >
                {/* Card Glow */}
                <div
                  className="
                    pointer-events-none absolute inset-0
                    rounded-2xl bg-[#3B82F6]/5
                    opacity-0 transition duration-300
                    group-hover:opacity-100
                  "
                />

                <div className="relative">
                  {/* ICON */}
                  <div
                    className="
                      flex h-12 w-12 items-center justify-center
                      rounded-xl border border-[#3B82F6]/20
                      bg-[#3B82F6]/10 text-lg text-[#3B82F6]
                      transition duration-300
                      group-hover:bg-[#3B82F6]
                      group-hover:text-white
                      group-hover:shadow-[0_0_20px_rgba(59,130,246,0.45)]
                    "
                  >
                    <Icon />
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-5 text-lg font-bold">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
                    {service.description}
                  </p>

                  {/* INTERACTION */}
                  <a
                    href="#contact"
                    className="
                      mt-5 inline-flex cursor-pointer
                      items-center gap-2 text-sm font-medium
                      text-[#3B82F6] transition
                      hover:text-[#60A5FA]
                    "
                  >
                    Learn More
                    <FaArrowRight
                      className="
                        text-xs transition
                        group-hover:translate-x-1
                      "
                    />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[var(--text-secondary)]">
            Have something different in mind?
          </p>

          <a
            href="#contact"
            className="
              mt-4 inline-flex items-center gap-2
              rounded-full bg-[#3B82F6] px-6 py-3
              text-sm font-medium text-white
              transition duration-300
              hover:scale-105 hover:bg-[#2563EB]
              hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]
            "
          >
            Let's Talk
            <FaArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default WhatCanIHelp;
