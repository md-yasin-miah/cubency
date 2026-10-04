"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navServices } from "@/components/services/navServices";
import { ChevronDownIcon } from "@/components/ui/icons";

type ServicesDropdownProps = {
  isActive?: boolean;
};

function DropdownCaret() {
  return (
    <svg
      width={12}
      height={10}
      viewBox="0 0 12 10"
      fill="none"
      className="absolute left-1/2 top-[-10px] -translate-x-1/2"
      aria-hidden
    >
      <path d="M6 0L12 10H0L6 0Z" fill="white" />
    </svg>
  );
}

export function ServicesDropdown({ isActive = false }: ServicesDropdownProps) {
  const pathname = usePathname();

  const triggerPill =
    "rounded-[17px] border border-blue-100 bg-blue-50 px-2 py-2";

  return (
    <li className="relative">
      <div className="group relative">
        <button
          type="button"
          className={`inline-flex items-center gap-1.5 text-base font-medium text-blue-900 transition-[color,background-color,border-color,padding] hover:text-blue-500 ${
            isActive
              ? triggerPill
              : "rounded-[17px] border border-transparent px-0 py-0 group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:px-2 group-hover:py-2 group-focus-within:border-blue-100 group-focus-within:bg-blue-50 group-focus-within:px-2 group-focus-within:py-2"
          }`}
          aria-haspopup="menu"
        >
          Services
          <ChevronDownIcon
            size={16}
            className="shrink-0 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          />
        </button>

        <div
          role="menu"
          className="pointer-events-none invisible absolute left-1/2 top-full z-50 w-[363px] -translate-x-1/2 pt-3 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100"
        >
          <div className="relative rounded-2xl bg-white px-4 py-6 shadow-[0px_15px_20px_rgba(0,43,79,0.2)]">
            <DropdownCaret />
            <p className="text-lg font-semibold text-[#002b4f]">Our Services</p>
            <ul className="mt-2.5 flex flex-col">
              {navServices.map((item, index) => {
                const active = pathname === item.href;
                const isLast = index === navServices.length - 1;
                return (
                  <li
                    key={item.slug}
                    className={isLast ? undefined : "border-b border-[#eeedf2]"}
                  >
                    <Link
                      href={item.href}
                      role="menuitem"
                      className={`flex items-center justify-between gap-4 rounded-lg py-4 pl-2.5 pr-4 transition-colors hover:bg-[#f4f3f6] ${
                        active ? "bg-[#f4f3f6]" : ""
                      }`}
                    >
                      <span className="text-base font-medium text-[#353535]">
                        {item.label}
                      </span>
                      <Image
                        src="/images/services/organic-growth/nav-service-icon.svg"
                        alt=""
                        width={24}
                        height={24}
                        className="shrink-0"
                        aria-hidden
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
}
