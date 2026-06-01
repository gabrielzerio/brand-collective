import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

const features = [
  "+350 Vetores de peças para criação de coleções e fichas técnicas",
  "+400 Mockups PNG em Full HD, frente e costas, fundo transparente",
  "Arquivos 3D feitos no Blender para apresentações de alto impacto",
  "Bônus 01: Template de Ficha Técnica",
  "Bônus 02: Pack de Estampas Streetwear",
  "Bônus 03: Planilha de Precificação Automática",
];

export default function PricingSection() {
  return (
    <section className="relative mt-[60px] overflow-hidden px-4 py-[24px] md:mt-[88px] md:min-h-[1380px] lg:min-h-[1460px]">
      <GhostOfferCard side="left" />
      <GhostOfferCard side="right" />

      <article
        className="relative z-10 mx-auto w-full max-w-[560px] rounded-[22px] border border-primary px-[18px] pb-[20px] pt-[48px] md:h-[1300px] md:px-[38px] lg:h-[1380px] lg:max-w-[600px] lg:px-[44px]"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
          backdropFilter: "blur(12.7px)",
        }}
      >
        <BestSellerBadge />

        <div className="flex flex-col items-center">
          <ProductPreview />
          <ThumbStrip />
          <SavingsBadges />
          <PriceBlock />

          <div className="mt-[30px] h-[3px] w-full max-w-[460px] rounded-full bg-[linear-gradient(90deg,rgba(225,250,0,0)_9.6%,#EEFF55_46.6%,rgba(225,250,0,0)_90.4%)] shadow-[0_0_56px_rgba(225,250,0,0.35),0_0_28px_rgba(225,250,0,0.25)] md:mt-[34px]" />

          <div className="mt-[30px] flex w-full max-w-[430px] flex-col gap-[12px] md:mt-[34px] md:gap-[14px]">
            {features.map((feature) => (
              <FeatureRow key={feature}>{feature}</FeatureRow>
            ))}
          </div>

          <button
            className="mt-[28px] flex h-[50px] w-full max-w-[430px] items-center justify-center gap-[8px] rounded-full text-[14px] font-semibold text-black md:h-[54px] md:text-[15px]"
            style={{
              background: "linear-gradient(90deg, #E1FA00 17.8%, #EEFF55 100%)",
              border: "1.94px solid #CBE200",
              boxShadow: "0px 0px 56.87px rgba(225,250,0,0.35), 0px 0px 28.44px rgba(225,250,0,0.25), inset 0px 1.9px 0px #E1FA00",
            }}
          >
            Comprar agora
            <ArrowUpRight size={24} strokeWidth={2.6} />
          </button>

          <div className="mt-[22px] flex items-center gap-[10px] text-[13px] font-medium text-white md:text-[15px]">
            <FeatureIcon />
            <span>7 Dias de Garantia Incondicional</span>
          </div>
        </div>
      </article>
    </section>
  );
}

function FeatureRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-[24px] items-start gap-[10px]">
      <FeatureIcon className="mt-[3px]" />
      <span className="text-[13px] font-medium leading-normal text-white md:text-[15px]">
        {children}
      </span>
    </div>
  );
}

function FeatureIcon({ className = "" }: { className?: string }) {
  return (
    <span className={`relative inline-flex h-[20px] w-[20px] shrink-0 items-center justify-center text-black md:h-[22px] md:w-[22px] ${className}`}>
      <svg viewBox="0 0 24 24" className="absolute inset-0 h-full w-full fill-primary drop-shadow-[0_0_8px_rgba(224,220,1,0.35)]" aria-hidden="true">
        <path d="M12 1.7l2.05 2.13 2.93-.65.9 2.87 2.86.9-.65 2.93L22.3 12l-2.21 2.12.65 2.93-2.86.9-.9 2.87-2.93-.65L12 22.3l-2.05-2.13-2.93.65-.9-2.87-2.86-.9.65-2.93L1.7 12l2.21-2.12-.65-2.93 2.86-.9.9-2.87 2.93.65L12 1.7z" />
      </svg>
      <svg viewBox="0 0 16 16" className="relative h-[10px] w-[10px] md:h-[11px] md:w-[11px]" aria-hidden="true">
        <path d="M6.4 11.6 2.8 8l1.25-1.25L6.4 9.1l5.55-5.55L13.2 4.8 6.4 11.6z" fill="currentColor" />
      </svg>
    </span>
  );
}

