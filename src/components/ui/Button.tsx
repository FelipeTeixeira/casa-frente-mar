import type { ReactNode } from "react";
import clsx from "clsx";

type Variant = "primary" | "whatsapp" | "outline" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ocean-700 text-white hover:bg-ocean-800 shadow-soft",
  whatsapp:
    "bg-whatsapp text-white hover:bg-whatsapp-dark shadow-soft",
  outline:
    "bg-white/10 text-white border border-white/70 hover:bg-white/20 backdrop-blur-sm",
  ghost:
    "bg-transparent text-ocean-800 border border-ocean-200 hover:bg-ocean-50",
};

const sizeClasses: Record<Size, string> = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon,
  className,
  target,
  rel,
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes} target={target} rel={rel}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
      {icon}
    </button>
  );
}
