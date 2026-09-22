import Link from "next/link";
import Image from "next/image";

type GetStartedButtonProps = {
  href?: string;
  className?: string;
};

export function GetStartedButton({
  href = "#",
  className = "",
}: GetStartedButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex h-[54px] items-center rounded-full bg-blue-500 pl-4 pr-1 transition-colors hover:bg-blue-700 ${className}`}
    >
      <span className="pr-3 text-base font-medium tracking-tight text-white">
        Get Started
      </span>
      <span className="flex size-10 items-center justify-center rounded-full bg-black-500">
        <Image
          src="/images/home/arrow-right.svg"
          alt=""
          width={18}
          height={18}
          aria-hidden
        />
      </span>
    </Link>
  );
}
