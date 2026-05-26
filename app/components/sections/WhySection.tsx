{/*
  Figma: Frame 109 (511:265) â€” "Por que a Brand Collective?"
  3 feature cards in a row, 400x449 each, gap 40px
  Each card: border 1px MAIN GREEN, rounded-25
  Inside: padding 19px, column gap 40px
    - Top image placeholder 362w x 203h #141414 rounded-25
    - Text block: title (Pragati 41px) + desc (Poppins 500 20px #838383), gap 18px
*/}

const features = [
    {
        title: "Simples e rápido",
        description: "Qualquer pessoa consegue usar os arquivos, mesmo sem experiência com os softwares."
    },
    {
        title: "Use sem limites",
        description: "Licença comercial inclusa. Use em quantos projetos quiser, para sua marca ou para clientes."
    },
    {
        title: "Atualizações semanais",
        description: "Novos arquivos adicionados semanalmente. Você paga uma vez e continua recebendo mais."
    }
];

export default function WhySection() {
    return (
        <section className="max-w-[1280px] mx-auto px-4 mt-[120px]">
            <div className="flex flex-col items-center gap-[60px]">

                {/* Header */}
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

                {/* Feature cards */}
                <div className="flex flex-col md:flex-row items-center gap-[40px] w-full">
                    {features.map((f, i) => (
                        <div
                            key={i}
                            className="w-full md:w-[400px] h-[449px] rounded-[25px] shrink-0"
                            style={{
                                border: "1px solid #E0DC01",
                            }}
                        >
                            <div className="flex flex-col items-center gap-[40px] p-[19px]">
                                {/* Image placeholder */}
                                <div
                                    className="w-full rounded-[25px]"
                                    style={{
                                        height: "203px",
                                        background: "#141414",
                                    }}
                                />
                                {/* Text */}
                                <div className="flex flex-col items-center gap-[18px] w-[346px] text-center">
                                    <h3
                                        className="font-pragati text-white w-full"
                                        style={{
                                            fontWeight: 400,
                                            fontSize: "41px",
                                            lineHeight: "0.965em",
                                            letterSpacing: "-0.02em",
                                            textShadow: "3.6px 3.6px 15.78px rgba(0,0,0,1)",
                                        }}
                                    >
                                        {f.title}
                                    </h3>
                                    <p className="text-[20px] font-medium text-[#838383] leading-[1.5]">
                                        {f.description}
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
