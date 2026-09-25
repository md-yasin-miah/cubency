import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, MenuIcon } from "@/components/ui/icons";
import { PageContainer } from "@/components/ui/PageContainer";

const navLinks = [
  { label: "Service", href: "#" },
  { label: "Industries", href: "#" },
  { label: "Insights", href: "#" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "#" },
];

type NavbarProps = {
  activeLink?: string;
};

export function Navbar({ activeLink }: NavbarProps) {
  return (
    <PageContainer className="pt-5">
      <nav className="flex items-center justify-between rounded-2xl bg-nav-bg px-3.5 py-4 lg:py-5">
        <Link href="/" className="relative h-[28px] w-[139px] shrink-0 lg:h-[34px] lg:w-[171px]">
          <Image
            src="/images/home/logo.svg"
            alt="Cubency"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-5 capitalize lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`text-base font-medium text-blue-900 transition-colors hover:text-blue-500 ${
                  activeLink === link.label
                    ? "rounded-[17px] border border-blue-100 bg-blue-50 px-2 py-2"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open menu"
            className="flex size-[50px] items-center justify-center rounded-full bg-blue-500 text-blue-50 lg:hidden"
          >
            <MenuIcon size={24} />
          </button>

          <Link
            href="#"
            className="hidden h-[50px] items-center gap-1.5 rounded-full bg-blue-500 px-4 text-base font-medium text-blue-50 transition-colors hover:bg-blue-700 lg:inline-flex"
          >
            Take the Growth
            <ArrowUpRightIcon size={20} />
          </Link>
        </div>
      </nav>
    </PageContainer>
  );
}
