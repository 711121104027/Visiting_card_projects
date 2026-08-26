"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import styles from "./DetailCard.module.css";

const contact = {
  companyMain: "FREEDOM",
  companySub: "FINANCIAL SERVICES",
  tagline: "Unleashing Your Real Freedom",

  name: "Guru Prasath",
  degree: "MBA",
  position: "Founder and Lead Consultant",

  address:
    "64 B, Eswaran Kovil Street, Muthur, Tiruppur District, Tamil Nadu - 638105",

  email: "hello@freedomfs.in",

  whatsapp: "+91 82487 19459",
  whatsappLink: "https://wa.me/message/XGHQ5IILXZ2EJ1",

  instagram: "freedom__financial_services",
  instagramLink:
    "https://www.instagram.com/freedom__financial_services?igsi=MTc2Z2JiYjJwcWIydA%3D%3D&utm_source=qr",

  twitter: "FREEDOM FINANCIAL SERVICES",
  twitterLink: "https://x.com/freedomdn86?s=11",

  facebook: "Freedom Financial Services",
  facebookLink: "https://www.facebook.com/share/1BuMY5kKEW/",

  youtube: "FREEDOM_FINANCIAL_SERVICES_2026",
  youtubeLink: "https://youtube.com/@freedom_finserv_2026?si=xHIoptbqg-ynJ64k",

  website: "www.freedomfs.in",
  websiteLink: "https://www.freedomfs.in/",
};

/* --------------------------------------------------
   ICONS
-------------------------------------------------- */

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="10"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m4 7 8 6 8-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4A8 8 0 1 1 20 11.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <path
        d="M9.3 8.5c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.7 2.3 2.2l.6-.5c.2-.2.4-.2.6-.1l1.4.7c.3.1.4.3.3.6-.2.7-.8 1.2-1.5 1.3-1.2.2-3.1-.8-4.5-2.1-1.4-1.4-2.4-3.3-2.2-4.7.1-.4.3-.7.4-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="17.4" cy="6.8" r="1" fill="currentColor" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 6.2c-.6.3-1.2.5-1.9.6A3.2 3.2 0 0 0 19.5 5a6.4 6.4 0 0 1-2 .8 3.2 3.2 0 0 0-5.5 2.2c0 .3 0 .5.1.7A9.1 9.1 0 0 1 5.5 5.4a3.2 3.2 0 0 0 1 4.3c-.5 0-1-.2-1.4-.4v.1a3.2 3.2 0 0 0 2.6 3.1c-.5.1-1 .1-1.5.1a3.3 3.3 0 0 0 3 2.2A6.4 6.4 0 0 1 5 16.2c-.3 0-.6 0-.9-.1a9 9 0 0 0 4.9 1.4c5.9 0 9.2-4.9 9.2-9.2v-.4c.7-.5 1.3-1 1.8-1.7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M14 21v-8h2.7l.4-3H14V8.1c0-.9.3-1.5 1.6-1.5h1.7V4a22 22 0 0 0-2.5-.1C12.3 3.9 10.5 5.3 10.5 8v2H8v3h2.5v8H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.8 12h16.4M12 3.5c2.1 2.3 3.1 5.1 3.1 8.5S14.1 18.2 12 20.5c-2.1-2.3-3.1-5.1-3.1-8.5S9.9 5.8 12 3.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="18"
        cy="5"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="6"
        cy="12"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <circle
        cx="18"
        cy="19"
        r="2.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="m8.2 10.8 7.5-4.4M8.2 13.2l7.5 4.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
    </svg>
  );
}

function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle
        cx="9"
        cy="8"
        r="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3.5 19c.5-3.1 2.4-4.7 5.5-4.7s5 1.6 5.5 4.7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M16 12h5M18.5 9.5v5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* --------------------------------------------------
   SOCIAL / CONTACT DATA
-------------------------------------------------- */

