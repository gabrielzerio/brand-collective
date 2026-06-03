import { Play } from "lucide-react";
import SecurityIcon from "../icons/securityIcon";
import Image from "next/image";
import ClockIcon from "../icons/clockIcon";
import StarIcon from "../icons/starIcon";

export default function VideoSection() {
  return (
    <section className="mx-auto mt-[48px] max-w-[1220px] px-4 md:mt-[64px]">
      <div className="flex flex-col items-center gap-[26px] md:gap-[32px]">
        <div className="flex max-w-[820px] flex-col items-center gap-[14px] md:gap-[16px]">
          <div className="section-badge">
            <div className="section-badge-dot" />
            <span>Como funciona?</span>
          </div>

          <div className="flex w-full flex-col items-center gap-[12px] md:gap-[14px]">
            <h2 className="section-title">
              Assista ao <p className="text-primary inline">vídeo abaixo</p>
            </h2>
            <p className="section-subtitle max-w-[760px]">
              Veja tudo que você terá acesso e por que todo dono de marca
              precisa dos recursos da Brand Collective para criar ou lançar
              coleções de maneira rápida e prática.
            </p>
          </div>
        </div>

        <div className="relative flex w-full justify-center">
          <BlurredBrandMarquee />

          <div
            className="group relative z-10 flex w-full max-w-[620px] cursor-pointer items-center justify-center overflow-hidden rounded-[20px] sm:max-w-[680px] md:max-w-[720px] md:rounded-[24px] lg:max-w-[820px]"
            style={{
              aspectRatio: "1014 / 569",
              minHeight: "154px",
              background: "#E0DC01",
            }}
          >
            <div className="relative h-[58px] w-[58px] md:h-[66px] md:w-[66px] lg:h-[72px] lg:w-[72px]">
              <div className="absolute inset-0 bg-black/35 rounded-full" />
              <div className="absolute inset-[7px] flex items-center justify-center rounded-full bg-black md:inset-[8px]">
                <Play
                  size={20}
                  className="ml-1 text-white md:size-[24px] lg:size-[26px]"
                  fill="white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[36px] flex w-full max-w-[1218px] flex-col items-center justify-center gap-4 md:mt-[53px] lg:flex-row lg:gap-[22px]">
        <TrustItem
          icon={<SecurityIcon />}
          label="Garantia de"
          highlight="7 dias"
          className="lg:w-[378px]"
        />
        <TrustItem
          icon={<ClockIcon />}
          label="Acesso"
          highlight="imediato"
          className="lg:w-[368px]"
        />
        <TrustItem
          icon={<StarIcon />}
          label="Usado por"
          highlight="+200 Marcas"
          className="lg:w-[448px]"
        />
      </div>
    </section>
  );
}

function BlurredBrandMarquee() {
  const items = Array.from({ length: 8 });

  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden w-[2300px] -translate-x-1/2 -translate-y-1/2 rotate-[3.2deg] overflow-hidden bg-primary text-black opacity-80 blur-[7px] md:flex">
      <div className="flex items-center gap-10 whitespace-nowrap px-5 py-4">
        {items.map((_, i) => (
          <div key={i} className="contents">
            <span className="font-impact text-7xl font-bold leading-none">
              BRAND COLLECTIVE
            </span>
            <span className="relative h-[60px] w-[60px] shrink-0 overflow-hidden">
              <Image
                src="/fb06852bbb6c389a2fba2122b63e3b59ddcd0ff0.png"
                alt="Logo"
                width={60}
                height={60}
                className="absolute left-1/2 top-1/2 h-[60px] w-[60px] -translate-x-1/2 -translate-y-1/2  object-contain"
              />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustItem({
  icon,
  label,
  highlight,
  className = "",
}: {
  icon: React.ReactNode;
  label: string;
  highlight: string;
  className?: string;
}) {
  return (
    <div className={`relative h-[86px] w-full max-w-[448px] ${className}`}>
      <div
        className="absolute left-0 top-1/2 z-10 flex h-[75px] w-[75px] -translate-y-1/2 items-center justify-center rounded-full"
        style={{
          background: "linear-gradient(90deg, #E1FA00 18%, #EEFF55 100%)",
          border: "0.36px solid #CBE200",
          boxShadow:
            "0px 0px 10px rgba(225,250,0,0.35), 0px 0px 20px rgba(225,250,0,0.18), inset 0px 0.354px 0px rgba(225,250,0,1)",
        }}
      >
        <div className="flex h-[62px] w-[63px] items-center justify-center rounded-full border-[3px] border-black text-black [&_svg]:h-[36px] [&_svg]:w-[36px]">
          {icon}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[48px] top-1/2 z-30 h-[70px] w-[58px] -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at left, rgba(225,250,0,0.28) 0%, rgba(225,250,0,0.1) 42%, rgba(225,250,0,0.025) 72%, rgba(225,250,0,0) 100%)",
          filter: "blur(6px)",
        }}
      />

      <div
        className="absolute inset-y-0 left-[62px] right-0 z-20 flex min-w-0 items-center rounded-full pl-[50px] pr-[30px]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.035))",
          border: "1.308px solid rgba(255, 255, 255, 0.14)",
          boxShadow:
            "0px 10.467px 41.87px rgba(0,0,0,0.37), inset 0px 1.308px 0px rgba(255,255,255,0.1), inset 0px -1px 0px rgba(255,255,255,0.03)",
          backdropFilter: "blur(10.126px)",
          WebkitBackdropFilter: "blur(10.126px)",
        }}
      >
        <span className="font-pragati whitespace-nowrap text-[24px] font-bold leading-none tracking-[-0.02em] text-white [text-shadow:3.116px_3.116px_13.679px_#000] sm:text-[30px] md:text-[36px]">
          {label} <span className="text-primary">{highlight}</span>
        </span>
      </div>
    </div>
  );
}
