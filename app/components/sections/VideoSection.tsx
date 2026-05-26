{/* 
  Figma: Frame 103 (511:94)
  - Badge "Como funciona?" 
  - Title "Assista ao vídeo abaixo" â€” Pragati 70px
  - Subtitle â€” Poppins 500 20px #838383
  - Video box â€” green (#E0DC01) rounded-[40px], 569h, play icon center
  - Trust indicators row â€” 3 groups (shield + text pill)
*/}

import { ShieldCheck, Clock, Star, Play } from "lucide-react";

export default function VideoSection() {
    return (
        <section className="max-w-[1280px] mx-auto px-4 mt-[80px]">
            <div className="flex flex-col items-center gap-[60px]">
                {/* Header block */}
                <div className="flex flex-col items-center gap-[20px] max-w-[1014px]">
                    {/* Badge */}
                    <div className="section-badge">
                        <div className="section-badge-dot" />
                        <span>Como funciona?</span>
                    </div>

                    {/* Title + Subtitle */}
                    <div className="flex flex-col items-center gap-[18px] w-full">
                        <h2 className="section-title">Assista ao vídeo abaixo</h2>
                        <p className="section-subtitle max-w-[918px]">
                            Veja tudo que você terá acesso e por que todo dono de marca precisa dos recursos da Brand Collective para criar ou lançar coleções de maneira rápida e prática.
                        </p>
                    </div>
                </div>

                {/* Video Placeholder â€” Figma: fill #E0DC01, rounded 40px, 569h */}
                <div
                    className="w-full rounded-[40px] flex items-center justify-center relative overflow-hidden cursor-pointer group"
                    style={{
                        height: "569px",
                        background: "#E0DC01",
                    }}
                >
                    {/* Play button group */}
                    <div className="relative w-[94px] h-[94px]">
                        {/* Outer circle â€” 35% opacity black */}
                        <div className="absolute inset-0 bg-black/35 rounded-full" />
                        {/* Inner circle â€” solid black */}
                        <div className="absolute inset-[9px] bg-black rounded-full flex items-center justify-center">
                            <Play size={30} className="text-white ml-1" fill="white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Indicators â€” Figma: 3 groups spanning full 1280w, gap between */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-[80px] gap-8">
                <TrustItem icon={<ShieldCheck size={34} />} text="Garantia de 7 dias" />
                <TrustItem icon={<Clock size={34} />} text="Acesso imediato" />
                <TrustItem icon={<Star size={34} />} text="Usado por +200 Marcas" />
            </div>
        </section>
    );
}

function TrustItem({ icon, text }: { icon: React.ReactNode; text: string }) {
    return (
        <div className="flex items-center gap-0">
            {/* Icon circle â€” gradient bg, green glow */}
            <div
                className="w-[75px] h-[75px] rounded-full flex items-center justify-center shrink-0 relative z-10"
                style={{
                    background: "linear-gradient(90deg, #E1FA00 18%, #EEFF55 100%)",
                    border: "0.36px solid #CBE200",
                    boxShadow: "0px 0px 10.63px rgba(225,250,0,0.35), 0px 0px 5.31px rgba(225,250,0,0.25), inset 0px 0.35px 0px rgba(225,250,0,1)",
                }}
            >
                <div className="text-black">{icon}</div>
            </div>
            {/* Text pill */}
            <div
                className="rounded-full py-[26px] px-[48px] -ml-[14px]"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1.31px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0px 10.47px 41.87px rgba(0,0,0,0.37), inset 0px 1.31px 0px 1.31px rgba(255,255,255,0.1)",
                    backdropFilter: "blur(20.25px)",
                }}
            >
                <span className="trust-text text-white">{text}</span>
            </div>
        </div>
    );
}
