import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

import { SiCisco } from "react-icons/si";

function About() {
  return (
    <section
      className="
      relative
      min-h-screen
      bg-[var(--page-bg)]
      text-[var(--accent)]
      overflow-hidden
      "
    >

      {/* ================================
          BACKGROUND GLOW
      ================================= */}

      <div
        className="
        absolute
        top-0
        left-0
        w-72
        h-72
        bg-[#3B82F6]/20
        blur-3xl
        rounded-full
        pointer-events-none
        "
      ></div>

      <div
        className="
        absolute
        bottom-0
        right-0
        w-72
        h-72
        bg-[#3B82F6]/10
        blur-3xl
        rounded-full
        pointer-events-none
        "
      ></div>


      {/* ================================
          MAIN CONTAINER
      ================================= */}

      <div
        className="
        relative
        max-w-6xl
        mx-auto
        px-6
        py-20
        "
      >


        {/* ================================
            HEADER
        ================================= */}

        <div className="mb-12">

          <p
            className="
            text-[var(--accent)]
            uppercase
            tracking-[0.25em]
            text-xs
            font-semibold
            "
          >
            About Me
          </p>

        </div>


        {/* ================================
            HERO SECTION
        ================================= */}

        <div
          className="
          grid
          lg:grid-cols-2
          gap-12
          items-center
          "
        >


          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <h1
              className="
              text-4xl
              lg:text-5xl
              font-bold
              leading-tight
              "
            >

              Hi, I'm{" "}

              <span className="text-[var(--accent)]">
                Ntsoaki Tsolo
              </span>

            </h1>


            <p
              className="
              mt-3
              text-sm
              lg:text-base
              text-[var(--text-secondary)]
              "
            >
              Full-Stack Engineer • Problem Solver • Innovator
            </p>


            <p
              className="
              mt-6
              text-sm
              leading-7
              text-[var(--text-secondary)]
              max-w-xl
              "
            >

              I'm a software developer and networking enthusiast
              focused on building clean, scalable and practical
              digital systems.

              <br />
              <br />

              My journey started with curiosity about how systems
              work, leading me to study Information Technology at
              Limkokwing University of Creative Technology.

              <br />
              <br />

              I gained hands-on experience at
              <span className="text-[var(--accent)] font-medium">
                {" "}YoursTech
              </span>
              <span className="text-[var(--accent)] font-medium">
                {", "}Parliament of Lesotho – The Senate
              </span>
              {", "}
              {" "}and
              <span className="text-[var(--accent)] font-medium">
                {" "}WonderTech 
              </span>
              , working with React, PHP, networking systems,
              network configuration, CCTV systems, procurement and IT support.

            </p>


            {/* SOCIAL BUTTONS */}

            <div
              className="
              flex
              flex-wrap
              gap-3
              mt-7
              "
            >

              {/* EMAIL */}

              <a
                href="mailto:ntsoakitsolo372@gmail.com"
                className="
                w-11
                h-11
                flex
                items-center
                justify-center
                border
                border-[var(--border-color)]
                rounded-xl
                bg-[var(--surface-bg)]/80
                hover:bg-[#3B82F6]/10
                hover:border-[#3B82F6]/60
                hover:text-[var(--accent)]
                hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
                transition-all
                duration-300
                "
              >

                <FaEnvelope />

              </a>


              {/* LINKEDIN */}

              <a
                href="https://www.linkedin.com/in/ntsoaki-tsolo-11233a2b4"
                target="_blank"
                rel="noreferrer"
                className="
                w-11
                h-11
                flex
                items-center
                justify-center
                border
                border-[var(--border-color)]
                rounded-xl
                bg-[var(--surface-bg)]/80
                hover:bg-[#3B82F6]/10
                hover:border-[#3B82F6]/60
                hover:text-[var(--accent)]
                hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
                transition-all
                duration-300
                "
              >

                <FaLinkedin />

              </a>


              {/* GITHUB */}

              <a
                href="https://github.com/ntsoaki-ui"
                target="_blank"
                rel="noreferrer"
                className="
                w-11
                h-11
                flex
                items-center
                justify-center
                border
                border-[var(--border-color)]
                rounded-xl
                bg-[var(--surface-bg)]/80
                hover:bg-[#3B82F6]/10
                hover:border-[#3B82F6]/60
                hover:text-[var(--accent)]
                hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]
                transition-all
                duration-300
                "
              >

                <FaGithub />

              </a>

            </div>

          </motion.div>


          {/* RIGHT SIDE - PROFILE */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
            relative
            flex
            justify-center
            "
          >

            {/* PROFILE GLOW */}

            <div
              className="
              absolute
              w-72
              h-72
              bg-[3B82F6]/20
              blur-3xl
              rounded-full
              "
            ></div>


            {/* IMAGE */}

            <img
              src="/profile.jpg"
              alt="Ntsoaki Tsolo"
              className="
              relative
              w-64
              h-64
              lg:w-72
              lg:h-72
              rounded-full
              border-4
              object-cover
              shadow-[0_0_35px_rgba(59,130,246,0.25)]
              "
              style={{ borderColor: "var(--accent)" }}
            />

          </motion.div>

        </div>


        {/* ================================
            JOURNEY + EXPERIENCE
        ================================= */}

        <div
          className="
          mt-20
          grid
          lg:grid-cols-2
          gap-12
          "
        >


          {/* JOURNEY */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <h2
              className="
              text-2xl
              font-bold
              mb-8
              "
            >

              My{" "}

              <span className="text-[var(--accent)]">
                Journey
              </span>

            </h2>


            <div
              className="
              relative
              pl-6
              "
            >

              {/* TIMELINE LINE */}

              <div
                className="
                absolute
                left-2
                top-0
                bottom-0
                w-[2px]
                bg-[#3B82F6]/30
                "
              ></div>


              {[
                [
                  "Where It Started",
                  "Curiosity about how systems work led me into programming.",
                ],

                [
                  "University",
                  "Studied Information Technology at Limkokwing University of Creative Technology.",
                ],
                

                [
                  "YoursTech",
                  "Worked as a Network Technician Intern, gaining experience in networking, CCTV systems, internet connectivity, React, PHP and IT support.",
                ],

                [
                  "Parliament of Lesotho – The Senate",
                  "Gained practical experience as an Assistant System Support Officer assisting with IT-related tasks, networking systems and technical support.",
                ],

                [
                  "WonderTech",
                  "Worked as an Assistant Procurement Officer, Office Technician supporting procurement activities and assisting staff with technical issues and troubleshooting.",
                ],


                [
                  "Future",
                  "Aiming to become a Full-Stack Engineer while continuing to grow in networking, cybersecurity and system development.",
                ],

              ].map((item, i) => (

                <div
                  key={i}
                  className="relative mb-8"
                >

                  {/* TIMELINE DOT */}

                  <div
                    className="
                    absolute
                    -left-[19px]
                    top-1
                    w-3
                    h-3
                    rounded-full
                    bg-[#3B82F6]
                    shadow-[0_0_12px_rgba(59,130,246,0.7)]
                    "
                  ></div>


                  <h3
                    className="
                    text-sm
                    font-semibold
                    "
                  >

                    {item[0]}

                  </h3>


                  <p
                    className="
                    text-[var(--text-secondary)]
                    text-xs
                    mt-1
                    leading-5
                    "
                  >

                    {item[1]}

                  </p>

                </div>

              ))}

            </div>

          </motion.div>


          {/* EXPERIENCE + EDUCATION */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
            className="space-y-6"
          >

            
            {/* YOURSTECH EXPERIENCE */}

            <div
              className="
              bg-[var(--surface-bg)]/80
              p-6
              rounded-xl
              border
              border-[var(--border-color)]
              shadow-[0_0_25px_rgba(59,130,246,0.15)]
              hover:border-[#3B82F6]/60
              hover:shadow-[0_0_35px_rgba(59,130,246,0.30)]
              transition-all
              duration-300
              "
            >

              <h3
                className="
                text-[var(--accent)]
                font-semibold
                mb-3
                "
              >

                Experience

              </h3>


              <p className="font-medium">

                YoursTech

              </p>


              <p
                className="
                text-[var(--accent)]
                text-sm
                mb-4
                "
              >

                Network Technician Intern

              </p>


              <ul
                className="
                text-[var(--text-secondary)]
                text-sm
                space-y-2
                "
              >

                <li>
                  • React Development
                </li>

                <li>
                  • PHP Development
                </li>

                <li>
                  • Network Configuration
                </li>

                <li>
                  • CCTV Systems
                </li>

                <li>
                  • Internet Connectivity
                </li>

                

              </ul>

            </div>


            {/* PARLIAMENT EXPERIENCE */}

            <div
              className="
              bg-[var(--surface-bg)]/80
              p-6
              rounded-xl
              border
              border-[var(--border-color)]
              shadow-[0_0_25px_rgba(59,130,246,0.15)]
              hover:border-[#3B82F6]/60
              hover:shadow-[0_0_35px_rgba(59,130,246,0.30)]
              transition-all
              duration-300
              "
            >

              <h3
                className="
                text-[var(--accent)]
                font-semibold
                mb-3
                "
              >
                Parliament Experience
              </h3>


              <p className="font-medium">

                Parliament of Lesotho – The Senate

              </p>


              <p
                className="
                text-[var(--accent)]
                text-sm
                mt-1
                mb-4
                "
              >

                Assistant System Support Officer (volunteer)

              </p>


              <ul
                className="
                text-[var(--text-secondary)]
                text-sm
                space-y-2
                "
              >
                <li>
                  • IT Support
                </li>

                <li>
                  • Assisted with network-related tasks
                </li>


                <li>
                  • Assisted with technical troubleshooting
                </li>

                <li>
                  • Worked with IT infrastructure and connectivity
                </li>

              </ul>

            </div>

            {/* WONDERTECH – ASSISTANT PROCUREMENT OFFICER */}

            <div
              className="
              bg-[var(--surface-bg)]/80
              p-6
              rounded-xl
              border
              border-[var(--border-color)]
              shadow-[0_0_25px_rgba(59,130,246,0.15)]
              hover:border-[#3B82F6]/60
              hover:shadow-[0_0_35px_rgba(59,130,246,0.30)]
              transition-all
              duration-300
              "
            >
              <h3
                className="
                text-[var(--accent)]
                font-semibold
                mb-3
                "
              >
                WonderTech Experience
              </h3>

              <p className="font-medium">
                WonderTech
              </p>

              <p
                className="
                text-[var(--accent)]
                text-sm
                mt-1
                mb-4
                "
              >
                Assistant Procurement Officer, Office Technician
              </p>

              <ul
                className="
                text-[var(--text-secondary)]
                text-sm
                space-y-2
                "
              >
                <li>• Requesting and following up on supplier quotations</li>
                <li>• Communicating with suppliers about product specifications and pricing</li>
                <li>• Assisting with procurement documentation and quotation comparisons</li>
                 <li>• Supporting day-to-day office technology and equipment</li>
                <li>• Assisting with technical issues and office systems</li>
                <li>• Helping maintain smooth office operations</li>
              </ul>
            </div>

            

            {/* EDUCATION */}

            <div
              className="
              bg-[var(--surface-bg)]/80
              p-6
              rounded-xl
              border
              border-[var(--border-color)]
              shadow-[0_0_25px_rgba(59,130,246,0.15)]
              hover:border-[#3B82F6]/60
              hover:shadow-[0_0_35px_rgba(59,130,246,0.30)]
              transition-all
              duration-300
              "
            >

              <h3
                className="
                text-[var(--accent)]
                font-semibold
                mb-3
                "
              >

                Education

              </h3>


              <p className="font-medium">

                Diploma in Information Technology

              </p>


              <p
                className="
                text-[var(--text-secondary)]
                text-sm
                mt-1
                "
              >

                Limkokwing University of Creative Technology

              </p>


              <p
                className="
                text-[var(--text-secondary)]
                text-xs
                mt-1
                "
              >

                Lesotho

              </p>

            </div>

          </motion.div>

        </div>


        {/* ================================
            WHAT I BUILD
        ================================= */}

        <div className="mt-20">

          <h2
            className="
            text-2xl
            font-bold
            text-center
            mb-10
            "
          >

            What{" "}

            <span className="text-[var(--accent)]">
              I Build
            </span>

          </h2>


          <div
            className="
            grid
            md:grid-cols-3
            gap-6
            "
          >

            {[

              [
                "🛒",
                "Distributed Shopping System",
                "A scalable distributed database system designed for online shopping platforms."
              ],

              [
                "🚗",
                "Vehicle Rental System",
                "A complete system for vehicle management, bookings, payments and customer management."
              ],

              [
                "💻",
                "Continuous Learning",
                "Always exploring new technologies and improving my software development and networking skills."
              ],

            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="
                bg-[var(--surface-bg)]/80
                p-6
                rounded-xl
                border
                border-[var(--border-color)]
                shadow-[0_0_25px_rgba(59,130,246,0.15)]
                hover:border-[#3B82F6]/60
                hover:shadow-[0_0_35px_rgba(59,130,246,0.30)]
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >

                <div className="text-2xl mb-4">

                  {item[0]}

                </div>


                <h3
                  className="
                  text-sm
                  font-semibold
                  mb-2
                  "
                >

                  {item[1]}

                </h3>


                <p
                  className="
                  text-[var(--text-secondary)]
                  text-xs
                  leading-6
                  "
                >

                  {item[2]}

                </p>

              </motion.div>

            ))}

          </div>

        </div>


        {/* ================================
            TECHNICAL SKILLS
        ================================= */}

        <div className="mt-20">

          <h2
            className="
            text-2xl
            font-bold
            text-center
            mb-10
            "
          >

            Technical{" "}

            <span className="text-[var(--accent)]">
              Skills
            </span>

          </h2>


          <div
            className="
            grid
            md:grid-cols-5
            gap-6
            "
          >

            {[

              {
                title: "Frontend",
                items: [
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "React",
                  "Tailwind"
                ]
              },

              {
                title: "Backend",
                items: [
                  "Java",
                  "PHP",
                  "Node.js",
                  "Express"
                ]
              },

              {
                title: "Database",
                items: [
                  "MySQL",
                  "PostgreSQL",
                  "Firebase",
                  "NoSQL"
                ]
              },

              {
                title: "Networking",
                items: [
                  "Cisco",
                  "TCP/IP",
                  "LAN/WAN",
                  "Routing"
                ]
              },

              {
                title: "Tools",
                items: [
                  "Git",
                  "GitHub",
                  "VS Code",
                  "Figma"
                ]
              },

            ].map((section, i) => (

              <div
                key={i}
                className="
                bg-[var(--surface-bg)]/60
                border
                border-[var(--border-color)]
                rounded-xl
                p-5
                shadow-[0_0_20px_rgba(59,130,246,0.10)]
                hover:border-[#3B82F6]/50
                hover:shadow-[0_0_25px_rgba(59,130,246,0.20)]
                transition-all
                duration-300
                "
              >

                <h3
                  className="
                  text-[var(--accent)]
                  font-semibold
                  mb-4
                  text-sm
                  "
                >

                  {section.title}

                </h3>


                <ul
                  className="
                  space-y-2
                  text-[var(--text-secondary)]
                  text-xs
                  "
                >

                  {section.items.map((skill, j) => (

                    <li key={j}>

                      <span className="text-[var(--accent)]">
                        •
                      </span>

                      {" "}

                      {skill}

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>


        {/* ================================
            CAREER + CERTIFICATION
        ================================= */}

        <div
          className="
          mt-20
          grid
          md:grid-cols-2
          gap-8
          "
        >


          {/* CAREER GOAL */}

          <div
            className="
            bg-[var(--surface-bg)]/80
            p-7
            rounded-xl
            border
            border-[var(--border-color)]
            shadow-[0_0_25px_rgba(59,130,246,0.15)]
            hover:border-[#3B82F6]/60
            hover:shadow-[0_0_35px_rgba(59,130,246,0.30)]
            transition-all
            duration-300
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              mb-5
              "
            >

              Career{" "}

              <span className="text-[var(--accent)]">
                Goal
              </span>

            </h2>


            <p
              className="
              text-[var(--text-secondary)]
              text-sm
              leading-7
              "
            >

              My goal is to become a Full-Stack Software Engineer
              and Network Technician, building scalable systems,
              secure applications and reliable infrastructure that
              solve real-world problems.

            </p>


            <div
              className="
              mt-6
              space-y-3
              text-sm
              text-[var(--text-secondary)]
              "
            >

              <p>
                <span className="text-[var(--accent)]">•</span>{" "}
                Build modern web applications using React, Java and PHP
              </p>

              <p>
                <span className="text-[var(--accent)]">•</span>{" "}
                Design scalable backend systems and APIs
              </p>

              <p>
                <span className="text-[var(--accent)]">•</span>{" "}
                Manage secure network infrastructure
              </p>

            </div>

          </div>


          {/* CERTIFICATION */}

          <div
            className="
            bg-[var(--surface-bg)]/80
            p-7
            rounded-xl
            border
            border-[var(--border-color)]
            shadow-[0_0_25px_rgba(59,130,246,0.15)]
            hover:border-[#3B82F6]/60
            hover:shadow-[0_0_35px_rgba(59,130,246,0.30)]
            transition-all
            duration-300
            "
          >

            <h2
              className="
              text-2xl
              font-bold
              mb-6
              "
            >

              <span className="text-[var(--accent)]">
                Certification
              </span>

            </h2>


            <div
              className="
              flex
              items-center
              gap-4
              mb-5
              "
            >

              <div
                className="
                w-12
                h-12
                rounded-xl
                bg-[#3B82F6]/20
                border
                border-primary/30
                flex
                items-center
                justify-center
                text-[var(--accent)]
                shadow-[0_0_20px_rgba(59,130,246,0.25)]
                "
              >

                <SiCisco size={22} />

              </div>


              <div>

                <h3 className="font-semibold text-sm">

                  Cisco Networking Academy

                </h3>


                <p
                  className="
                  text-[var(--accent)]
                  text-xs
                  mt-1
                  "
                >

                  Networking Basics

                </p>

              </div>

            </div>


            <p
              className="
              text-[var(--text-secondary)]
              text-sm
              leading-7
              "
            >

              Completed Cisco Networking Basics covering IP
              addressing, routing, switching and fundamental
              networking concepts.

            </p>

          </div>

        </div>


        {/* ================================
            CONNECT
        ================================= */}

        <div
          className="
          mt-20
          text-center
          border-t
          border-[var(--border-color)]
          pt-12
          "
        >

          <h2
            className="
            text-3xl
            font-bold
            mb-4
            "
          >

            Let's{" "}

            <span className="text-[var(--accent)]">
              Connect
            </span>

          </h2>


          <p
            className="
            text-[var(--text-secondary)]
            text-sm
            max-w-xl
            mx-auto
            leading-6
            "
          >

            I'm open to career opportunities, internships, collaborations, and software development projects. 
            Feel free to reach out to connect or discuss potential opportunities.

          </p>


          {/* SOCIAL LINKS */}

          <div
            className="
            flex
            justify-center
            gap-4
            mt-8
            "
          >

            <a
              href="mailto:ntsoakitsolo372@gmail.com"
              className="
              w-11
              h-11
              flex
              items-center
              justify-center
              border
              border-[var(--border-color)]
              rounded-xl
              bg-[var(--surface-bg)]/80
              hover:bg-[#3B82F6]/10
              hover:border-[#3B82F6]/60
              hover:text-[var(--accent)]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.30)]
              transition-all
              duration-300
              "
            >

              <FaEnvelope />

            </a>


            <a
              href="https://www.linkedin.com/in/ntsoaki-tsolo-11233a2b4"
              target="_blank"
              rel="noreferrer"
              className="
              w-11
              h-11
              flex
              items-center
              justify-center
              border
              border-[var(--border-color)]
              rounded-xl
              bg-[var(--surface-bg)]/80
              hover:bg-[#3B82F6]/10
              hover:border-[#3B82F6]/60
              hover:text-[var(--accent)]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.30)]
              transition-all
              duration-300
              "
            >

              <FaLinkedin />

            </a>


            <a
              href="https://github.com/ntsoaki-ui"
              target="_blank"
              rel="noreferrer"
              className="
              w-11
              h-11
              flex
              items-center
              justify-center
              border
              border-[var(--border-color)]
              rounded-xl
              bg-[var(--surface-bg)]/80
              hover:bg-[#3B82F6]/10
              hover:border-[#3B82F6]/60
              hover:text-[var(--accent)]
              hover:shadow-[0_0_20px_rgba(59,130,246,0.30)]
              transition-all
              duration-300
              "
            >

              <FaGithub />

            </a>

          </div>


          {/* FOOTER */}

          <p
            className="
            text-[var(--text-secondary)]
            text-xs
            mt-10
            "
          >

            © {new Date().getFullYear()} Ntsoaki Tsolo.
            All Rights Reserved.

          </p>

        </div>

      </div>

    </section>
  );
}

export default About;