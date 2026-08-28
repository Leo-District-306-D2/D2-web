export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  light = false,
}: {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  light?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left"}`}>
      <h2 className={`text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/70" : "text-muted"}`}>{subtitle}</p>
      )}
    </div>
  );
}
