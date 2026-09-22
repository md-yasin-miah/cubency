import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { PageContainer } from "@/components/ui/PageContainer";

const navLinks = [
  "Service",
  "Industries",
  "Insights",
  "About Us",
  "Contact Us",
];

export function Navbar() {
  return (
    <PageContainer className="pt-5">
      <nav className="flex flex-col gap-4 rounded-2xl bg-nav-bg px-3.5 py-5 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="relative h-[34px] w-[171px] shrink-0">
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
            <li key={link}>
              <Link
                href="#"
                className="text-base font-medium text-foreground transition-colors hover:text-blue-500"
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#"
          className="inline-flex h-[50px] items-center gap-1.5 self-start rounded-full bg-blue-500 px-4 text-base font-medium text-blue-50 transition-colors hover:bg-blue-700 lg:self-auto"
        >
          Take the Growth
          <ArrowUpRightIcon size={20} />
        </Link>
      </nav>
    </PageContainer>
  );
}
