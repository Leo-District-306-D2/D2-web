import { socials } from "@/data/site";
import { socialIconMap } from "./Icons";

// Per-network colours used by the footer's square badges (matches the live site).
const squareColors: Record<string, string> = {
  facebook: "bg-blue-600 hover:bg-blue-700",
  x: "bg-blue-400 hover:bg-blue-500",
  instagram: "bg-pink-600 hover:bg-pink-700",
  linkedin: "bg-blue-700 hover:bg-blue-800",
  youtube: "bg-red-600 hover:bg-red-700",
};

export default function SocialLinks({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light" | "squares";
}) {
  const squares = variant === "squares";
  const styles =
    variant === "light"
      ? "bg-white/10 text-white hover:bg-gold hover:text-brand-dark"
      : "bg-brand-50 text-brand hover:bg-brand hover:text-white";
  return (
    <div className={`flex flex-wrap items-center ${squares ? "gap-3" : "gap-2.5"} ${className}`}>
      {socials.map((s) => {
        const Icon = socialIconMap[s.icon];
        return (
          <a
            key={s.label}
            href={s.href}
            aria-label={s.label}
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
            className={
              squares
                ? `flex h-8 w-8 items-center justify-center rounded text-white transition-colors ${
                    squareColors[s.icon] ?? "bg-gray-600 hover:bg-gray-700"
                  }`
                : `inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ${styles}`
            }
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
