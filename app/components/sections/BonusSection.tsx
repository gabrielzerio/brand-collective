import { Calculator, Clock, PenTool, Star, ThumbsUp, Video } from "lucide-react";

const bonuses = [
  {
    number: "01",
    title: "Template de Ficha Técnica",
    description: "Piloto errado custa semanas do seu tempo e dinheiro que não volta. Com a nossa ficha técnica você especifica cada detalhe da sua peça com facilidade, sem margem para desperdício.",
    features: [
      { icon: <Clock size={16} />, text: "Economize tempo e dinheiro" },
      { icon: <PenTool size={16} />, text: "Sem margem para erro" },
      { icon: <Video size={16} />, text: "Vídeo tutorial ensinando a usar" },
    ],
  },
  {
    number: "02",
    title: "Pack de Estampas Streetwear",
    description: "Mais de 50 estampas prontas no estilo Street para você aplicar direto nas peças. Ideal para quem ainda não tem estampas definidas ou quer ter opções prontas para usar agora.",
    features: [
      { icon: <ThumbsUp size={16} />, text: "Aplicação fácil e rápida" },
      { icon: <Star size={16} />, text: "Artes de altíssima qualidade prontas para uso" },
      { icon: <Video size={16} />, text: "Vídeo tutorial ensinando a usar" },
    ],
  },
  {
    number: "03",
    title: "Planilha de Precificação Automática",
    description: "Quantas marcas fecham porque vendem, mas não lucram de fato? Com a nossa planilha você sabe exatamente o quanto cobrar em cada produto para garantir uma margem saudável.",
    features: [
      { icon: <Calculator size={16} />, text: "Cálculo automático" },
      { icon: <Star size={16} />, text: "Evite prejuízos" },
      { icon: <Video size={16} />, text: "Vídeo tutorial ensinando a usar" },
    ],
  },
];

export default function BonusSection() {
  return (
    <section className="page-shell mx-auto mt-[60px] max-w-[1180px] px-4 md:mt-[88px]">
      <div className="flex flex-col items-center gap-[34px] md:gap-[40px]">
        <div className="flex max-w-[650px] flex-col items-center gap-[16px] md:gap-[20px]">
          <div className="section-badge h-[42px] w-full max-w-[348px] justify-center px-0 md:h-[48px] md:max-w-[404px] lg:h-[53px] lg:max-w-[434px]">
            <div className="section-badge-dot" />
            <span>Vamos adiantar ainda mais o seu corre</span>
          </div>
          <div className="flex flex-col items-center gap-[14px] md:gap-[16px]">
            <h2 className="section-title max-w-[644px]">
              De quebra você ainda recebe <span className="font-bold text-primary">3 bônus exclusivos</span>
            </h2>
            <p className="section-subtitle">
              Tenha acesso a três ferramentas essenciais que todo dono de marca precisa ter, sem pagar nada a mais por isso.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[30px] md:gap-[34px]">
          {bonuses.map((bonus) => (
            <article
              key={bonus.number}
              className="relative overflow-visible rounded-[22px] border border-primary/80 p-[18px] pt-[66px] md:min-h-[420px] md:p-[30px] md:pt-[68px]"
            >
              <div className="absolute left-[24px] top-0 z-10 flex h-[54px] w-[142px] items-center justify-center rounded-full bg-primary text-[14px] font-bold text-black shadow-[0_0_24px_rgba(224,220,1,0.5)] md:left-[40px] md:h-[58px] md:w-[152px] md:text-[15px]">
                Bônus {bonus.number}
              </div>
              <div className="grid gap-6 md:grid-cols-[1fr_420px] md:items-start md:gap-[28px] lg:grid-cols-[1fr_460px]">
                <div className="order-2 flex flex-col gap-[22px] md:order-1 md:gap-[24px]">
                  <div className="flex flex-col gap-[14px] md:gap-[16px]">
                    <h3 className="font-pragati text-[32px] leading-[0.98] tracking-normal text-white md:text-[38px] lg:text-[42px]">
                      {bonus.title}
                    </h3>
                    <p className="text-[14px] font-medium leading-[1.55] text-white md:max-w-[500px] md:text-[15px] lg:text-[16px]">
                      {bonus.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-[12px]">
                    {bonus.features.map((feature) => (
                      <div key={feature.text} className="section-badge px-[14px] py-[9px] text-[12px] md:text-[13px] lg:text-[14px]">
                        <span className="text-primary">{feature.icon}</span>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-1 min-h-[210px] overflow-hidden rounded-[20px] bg-[#141414] md:order-2 md:h-[340px] md:w-[420px] lg:h-[380px] lg:w-[460px]">
                  <div className="relative h-full min-h-[210px] overflow-hidden rounded-[20px]">
                    <div className="absolute right-4 top-4 flex h-[44px] w-[92px] items-center justify-center rounded-full bg-primary text-[14px] font-bold text-black md:h-[48px] md:w-[98px] md:text-[15px]">
                      Grátis
                    </div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(224,220,1,0.12),transparent_55%)]" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
