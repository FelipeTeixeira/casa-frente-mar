import { Star } from "lucide-react";
import clsx from "clsx";

export function StarRating({
  rating,
  size = 16,
  className,
}: {
  rating: number;
  size?: number;
  className?: string;
}) {
  return (
    <div className={clsx("flex items-center gap-0.5", className)} aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          className={i < Math.round(rating) ? "fill-gold-500 text-gold-500" : "fill-graphite-200 text-graphite-200"}
        />
      ))}
    </div>
  );
}
