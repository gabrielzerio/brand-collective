import Image from "next/image";
import { Star } from "lucide-react";

const testimonial = {
  headline: "“Economizei dias, se não semanas de trabalho...”",
  body: "Antes eu ficava mó cota procurando uns PNG decente e com qualidade no Google pra por as estampa da minha marca... Nem acreditei quando encontrei tudo q eu precisava num lugar só e no precinho ainda, pqp parada salvou muito tempo.",
  name: "Leonardo Snow",
  rating: "4.9/5.0",
};

export default function TestimonialsSection() {
  return (
    <section className="mx-auto mt-[56px] max-w-[1180px] px-4 md:mt-[84px]">
      <div className="flex flex-col items-center gap-[34px] md:gap-[40px]">
        <div className="flex max-w-[680px] flex-col items-center gap-[16px] md:gap-[20px]">
          <div className="section-badge h-[42px] w-full max-w-[312px] justify-center px-0 md:h-[48px] md:max-w-[340px] lg:h-[53px] lg:max-w-[361px]">
            <div className="section-badge-dot" />
            <span>Aprovado por quem vive o corre</span>
          </div>
          <div className="flex flex-col items-center gap-[14px] md:gap-[16px]">
            <h2 className="section-title max-w-[695px]">
              O que os <span className="font-bold text-primary">nossos aliados</span> estão dizendo?
            </h2>
            <p className="section-subtitle">
              Mais de 200 donos de marca já economizaram horas de trabalho, lançaram coleções com mais qualidade e pararam de bater cabeça.
            </p>
          </div>
        </div>

        <div className="w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible">
          <div className="flex w-max snap-x snap-mandatory gap-[16px] px-1 sm:gap-[18px] md:gap-[20px] lg:grid lg:w-full lg:grid-cols-3 lg:gap-[22px] lg:px-0">
            {Array.from({ length: 6 }).map((_, i) => (
              <TestimonialCard
                key={i}
                {...testimonial}
                className="w-[82vw] snap-center sm:w-[58vw] md:w-[42vw] lg:w-auto lg:snap-align-none"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ headline, body, name, rating, className }: {
  headline: string;
  body: string;
  name: string;
  rating: string;
  className?: string;
}) {
  return (
    <article
      className={`relative flex min-h-[310px] shrink-0 flex-col justify-between overflow-hidden rounded-[20px] p-[18px] md:h-[350px] md:p-[18px] lg:h-[372px] lg:p-[20px] ${className ?? ""}`}
      style={{
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
        backdropFilter: "blur(12.7px)",
      }}
    >
      <div className="pointer-events-none absolute -right-3 top-0 font-pragati text-[110px] leading-none text-primary/5 md:text-[120px]">BC</div>

      <div className="relative z-10 flex h-[190px] flex-col gap-[14px] text-white md:h-[200px]">
        <h3 className="font-pragati text-[22px] font-bold leading-[24px] tracking-normal text-white md:text-[24px] md:leading-[26px]">
          <HighlightedQuote text={headline} />
        </h3>
        <p className="text-[13px] font-medium leading-[1.45] text-white md:text-[14px] lg:text-[15px]">
          {body}
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-[24px] md:gap-[28px]">
        <div className="h-[2px] w-full bg-[linear-gradient(90deg,rgba(225,250,0,0)_10%,#EEFF55_47%,rgba(225,250,0,0)_90%)] shadow-[0_0_40px_rgba(225,250,0,0.45)]" />

        <div className="flex items-center gap-[14px]">
          <div className="relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full md:h-[64px] md:w-[64px]">
            <Image src="/images/avatar-leo.png" alt={name} fill className="object-cover" sizes="77px" />
          </div>

          <div className="flex flex-col gap-[4px]">
            <span className="font-pragati text-[22px] leading-[26px] text-white md:text-[24px] md:leading-[28px]">
              {name}
            </span>
            <div className="flex items-center gap-[8px]">
              <div className="flex gap-[4px]">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={14} className="text-primary md:size-[15px]" fill="#E0DC01" />
                ))}
              </div>
              <span className="text-[12px] font-medium text-[#838383] md:text-[13px]">({rating})</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function HighlightedQuote({ text }: { text: string }) {
  const marker = "dias, se não semanas";
  const [before, after = ""] = text.split(marker);
  return (
    <>
      {before}<span className="text-primary">{marker}</span>{after}
    </>
  );
}
