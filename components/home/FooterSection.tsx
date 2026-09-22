import Image from "next/image";
import Link from "next/link";
import { PageContainer } from "@/components/ui/PageContainer";
import { GetStartedButton } from "@/components/ui/GetStartedButton";

const footerLinks = {
  Services: [
    "Growth Strategy & Insights",
    "Organic Growth",
    "Paid Growth",
    "Creative Solutions",
    "Digital Experience & Web",
  ],
  Company: ["Industries", "Work", "Insights", "About"],
  "Get Started": [
    "Growth Readiness Assessment",
    "Request a Proposal",
    "Contact",
  ],
};

const wordmarkParts = [
  "/images/home/footer-v1.svg",
  "/images/home/footer-v2.svg",
  "/images/home/footer-v3.svg",
  "/images/home/footer-v4.svg",
  "/images/home/footer-v5.svg",
  "/images/home/footer-v6.svg",
  "/images/home/footer-v7.svg",
  "/images/home/footer-v8.svg",
];

export function FooterSection() {
  return (
    <footer className="bg-footer-bg pb-10 pt-16 lg:pt-[72px]">
      <PageContainer>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-6">
            <div className="max-w-[460px]">
              <p className="text-[32px] font-bold text-white">Cubency</p>
              <p className="mt-3.5 max-w-[262px] text-sm leading-normal text-[#99999e]">
                Marketing built around your business, not a template.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-3">
              {Object.entries(footerLinks).map(([title, links]) => (
                <div key={title}>
                  <p className="text-2xl font-bold tracking-wide text-white">
                    {title}
                  </p>
                  <ul className="mt-3.5 flex flex-col gap-3.5">
                    {links.map((link) => (
                      <li key={link}>
                        <Link
                          href="#"
                          className="text-lg font-medium text-[#99999e] transition-colors hover:text-white"
                        >
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 text-base text-[#99999e] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 Cubency. All rights reserved.</p>
            <p>Digital marketing agency</p>
          </div>

          <div className="h-px bg-[#38383d]" />

          <div className="relative flex min-h-[240px] items-end justify-center pb-6">
            <div className="flex w-full max-w-[1100px] items-end justify-between gap-1 opacity-90">
              {wordmarkParts.map((src) => (
                <div key={src} className="relative h-16 flex-1 lg:h-28">
                  <Image
                    src={src}
                    alt=""
                    fill
                    className="object-contain object-bottom"
                    aria-hidden
                  />
                </div>
              ))}
            </div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4">
              <GetStartedButton />
            </div>
          </div>
        </div>
      </PageContainer>
    </footer>
  );
}
