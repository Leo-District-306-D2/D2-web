export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}`}>
      {eyebrow && (
        <span className={`eyebrow ${light ? "text-gold!" : ""}`}>
          <span className="h-px w-6 bg-current" />
          {eyebrow}
        </span>
      )}
      <h2 className={`mt-3 text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>{subtitle}</p>
      )}
    </div>
  );
}
