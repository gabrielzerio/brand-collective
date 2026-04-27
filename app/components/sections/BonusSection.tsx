{/*
  Figma: Frame 122 (511:293) — "Bônus Exclusivos"
  - Badge + Title + Subtitle header
  - 3 bonus card groups stacked vertically, gap 60px
  - Each group: stacked card 1280w × 610h = card with green border + image placeholder top + "Grátis" tag
  - Below card: title + description + 3 feature pills + "Bônus 0X" badge at bottom
*/}

import { Star, Clock, PenTool, ThumbsUp, Calculator, TrendingUp, Video } from "lucide-react";

const bonuses = [
    {
        number: "01",
        title: "Template de Ficha Técnica",
        description: "Piloto errado custa semanas do seu tempo e dinheiro que não volta. Com a nossa ficha técnica você especifica cada detalhe da sua peça com facilidade, sem margem para desperdício.",
        features: [
            { icon: <Clock size={16} />, text: "Economize tempo e dinheiro" },
            { icon: <PenTool size={16} />, text: "Sem margem para erro" },
            { icon: <Video size={16} />, text: "Vídeo tutorial ensinando a usar" },
        ]
    },
    {
        number: "02",
        title: "Pack de Estampas Streetwear",
        description: "Mais de 50 estampas prontas no estilo Street para você aplicar direto nas peças. Ideal para quem ainda não tem estampas definidas ou quer ter opções prontas para usar agora.",
        features: [
            { icon: <ThumbsUp size={16} />, text: "Aplicação fácil e rápida" },
            { icon: <Star size={16} />, text: "Artes de altíssima qualidade prontas para uso" },
            { icon: <Video size={16} />, text: "Vídeo tutorial ensinando a usar" },
        ]
    },
    {
        number: "03",
        title: "Planilha de Precificação Automática",
        description: "Quantas marcas fecham porque vendem, mas não lucram de fato? Com a nossa planilha você sabe exatamente o quanto cobrar em cada produto para garantir uma margem saudável.",
        features: [
            { icon: <Calculator size={16} />, text: "Cálculo automático" },
            { icon: <TrendingUp size={16} />, text: "Evite prejuízos" },
            { icon: <Video size={16} />, text: "Vídeo tutorial ensinando a usar" },
        ]
    }
];

export default function BonusSection() {
    return (
        <section className="max-w-[1280px] mx-auto px-4 mt-[120px]">
            <div className="flex flex-col items-center gap-[60px]">

                {/* Header */}
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

                {/* Bonus cards */}
                <div className="flex flex-col gap-[60px] w-full">
                    {bonuses.map((bonus, i) => (
                        <div key={i} className="w-full">
                            {/* Main card */}
                            <div
                                className="w-full rounded-[25px] p-[19px]"
                                style={{ border: "1px solid #E0DC01" }}
                            >
                                {/* Image placeholder */}
                                <div className="w-full h-[203px] bg-[#141414] rounded-[24px] relative mb-[30px]">
                                    {/* "Grátis" tag */}
                                    <div
                                        className="absolute top-[16px] right-[16px] rounded-full px-[14px] py-[6px] flex items-center gap-[6px]"
                                        style={{
                                            background: "linear-gradient(90deg, #E1FA00 18%, #EEFF55 100%)",
                                            border: "1.4px solid #CBE200",
                                            boxShadow: "0px 0px 10.63px rgba(225,250,0,0.35), 0px 0px 5.31px rgba(225,250,0,0.25), inset 0px 0.35px 0px rgba(225,250,0,1)",
                                        }}
                                    >
                                        <span className="text-black text-[14px] font-bold">🔥 Grátis</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex flex-col gap-[30px] px-[10px] pb-[10px]">
                                    {/* Title + Description */}
                                    <div className="flex flex-col gap-[18px]">
                                        <h3
                                            className="font-pragati text-white"
                                            style={{
                                                fontWeight: 400,
                                                fontSize: "41px",
                                                lineHeight: "0.965em",
                                                letterSpacing: "-0.02em",
                                                textShadow: "3.6px 3.6px 15.78px rgba(0,0,0,1)",
                                            }}
                                        >
                                            {bonus.title}
                                        </h3>
                                        <p className="text-[16px] font-medium text-white leading-[1.5]">
                                            {bonus.description}
                                        </p>
                                    </div>

                                    {/* Feature pills */}
                                    <div className="flex flex-wrap gap-[12px]">
                                        {bonus.features.map((f, j) => (
                                            <div
                                                key={j}
                                                className="section-badge text-[14px] py-[10px] px-[18px]"
                                            >
                                                <span className="text-white">{f.icon}</span>
                                                <span>{f.text}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bottom badge */}
                                    <div
                                        className="w-fit rounded-full px-[24px] py-[12px] flex items-center gap-[8px]"
                                        style={{
                                            background: "linear-gradient(90deg, #E1FA00 18%, #EEFF55 100%)",
                                            border: "1.94px solid #CBE200",
                                            boxShadow: "0px 0px 56.87px rgba(225,250,0,0.35), 0px 0px 28.44px rgba(225,250,0,0.25)",
                                        }}
                                    >
                                        <Star size={18} className="text-black" />
                                        <span className="text-black font-bold text-[16px]">
                                            Bônus {bonus.number}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