function ProductPreview() {
  return (
    <div className="relative h-[230px] w-full rounded-[20px] border border-white/10 bg-white/[0.015] md:h-[340px] md:w-[340px] lg:h-[370px] lg:w-[370px]">
      <div className="absolute left-1/2 top-1/2 h-[280px] w-[220px] -translate-x-1/2 -translate-y-1/2 rotate-[-72deg] rounded-full bg-primary/20 blur-[34px] md:h-[320px] md:w-[250px]" />
      <Image
        src="/images/pricing-box.png"
        alt="Vectors Streetwear Pack"
        width={309}
        height={413}
        priority
        className="absolute left-1/2 top-1/2 w-[166px] -translate-x-1/2 -translate-y-1/2 drop-shadow-[25px_25px_99px_rgba(0,0,0,0.2)] md:w-[205px] lg:w-[220px]"
      />
    </div>
  );
}

function ThumbStrip() {
  return (
    <div className="mt-[20px] flex w-full max-w-[340px] items-center gap-[12px] overflow-hidden md:max-w-[360px] md:gap-[14px]">
      <ThumbCard>
        <Image src="/images/pricing-thumb-pack.png" alt="Pack preview" width={112} height={46} className="relative z-10 rotate-[-2deg] drop-shadow-[0_0_4px_black]" />
        <TinyDownloadBadge />
      </ThumbCard>
      <ThumbCard>
        <Image src="/images/pricing-thumb-vector-preview.png" alt="Vector preview" fill className="object-cover opacity-80 mix-blend-luminosity" sizes="147px" />
      </ThumbCard>
      <ThumbCard>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_0%,rgba(224,220,1,0.3),transparent_35%),radial-gradient(circle_at_85%_100%,rgba(224,220,1,0.25),transparent_36%)]" />
        <div className="absolute inset-x-[15px] top-[10px] flex justify-between">
          <Image src="/images/pricing-thumb-mockup-d.png" alt="Mockup" width={45} height={38} />
          <Image src="/images/pricing-thumb-mockup-b.png" alt="Mockup" width={45} height={38} />
        </div>
        <div className="absolute inset-x-[20px] top-[48px] flex justify-between">
          <Image src="/images/pricing-thumb-mockup-c.png" alt="Mockup" width={36} height={60} />
          <Image src="/images/pricing-thumb-mockup-a.png" alt="Mockup" width={36} height={60} />
        </div>
        <p className="absolute bottom-[11px] left-1/2 w-[114px] -translate-x-1/2 rounded-[3px] border border-primary/20 bg-white/5 px-1 text-center text-[4.9px] font-medium leading-[6.6px] text-white backdrop-blur-sm">
          Visualize suas ideias em <span className="font-semibold text-primary">segundos.</span> A ferramenta que todo dono de marca <span className="font-semibold text-primary">precisa ter.</span>
        </p>
      </ThumbCard>
      <ArrowUpRight className="hidden rotate-45 text-primary md:block" size={22} />
    </div>
  );
}

function ThumbCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-[92px] w-[96px] shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-black md:h-[104px] md:w-[108px]">
      <div className="absolute inset-0 bg-[#5d5d5d]" />
      {children}
    </div>
  );
}

function TinyDownloadBadge() {
  return (
    <div className="absolute bottom-[39px] left-1/2 z-20 flex h-[15px] w-[100px] -translate-x-1/2 items-center justify-center rounded-full border border-primary/20 bg-black/55 text-[4.8px] text-white backdrop-blur-sm">
      Agora com <span className="mx-0.5 text-[7px] font-bold text-primary">+350</span> <span className="text-[7px]">Vetores</span>
    </div>
  );
}

