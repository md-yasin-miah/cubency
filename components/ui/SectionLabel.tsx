type SectionLabelProps = {
  children: React.ReactNode;
  dashWidth?: string;
  className?: string;
  variant?: "default" | "light";
  accent?: "grey" | "blue";
};

export function SectionLabel({
  children,
  dashWidth = "w-[17px]",
  className = "",
  variant = "default",
  accent = "grey",
}: SectionLabelProps) {
  const dashClass =
    variant === "light"
      ? "bg-white h-px"
      : accent === "blue"
        ? "bg-[#1660ed] h-0.5"
        : "bg-[#454545] h-px";

  const textClass =
    variant === "light"
      ? "text-white text-base tracking-tight"
      : accent === "blue"
        ? "text-grey-muted text-sm lg:text-base"
        : "text-grey-subtle text-base tracking-tight";

  const gapClass = accent === "blue" ? "gap-2" : "gap-1.5";

  return (
    <div className={`flex items-center ${gapClass} ${className}`}>
      <span className={`shrink-0 ${dashClass} ${dashWidth}`} />
      <span className={textClass}>{children}</span>
    </div>
  );
}
