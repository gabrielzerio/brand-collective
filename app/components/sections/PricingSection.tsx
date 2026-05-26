import Image from "next/image";
import { ArrowRight, Check, Star } from "lucide-react";

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
    <section className="relative mt-[120px] md:mt-[180px] overflow-hidden px-4">
      <div className="pointer-events-none absolute inset-y-[14%] left-0 hidden w-[26vw] bg-[linear-gradient(90deg,rgba(255,255,255,0.05),transparent)] blur-sm md:block" />
      <div className="pointer-events-none absolute inset-y-[14%] right-0 hidden w-[26vw] bg-[linear-gradient(270deg,rgba(255,255,255,0.05),transparent)] blur-sm md:block" />

      <div
        className="relative mx-auto w-full max-w-[668px] overflow-hidden rounded-[24px] border border-primary p-[28px] md:min-h-[2025px] md:p-[60px]"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
          backdropFilter: "blur(25.4px)",
        }}
      >
        <div className="absolute left-1/2 top-0 z-10 flex h-[70px] w-[270px] -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 rounded-full border border-primary-dark bg-primary text-black shadow-[0_0_35px_rgba(224,220,1,0.45)]">
          <Star size={24} fill="black" />
          <span className="font-pragati text-[34px] font-bold leading-none">Mais vendido</span>
        </div>

        <div className="mt-12 flex flex-col items-center">
          <div className="relative h-[420px] w-full md:h-[720px]">
            <div className="absolute inset-x-0 bottom-0 h-[60%] rounded-full bg-primary/15 blur-3xl" />
            <Image
              src="/images/mockup-gallery-3.png"
              alt="Vectors Streetwear Pack"
              fill
              className="object-contain"
              sizes="(min-width: 768px) 540px, 90vw"
            />
          </div>

          <div className="mt-[42px] flex flex-col items-center text-center">
            <h2 className="font-pragati text-[52px] leading-[0.95] text-white md:text-[70px]">
              Vectors Streetwear Pack v1
            </h2>
            <div className="mt-8 flex items-end justify-center gap-4">
              <div className="text-primary">
                <span className="align-top font-pragati text-[45px] leading-none">R$</span>
                <span className="font-pragati text-[150px] font-bold leading-[0.8] md:text-[227px]">97</span>
                <span className="font-pragati text-[58px] leading-none">,90</span>
              </div>
              <div className="mb-8 text-[#838383] line-through">
                <span className="font-pragati text-[33px]">R$</span>
                <span className="font-pragati text-[96px]">247</span>
                <span className="font-pragati text-[42px]">,90</span>
              </div>
            </div>
            <p className="mt-2 text-[20px] font-medium text-[#838383]">Parcele em até 6x sem juros</p>
          </div>

          <div className="mt-[62px] flex w-full flex-col gap-[24px]">
            {features.map((feature) => (
              <div key={feature} className="flex items-start gap-[12px]">
                <Check size={23} className="mt-1 shrink-0 text-primary" />
                <span className="text-[18px] font-medium leading-[1.45] text-white md:text-[30px]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <button
            className="mt-[50px] flex h-[68px] w-full items-center justify-center gap-3 rounded-full text-[20px] font-bold text-black md:w-[556px]"
            style={{
              background: "linear-gradient(90deg, #E1FA00 18%, #EEFF55 100%)",
              border: "1.94px solid #CBE200",
              boxShadow: "0px 0px 56.87px rgba(225,250,0,0.35), 0px 0px 28.44px rgba(225,250,0,0.25)",
            }}
          >
            Comprar agora
            <ArrowRight size={22} />
          </button>

          <div className="mt-[40px] flex items-center gap-3 text-[18px] font-medium text-white md:text-[30px]">
            <Check size={23} className="text-primary" />
            <span>7 Dias de Garantia Incondicional</span>
          </div>
        </div>
      </div>
    </section>
  );
}