function SavingsBadges() {
  return (
    <div className="mt-[24px] flex w-full flex-col gap-[10px] md:mt-[28px] md:w-[400px] md:flex-row md:gap-[12px]">
      <Badge className="md:w-[190px]">Economize R$ 200</Badge>
      <Badge className="md:w-[220px]">Melhor custo-benefício</Badge>
    </div>
  );
}

function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`section-badge h-[40px] justify-center px-0 md:h-[44px] ${className}`}>
      <div className="section-badge-dot" />
      <span>{children}</span>
    </div>
  );
}

function PriceBlock() {
  return (
    <div className="mt-[24px] flex flex-col items-center text-center md:mt-[28px]">
      <h2 className="w-full max-w-[420px] font-pragati text-[34px] font-bold leading-[1] tracking-normal text-white md:text-[44px] md:leading-[44px] lg:text-[48px] lg:leading-[48px]">
        Vectors Streetwear Pack v1
      </h2>

      <div className="mt-[16px] flex items-end justify-center gap-[16px] md:gap-[20px]">
        <div className="text-primary">
          <span className="align-[28px] text-[18px] font-semibold md:text-[22px]">R$</span>
          <span className="font-pragati text-[70px] font-bold leading-[0.8] tracking-normal md:text-[84px] lg:text-[90px]">97</span>
          <span className="align-[28px] font-pragati text-[24px] font-bold md:text-[28px]">,90</span>
        </div>
        <div className="mb-[18px] text-[#555] line-through">
          <span className="align-[18px] text-[12px] md:text-[15px]">R$</span>
          <span className="font-pragati text-[42px] font-bold md:text-[50px]">247</span>
          <span className="align-[18px] font-pragati text-[16px] font-bold md:text-[20px]">,90</span>
        </div>
      </div>

      <p className="mt-[-2px] text-[14px] font-medium text-white md:text-[16px]">
        Parcele em até <span className="text-primary">6x sem juros</span>
      </p>
    </div>
  );
}

function BestSellerBadge() {
  return (
    <div className="absolute left-1/2 top-0 z-20 flex h-[44px] w-[174px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-[8px] rounded-full border-[1.94px] border-primary-dark bg-primary text-black shadow-[0_0_35px_rgba(224,220,1,0.62)] md:h-[48px] md:w-[190px]">
      <Star size={16} fill="black" />
      <span className="text-[13px] font-semibold leading-none md:text-[14px]">Mais vendido</span>
    </div>
  );
}

function GhostOfferCard({ side }: { side: "left" | "right" }) {
  const position = side === "left" ? "left-[calc(50%-1118px)]" : "left-[calc(50%+450px)]";

  return (
    <div className={`pointer-events-none absolute top-[160px] hidden h-[1300px] w-[460px] overflow-hidden rounded-[22px] opacity-35 blur-[8px] md:block lg:h-[1380px] lg:w-[500px] ${position}`}>
      <div className="absolute inset-0 rounded-[24px] border border-white/10 bg-white/[0.05]" />
      <div className="absolute left-[42px] top-[48px] h-[340px] w-[340px] rounded-[22px] border border-white/10 bg-white/[0.015] lg:h-[370px] lg:w-[370px]">
        <div className="absolute left-1/2 top-1/2 h-[360px] w-[280px] -translate-x-1/2 -translate-y-1/2 rotate-[-72deg] rounded-full bg-primary/20 blur-[34px]" />
        <Image src="/images/pricing-box.png" alt="" width={309} height={413} className="absolute left-1/2 top-1/2 w-[205px] -translate-x-1/2 -translate-y-1/2 lg:w-[220px]" />
      </div>
      <div className="absolute left-[54px] top-[620px] w-[360px] text-center font-pragati text-[44px] font-bold leading-[44px] tracking-normal text-white lg:text-[48px] lg:leading-[48px]">Vectors Streetwear Pack v1</div>
      <div className="absolute left-[64px] top-[760px] text-primary">
        <span className="align-[32px] text-[25px] font-semibold">R$</span>
        <span className="font-pragati text-[84px] font-bold leading-[0.8] tracking-normal">97</span>
      </div>
      <div className="absolute left-[42px] top-[1220px] h-[54px] w-[400px] rounded-full bg-primary lg:top-[1300px]" />
    </div>
  );
}
