import type { ReactNode } from "react";
import clsx from "clsx";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold",
        className,
      )}
    >
      {children}
    </span>
  );
}
