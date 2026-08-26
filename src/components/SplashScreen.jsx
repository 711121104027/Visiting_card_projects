"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brand = {
  green: "#00A885",
  greenDark: "#007E66",
  greenDeep: "#005E4D",
};

const ease = [0.16, 1, 0.3, 1];

const sparks = [
  { left: "9%", top: "16%", size: 3, delay: 0.4, duration: 3.8 },
  { left: "18%", top: "32%", size: 2, delay: 1.2, duration: 4.4 },
  { left: "8%", top: "62%", size: 3, delay: 1.8, duration: 4.1 },
  { left: "21%", top: "78%", size: 2, delay: 0.8, duration: 4.8 },

  { left: "32%", top: "12%", size: 2, delay: 1.5, duration: 4.2 },
  { left: "43%", top: "21%", size: 3, delay: 0.7, duration: 4.6 },
  { left: "57%", top: "15%", size: 2, delay: 1.9, duration: 4.1 },
  { left: "69%", top: "25%", size: 3, delay: 0.5, duration: 4.7 },

  { left: "82%", top: "14%", size: 2, delay: 1.1, duration: 4.3 },
  { left: "91%", top: "36%", size: 3, delay: 2, duration: 4.9 },
  { left: "79%", top: "55%", size: 2, delay: 0.9, duration: 4.5 },
  { left: "93%", top: "72%", size: 3, delay: 1.6, duration: 4.2 },

  { left: "31%", top: "84%", size: 3, delay: 0.6, duration: 4.8 },
  { left: "47%", top: "91%", size: 2, delay: 1.4, duration: 4.3 },
  { left: "63%", top: "82%", size: 3, delay: 2.1, duration: 4.7 },
  { left: "72%", top: "92%", size: 2, delay: 1, duration: 4.1 },
];

export default function SplashScreen() {
  return (
    <main
      className="splash-shell"
      style={{
        "--brand": brand.green,
        "--brand-dark": brand.greenDark,
        "--brand-deep": brand.greenDeep,
      }}
    >
      {/* Soft background atmosphere */}
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Premium circular spark field */}
      <div className="spark-field" aria-hidden="true">
        {sparks.map((spark, index) => (
          <motion.span
            key={index}
            className="spark"
            style={{
              left: spark.left,
              top: spark.top,
              width: spark.size,
              height: spark.size,
            }}
            initial={{
              opacity: 0,
              scale: 0.3,
            }}
            animate={{
              opacity: [0, 0.75, 0.25, 0],
              scale: [0.3, 1, 1.35, 0.5],
              y: [0, -8, -16, -24],
            }}
            transition={{
              duration: spark.duration,
              delay: spark.delay,
              repeat: Infinity,
              repeatDelay: 0.8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Very subtle central orbit */}
      <motion.div
        className="orbit orbit-one"
        initial={{
          scale: 0.82,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          opacity: 0.13,
        }}
        transition={{
          duration: 1.8,
          ease,
        }}
      />

      <section
        className="splash-content"
        aria-label="Freedom Financial Services"
      >
        {/* Logo */}
        <motion.div
          className="logo-wrap"
          initial={{
            opacity: 0,
            scale: 0.82,
            y: 18,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 1.15,
            delay: 0.15,
            ease,
          }}
        >
          {/* Soft circular glow only */}
          <motion.div
            className="logo-glow"
            initial={{
              opacity: 0,
              scale: 0.65,
            }}
            animate={{
              opacity: [0, 0.35, 0.16],
              scale: [0.65, 1.08, 1],
            }}
            transition={{
              duration: 1.7,
              delay: 0.25,
              ease: "easeOut",
            }}
          />

          <Image
            src="/assets/primary-logo-white.png"
            alt="Freedom Financial Services"
            width={1334}
            height={1334}
            priority
            className="brand-logo"
          />
        </motion.div>

        {/* Tagline */}
        <motion.div
          className="tagline"
          initial={{
            opacity: 0,
            y: 8,
            letterSpacing: "0.18em",
          }}
          animate={{
            opacity: 1,
            y: 0,
            letterSpacing: "0.12em",
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease,
          }}
        >
          SMART FINANCIAL SOLUTIONS. LASTING FREEDOM.
        </motion.div>

        {/* Loading line */}
        <motion.div
          className="loading-line"
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 1.1,
            ease,
          }}
        >
          <motion.span
            initial={{
              scaleX: 0,
            }}
            animate={{
              scaleX: 1,
            }}
            transition={{
              duration: 1.35,
              delay: 1.15,
              ease: [0.65, 0, 0.35, 1],
            }}
          />
        </motion.div>

        {/* Supporting text */}
        <motion.p
          className="loading-label"
          initial={{
            opacity: 0,
            y: 7,
          }}
          animate={{
            opacity: 0.8,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.25,
            ease,
          }}
        >
          YOUR FINANCIAL JOURNEY STARTS HERE
        </motion.p>
      </section>

      {/* Bottom label */}
      <motion.div
        className="bottom-mark"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.5,
        }}
        transition={{
          duration: 0.8,
          delay: 1.45,
          ease,
        }}
      >
        Nexo Visuals <span>•</span> DIGITAL VISITING CARD
      </motion.div>
    </main>
  );
}
