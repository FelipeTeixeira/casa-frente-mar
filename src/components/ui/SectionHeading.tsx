import { motion } from "framer-motion";
import clsx from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
      )}
    >
      {eyebrow && (
        <span
          className={clsx(
            "mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em]",
            tone === "light" ? "text-brand-600" : "text-brand-300",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={clsx(
          "text-balance text-3xl font-semibold sm:text-4xl",
          tone === "light" ? "text-graphite-900" : "text-white",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-balance text-base leading-relaxed sm:text-lg",
            tone === "light" ? "text-graphite-600" : "text-white/80",
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
