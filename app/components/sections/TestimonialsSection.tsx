{/*
  Figma: Frame 133 (511:419) â€” "Aprovado por quem vive o corre"
  - Badge + Title + Subtitle
  - 2 rows of 3 testimonial cards each, gap 28px between cards
  - Each card: 24px rounded, glass bg, contains:
    - SVG watermark at 4% opacity
    - Product image
    - Quote headline (Pragati 27px) + body text (Poppins 500 16px)
    - Bottom: gradient line + avatar + name + rating stars + (4.9/5.0)
*/}

import { Star } from "lucide-react";

const testimonials = [
    {
        headline: "\u201cEconomizei dias, se não semanas de trabalho...\u201d",
        body: "Antes eu ficava mó cota procurando uns PNG decente e com qualidade no Google pra por as estampa da minha marca... Nem acreditei quando encontrei tudo q eu precisava num lugar só e no precinho ainda, pqp parada salvou muito tempo.",
        name: "Leonardo Snow",
        rating: "4.9/5.0",
    },
    {
        headline: "\u201cEconomizei dias, se não semanas de trabalho...\u201d",
        body: "Antes eu ficava mó cota procurando uns PNG decente e com qualidade no Google pra por as estampa da minha marca... Nem acreditei quando encontrei tudo q eu precisava num lugar só e no precinho ainda, pqp parada salvou muito tempo.",
        name: "Leonardo Snow",
        rating: "4.9/5.0",
    },
    {
        headline: "\u201cEconomizei dias, se não semanas de trabalho...\u201d",
        body: "Antes eu ficava mó cota procurando uns PNG decente e com qualidade no Google pra por as estampa da minha marca... Nem acreditei quando encontrei tudo q eu precisava num lugar só e no precinho ainda, pqp parada salvou muito tempo.",
        name: "Leonardo Snow",
        rating: "4.9/5.0",
    },
];

export default function TestimonialsSection() {
    return (
        <section className="max-w-[1280px] mx-auto px-4 mt-[120px]">
            <div className="flex flex-col items-center gap-[60px]">

                {/* Header */}
                <div className="flex flex-col items-center gap-[20px] max-w-[733px]">
                    <div className="section-badge">
                        <div className="section-badge-dot" />
                        <span>Aprovado por quem vive o corre</span>
                    </div>
                    <div className="flex flex-col items-center gap-[18px]">
                        <h2 className="section-title">
                            O que os nossos aliados estão dizendo?
                        </h2>
                        <p className="section-subtitle">
                            Mais de 200 donos de marca já economizaram horas de trabalho, lançaram coleções com mais qualidade e pararam de bater cabeça.
                        </p>
                    </div>
                </div>

                {/* Testimonial grid â€” 2 rows Ã— 3 cols */}
                <div className="flex flex-col gap-[28px] w-full">
                    {[0, 1].map((row) => (
                        <div key={row} className="flex flex-col md:flex-row gap-[28px] w-full">
                            {testimonials.map((t, i) => (
                                <TestimonialCard key={`${row}-${i}`} {...t} />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ headline, body, name, rating }: {
    headline: string;
    body: string;
    name: string;
    rating: string;
}) {
    return (
        <div
            className="flex-1 rounded-[24px] p-[30px] flex flex-col justify-between gap-[24px] min-h-[350px]"
            style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
                backdropFilter: "blur(13.1px)",
            }}
        >
            {/* Quote content */}
            <div className="flex flex-col gap-[18px]">
                <h3
                    className="font-pragati text-white"
                    style={{
                        fontWeight: 400,
                        fontSize: "27px",
                        lineHeight: "1.1em",
                        letterSpacing: "-0.02em",
                        textShadow: "2px 2px 8px rgba(0,0,0,1)",
                    }}
                >
                    {headline}
                </h3>
                <p className="text-[16px] font-medium text-white leading-[1.5]">
                    {body}
                </p>
            </div>

            {/* Bottom row */}
            <div className="flex flex-col gap-[16px]">
                {/* Gradient line */}
                <div
                    className="w-full h-[1px]"
                    style={{
                        background: "linear-gradient(90deg, rgba(225,250,0,0) 10%, #EEFF55 47%, rgba(225,250,0,0) 90%)",
                    }}
                />

                <div className="flex items-center gap-[12px]">
                    {/* Avatar placeholder */}
                    <div className="w-[40px] h-[40px] rounded-full bg-[#141414] shrink-0" />

                    <div className="flex flex-col gap-[4px]">
                        {/* Name */}
                        <span
                            className="font-pragati text-white"
                            style={{
                                fontWeight: 700,
                                fontSize: "18px",
                                letterSpacing: "-0.02em",
                                textShadow: "2px 2px 6px rgba(0,0,0,1)",
                            }}
                        >
                            {name}
                        </span>

                        {/* Stars + rating */}
                        <div className="flex items-center gap-[6px]">
                            <div className="flex gap-[2px]">
                                {[1,2,3,4,5].map((s) => (
                                    <Star key={s} size={12} className="text-primary" fill="#E0DC01" />
                                ))}
                            </div>
                            <span className="text-[12px] text-[#838383] font-medium">({rating})</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
