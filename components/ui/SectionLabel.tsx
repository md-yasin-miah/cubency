type SectionLabelProps = {
  children: React.ReactNode;
  dashWidth?: string;
  className?: string;
};

export function SectionLabel({
  children,
  dashWidth = "w-[17px]",
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`}>
      <span className={`bg-[#454545] h-px shrink-0 ${dashWidth}`} />
      <span className="text-grey-subtle text-base tracking-tight">{children}</span>
    </div>
  );
}
