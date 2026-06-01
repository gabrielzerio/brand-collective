const features = [
  {
    title: "Simples e rápido",
    description: "Qualquer pessoa consegue usar os arquivos, mesmo sem experiência com os softwares.",
  },
  {
    title: "Use sem limites",
    description: "Licença comercial inclusa. Use em quantos projetos quiser, para sua marca ou para clientes.",
  },
  {
    title: "Atualizações semanais",
    description: "Novos arquivos adicionados semanalmente. Você paga uma vez e continua recebendo mais.",
  },
];

export default function WhySection() {
  return (
    <section className="mx-auto mt-[56px] max-w-[1280px] px-4 md:mt-[84px]">
      <div className="flex flex-col items-center gap-[34px] md:gap-[40px]">
        <div className="flex flex-col items-center gap-[16px] md:gap-[20px]">
          <div className="section-badge">
            <div className="section-badge-dot" />
            <span>Por que a Brand Collective?</span>
          </div>
          <div className="flex flex-col items-center gap-[14px] md:gap-[16px]">
            <h2 className="section-title max-w-[658px]">
              Todos os materiais que você precisa em um só lugar
            </h2>
            <p className="section-subtitle max-w-[926px]">
              Chega de perder tempo garimpando arquivos no Google, dependendo de designer ou improvisando. Aqui você tem recursos de qualidade prontos para usar imediatamente.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[24px] md:flex-row md:gap-[20px]">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="h-[350px] w-full shrink-0 rounded-[22px] md:h-[378px] md:w-[31.5%]"
              style={{ border: "1px solid #E0DC01" }}
            >
              <div className="flex flex-col items-center gap-[24px] p-[16px] md:gap-[28px]">
                <div className="h-[146px] w-full rounded-[18px] bg-[#141414] md:h-[162px]" />
                <div className="flex w-full max-w-[320px] flex-col items-center gap-[12px] text-center md:gap-[14px]">
                  <h3
                    className="font-pragati w-full text-white"
                    style={{
                      fontWeight: 400,
                      fontSize: "34px",
                      lineHeight: "0.965em",
                      letterSpacing: "0",
                      textShadow: "3.6px 3.6px 15.78px rgba(0,0,0,1)",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[14px] font-medium leading-[1.5] text-[#838383] md:text-[15px] lg:text-[16px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
