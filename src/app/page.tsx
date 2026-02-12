"use client";

import * as React from "react";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Code2,
  Download,
  GitBranch,
  Github,
  Globe,
  Linkedin,
  Mail,
  Menu,
  Shield,
  Terminal,
  X,
} from "lucide-react";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "motion/react";

type Project = {
  title: string;
  year: string;
  description: string;
  tags: string[];
  href: string;
  repo?: string;
  /** Thumbnail path in public folder, e.g. "/blinkcart-thumb.png" */
  image?: string;
};

const PROJECTS: Project[] = [
  {
    title: "BlinkCart",
    year: "2025",
    description:
      "E-commerce app with User, Admin & Delivery Boy roles. AI integration, live map tracking, OTP verification, and full order flow.",
    tags: ["Next.js", "E-commerce", "AI", "Live Map", "OTP", "Roles"],
    href: "https://blink-cart-kappa.vercel.app",
    repo: "https://github.com/Pandey-Krishant/Blink-Cart",
    image: "/Gemini_Generated_Image_dmvxxzdmvxxzdmvx.png",
  },
  {
    title: "Msgly",
    year: "2025",
    description:
      "Secure messaging app — send and receive messages and media with a modern, attractive UI. Private chats, clean design.",
    tags: ["React", "Real-time", "Secure", "Media", "UI"],
    href: "https://chatapp-six-ruby.vercel.app",
    repo: "https://github.com/Pandey-Krishant/Msgly",
    image: "/Gemini_Generated_Image_sgggb7sgggb7sggg.png",
  },
];

const EMAIL = "krishantpandey2005@gmail.com";
const MAILTO = `mailto:${EMAIL}`;

const SKILLS = [
  { icon: Code2, title: "Web Development", items: ["Next.js", "React", "TypeScript", "UI Systems"] },
  { icon: Shield, title: "Cybersecurity", items: ["Web App Security", "Threat Modeling", "OSINT", "Hardening"] },
  { icon: Terminal, title: "Tooling", items: ["Node.js", "Linux", "Automation", "CI/CD"] },
];

function clsx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

type IconType = React.ComponentType<React.SVGProps<SVGSVGElement>>;

function GradientStrokeIcon({
  icon: Icon,
  className,
  from = "#7c3aed",
  via = "#ec4899",
  to = "#06b6d4",
  strokeWidth,
}: {
  icon: IconType;
  className?: string;
  from?: string;
  via?: string;
  to?: string;
  strokeWidth?: number;
}) {
  const id = React.useId();
  return (
    <Icon className={className} stroke={`url(#${id})`} fill="none" strokeWidth={strokeWidth}>
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={from} stopOpacity="0.95" />
          <stop offset="55%" stopColor={via} stopOpacity="0.95" />
          <stop offset="100%" stopColor={to} stopOpacity="0.95" />
        </linearGradient>
      </defs>
    </Icon>
  );
}

function LandingScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      className="landing-bg fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
    >
      {/* Floating orbs for depth */}
      <motion.div
        className="pointer-events-none absolute left-[15%] top-[20%] h-72 w-72 rounded-full bg-violet-500/30 blur-[100px]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-[25%] right-[10%] h-96 w-96 rounded-full bg-cyan-500/25 blur-[120px]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 20, -40, 0],
          scale: [1, 1.1, 1.2, 1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute right-[25%] top-[60%] h-64 w-64 rounded-full bg-emerald-500/20 blur-[80px]"
        animate={{
          x: [0, -30, 40, 0],
          y: [0, 40, -20, 0],
        }}
        transition={{ duration: 9, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15"
        animate={{ rotate: 360, scale: [0.98, 1.02, 0.98] }}
        transition={{ duration: 28, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {ORBIT_POSITIONS_OUTER.map((pos, i) => {
          const Icon = ORBIT_ICONS_OUTER[i % ORBIT_ICONS_OUTER.length];
          return (
            <GradientStrokeIcon
              key={`orbit-outer-${i}`}
              icon={Icon}
              className={clsx(
                "absolute h-7 w-7 opacity-80",
                "drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)]",
                pos,
              )}
              from="#c4b5fd"
              via="#f472b6"
              to="#67e8f9"
              strokeWidth={1.6}
            />
          );
        })}
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
        animate={{ rotate: -360, scale: [1, 1.04, 1] }}
        transition={{ duration: 22, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        {ORBIT_POSITIONS_INNER.map((pos, i) => {
          const Icon = ORBIT_ICONS_INNER[i % ORBIT_ICONS_INNER.length];
          return (
            <GradientStrokeIcon
              key={`orbit-inner-${i}`}
              icon={Icon}
              className={clsx(
                "absolute h-6 w-6 opacity-75",
                "drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)]",
                pos,
              )}
              from="#a78bfa"
              via="#f472b6"
              to="#22d3ee"
              strokeWidth={1.5}
            />
          );
        })}
      </motion.div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.4),transparent_50%),radial-gradient(ellipse_60%_40%_at_80%_50%,rgba(6,182,212,0.25),transparent_45%),radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(34,197,94,0.2),transparent_50%)]" />
      {LANDING_ICONS.map((item, i) => (
        <motion.div
          key={`landing-icon-${i}-${item.className}`}
          className={clsx(
            "pointer-events-none absolute drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)]",
            item.className,
          )}
          animate={{
            y: [0, -16, 0],
            rotate: [0, 6, -6, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6 + i,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          <GradientStrokeIcon
            icon={item.icon}
            className="h-full w-full opacity-80"
            from="#c4b5fd"
            via="#f472b6"
            to="#67e8f9"
            strokeWidth={1.6}
          />
        </motion.div>
      ))}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, rotate: -6, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/30 bg-gradient-to-br from-white/12 via-violet-500/20 to-cyan-500/20 backdrop-blur-md shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-violet-200 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_6px_18px_rgba(0,0,0,0.4)]">
            K P
          </span>
        </motion.div>
        <motion.h1
          className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl bg-gradient-to-r from-violet-100 via-fuchsia-200 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_12px_32px_rgba(0,0,0,0.4)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: [1, 1.02, 1], rotate: [0, 0.5, -0.5, 0] }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Krishant Pandey
        </motion.h1>
        <motion.p
          className="mt-3 max-w-sm text-lg text-white/85 sm:text-xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Web Developer & Cybersecurity
        </motion.p>
        <motion.p
          className="mt-2 text-sm text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.4 }}
        >
          Premium web experiences with a security mindset
        </motion.p>
        <motion.button
          type="button"
          onClick={onEnter}
          className="mt-10 inline-flex items-center gap-2 rounded-2xl border border-white/40 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition hover:bg-white/25 hover:border-white/60"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          whileInView={{ scale: [1, 1.04, 1] }}
          viewport={{ once: false }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Enter portfolio <ArrowRight className="h-5 w-5" />
        </motion.button>
      </div>
    </motion.div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-medium text-black/80 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/80">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20px 0px" }}
        transition={{ duration: 0.5 }}
        className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-xs font-semibold tracking-wide text-black/70 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/70"
      >
        <BadgeCheck className="h-4 w-4" />
        {eyebrow}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20px 0px" }}
        transition={{ delay: 0.08, duration: 0.5 }}
        className="text-balance text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-3xl md:text-4xl"
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-20px 0px" }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="mt-3 text-pretty text-base leading-7 text-black/60 dark:text-white/60"
      >
        {desc}
      </motion.p>
    </div>
  );
}

function Anchor({
  href,
  children,
  className,
  onClick,
  download,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  download?: boolean;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      className={className}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={onClick}
      download={download}
    >
      {children}
    </a>
  );
}

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const SECTION_REVEAL = {
  hidden: { opacity: 0, x: -80, y: 18, rotate: -1.5, scale: 0.98 },
  visible: { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 },
};

const SECTION_VIEWPORT = { amount: 0.16, once: false };
const SECTION_TRANSITION = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

const CARD_REVEAL = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -90 : 90,
    y: 40,
    rotate: i % 2 === 0 ? -3 : 3,
    scale: 0.95,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.65, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SKILL_REVEAL = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? 60 : -60,
    y: 26,
    rotate: i % 2 === 0 ? 2 : -2,
    scale: 0.96,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ABOUT_REVEAL = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60,
    y: 24,
    rotate: i % 2 === 0 ? -2 : 2,
    scale: 0.97,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const CONTACT_REVEAL = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i === 0 ? -70 : 70,
    y: 20,
    rotate: i === 0 ? -1.5 : 1.5,
    scale: 0.98,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ITEM_REVEAL = {
  hidden: (i: number) => ({
    opacity: 0,
    x: i % 2 === 0 ? -34 : 34,
    y: 18,
    rotate: i % 2 === 0 ? -1 : 1,
    scale: 0.98,
  }),
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

const BACKDROP_ICONS = [
  { icon: Code2, className: "left-[6%] top-[12%] h-12 w-12", floatClass: "float-slow" },
  { icon: Shield, className: "right-[8%] top-[14%] h-10 w-10", floatClass: "float-slower" },
  { icon: Terminal, className: "left-[10%] bottom-[18%] h-11 w-11", floatClass: "float-slow" },
  { icon: Globe, className: "right-[6%] bottom-[16%] h-12 w-12", floatClass: "float-slower" },
  { icon: BadgeCheck, className: "left-[45%] top-[8%] h-9 w-9", floatClass: "float-slow" },
  { icon: Github, className: "left-[18%] top-[58%] h-10 w-10", floatClass: "float-slower" },
  { icon: Linkedin, className: "right-[18%] top-[56%] h-10 w-10", floatClass: "float-slow" },
  { icon: Mail, className: "left-[40%] bottom-[10%] h-9 w-9", floatClass: "float-slower" },
  { icon: GitBranch, className: "right-[35%] bottom-[10%] h-9 w-9", floatClass: "float-slow" },
  { icon: ArrowRight, className: "left-[4%] top-[40%] h-10 w-10", floatClass: "float-slower" },
  { icon: Download, className: "right-[4%] top-[42%] h-10 w-10", floatClass: "float-slow" },
  { icon: Globe, className: "left-[52%] bottom-[30%] h-8 w-8", floatClass: "float-slower" },
];

const NAV_BG_ICONS = [
  { icon: Code2, className: "left-6 top-1/2 h-5 w-5 -translate-y-1/2" },
  { icon: Shield, className: "right-24 top-1/2 h-5 w-5 -translate-y-1/2" },
  { icon: Globe, className: "left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2" },
];

type VisibilityKey = "base" | "sm" | "md";

const VISIBILITY_CLASS: Record<VisibilityKey, string> = {
  base: "",
  sm: "hidden sm:block",
  md: "hidden md:block",
};

const CONTACT_BG_ICONS = [
  { icon: Mail, className: "left-6 top-6 h-10 w-10", floatClass: "float-slow" },
  { icon: Github, className: "right-8 top-8 h-10 w-10", floatClass: "float-slower" },
  { icon: Linkedin, className: "left-8 bottom-10 h-9 w-9", floatClass: "float-slow" },
  { icon: Shield, className: "right-10 bottom-12 h-9 w-9", floatClass: "float-slower" },
  { icon: Globe, className: "left-1/2 bottom-6 h-8 w-8 -translate-x-1/2", floatClass: "float-slow" },
];

type MainBgIcon = {
  icon: IconType;
  className: string;
  floatClass: string;
  minScreen?: VisibilityKey;
};

const MAIN_BG_ICONS: MainBgIcon[] = [
  { icon: Code2, className: "left-[2%] top-[6%] h-10 w-10", floatClass: "float-slow", minScreen: "base" },
  { icon: Shield, className: "right-[3%] top-[8%] h-9 w-9", floatClass: "float-slower", minScreen: "base" },
  { icon: Github, className: "left-[5%] top-[18%] h-9 w-9", floatClass: "float-slow", minScreen: "sm" },
  { icon: Linkedin, className: "right-[6%] top-[22%] h-9 w-9", floatClass: "float-slower", minScreen: "sm" },
  { icon: Mail, className: "left-[3%] top-[32%] h-9 w-9", floatClass: "float-slow", minScreen: "sm" },
  { icon: Globe, className: "right-[3%] top-[36%] h-10 w-10", floatClass: "float-slower", minScreen: "sm" },
  { icon: GitBranch, className: "left-[4%] top-[48%] h-8 w-8", floatClass: "float-slow", minScreen: "sm" },
  { icon: Terminal, className: "right-[4%] top-[52%] h-9 w-9", floatClass: "float-slower", minScreen: "sm" },
  { icon: BadgeCheck, className: "left-[3%] top-[64%] h-8 w-8", floatClass: "float-slow", minScreen: "sm" },
  { icon: ArrowRight, className: "right-[3%] top-[68%] h-9 w-9", floatClass: "float-slower", minScreen: "sm" },
  { icon: Download, className: "left-[4%] top-[78%] h-9 w-9", floatClass: "float-slow", minScreen: "base" },
  { icon: Code2, className: "right-[4%] top-[82%] h-8 w-8", floatClass: "float-slower", minScreen: "base" },
  { icon: Shield, className: "left-[6%] top-[92%] h-8 w-8", floatClass: "float-slow", minScreen: "base" },
  { icon: Globe, className: "right-[6%] top-[92%] h-8 w-8", floatClass: "float-slower", minScreen: "base" },
  { icon: Code2, className: "left-[18%] top-[12%] h-8 w-8", floatClass: "float-slower", minScreen: "md" },
  { icon: Shield, className: "right-[20%] top-[14%] h-8 w-8", floatClass: "float-slow", minScreen: "md" },
  { icon: Github, className: "left-[24%] top-[26%] h-9 w-9", floatClass: "float-slow", minScreen: "md" },
  { icon: Linkedin, className: "right-[24%] top-[28%] h-9 w-9", floatClass: "float-slower", minScreen: "md" },
  { icon: Mail, className: "left-[30%] top-[40%] h-8 w-8", floatClass: "float-slow", minScreen: "md" },
  { icon: Globe, className: "right-[30%] top-[42%] h-9 w-9", floatClass: "float-slower", minScreen: "md" },
  { icon: GitBranch, className: "left-[22%] top-[54%] h-8 w-8", floatClass: "float-slow", minScreen: "md" },
  { icon: Terminal, className: "right-[22%] top-[56%] h-8 w-8", floatClass: "float-slower", minScreen: "md" },
  { icon: BadgeCheck, className: "left-[28%] top-[66%] h-8 w-8", floatClass: "float-slow", minScreen: "md" },
  { icon: ArrowRight, className: "right-[28%] top-[68%] h-8 w-8", floatClass: "float-slower", minScreen: "md" },
  { icon: Download, className: "left-[24%] top-[78%] h-8 w-8", floatClass: "float-slow", minScreen: "md" },
  { icon: Globe, className: "right-[24%] top-[80%] h-8 w-8", floatClass: "float-slower", minScreen: "md" },
  { icon: Code2, className: "left-[40%] top-[18%] h-7 w-7", floatClass: "float-slow", minScreen: "md" },
  { icon: Shield, className: "right-[40%] top-[20%] h-7 w-7", floatClass: "float-slower", minScreen: "md" },
  { icon: Github, className: "left-[46%] top-[32%] h-7 w-7", floatClass: "float-slow", minScreen: "md" },
  { icon: Linkedin, className: "right-[46%] top-[34%] h-7 w-7", floatClass: "float-slower", minScreen: "md" },
  { icon: Mail, className: "left-[38%] top-[50%] h-7 w-7", floatClass: "float-slow", minScreen: "md" },
  { icon: Globe, className: "right-[38%] top-[52%] h-7 w-7", floatClass: "float-slower", minScreen: "md" },
  { icon: GitBranch, className: "left-[44%] top-[64%] h-7 w-7", floatClass: "float-slow", minScreen: "md" },
  { icon: Terminal, className: "right-[44%] top-[66%] h-7 w-7", floatClass: "float-slower", minScreen: "md" },
  { icon: BadgeCheck, className: "left-[40%] top-[78%] h-7 w-7", floatClass: "float-slow", minScreen: "md" },
  { icon: ArrowRight, className: "right-[40%] top-[80%] h-7 w-7", floatClass: "float-slower", minScreen: "md" },
];

const LANDING_ICONS = [
  { icon: Code2, className: "left-[8%] top-[22%] h-10 w-10", delay: 0 },
  { icon: Shield, className: "right-[12%] top-[18%] h-9 w-9", delay: 0.2 },
  { icon: Github, className: "left-[14%] bottom-[20%] h-10 w-10", delay: 0.4 },
  { icon: Globe, className: "right-[10%] bottom-[22%] h-11 w-11", delay: 0.6 },
  { icon: Linkedin, className: "left-[28%] top-[12%] h-9 w-9", delay: 0.3 },
  { icon: Mail, className: "right-[28%] top-[12%] h-9 w-9", delay: 0.5 },
];

const HOME_FLOATING_ICONS = [
  { icon: Code2, className: "left-4 top-6 h-9 w-9", delay: 0 },
  { icon: Shield, className: "right-6 top-10 h-8 w-8", delay: 0.2 },
  { icon: Github, className: "left-10 bottom-8 h-8 w-8", delay: 0.35 },
  { icon: Globe, className: "right-10 bottom-10 h-9 w-9", delay: 0.5 },
  { icon: Linkedin, className: "left-1/2 top-4 h-8 w-8 -translate-x-1/2", delay: 0.15 },
];

const ORBIT_POSITIONS_OUTER = [
  "left-1/2 -top-3 -translate-x-1/2",
  "right-0 top-1/2 -translate-y-1/2",
  "left-1/2 -bottom-3 -translate-x-1/2",
  "left-0 top-1/2 -translate-y-1/2",
];

const ORBIT_POSITIONS_INNER = [
  "left-[20%] top-[6%]",
  "right-[18%] top-[14%]",
  "right-[20%] bottom-[6%]",
  "left-[18%] bottom-[14%]",
];

const ORBIT_ICONS_OUTER = [Code2, Shield, Github, Globe];
const ORBIT_ICONS_INNER = [Mail, Linkedin, Terminal, BadgeCheck];

export default function Home() {
  const [landingDone, setLandingDone] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });
  const scaleX = useTransform(progress, [0, 1], [0, 1]);
  const heroY = useTransform(progress, [0, 0.2], [0, 60]);
  const heroScale = useTransform(progress, [0, 0.15], [1, 0.98]);
  const heroOpacity = useTransform(progress, [0, 0.12], [1, 0.92]);

  return (
    <div className={!landingDone ? "h-screen overflow-hidden" : ""}>
      <AnimatePresence mode="sync">
        {!landingDone ? (
          <LandingScreen key="landing" onEnter={() => setLandingDone(true)} />
        ) : (
          <motion.div
            key="main"
            className="noise grid-fade relative min-h-screen"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* static background icons / emojis */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.06),transparent_45%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.08),transparent_40%),radial-gradient(circle_at_50%_85%,rgba(34,197,94,0.06),transparent_45%)]" />
              {BACKDROP_ICONS.map((item, i) => (
                <div
                  key={`bg-icon-${i}-${item.className}`}
                  className={clsx("absolute opacity-35", item.className, item.floatClass)}
                >
                  <GradientStrokeIcon
                    icon={item.icon}
                    className={clsx(
                      "h-full w-full",
                      "drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)]",
                    )}
                    from="#a78bfa"
                    via="#f472b6"
                    to="#22d3ee"
                    strokeWidth={1.4}
                  />
                </div>
              ))}
            </div>

            {/* top progress hairline */}
            <motion.div
              className="pointer-events-none fixed left-0 top-0 z-50 h-[2px] w-full bg-black/10 dark:bg-white/10"
              style={{ transformOrigin: "0 50%", scaleX }}
            />

            <header className="sticky top-0 z-40">
              <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="nav-transparent nav-gradient relative flex items-center justify-between rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3">
                  <div className="pointer-events-none absolute inset-0">
                    {NAV_BG_ICONS.map((item, i) => (
                      <GradientStrokeIcon
                        key={`nav-bg-${i}`}
                        icon={item.icon}
                        className={clsx("absolute opacity-35", item.className)}
                        from="#a78bfa"
                        via="#f472b6"
                        to="#22d3ee"
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                  <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                    <div className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-black/10 bg-black/[0.04] text-sm font-semibold text-black/80 dark:border-white/20 dark:bg-white/[0.08] dark:text-white/90">
                      <span className="relative z-10 bg-gradient-to-br from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                        K
                      </span>
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-cyan-500/20" />
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="truncate text-sm font-semibold tracking-tight">
                        <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                          Krishant Pandey
                        </span>
                      </div>
                      <div className="hidden text-xs text-black/55 dark:text-white/55 sm:block">
                        Web Dev • Cybersecurity
                      </div>
                    </div>
                  </div>

                  <nav className="hidden items-center gap-1 md:flex">
                    {NAV_LINKS.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="rounded-xl px-3 py-2 text-sm font-medium text-black/70 transition hover:bg-black/[0.06] hover:text-black dark:text-white/70 dark:hover:bg-white/[0.08] dark:hover:text-white"
                      >
                        {l.label}
                      </a>
                    ))}
                  </nav>

                  <div className="flex items-center gap-2">
                    <Anchor
                      href="#contact"
                      className="hidden shrink-0 items-center gap-2 rounded-xl border border-black/15 bg-transparent px-4 py-2 text-sm font-semibold text-black/90 transition hover:bg-black/[0.06] dark:border-white/25 dark:text-white/90 dark:hover:bg-white/[0.08] sm:inline-flex"
                    >
                      Let’s talk <ArrowRight className="h-4 w-4" />
                    </Anchor>
                    <button
                      type="button"
                      onClick={() => setMenuOpen((o) => !o)}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-black/10 bg-black/[0.03] text-black/80 transition hover:bg-black/[0.06] dark:border-white/15 dark:bg-white/[0.06] dark:text-white/80 dark:hover:bg-white/[0.1] md:hidden"
                      aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                      {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    className="fixed inset-0 top-[72px] z-30 md:hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
                    <motion.nav
                      className="glass absolute left-4 right-4 top-2 flex flex-col gap-1 rounded-2xl border border-black/10 p-3 dark:border-white/15"
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.25 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {NAV_LINKS.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          onClick={() => setMenuOpen(false)}
                          className="rounded-xl px-4 py-3 text-sm font-medium text-black/80 transition hover:bg-black/[0.04] dark:text-white/80 dark:hover:bg-white/[0.06]"
                        >
                          {l.label}
                        </a>
                      ))}
                      <Anchor
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-2 flex items-center justify-center gap-2 rounded-xl border border-black/15 bg-transparent px-4 py-3 text-sm font-semibold text-black/90 dark:border-white/25 dark:text-white/90"
                      >
                        Let’s talk <ArrowRight className="h-4 w-4" />
                      </Anchor>
                    </motion.nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </header>

      <main className="relative mx-auto max-w-6xl overflow-hidden px-4 pb-20 pt-6 sm:px-6 sm:pt-8 md:pt-10 lg:px-8 lg:pb-24">
        <div className="pointer-events-none absolute inset-0">
              {MAIN_BG_ICONS.map((item, i) => (
                <div
                  key={`main-bg-${i}-${item.className}`}
                  className={clsx(
                    "absolute opacity-35",
                    item.className,
                    item.floatClass,
                    VISIBILITY_CLASS[item.minScreen ?? "base"],
                  )}
                >
                  <GradientStrokeIcon
                    icon={item.icon}
                    className="h-full w-full"
                    from="#a78bfa"
                    via="#f472b6"
                    to="#22d3ee"
                    strokeWidth={1.4}
                  />
                </div>
              ))}
        </div>
        {/* HERO — scroll parallax */}
        <motion.section
          style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
          className="relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-4 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur dark:border-white/15 dark:bg-black/40 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(124,58,237,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(6,182,212,0.22),transparent_35%),radial-gradient(circle_at_50%_110%,rgba(34,197,94,0.16),transparent_45%)]" />
          <div className="pointer-events-none absolute inset-0">
            {HOME_FLOATING_ICONS.map((item, i) => (
              <motion.div
                key={`home-floating-${i}-${item.className}`}
                className={clsx("absolute opacity-75", item.className)}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 4, -4, 0],
                  scale: [1, 1.06, 1],
                }}
                transition={{
                  duration: 4.5 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
              >
                <GradientStrokeIcon
                  icon={item.icon}
                  className="h-full w-full"
                  from="#a78bfa"
                  via="#f472b6"
                  to="#22d3ee"
                  strokeWidth={1.6}
                />
              </motion.div>
            ))}
          </div>
          <div className="pointer-events-none absolute right-4 top-4 hidden flex-col gap-2 md:flex">
            {[Code2, Github, Shield, Globe].map((Icon, i) => (
              <motion.div
                key={`hero-icon-${i}`}
                className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white/70 text-black/70 shadow-[0_10px_24px_rgba(0,0,0,0.12)] backdrop-blur dark:border-white/15 dark:bg-black/30 dark:text-white/80"
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              >
                <GradientStrokeIcon
                  icon={Icon}
                  className="h-5 w-5"
                  from="#a78bfa"
                  via="#f472b6"
                  to="#22d3ee"
                  strokeWidth={1.6}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="mb-4 flex flex-wrap items-center gap-2 sm:mb-5">
              {["Available for freelance", "Next.js • React • TypeScript", "Security-first builds"].map((label, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                >
                  <Chip>{label}</Chip>
                </motion.span>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-balance text-3xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl md:text-5xl lg:text-6xl"
            >
              I design and build{" "}
              <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
                premium web experiences
              </span>{" "}
              with a security mindset.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-4 max-w-2xl text-pretty text-sm leading-7 text-black/65 dark:text-white/65 sm:mt-5 sm:text-base md:text-lg"
            >
              I’m{" "}
              <span className="font-extrabold bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent drop-shadow-[0_6px_16px_rgba(124,58,237,0.35)]">
                Krishant Pandey
              </span>{" "}
              — a
              web developer and cybersecurity enthusiast. I love motion, detail, and clean
              systems that scale.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center"
            >
              <Anchor
                href="#work"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/85 sm:px-5 sm:py-3"
              >
                View projects <ArrowRight className="h-4 w-4" />
              </Anchor>

              <Anchor
                href="/krishant-pandey-cv.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-4 py-2.5 text-sm font-semibold text-black/80 transition hover:bg-white dark:border-white/15 dark:bg-black/30 dark:text-white/80 dark:hover:bg-black/10 sm:px-5 sm:py-3"
                download
              >
                Download CV <Download className="h-4 w-4" />
              </Anchor>

              <div className="flex items-center gap-2 sm:ml-auto">
                <Anchor
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white/70 text-black/80 transition hover:bg-white dark:border-white/15 dark:bg-black/30 dark:text-white/80 dark:hover:bg-black/10 sm:h-11 sm:w-11"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </Anchor>
                <Anchor
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white/70 text-black/80 transition hover:bg-white dark:border-white/15 dark:bg-black/30 dark:text-white/80 dark:hover:bg-black/10 sm:h-11 sm:w-11"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Anchor>
                <Anchor
                  href={MAILTO}
                  className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-white/70 text-black/80 transition hover:bg-white dark:border-white/15 dark:bg-black/30 dark:text-white/80 dark:hover:bg-black/10 sm:h-11 sm:w-11"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </Anchor>
              </div>
            </motion.div>
          </motion.div>

          <div className="relative mt-8 grid gap-3 sm:mt-10 sm:grid-cols-3">
            {[
              { icon: Globe, label: "Fast, accessible UI" },
              { icon: Shield, label: "Security-first patterns" },
              { icon: GitBranch, label: "Clean DX & maintainability" },
            ].map((f, i) => (
              <motion.div
                key={f.label}
                custom={i}
                variants={ITEM_REVEAL}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                whileHover={{ y: -4, rotate: i % 2 === 0 ? -0.6 : 0.6 }}
                className="glass glass-gradient flex items-center gap-3 rounded-2xl px-4 py-4"
              >
                <div className="grid h-10 w-10 place-items-center rounded-2xl border border-black/10 bg-black/[0.03] text-black/80 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/80">
                  <f.icon className="h-5 w-5" />
                </div>
                <div className="text-sm font-semibold text-black/80 dark:text-white/80">
                  {f.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* WORK */}
        <motion.section
          id="work"
          className="pt-12 sm:pt-16 md:pt-20"
          variants={SECTION_REVEAL}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          transition={SECTION_TRANSITION}
        >
          <SectionTitle
            eyebrow="Selected Work"
            title="Live projects — e-commerce, secure chat & more"
            desc="BlinkCart and Msgly are live on Vercel with Gemini previews below."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {PROJECTS.map((p, i) => (
              <motion.article
                key={p.title}
                custom={i}
                variants={CARD_REVEAL}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-30px 0px -30px 0px" }}
                whileHover={{
                  y: -10,
                  rotate: i % 2 === 0 ? -0.6 : 0.6,
                  scale: 1.01,
                  transition: { duration: 0.25 },
                }}
              className="group relative overflow-hidden rounded-3xl border border-black/10 bg-white/55 shadow-[0_1px_0_rgba(0,0,0,0.04)] backdrop-blur dark:border-white/15 dark:bg-black/35 glass-gradient"
            >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-violet-500/15 blur-2xl" />
                  <div className="absolute -bottom-28 -right-24 h-72 w-72 rounded-full bg-cyan-500/12 blur-2xl" />
                </div>

                <Anchor href={p.href} className="block">
                  <div className="relative aspect-video w-full overflow-hidden rounded-t-3xl bg-gradient-to-br from-violet-500/20 via-slate-500/10 to-cyan-500/20">
                    {p.image ? (
                      <Image
                        src={p.image}
                        alt={`${p.title} thumbnail`}
                        width={640}
                        height={360}
                        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.08]"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-black/40 dark:text-white/40">
                        <Globe className="h-12 w-12" />
                      </div>
                    )}
                  </div>
                </Anchor>

                <div className="relative p-4 sm:p-5 md:p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-xs font-semibold tracking-wide text-black/50 dark:text-white/50">
                        {p.year}
                      </div>
                      <h3 className="mt-1 text-lg font-semibold tracking-tight text-black dark:text-white sm:text-xl">
                        {p.title}
                      </h3>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      {p.repo && (
                        <Anchor
                          href={p.repo}
                          className="grid h-9 w-9 place-items-center rounded-xl border border-black/10 bg-white/60 text-black/80 transition hover:bg-white dark:border-white/15 dark:bg-black/30 dark:text-white/80 dark:hover:bg-black/10 sm:h-10 sm:w-10"
                          aria-label={`${p.title} repository`}
                        >
                          <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                        </Anchor>
                      )}
                      <Anchor
                        href={p.href}
                        className="grid h-9 w-9 place-items-center rounded-xl bg-black text-white transition hover:bg-black/85 dark:bg-white dark:text-black dark:hover:bg-white/85 sm:h-10 sm:w-10"
                        aria-label={`${p.title} live`}
                      >
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
                      </Anchor>
                    </div>
                  </div>

                  <p className="relative mt-3 text-sm leading-6 text-black/65 dark:text-white/65">
                    {p.description}
                  </p>

                  <div className="relative mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-black/10 bg-black/[0.02] px-2.5 py-1 text-xs font-medium text-black/70 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          className="pt-12 sm:pt-16 md:pt-20"
          variants={SECTION_REVEAL}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          transition={SECTION_TRANSITION}
        >
          <SectionTitle
            eyebrow="Capabilities"
            title="Builds that feel premium — and stay secure"
            desc="I mix UI craft with practical security. The result: interfaces that move beautifully, load fast, and reduce risk."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={SKILL_REVEAL}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                whileHover={{
                  y: -6,
                  rotate: i % 2 === 0 ? -0.8 : 0.8,
                  scale: 1.01,
                  transition: { duration: 0.25 },
                }}
                className="glass glass-gradient rounded-2xl p-4 sm:rounded-3xl sm:p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl border border-black/10 bg-black/[0.03] text-black/80 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/80">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold tracking-tight text-black dark:text-white">
                      {s.title}
                    </div>
                    <div className="text-sm text-black/55 dark:text-white/55">
                      Focus areas
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2 text-sm text-black/70 dark:text-white/70">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-black/35 dark:bg-white/35" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          className="pt-12 sm:pt-16 md:pt-20"
          variants={SECTION_REVEAL}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          transition={SECTION_TRANSITION}
        >
          <SectionTitle
            eyebrow="About"
            title="A developer mindset, sharpened by security"
            desc="I care about details users feel: speed, feedback, motion, and clarity. And I care about details teams need: safety, maintainability, and predictable systems."
          />

          <div className="grid gap-4 lg:grid-cols-5">
            <motion.div
              className="glass glass-gradient rounded-2xl p-4 sm:rounded-3xl sm:p-6 lg:col-span-3"
              custom={0}
              variants={ABOUT_REVEAL}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              whileHover={{ y: -4, rotate: -0.3, scale: 1.01 }}
            >
              <div className="text-sm font-semibold text-black/80 dark:text-white/80">
                What I’m about
              </div>
              <p className="mt-3 text-sm leading-7 text-black/65 dark:text-white/65">
                I build modern web apps using Next.js, React, and TypeScript — with a
                design-first approach. On the security side, I focus on web app security,
                threat modeling, and practical hardening that fits real product constraints.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "UI engineering",
                  "Motion systems",
                  "Performance",
                  "Security reviews",
                  "Clean components",
                ].map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass glass-gradient rounded-2xl p-4 sm:rounded-3xl sm:p-6 lg:col-span-2"
              custom={1}
              variants={ABOUT_REVEAL}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              whileHover={{ y: -4, rotate: 0.3, scale: 1.01 }}
            >
              <div className="text-sm font-semibold text-black/80 dark:text-white/80">
                Currently exploring
              </div>
              <div className="mt-4 space-y-3">
                {[
                  {
                    icon: Shield,
                    title: "Secure-by-default UX",
                    desc: "Designing flows that reduce risky behavior.",
                  },
                  {
                    icon: Code2,
                    title: "Component systems",
                    desc: "Reusable UI primitives for speed and consistency.",
                  },
                  {
                    icon: Terminal,
                    title: "Automation",
                    desc: "Small scripts that remove repetitive work.",
                  },
                ].map((x, i) => (
                  <motion.div
                    key={x.title}
                    custom={i}
                    variants={ITEM_REVEAL}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
                    whileHover={{ x: 6, rotate: 0.4, transition: { duration: 0.2 } }}
                    className="glass glass-gradient flex items-start gap-3 rounded-2xl p-4"
                  >
                    <div className="mt-0.5 grid h-9 w-9 place-items-center rounded-2xl border border-black/10 bg-black/[0.03] text-black/80 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/80">
                      <x.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-black dark:text-white">
                        {x.title}
                      </div>
                      <div className="text-sm text-black/60 dark:text-white/60">
                        {x.desc}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          className="pt-12 sm:pt-16 md:pt-20"
          variants={SECTION_REVEAL}
          initial="hidden"
          whileInView="visible"
          viewport={SECTION_VIEWPORT}
          transition={SECTION_TRANSITION}
        >
          <div className="glass-gradient relative overflow-hidden rounded-2xl border border-black/10 bg-white/60 p-5 backdrop-blur dark:border-white/15 dark:bg-black/35 sm:rounded-3xl sm:p-6 md:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0">
              {CONTACT_BG_ICONS.map((item, i) => (
                <div
                  key={`contact-bg-${i}-${item.className}`}
                  className={clsx("absolute opacity-55 mix-blend-screen", item.className, item.floatClass)}
                >
                  <GradientStrokeIcon
                    icon={item.icon}
                    className="h-full w-full"
                    from="#a78bfa"
                    via="#f472b6"
                    to="#22d3ee"
                    strokeWidth={1.6}
                  />
                </div>
              ))}
            </div>
            <div className="relative z-10 grid items-center gap-6 lg:grid-cols-5">
              <motion.div
                className="lg:col-span-3"
                custom={0}
                variants={CONTACT_REVEAL}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              >
                <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-xs font-semibold text-black/70 dark:border-white/15 dark:bg-white/[0.06] dark:text-white/70 sm:px-4 sm:py-2">
                  <Mail className="h-4 w-4" />
                  Contact
                </div>
                <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-black dark:text-white sm:mt-4 sm:text-3xl md:text-4xl">
                  Want an award-level portfolio or a secure web app?
                </h2>
                <p className="mt-2 max-w-2xl text-pretty text-sm leading-7 text-black/65 dark:text-white/65 sm:mt-3 sm:text-base">
                  Tell me what you’re building and your timeline. I’ll reply with next steps
                  and a clear plan.
                </p>
              </motion.div>

              <motion.div
                className="lg:col-span-2"
                custom={1}
                variants={CONTACT_REVEAL}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
              >
                <div className="grid gap-3">
                  <Anchor
                    href={MAILTO}
                    className={clsx(
                      "inline-flex items-center justify-center gap-2 rounded-2xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-black/85 sm:px-5 sm:py-3",
                      "dark:bg-white dark:text-black dark:hover:bg-white/85",
                    )}
                  >
                    Email me <ArrowRight className="h-4 w-4" />
                  </Anchor>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <Anchor
                      href="https://github.com/Pandey-Krishant"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-black/80 transition hover:bg-white dark:border-white/15 dark:bg-black/30 dark:text-white/80 dark:hover:bg-black/10"
                    >
                      GitHub <Github className="h-4 w-4" />
                    </Anchor>
                    <Anchor
                      href="https://www.linkedin.com/in/krishant-pandey-701a60334/"
                      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/70 px-5 py-3 text-sm font-semibold text-black/80 transition hover:bg-white dark:border-white/15 dark:bg-black/30 dark:text-white/80 dark:hover:bg-black/10"
                    >
                      LinkedIn <Linkedin className="h-4 w-4" />
                    </Anchor>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="hairline relative z-10 mt-10 pt-6 text-center text-xs text-black/55 dark:text-white/55">
              © {new Date().getFullYear()} Krishant. Built with Next.js + Motion + Tailwind.
            </div>
          </div>
        </motion.section>
      </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
