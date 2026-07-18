import { Star } from "lucide-react";

export function StarRating({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < rating ? "fill-accent text-accent" : "text-muted/30"}`}
        />
      ))}
    </div>
  );
}