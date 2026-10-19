

import profile from "../assets/profile.jpg";



import WhatCanIHelp from "../components/WhatCanIHelp";


import {

  motion,

  useMotionValue,

  useSpring

} from "framer-motion";



import { useEffect } from "react";



import Typewriter from "typewriter-effect";



import {

  FaGithub,

  FaLinkedin,

  FaEnvelope,

  FaArrowRight,

  FaCheckCircle

} from "react-icons/fa";



function Home() {

  const trackSocialClick = (platform) => {

    const scriptUrl =

      "https://script.google.com/macros/s/AKfycbz5btFV5JIh1Ns7Lb7YnI9eEAnFXGcEgveJpEensvV3HQOe8H0w9_Gu2K3EmUApHGF7/exec";



    fetch(`${scriptUrl}?event=${platform}_click`, {

      method: "GET",

      mode: "no-cors",

      cache: "no-store",

    }).catch((error) => {

      console.error("Social click notification failed:", error);

    });

  };



  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);



  const springX = useSpring(mouseX, {

    stiffness: 80,

    damping: 25

  });



  const springY = useSpring(mouseY, {

    stiffness: 80,

    damping: 25

  });



  useEffect(() => {

    const move = (e) => {

      mouseX.set(e.clientX - 150);

      mouseY.set(e.clientY - 150);

    };



    window.addEventListener("mousemove", move);



    return () => {

      window.removeEventListener("mousemove", move);

    };

  }, [mouseX, mouseY]);



  return (

    <div className="relative min-h-screen flex flex-col overflow-hidden bg-[var(--page-bg)] text-[var(--text-primary)]">



      {/* MOUSE GLOW */}

      <motion.div

        className="fixed w-[320px] h-[320px] rounded-full bg-[#3B82F6]/20 blur-[120px] pointer-events-none z-0"

        style={{

          translateX: springX,

          translateY: springY

        }}

      />



      {/* TOP BACKGROUND GLOW */}

      <motion.div

        className="absolute top-[-80px] left-[-80px] w-[500px] h-[500px] rounded-full bg-[#3B82F6]/20 blur-[150px] pointer-events-none"

        animate={{

          x: [0, 40, 0],

          y: [0, 30, 0]

        }}

        transition={{

          duration: 10,

          repeat: Infinity

        }}

      />



      {/* BOTTOM BACKGROUND GLOW */}

      <motion.div

        className="absolute bottom-[-100px] right-[-100px] w-[450px] h-[450px] rounded-full bg-[#3B82F6]/10 blur-[150px] pointer-events-none"

        animate={{

          x: [0, -30, 0],

          y: [0, -30, 0]

        }}

        transition={{

          duration: 12,

          repeat: Infinity

        }}

      />



      <main className="flex-1 relative z-10">



        {/* HERO */}



        <section

          id="home"

          className="relative min-h-0 flex items-center px-6 py-4 md:py-6"

        >

          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-center w-full">



            {/* LEFT CONTENT */}



            <motion.div

              initial={{

                opacity: 0,

                x: -50

              }}

              animate={{

                opacity: 1,

                x: 0

              }}

              transition={{

                duration: 0.8

              }}

            >

              <p className="text-[var(--accent)] uppercase tracking-[0.3em] text-xs">

                Software Developer • Network Technician • IT Support Specialist

              </p>



              <h1 className="mt-3 text-5xl md:text-6xl font-black leading-tight">

                Hi,

                <br />

                I'm

                <span className="text-[var(--accent)]">

                  {" "}Ntsoaki Tsolo

                </span>

              </h1>



              {/* TYPEWRITER */}



              <div className="mt-3 text-xl text-[var(--accent)] h-8">

                <Typewriter

                  options={{

                    autoStart: true,

                    loop: true

                  }}

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

                      .deleteAll()

                      .start();

                  }}

                />

              </div>



              <p className="mt-3 text-[var(--text-secondary)] leading-7 max-w-xl">

                Information Technology graduate from Limkokwing University

                of Creative Technology, passionate about software development,

                networking, IT support and building secure, practical,

                user-focused technology solutions.

              </p>



              {/* BUTTONS */}



              <div className="flex gap-3 mt-5 flex-wrap">

                <a

                  href="#projects"

                  className="px-5 py-2.5 rounded-full bg-[#3B82F6] text-[var(--text-primary)] flex items-center gap-2 text-sm font-medium hover:bg-[#2563EB] hover:shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:scale-105 transition duration-300"

                >

                  Explore Projects

                  <FaArrowRight className="text-xs" />

                </a>



                <a

                  href="#contact"

                  className="px-5 py-2.5 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] flex items-center gap-2 text-sm font-medium hover:bg-[#3B82F6]/10 hover:border-[#3B82F6]/50 hover:text-[var(--accent)] transition duration-300"

                >

                  Hire Me

                  <FaArrowRight className="text-xs" />

                </a>

              </div>



              {/* SOCIAL LINKS */}



              <div className="flex gap-4 mt-5">

                <a

                  href="https://github.com/ntsoaki-ui"

                  onClick={() => trackSocialClick("github")}

                  target="_blank"

                  rel="noreferrer"

                  aria-label="GitHub"

                  className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[#3B82F6]/10 hover:border-[#3B82F6] hover:text-[var(--accent)] hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition"

                >

                  <FaGithub />

                </a>



                <a

                  href="https://www.linkedin.com/in/ntsoaki-tsolo-11233a2b4"

                  onClick={() => trackSocialClick("linkedin")}

                  target="_blank"

                  rel="noreferrer"

                  aria-label="LinkedIn"

                  className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[#3B82F6]/10 hover:border-[#3B82F6] hover:text-[var(--accent)] hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition"

                >

                  <FaLinkedin />

                </a>



                <a

                  href="mailto:ntsoakitsolo372@gmail.com"

                  onClick={() => trackSocialClick("gmail")}

                  aria-label="Email"

                  className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[#3B82F6]/10 hover:border-[#3B82F6] hover:text-[var(--accent)] hover:shadow-[0_0_15px_rgba(59,130,246,0.25)] transition"

                >

                  <FaEnvelope />

                </a>

              </div>

            </motion.div>



            {/* RIGHT PROFILE IMAGE */}



            <motion.div

              initial={{

                opacity: 0,

                x: 50

              }}

              animate={{

                opacity: 1,

                x: 0

              }}

              transition={{

                duration: 0.9

              }}

              className="flex justify-center relative py-3"

            >

              <div className="absolute w-[320px] h-[320px] md:w-[350px] md:h-[350px] rounded-full bg-[#3B82F6]/20 blur-[110px]" />



              <motion.img

                src={profile}

                alt="Ntsoaki"

                className="relative w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full object-cover border-4 border-[#3B82F6]/60 shadow-[0_0_40px_rgba(59,130,246,0.25)]"

                animate={{

                  y: [0, -12, 0]

                }}

                transition={{

                  duration: 4,

                  repeat: Infinity

                }}

              />



              {/* AVAILABLE CARD */}



              <motion.div

                className="absolute bottom-2 left-2 sm:left-10 bg-[var(--page-bg)]/80 backdrop-blur-xl border border-[#3B82F6]/20 rounded-xl px-4 py-3 shadow-[0_0_25px_rgba(59,130,246,0.14)]"

                animate={{

                  y: [0, -6, 0]

                }}

                transition={{

                  duration: 3,

                  repeat: Infinity

                }}

              >

                <div className="flex items-center gap-2">

                  <FaCheckCircle className="text-blue-400" />



                  <div>

                    <p className="font-semibold text-sm">

                      Available

                    </p>



                    <p className="text-xs text-[var(--text-secondary)]">

                      Open to Career Opportunities

                    </p>

                  </div>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </section>



        {/* ABOUT / JOURNEY */}



        <section

          id="about"

          className="relative py-6 md:py-8 px-6 overflow-hidden"

        >

          <div className="max-w-5xl mx-auto">



            <motion.div

              initial={{

                opacity: 0,

                y: 30

              }}

              whileInView={{

                opacity: 1,

                y: 0

              }}

              viewport={{

                once: true

              }}

              transition={{

                duration: 0.7

              }}

              className="text-center mb-6"

            >

              <p className="text-[var(--accent)] uppercase tracking-[0.3em] text-xs">

                MY JOURNEY

              </p>



              <h2 className="mt-3 text-3xl md:text-4xl font-bold">





                About







                <span className="text-[var(--accent)]">







                  {" "}Me







                </span>







              </h2>





              <p







                className="



                mt-5



                text-[var(--text-secondary)]



                leading-7



                max-w-3xl



                mx-auto



                "



              >



                I am an Information Technology professional with a



                passion for software development, IT Support,



                networking, cybersecurity and creating modern



                technology solutions.







              </p>





            </motion.div>





            {/* TIMELINE */}





            <div





              className="



              relative



              border-l



              border-[#3B82F6]/30



              ml-4



              space-y-12



              "



            >







              {/* YOURSTECH */}







              <motion.div







                initial={{



                  opacity: 0,



                  x: -30



                }}







                whileInView={{



                  opacity: 1,



                  x: 0



                }}







                viewport={{



                  once: true



                }}







                transition={{



                  duration: .7



                }}







                className="relative pl-8"





              >



                <div







                  className="



                  absolute



                  left-[-9px]



                  top-2



                  w-4



                  h-4



                  rounded-full



                  bg-[#3B82F6]



                  shadow-[0_0_15px_rgba(59,130,246,0.65)]



                  "



                />



                <p className="text-[var(--accent)] text-sm font-semibold">





                  Experience





                </p>



                <h3 className="text-xl font-bold mt-2">







                  Network Technician Intern



                </h3>







                <p className="text-[var(--text-secondary)] mt-2">





                  YoursTech





                </p>





                <p







                  className="



                  text-[var(--text-secondary)]



                  mt-3



                  leading-7



                  text-sm



                  "







                >







                  Gained practical experience in network installation,



                  structured cabling, printer configuration, CCTV



                  installation, Windows administration, technical



                  support and troubleshooting.







                </p>











                <div className="flex flex-wrap gap-2 mt-4">







                  {[



                    "Network Setup",



                    "Structured Cabling",



                    "CCTV",



                    "Printer Support",



                    "Troubleshooting"



                  ].map(skill => (







                    <span







                      key={skill}







                      className="



                      text-xs



                      px-3



                      py-1



                      rounded-full



                      border



                      border-[#3B82F6]/20



                      text-[var(--accent)]



                      bg-[#3B82F6]/5



                      "







                    >







                      {skill}







                    </span>







                  ))}







                </div>







              </motion.div>











              {/* PARLIAMENT */}







              <motion.div







                initial={{



                  opacity: 0,



                  x: -30



                }}







                whileInView={{



                  opacity: 1,



                  x: 0



                }}







                viewport={{



                  once: true



                }}







                transition={{



                  duration: .75



                }}







                className="relative pl-8"







              >







                <div







                  className="



                  absolute



                  left-[-9px]



                  top-2



                  w-4



                  h-4



                  rounded-full



                  bg-[#3B82F6]



                  shadow-[0_0_15px_rgba(59,130,246,0.65)]



                  "







                />











                <p className="text-[var(--accent)] text-sm font-semibold">







                  Experience







                </p>











                <h3 className="text-xl font-bold mt-2">







                  Assistant System Support Officer (Volunteer)







                </h3>











                <p className="text-[var(--text-secondary)] mt-2">







                  Parliament of Lesotho – The Senate







                </p>











                <p







                  className="



                  text-[var(--text-secondary)]



                  mt-3



                  leading-7



                  text-sm



                  "







                >







                  Provided volunteer IT support within The Senate



                  of Lesotho, assisting with network administration,



                  structured cabling, printer configuration,



                  Windows administration, CCTV systems and



                  hardware/software troubleshooting to ensure



                  reliable ICT operations.







                </p>











                <div className="flex flex-wrap gap-2 mt-4">







                  {[



                    "Technical Support",



                    "Network Administration",



                    "Windows Administration",



                    "Printer Configuration",



                    "CCTV Systems",



                    "Hardware Troubleshooting"



                  ].map(skill => (







                    <span







                      key={skill}







                      className="



                      text-xs



                      px-3



                      py-1



                      rounded-full



                      border



                      border-[#3B82F6]/20



                      text-[var(--accent)]



                      bg-[#3B82F6]/5



                      "







                    >







                      {skill}







                    </span>







                  ))}







                </div>







              </motion.div>











              {/* WONDERTECH — ASSISTANT PROCUREMENT OFFICER, TECHNICIAN */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: .75
                }}
                className="relative pl-8"
              >
                <div
                  className="
                  absolute
                  left-[-9px]
                  top-2
                  w-4
                  h-4
                  rounded-full
                  bg-[#3B82F6]
                  shadow-[0_0_15px_rgba(59,130,246,0.65)]
                  "
                />

                <p className="text-[var(--accent)] text-sm font-semibold">
                  Experience
                </p>

                <h3 className="text-xl font-bold mt-2">
                  Assistant Procurement Officer, Technician
                </h3>

                <p className="text-[var(--text-secondary)] mt-2">
                  WonderTech
                </p>

                <p className="text-[var(--text-secondary)] mt-3 leading-7 text-sm">
                  Supporting procurement activities, including requesting and following up on quotations, communicating with suppliers, 
                  assisting with procurement documentation and order coordination, providing IT support to staff, troubleshooting computer, 
                  software, printer, and connectivity issues, and assisting with the setup and configuration of office equipment
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {[
                    "Procurement Support",
                    "Quotation Follow-ups",
                    "Documentation",
                    "Technical Support",
                    "Troubleshooting",
                    "Computer Support",
                    "IT Assistance"
                  ].map(skill => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1 rounded-full border border-[#3B82F6]/20 text-[var(--accent)] bg-[#3B82F6]/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
                  
              {/* CAREER GOAL */}







              <motion.div







                initial={{



                  opacity: 0,



                  x: -30



                }}







                whileInView={{



                  opacity: 1,



                  x: 0



                }}







                viewport={{



                  once: true



                }}







                transition={{



                  duration: .9



                }}







                className="relative pl-8"







              >







                <div







                  className="



                  absolute



                  left-[-9px]



                  top-2



                  w-4



                  h-4



                  rounded-full



                  bg-[#3B82F6]



                  shadow-[0_0_15px_rgba(59,130,246,0.65)]



                  "







                />











                <p className="text-[var(--accent)] text-sm font-semibold">







                  Career Goal







                </p>











                <h3 className="text-xl font-bold mt-2">







                  Full Stack Developer | Network Technician







                </h3>











                <p







                  className="



                  text-[var(--text-secondary)]



                  mt-3



                  leading-7



                  text-sm



                  "







                >







                  My goal is to build a successful career as a



                  Software Engineer and Network Technician by



                  developing secure, scalable software applications



                  and reliable network infrastructures that drive



                  innovation and solve real-world challenges.







                </p>







              </motion.div>







            </div>







          </div>







        </section>











        {/* =====================================================



            TECHNICAL SKILLS



        ===================================================== */}







        <section







          className="



          relative



          py-10 md:py-14



          px-6



          "







        >







          <div className="max-w-6xl mx-auto">











            <div className="text-center mb-8 md:mb-10">







              <p







                className="



                text-[var(--accent)]



                uppercase



                tracking-[0.3em]



                text-xs



                "







              >







                MY EXPERTISE







              </p>











              <h2







                className="



                mt-4



                text-3xl



                md:text-4xl



                font-bold



                "







              >







                Technical







                <span className="text-[var(--accent)]">







                  {" "}Skills







                </span>







              </h2>











              <p







                className="



                mt-5



                text-[var(--text-secondary)]



                max-w-2xl



                mx-auto



                leading-7



                "







              >







                Technologies and tools I use to create software



                applications, database systems and reliable



                network solutions.







              </p>







            </div>











            <div className="grid lg:grid-cols-2 gap-12">











              {/* PROGRAMMING */}







              <motion.div







                initial={{



                  opacity: 0,



                  x: -40



                }}







                whileInView={{



                  opacity: 1,



                  x: 0



                }}







                viewport={{



                  once: true



                }}







              >







                <h3 className="text-xl font-bold mb-6">







                  Programming







                </h3>











                {[



                  ["Java", "90%"],



                  ["JavaScript", "85%"],



                  ["HTML/CSS", "95%"],



                  ["Python", "97%"],



                  ["PHP", "75%"]



                ].map(skill => (







                  <div



                    key={skill[0]}



                    className="mb-5"



                  >







                    <div







                      className="



                      flex



                      justify-between



                      text-sm



                      mb-2



                      "







                    >







                      <span>







                        {skill[0]}







                      </span>











                      <span className="text-[var(--accent)]">







                        {skill[1]}







                      </span>







                    </div>











                    <div







                      className="



                      h-2



                      bg-[#0D0D14]/10 dark:bg-white/10



                      rounded-full



                      overflow-hidden



                      "







                    >







                      <motion.div







                        initial={{



                          width: 0



                        }}







                        whileInView={{



                          width: skill[1]



                        }}







                        viewport={{



                          once: true



                        }}







                        transition={{



                          duration: 1



                        }}







                        className="



                        h-full



                        bg-gradient-to-r



                        from-[#3B82F6]



                        to-[#60A5FA]



                        rounded-full



                        shadow-[0_0_10px_rgba(59,130,246,0.35)]



                        "







                      />







                    </div>







                  </div>







                ))}







              </motion.div>











              {/* TECHNOLOGIES */}







              <motion.div







                initial={{



                  opacity: 0,



                  x: 40



                }}







                whileInView={{



                  opacity: 1,



                  x: 0



                }}







                viewport={{



                  once: true



                }}







              >







                <h3 className="text-xl font-bold mb-6">







                  Technologies







                </h3>











                <div className="flex flex-wrap gap-3">







                  {[



                    "React",



                    "Tailwind CSS",



                    "JavaFX",



                    "Node.js",



                    "Next.js",



                    "MySQL",



                    "MongoDB",



                    "PostgreSQL",



                    "Git",



                    "GitHub",



                    "Figma",



                    "Postman"



                  ].map(item => (







                    <span







                      key={item}







                      className="



                      px-4



                      py-2



                      rounded-full



                      border



                      border-[#3B82F6]/20



                      text-[var(--accent)]



                      text-sm



                      bg-[#3B82F6]/5



                      hover:bg-[#3B82F6]/10



                      hover:border-[#3B82F6]/50



                      hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]



                      transition



                      "







                    >







                      {item}







                    </span>







                  ))}







                </div>







              </motion.div>







            </div>











            {/* NETWORKING */}







            <motion.div







              initial={{



                opacity: 0,



                y: 40



              }}







              whileInView={{



                opacity: 1,



                y: 0



              }}







              viewport={{



                once: true



              }}







              className="mt-8 md:mt-10"







            >







              <h3 className="text-xl font-bold mb-5">







                Networking & Cybersecurity







              </h3>











              <div className="flex flex-wrap gap-3">







                {[



                  "Cisco Networking",



                  "TCP/IP",



                  "Routing & Switching",



                  "Firewall Configuration",



                  "Network Troubleshooting",



                  "Windows Administration",



                  "CCTV Systems",



                  "Cloud Computing"



                ].map(item => (







                  <span







                    key={item}







                    className="



                    px-4



                    py-2



                    rounded-full



                    bg-[#3B82F6]/5



                    border



                    border-[#3B82F6]/20



                    text-[var(--accent)]



                    text-sm



                    "







                  >







                    {item}







                  </span>







                ))}







              </div>







            </motion.div>







          </div>







        </section>







        {/* =====================================================



            INTERACTIVE ASK ME



        ===================================================== */}







        <WhatCanIHelp />



















        {/* =====================================================



            FEATURED PROJECTS



        ===================================================== */}







        <section







          id="projects"







          className="



          relative



          py-10 md:py-14



          px-6



          "







        >







          <div className="max-w-6xl mx-auto">











            <div className="text-center mb-8 md:mb-10">







              <p







                className="



                text-[var(--accent)]



                uppercase



                tracking-[0.3em]



                text-xs



                "







              >







                MY CREATIONS







              </p>











              <h2







                className="



                mt-4



                text-3xl



                md:text-4xl



                font-bold



                "







              >







                Featured







                <span className="text-[var(--accent)]">







                  {" "}Projects







                </span>







              </h2>











              <p







                className="



                mt-5



                text-[var(--text-secondary)]



                max-w-2xl



                mx-auto



                text-sm



                leading-7



                "







              >







                A collection of software systems and websites



                designed and developed using modern technologies.







              </p>







            </div>











            <div className="grid md:grid-cols-2 gap-8">







              {[



                [



                  "JAVA FX",



                  "Vehicle Rental System",



                  "A JavaFX desktop application that manages vehicles, customers, bookings and rental transactions.",



                  ["Java", "JavaFX", "MySQL"]



                ],







                [



                  "PAYROLL",



                  "Payroll Management System",



                  "A desktop payroll system developed with JavaFX for managing employees, salaries and records.",



                  ["Java", "JavaFX", "Database"]



                ],







                [



                  "HEALTH",



                  "Secure Health Data Management",



                  "A secure healthcare platform designed to protect patient information using authentication and databases.",



                  ["React", "Security", "Database"]



                ],







                [



                  "YOURSTECH",



                  "YoursTech Website",



                  "A professional ICT and HVAC company website built to showcase services and digital solutions.",



                  ["HTML", "CSS", "JavaScript", "PHP"]



                ]







              ].map((project, index) => (







                <motion.div







                  key={index}







                  whileHover={{



                    y: -8



                  }}







                  className="



                  border



                  border-[var(--border-color)]



                  rounded-2xl



                  p-6



                  bg-[var(--page-bg)]/60



                  backdrop-blur-xl



                  shadow-[0_0_20px_rgba(59,130,246,0.06)]



                  hover:border-[#3B82F6]/40



                  hover:shadow-[0_0_30px_rgba(59,130,246,0.14)]



                  transition



                  "







                >







                  <div







                    className="



                    h-32



                    rounded-xl



                    bg-gradient-to-br



                    from-[#3B82F6]



                    to-[#15151F]



                    flex



                    items-center



                    justify-center



                    shadow-[0_0_25px_rgba(59,130,246,0.14)]



                    "







                  >







                    <h3







                      className="



                      text-3xl



                      font-black



                      text-[var(--text-primary)]/30



                      "







                    >







                      {project[0]}







                    </h3>







                  </div>











                  <h3 className="mt-5 text-xl font-bold">







                    {project[1]}







                  </h3>











                  <p







                    className="



                    mt-3



                    text-[var(--text-secondary)]



                    text-sm



                    leading-6



                    "







                  >







                    {project[2]}







                  </p>











                  <div className="flex flex-wrap gap-2 mt-4">







                    {project[3].map(item => (







                      <span







                        key={item}







                        className="



                        px-3



                        py-1



                        rounded-full



                        text-xs



                        border



                        border-[#3B82F6]/20



                        text-[var(--accent)]



                        bg-[#3B82F6]/5



                        "







                      >







                        {item}







                      </span>







                    ))}







                  </div>







                </motion.div>







              ))}







            </div>







          </div>







        </section>











        {/* =====================================================



            WHY WORK WITH ME



        ===================================================== */}







        <section







          className="



          relative



          py-10 md:py-14



          px-6



          "







        >







          <div className="max-w-5xl mx-auto">











            <div className="text-center mb-12">







              <p







                className="



                text-[var(--accent)]



                uppercase



                tracking-[0.3em]



                text-xs



                "







              >







                VALUE







              </p>











              <h2







                className="



                mt-4



                text-3xl



                md:text-4xl



                font-bold



                "







              >







                Why Work







                <span className="text-[var(--accent)]">







                  {" "}With Me?







                </span>







              </h2>







            </div>











            <div className="grid md:grid-cols-3 gap-8">







              {[



                [



                  "Problem Solver",



                  "I analyse challenges and create practical technology solutions."



                ],







                [



                  "Continuous Learner",



                  "I improve my skills through projects, research and practice."



                ],







                [



                  "Full Stack Mindset",



                  "I understand both software development and IT infrastructure."



                ]







              ].map((item, index) => (







                <motion.div







                  key={index}







                  whileHover={{



                    y: -5



                  }}







                  className="



                  text-center



                  p-6



                  rounded-2xl



                  border



                  border-[var(--border-color)]



                  bg-[var(--page-bg)]/50



                  hover:border-[#3B82F6]/30



                  hover:shadow-[0_0_25px_rgba(59,130,246,0.10)]



                  transition



                  "







                >







                  <h3







                    className="



                    text-lg



                    font-bold



                    text-[var(--accent)]



                    "







                  >







                    {item[0]}







                  </h3>











                  <p







                    className="



                    mt-3



                    text-[var(--text-secondary)]



                    text-sm



                    leading-6



                    "







                  >







                    {item[1]}







                  </p>







                </motion.div>







              ))}







            </div>







          </div>







        </section>











        {/* =====================================================



            SERVICES



        ===================================================== */}







        <section







          id="services"







          className="



          relative



          py-10 md:py-14



          px-6



          "







        >







          <div className="max-w-6xl mx-auto">











            <h2







              className="



              text-center



              text-3xl



              font-bold



              mb-10



              "







            >







              Services







              <span className="text-[var(--accent)]">







                {" "}I Offer







              </span>







            </h2>











            <div







              className="



              grid



              md:grid-cols-2



              lg:grid-cols-4



              gap-6



              "







            >







              {[



                "Web Development",



                "Software Development",



                "Network Support",



                "Database Design",



                "System Analysis",



                "Cybersecurity",



                "UI/UX Design",



                "IT Consulting"



              ].map(service => (







                <motion.div







                  key={service}







                  whileHover={{



                    y: -5



                  }}







                  className="



                  py-6



                  px-4



                  text-center



                  border



                  border-[var(--border-color)]



                  rounded-xl



                  bg-[var(--page-bg)]/50



                  hover:border-[#3B82F6]/30



                  hover:bg-[#3B82F6]/5



                  hover:shadow-[0_0_20px_rgba(59,130,246,0.10)]



                  transition



                  "







                >







                  <p







                    className="



                    text-[var(--accent)]



                    text-sm



                    font-semibold



                    "







                  >







                    {service}







                  </p>







                </motion.div>







              ))}







            </div>







          </div>







        </section>











        {/* =====================================================



            CONTACT



        ===================================================== */}







        <section







          id="contact"







          className="



          relative



          py-10 md:py-14



          px-6



          "







        >







          <div







            className="



            max-w-5xl



            mx-auto



            text-center



            "







          >







            <p







              className="



              text-[var(--accent)]



              uppercase



              tracking-[0.3em]



              text-xs



              "







            >







              CONTACT







            </p>











            <h2







              className="



              mt-4



              text-3xl



              md:text-4xl



              font-bold



              "







            >







              Let's Build Something







              <span className="text-[var(--accent)]">







                {" "}Amazing







              </span>







            </h2>











            <p







              className="



              mt-5



              text-[var(--text-secondary)]



              max-w-2xl



              mx-auto



              text-sm



              leading-7



              "







            >







              Have a project idea, internship opportunity



              or technology challenge?



              Let's connect and create solutions together.







            </p>











            <div







              className="



              flex



              justify-center



              flex-wrap



              gap-6



              mt-10



              "







            >







              <a







                href="mailto:ntsoakitsolo372@gmail.com"

                  onClick={() => trackSocialClick("gmail")}







                className="



                flex



                items-center



                gap-3



                px-6



                py-3



                rounded-full



                border



                border-[var(--border-color)]



                hover:bg-[#3B82F6]/10



                hover:text-[var(--accent)]



                hover:border-[#3B82F6]/40



                transition



                "







              >







                <FaEnvelope />







                Email Me







              </a>











              <a







                href="https://github.com/ntsoaki-ui"

                  onClick={() => trackSocialClick("github")}







                target="_blank"







                rel="noreferrer"







                className="



                flex



                items-center



                gap-3



                px-6



                py-3



                rounded-full



                border



                border-[var(--border-color)]



                hover:bg-[#3B82F6]/10



                hover:text-[var(--accent)]



                hover:border-[#3B82F6]/40



                transition



                "







              >







                <FaGithub />







                GitHub







              </a>











              <a







                href="https://www.linkedin.com/in/ntsoaki-tsolo-11233a2b4"

                  onClick={() => trackSocialClick("linkedin")}







                target="_blank"







                rel="noreferrer"







                className="



                flex



                items-center



                gap-3



                px-6



                py-3



                rounded-full



                border



                border-[var(--border-color)]



                hover:bg-[#3B82F6]/10



                hover:text-[var(--accent)]



                hover:border-[#3B82F6]/40



                transition



                "







              >







                <FaLinkedin />







                LinkedIn







              </a>







            </div>







          </div>







        </section>











        {/* =====================================================



            FINAL CTA



        ===================================================== */}







        <section className="px-6 pb-20">







          <div







            className="



            max-w-4xl



            mx-auto



            text-center



            py-12



            px-6



            border



            border-[#3B82F6]/20



            rounded-3xl



            bg-[#3B82F6]/5



            shadow-[0_0_35px_rgba(59,130,246,0.10)]



            "







          >







            <h2







              className="



              text-2xl



              md:text-4xl



              font-bold



              "







            >







              Ready To Create The Future?







            </h2>











            <p







              className="



              mt-4



              text-[var(--text-secondary)]



              text-sm



              "







            >







              Let's collaborate on software,



              networking solutions and digital experiences.







            </p>











            <a







              href="mailto:ntsoakitsolo372@gmail.com"

                  onClick={() => trackSocialClick("gmail")}







              className="



              inline-flex



              items-center



              gap-3



              mt-6



              px-7



              py-3



              rounded-full



              bg-[#3B82F6]



              text-[var(--text-primary)]



              hover:bg-[#2563EB]



              hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]



              transition



              "







            >







              Contact Me







              <FaArrowRight />







            </a>







          </div>







        </section>












      </main>







    </div>







  );







}



export default Home;