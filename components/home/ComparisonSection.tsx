import Image from "next/image";
import { PageContainer } from "@/components/ui/PageContainer";
import { CheckIcon, XIcon } from "@/components/ui/icons";

const TABLE_MIN_W = "min-w-[1213px]";
const ROW_GRID = "grid grid-cols-[438px_repeat(5,135px)] gap-5 items-center";

const columns = [
  { label: "Research first", align: "left" as const },
  { label: "Personalised plan", align: "center" as const },
  { label: "Scope-based pricing", align: "center" as const },
  { label: "All five services", align: "center" as const },
  {
    label: ["Outcome accountability", "Cubency"] as const,
    align: "center" as const,
    multiline: true,
  },
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
        <div className="mx-auto mb-[60px] flex max-w-[880px] flex-col gap-4 text-center">
          <h2 className="text-[36px] font-semibold leading-[1.1] tracking-tight text-black lg:text-[56px] lg:leading-[61.6px]">
            Agency, freelancer, in-house or AI tool?{" "}
            <span className="font-serif italic">See the difference</span>
          </h2>
          <p className="mx-auto max-w-[519px] text-base tracking-[-0.72px] text-grey-subtle">
            How a research-led digital marketing agency compares with the other
            ways to get marketing done.
          </p>
        </div>

        <div className="overflow-x-auto rounded-[20px] bg-navy-dark px-8 py-[50px]">
          <div className={`flex flex-col ${TABLE_MIN_W}`}>
            <div className={`hidden pb-8 lg:grid ${ROW_GRID}`}>
              <div aria-hidden />
              {columns.map((column, index) =>
                column.multiline ? (
                  <div
                    key={`column-${index}`}
                    className="flex flex-col items-center text-center text-lg font-semibold text-blue-50"
                  >
                    <span>{column.label[0]}</span>
                    <span>{column.label[1]}</span>
                  </div>
                ) : (
                  <p
                    key={`column-${index}`}
                    className={`text-lg font-semibold text-blue-50 ${
                      column.align === "left" ? "text-left" : "text-center"
                    }`}
                  >
                    {column.label}
                  </p>
                ),
              )}
            </div>

            {rows.map((row) => (
              <div
                key={row.name}
                className={`${ROW_GRID} rounded-2xl px-8 py-[30px] ${
                  row.highlighted
                    ? "bg-blue-500"
                    : "border-b border-blue-700 last:border-b-0"
                }`}
              >
                <div className="flex items-center gap-5">
                  <div className="flex size-[70px] shrink-0 items-center justify-center rounded-[12px] bg-blue-900 p-2.5">
                    {row.highlighted ? (
                      <Image
                        src="/images/home/check-badge.svg"
                        alt=""
                        width={30}
                        height={30}
                        aria-hidden
                      />
                    ) : (
                      <CheckIcon size={30} className="text-white" />
                    )}
                  </div>
                  <div className="flex flex-col gap-4">
                    <p className="text-[32px] font-bold text-white">
                      {row.name}
                    </p>
                    <p className="max-w-[348px] text-lg leading-normal text-blue-50">
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
                      <XIcon size={48} className="text-white/70" />
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
