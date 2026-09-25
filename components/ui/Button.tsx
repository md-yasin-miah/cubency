import Link from "next/link";
import { ArrowUpRightIcon } from "./icons";

type ButtonVariant =
  | "primary"
  | "blue"
  | "secondary"
  | "outline"
  | "outlineLight";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  showArrow?: boolean;
  className?: string;
  onClick?: () => void;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-black-500 text-blue-50 hover:bg-black-400 transition-colors",
  blue: "bg-blue-500 text-blue-50 hover:bg-blue-700 transition-colors",
  secondary: "bg-transparent text-blue-500 hover:text-blue-700 transition-colors",
  outline:
    "bg-transparent border border-black-50 text-foreground hover:bg-black-50/30 transition-colors",
  outlineLight:
    "bg-transparent border border-blue-50 text-blue-50 hover:bg-blue-50/10 transition-colors",
};

export function Button({
  children,
  href = "#",
  variant = "primary",
  showArrow = true,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-1.5 rounded-full font-medium text-base";
  const padding =
    variant === "secondary"
      ? "h-auto px-0 py-0"
      : "h-[50px] px-4";
  const classes = `${base} ${padding} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRightIcon
          size={variant === "secondary" ? 24 : 20}
          className="shrink-0"
        />
      )}
    </>
  );

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {content}
      </button>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