const items = [
  {
    label: "Location",
    value: contact.address,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      contact.address,
    )}`,
    Icon: LocationIcon,
  },
  {
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
    Icon: MailIcon,
  },
  {
    label: "WhatsApp",
    value: contact.whatsapp,
    href: contact.whatsappLink,
    Icon: WhatsAppIcon,
  },
  {
    label: "Instagram",
    value: contact.instagram,
    href: contact.instagramLink,
    Icon: InstagramIcon,
  },
  {
    label: "X (Twitter)",
    value: contact.twitter,
    href: contact.twitterLink,
    Icon: TwitterIcon,
  },
  {
    label: "Facebook",
    value: contact.facebook,
    href: contact.facebookLink,
    Icon: FacebookIcon,
  },
  {
    label: "YouTube",
    value: contact.youtube,
    href: contact.youtubeLink,
    Icon: YoutubeIcon,
  },
  {
    label: "Website",
    value: contact.website,
    href: contact.websiteLink,
    Icon: GlobeIcon,
  },
];

export default function DetailCard() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: `${contact.companyMain} ${contact.companySub}`,
      text: `${contact.name} ${contact.degree} — ${contact.position}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);

        setCopied(true);

        setTimeout(() => {
          setCopied(false);
        }, 1800);
      }
    } catch {
      // User cancelled native share.
    }
  };

  const handleAddContact = () => {
    const vCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${contact.name} ${contact.degree}`,
      `ORG:${contact.companyMain} ${contact.companySub}`,
      `TITLE:${contact.position}`,
      `TEL;TYPE=CELL:${contact.whatsapp}`,
      `EMAIL:${contact.email}`,
      `ADR;TYPE=WORK:;;${contact.address}`,
      `URL:${contact.websiteLink}`,
      "END:VCARD",
    ].join("\r\n");

    const blob = new Blob([vCard], {
      type: "text/vcard;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "Guru-Prasath-Freedom-Financial-Services.vcf";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  return (
    <main className={styles.page}>
      <div className={styles.backgroundGlow} />
      <div className={styles.backgroundRing} />

      <div className={styles.container}>
        {/* =========================================
    BRAND HEADER
========================================= */}

        <motion.header
          className={styles.header}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {/* F/R LOGO */}
          <motion.div
            className={styles.iconWrap}
            initial={{
              opacity: 0,
              scale: 0.86,
              y: 12,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Soft animated glow */}
            <motion.div
              className={styles.iconGlow}
              animate={{
                scale: [0.92, 1.08, 0.92],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Continuous subtle logo movement */}
            <motion.div
              animate={{
                y: [0, -2, 0, 2, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src="/assets/icon-color.png"
                alt="Freedom Financial Services"
                width={581}
                height={460}
                priority
                className={styles.brandIcon}
              />
            </motion.div>
          </motion.div>

          {/* COMPANY NAME */}
          <motion.div
            className={styles.companyName}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <span className={styles.companyMain}>{contact.companyMain}</span>

            <span className={styles.companySub}>{contact.companySub}</span>
          </motion.div>

          {/* TAGLINE */}
          <motion.div
            className={styles.tagline}
            initial={{
              opacity: 0,
              y: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.42,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {contact.tagline}
          </motion.div>

          {/* PERSON */}
          <motion.div
            className={styles.profile}
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.55,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <h1>
  <span className={styles.personName}>{contact.name}</span>

  <span className={styles.degreeGroup}>
    <span className={styles.degree}>{contact.degree}</span>

    <Image
      src="/assets/CFP_logo.png"
      alt="CFP"
      width={500}
      height={500}
      className={styles.cfpLogo}
    />
  </span>
</h1>

            <p>{contact.position}</p>
          </motion.div>
        </motion.header>

        {/* =========================================
            CONTACT CARDS
        ========================================== */}

        <section className={styles.cards}>
          {items.map((item, index) => {
            const Icon = item.Icon;

            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={
                  item.label === "Location" || item.label === "Email"
                    ? undefined
                    : "_blank"
                }
                rel="noopener noreferrer"
                className={styles.card}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.55 + index * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -3,
                }}
                whileTap={{
                  scale: 0.985,
                }}
              >
                <div className={styles.cardIcon}>
                  <Icon />
                </div>

                <div className={styles.cardContent}>
                  <span className={styles.cardLabel}>{item.label}</span>

                  <span className={styles.cardValue}>{item.value}</span>
                </div>

                <div className={styles.arrow}>
                  <ArrowIcon />
                </div>
              </motion.a>
            );
          })}
        </section>

        {/* =========================================
            ACTION BUTTONS
        ========================================== */}

        <motion.div
          className={styles.actions}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 1.2,
          }}
        >
          <motion.button
            className={styles.primaryButton}
            onClick={handleAddContact}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ContactIcon />
            <span>Add Contact</span>
          </motion.button>

          <motion.button
            className={styles.secondaryButton}
            onClick={handleShare}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <ShareIcon />
            <span>{copied ? "Link Copied" : "Share Card"}</span>
          </motion.button>
        </motion.div>

        {/* FOOTER */}
        <motion.footer
          className={styles.footer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
          }}
        >
          <span>FREEDOM FINANCIAL SERVICES</span>
          <i />
          <span>UNLEASHING YOUR REAL FREEDOM</span>
        </motion.footer>
      </div>
    </main>
  );
}
