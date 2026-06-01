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
    <section className="max-w-[1280px] mx-auto px-4 mt-[64px] md:mt-[96px]">
      <div className="flex flex-col items-center gap-[44px]">
        <div className="flex flex-col items-center gap-[20px]">
          <div className="section-badge">
            <div className="section-badge-dot" />
            <span>Por que a Brand Collective?</span>
          </div>
          <div className="flex flex-col items-center gap-[18px]">
            <h2 className="section-title max-w-[658px]">
              Todos os materiais que você precisa em um só lugar
            </h2>
            <p className="section-subtitle max-w-[926px]">
              Chega de perder tempo garimpando arquivos no Google, dependendo de designer ou improvisando. Aqui você tem recursos de qualidade prontos para usar imediatamente.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[40px] md:flex-row">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="h-[449px] w-full shrink-0 rounded-[25px] md:w-[400px]"
              style={{ border: "1px solid #E0DC01" }}
            >
              <div className="flex flex-col items-center gap-[40px] p-[19px]">
                <div className="h-[203px] w-full rounded-[25px] bg-[#141414]" />
                <div className="flex w-full max-w-[346px] flex-col items-center gap-[18px] text-center">
                  <h3
                    className="font-pragati w-full text-white"
                    style={{
                      fontWeight: 400,
                      fontSize: "41px",
                      lineHeight: "0.965em",
                      letterSpacing: "-0.02em",
                      textShadow: "3.6px 3.6px 15.78px rgba(0,0,0,1)",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-[18px] font-medium leading-[1.5] text-[#838383]">
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
