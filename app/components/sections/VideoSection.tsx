import { ShieldCheck, Clock, Star, Play } from "lucide-react";

export default function VideoSection() {
  return (
    <section className="mx-auto mt-[48px] max-w-[1120px] px-4 md:mt-[64px]">
      <div className="flex flex-col items-center gap-[26px] md:gap-[32px]">
        <div className="flex max-w-[820px] flex-col items-center gap-[14px] md:gap-[16px]">
          <div className="section-badge">
            <div className="section-badge-dot" />
            <span>Como funciona?</span>
          </div>

          <div className="flex w-full flex-col items-center gap-[12px] md:gap-[14px]">
            <h2 className="section-title">Assista ao vídeo abaixo</h2>
            <p className="section-subtitle max-w-[760px]">
              Veja tudo que você terá acesso e por que todo dono de marca precisa dos recursos da Brand Collective para criar ou lançar coleções de maneira rápida e prática.
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
                <Play size={20} className="ml-1 text-white md:size-[24px] lg:size-[26px]" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-[36px] flex max-w-[820px] flex-col items-center justify-between gap-3 md:mt-[48px] md:flex-row md:gap-4">
        <TrustItem icon={<ShieldCheck size={22} />} text="Garantia de 7 dias" />
        <TrustItem icon={<Clock size={22} />} text="Acesso imediato" />
        <TrustItem icon={<Star size={22} />} text="Usado por +200 Marcas" />
      </div>
    </section>
  );
}

function BlurredBrandMarquee() {
  const items = Array.from({ length: 8 });

  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 hidden w-[2300px] -translate-x-1/2 -translate-y-1/2 rotate-[3.2deg] overflow-hidden bg-primary text-black opacity-80 blur-[1px] md:flex">
      <div className="flex whitespace-nowrap py-4">
        {items.map((_, i) => (
          <div key={i} className="flex items-center gap-4 px-5">
            <span className="font-pragati text-[38px] font-bold leading-none">BRAND COLLECTIVE</span>
            <span className="h-8 w-8 rounded-[4px] border-[3px] border-black" />
          </div>
        ))}
      </div>
    </div>
  );
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-0">
      <div
        className="relative z-10 flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full md:h-[48px] md:w-[48px] lg:h-[52px] lg:w-[52px]"
        style={{
          background: "linear-gradient(90deg, #E1FA00 18%, #EEFF55 100%)",
          border: "0.36px solid #CBE200",
          boxShadow: "0px 0px 10.63px rgba(225,250,0,0.35), 0px 0px 5.31px rgba(225,250,0,0.25), inset 0px 0.35px 0px rgba(225,250,0,1)",
        }}
      >
        <div className="text-black">{icon}</div>
      </div>
      <div
        className="-ml-[8px] rounded-full px-[18px] py-[11px] md:px-[22px] md:py-[13px] lg:px-[26px] lg:py-[14px]"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1.31px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 10.47px 41.87px rgba(0,0,0,0.37), inset 0px 1.31px 0px 1.31px rgba(255,255,255,0.1)",
          backdropFilter: "blur(20.25px)",
        }}
      >
        <span className="trust-text text-white text-sm md:text-base lg:text-xl">{text}</span>
      </div>
    </div>
  );
}
