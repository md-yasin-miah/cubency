import Image from "next/image";
import { PageContainer } from "@/components/ui/PageContainer";
import { CheckIcon, XIcon } from "@/components/ui/icons";

const columns = [
  "Research first",
  "Personalised plan",
  "Scope-based pricing",
  "All five services",
  "Outcome accountability",
];

type Row = {
  name: string;
  description: string;
  values: boolean[];
  highlighted?: boolean;
};

const rows: Row[] = [
  {
    name: "Cubency",
    description:
      "Research first, then a plan and a price built around your business.",
    values: [true, true, true, true, true],
    highlighted: true,
  },
  {
    name: "Typical agencies",
    description: "Sell a package first and learn your business later.",
    values: [false, false, false, true, false],
  },
  {
    name: "Freelancers",
    description: "Flexible, but limited to one skill and hard to scale.",
    values: [false, true, true, false, false],
  },
  {
    name: "In-house team",
    description: "Know your business, but rarely cover every channel.",
    values: [true, true, false, false, true],
  },
  {
    name: "AI tools only",
    description: "Fast output, but no business context or strategy.",
    values: [false, false, true, false, false],
  },
];

export function ComparisonSection() {
  return (
    <section className="py-16 lg:py-25">
      <PageContainer>
        <div className="mx-auto mb-[60px] max-w-[880px] text-center">
          <h2 className="text-[36px] font-semibold leading-[1.1] tracking-tight text-black lg:text-[56px] lg:leading-[61.6px]">
            Agency, freelancer, in-house or AI tool?{" "}
            <span className="font-serif italic">See the difference</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[520px] text-base text-grey-subtle">
            How a research-led digital marketing agency compares with the other
            ways to get marketing done.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[20px] bg-navy-dark px-4 py-8 lg:px-8 lg:py-[50px]">
          <div className="hidden min-w-[1100px] grid-cols-[438px_repeat(5,135px)] gap-5 pb-8 pl-[489px] pr-8 pt-8 lg:grid">
            {columns.map((column) => (
              <p
                key={column}
                className="text-center text-lg font-semibold text-blue-50"
              >
                {column}
              </p>
            ))}
          </div>

          <div className="flex min-w-[900px] flex-col gap-0">
            {rows.map((row) => (
              <div
                key={row.name}
                className={`grid grid-cols-[280px_repeat(5,100px)] items-center gap-4 rounded-2xl px-4 py-6 lg:grid-cols-[438px_repeat(5,135px)] lg:gap-5 lg:px-8 lg:py-[30px] ${
                  row.highlighted
                    ? "bg-blue-500"
                    : "border-b border-blue-700 last:border-b-0"
                }`}
              >
                <div className="flex items-center gap-5">
                  {row.highlighted ? (
                    <div className="flex size-[70px] shrink-0 items-center justify-center rounded-xl bg-blue-900 p-2.5">
                      <Image
                        src="/images/home/check-badge.svg"
                        alt=""
                        width={30}
                        height={30}
                        className="invert"
                        aria-hidden
                      />
                    </div>
                  ) : (
                    <div className="flex size-[70px] shrink-0 items-center justify-center rounded-xl bg-blue-900">
                      <CheckIcon size={30} className="text-white" />
                    </div>
                  )}
                  <div>
                    <p className="text-2xl font-bold text-white lg:text-[32px]">
                      {row.name}
                    </p>
                    <p className="mt-2 max-w-[348px] text-sm text-blue-50 lg:text-lg">
                      {row.description}
                    </p>
                  </div>
                </div>

                {row.values.map((value, index) => (
                  <div
                    key={`${row.name}-${index}`}
                    className="flex items-center justify-center"
                  >
                    {value ? (
                      <CheckIcon size={32} className="text-white" />
                    ) : (
                      <XIcon size={32} className="text-white/70" />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
