import { useCallback, useEffect, useState } from "react";

export function useLightbox(total: number) {
  const [index, setIndex] = useState<number | null>(null);

  const open = useCallback((i: number) => setIndex(i), []);
  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? null : (i + 1) % total)),
    [total],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? null : (i - 1 + total) % total)),
    [total],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, next, prev]);

  return { index, open, close, next, prev };
}
