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
    <section className="page-shell max-w-[1280px] mx-auto px-4 mt-[120px] md:mt-[180px]">
      <div className="flex flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center gap-[20px] max-w-[688px]">
          <div className="section-badge">
            <div className="section-badge-dot" />
            <span>Bônus Exclusivos</span>
          </div>
          <div className="flex flex-col items-center gap-[18px]">
            <h2 className="section-title">
              De quebra você ainda recebe 3 bônus exclusivos
            </h2>
            <p className="section-subtitle">
              Tenha acesso a três ferramentas essenciais que todo dono de marca precisa ter, sem pagar nada a mais por isso.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[60px] w-full">
          {bonuses.map((bonus) => (
            <article
              key={bonus.number}
              className="relative overflow-hidden rounded-[25px] border border-primary/80 p-[20px] md:min-h-[610px] md:p-[39px]"
            >
              <div className="absolute left-[36px] top-[36px] z-10 rounded-full bg-primary px-5 py-2 text-[14px] font-bold text-black shadow-[0_0_24px_rgba(224,220,1,0.5)]">
                Bônus {bonus.number}
              </div>
              <div className="grid gap-8 md:grid-cols-[1fr_585px] md:items-center md:gap-[56px]">
                <div className="order-2 flex flex-col gap-[28px] pt-2 md:order-1 md:pt-[62px]">
                  <div className="flex flex-col gap-[18px]">
                    <h3 className="font-pragati text-[40px] leading-[0.96] text-white md:text-[58px]">
                      {bonus.title}
                    </h3>
                    <p className="text-[15px] font-medium leading-[1.55] text-white md:max-w-[500px] md:text-[18px]">
                      {bonus.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-[12px]">
                    {bonus.features.map((feature) => (
                      <div key={feature.text} className="section-badge px-[18px] py-[10px] text-[13px]">
                        <span className="text-primary">{feature.icon}</span>
                        <span>{feature.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="order-1 min-h-[230px] rounded-[24px] bg-[#141414] md:order-2 md:h-[532px]">
                  <div className="relative h-full min-h-[230px] overflow-hidden rounded-[24px]">
                    <div className="absolute right-4 top-4 rounded-full bg-primary px-4 py-1.5 text-[13px] font-bold text-black">
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
