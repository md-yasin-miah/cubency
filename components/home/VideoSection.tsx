import { PageContainer } from "@/components/ui/PageContainer";
import { PlayIcon } from "@/components/ui/icons";

export function VideoSection() {
  return (
    <section className="py-12 lg:py-[50px] lg:pb-25">
      <PageContainer>
        <div className="relative flex h-[320px] items-center justify-center overflow-hidden rounded-[20px] bg-[#d9d9d9] lg:h-[592px]">
          <button
            type="button"
            aria-label="Play video"
            className="flex size-[115px] items-center justify-center rounded-full border-8 border-[#fafafa] bg-blue-500 text-white"
          >
            <PlayIcon size={31} />
          </button>
        </div>
      </PageContainer>
    </section>
  );
}
