import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = ({ theme }) => {
  const isLight = theme === "light";
  const form = useRef();

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY]);

  // ================= EMAILJS =================

  const sendEmail = async (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        "service_gsnl241",
        "template_p44rj3a",
        form.current,
        {
          publicKey: "5uTicWuGPoSXpZ8un",
        }
      );

      setStatus(
        "Message sent successfully! I'll get back to you soon."
      );

      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus(
        "Something went wrong. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  const particles = Array.from({ length: 18 });

  return (
    <div
      className="relative min-h-screen overflow-hidden px-4 py-20"
      style={{
        backgroundColor: "var(--page-bg, #0D0D14)",
        color: "var(--text-[var(--accent,#3B82F6)], #F3F4F6)",
      }}
    >

      {/* ================= GLOW ================= */}

      <motion.div
        className="
          absolute
          w-72
          h-72
          rounded-full
          bg-blue-500/15
          blur-3xl
          pointer-events-none
        "
        style={{
          translateX: springX,
          translateY: springY,
        }}
      />

      {/* ================= PARTICLES ================= */}

      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="
            absolute
            w-2
            h-2
            bg-blue-500/40
            rounded-full
          "
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            y: ["0%", "100%", "0%"],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* ================= HEADER ================= */}

      <div className="text-center mb-12 relative z-10">

        <p className="text-[var(--accent,#3B82F6)] uppercase tracking-widest font-semibold">
          Get In Touch
        </p>

        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Contact{" "}
          <span className="text-[var(--accent,#3B82F6)]">
            Me
          </span>
        </h1>

        <div
          className="
            w-24
            h-1
            bg-[var(--accent,#3B82F6)]
            mx-auto
            rounded-full
            mt-5
            mb-6
          "
        />

        <p className="text-[var(--text-secondary,#A6ADBB)] max-w-2xl mx-auto">
          Let's build something amazing together —
          open for opportunities, collaborations and
          freelance work.
        </p>

      </div>

      {/* ================= GRID ================= */}

      <div
        className="
          relative
          z-10
          grid
          md:grid-cols-2
          gap-12
          max-w-6xl
          mx-auto
        "
      >

        {/* ================= LEFT SIDE ================= */}

        <div className="space-y-3">

          <ContactItem
            icon={<FaEnvelope />}
            title="Email"
            text="ntsoakitsolo372@gmail.com"
            href="mailto:ntsoakitsolo372@gmail.com"
            copy
          />

          <ContactItem
            icon={<FaPhone />}
            title="Phone"
            text="+266 5855 3175"
            href="tel:+26658553175"
            copy
          />

          <ContactItem
            icon={<FaMapMarkerAlt />}
            title="Location"
            text="Maseru, Lesotho"
            href="https://www.google.com/maps/place/Maseru"
          />

          <ContactItem
            icon={<FaGithub />}
            title="GitHub"
            text="Explore my repositories"
            href="https://github.com/ntsoaki-ui"
          />

          <ContactItem
            icon={<FaLinkedin />}
            title="LinkedIn"
            text="My professional profile"
            href="https://www.linkedin.com/in/ntsoaki-tsolo-11233a2b4"
          />

        </div>

        {/* ================= CONTACT FORM ================= */}

        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-5"
        >

          {/* NAME + EMAIL */}

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                bg-[var(--surface-bg,#15151F)]
                border
                border-[var(--border-color,#292D3A)]
                text-[var(--text-primary,#F3F4F6)]
                placeholder:text-[var(--text-secondary,#A6ADBB)]
                rounded-xl
                p-4
                outline-none
                transition-colors
                focus:border-[var(--accent,#3B82F6)]
                w-full
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                bg-[var(--surface-bg,#15151F)]
                border
                border-[var(--border-color,#292D3A)]
                text-[var(--text-primary,#F3F4F6)]
                placeholder:text-[var(--text-secondary,#A6ADBB)]
                rounded-xl
                p-4
                outline-none
                transition-colors
                focus:border-[var(--accent,#3B82F6)]
                w-full
              "
            />

          </div>

          {/* SUBJECT */}

          <input
            type="text"
            name="title"
            placeholder="Subject"
            required
            className="
              w-full
              bg-[var(--surface-bg,#15151F)]
              border
              border-[var(--border-color,#292D3A)]
              text-[var(--text-primary,#F3F4F6)]
              placeholder:text-[var(--text-secondary,#A6ADBB)]
              rounded-xl
              p-4
              outline-none
              transition-colors
              focus:border-[var(--accent,#3B82F6)]
            "
          />

          {/* MESSAGE */}

          <textarea
            name="message"
            rows={6}
            placeholder="Your Message"
            required
            className="
              w-full
              bg-[var(--surface-bg,#15151F)]
              border
              border-[var(--border-color,#292D3A)]
              text-[var(--text-primary,#F3F4F6)]
              placeholder:text-[var(--text-secondary,#A6ADBB)]
              rounded-xl
              p-4
              resize-none
              outline-none
              transition-colors
              focus:border-[var(--accent,#3B82F6)]
            "
          />

          {/* SEND BUTTON */}

          <motion.button
            type="submit"
            disabled={sending}
            whileHover={{
              scale: sending ? 1 : 1.05,
              boxShadow:
                "0px 0px 25px rgba(59,130,246,0.35)",
            }}
            whileTap={{
              scale: sending ? 1 : 0.97,
            }}
            className="
              w-full
              bg-[var(--accent,#3B82F6)]
              text-white
              hover:bg-[var(--accent-hover,#2563EB)]
              py-4
              rounded-xl
              flex
              items-center
              justify-center
              gap-3
              font-semibold
              disabled:opacity-60
              disabled:cursor-not-allowed
              transition
            "
          >

            <FaPaperPlane />

            {sending
              ? "Sending..."
              : "Send Message"}

          </motion.button>

          {/* ================= STATUS ================= */}

          {status && (
            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className={`
                text-center
                mt-4
                font-medium
                ${
                  status.startsWith("Message sent")
                    ? "text-green-400"
                    : "text-red-400"
                }
              `}
            >
              {status}
            </motion.p>
          )}

        </form>

      </div>

      {/* ================= CTA ================= */}

      <div
        className="
          relative
          z-10
          mt-16
          max-w-6xl
          mx-auto
          bg-[var(--surface-bg,#15151F)]
          border
          border-[var(--border-color,#292D3A)]
          rounded-2xl
          p-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-6
        "
      >

        <div>

          <h3 className="text-2xl font-bold">
            Let's Work Together!
          </h3>

          <p className="text-[var(--text-secondary,#A6ADBB)] mt-1">
            Software development • UI/UX design •
            Cybersecurity
          </p>

        </div>

        <a
          href="https://wa.me/26658553175?text=Hi%20Ntsoaki%2C%20I%20would%20like%20to%20discuss%20a%20project%20opportunity."
          target="_blank"
          rel="noopener noreferrer"
          className="
            px-6
            py-3
            border
            border-green-500
            text-green-400
            hover:bg-green-500
            hover:text-white
            transition
            rounded-xl
            flex
            items-center
            gap-2
            font-medium
          "
        >
          <FaPhone />

          Start WhatsApp Chat

        </a>

      </div>

    </div>
  );
};


/* =========================================================
   CONTACT ITEM
========================================================= */

const ContactItem = ({
  icon,
  title,
  text,
  href,
  copy,
}) => {

  const handleCopy = async (e) => {

    if (!copy) {
      return;
    }

    e.preventDefault();

    try {

      await navigator.clipboard.writeText(text);

    } catch (error) {

      console.error(
        "Copy failed:",
        error
      );

    }

  };

  return (
    <motion.a
      href={href}
      target={
        href?.startsWith("http")
          ? "_blank"
          : "_self"
      }
      rel="noopener noreferrer"
      onClick={handleCopy}
      whileHover={{
        x: 5,
      }}
      className="
        flex
        items-center
        gap-4
        p-3
        rounded-xl
        hover:bg-[var(--border-color,#292D3A)]/40
        transition
        group
      "
    >

      <div
        className="
          w-12
          h-12
          rounded-xl
          bg-blue-500/15
          flex
          items-center
          justify-center
          text-[var(--accent,#3B82F6)]
          group-hover:scale-110
          transition
        "
      >
        {icon}
      </div>

      <div>

        <h3
          className="
            font-semibold
            group-hover:text-[var(--accent,#3B82F6)]
            transition
          "
        >
          {title}
        </h3>

        <p className="text-[var(--text-secondary,#A6ADBB)] text-sm">
          {text}
        </p>

      </div>

    </motion.a>
  );
};

export default Contact;