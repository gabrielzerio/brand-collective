{/*
  Figma: Group 481259 (511:672) — Pricing/CTA Section
  Large card with product image, feature list, pricing, and CTA button
  Center card (668w) with glass bg + green border, backdrop blur
  Side blurred decorative cards, but we skip those for simplicity
*/}

import Button from "../ui/Button";
import { Check, ArrowRight } from "lucide-react";

const features = [
    "+350 Vetores de peças para criação de coleções e fichas técnicas",
    "+250 Mockups PNG de camisetas, moletons, bonés e mais",
    "+100 Mockups 3D realistas em altíssima qualidade",
    "+50 Estampas Streetwear prontas para uso (Bônus)",
    "Template de Ficha Técnica editável (Bônus)",
    "Planilha de Precificação Automática (Bônus)",
    "Acesso imediato à Área de Membros",
    "Atualizações semanais com novos recursos",
    "Licença comercial inclusa",
    "Vídeos tutoriais de cada categoria",
];

export default function PricingSection() {
    return (
        <section className="max-w-[1280px] mx-auto px-4 mt-[120px]">
            <div className="flex justify-center">
                <div
                    className="w-full max-w-[668px] rounded-[24px] p-[40px] md:p-[50px] flex flex-col gap-[40px]"
                    style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid #E0DC01",
                        boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
                        backdropFilter: "blur(25.4px)",
                    }}
                >
                    {/* Features list */}
                    <div className="flex flex-col gap-[16px]">
                        {features.map((f, i) => (
                            <div key={i} className="flex items-start gap-[12px]">
                                <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center shrink-0 mt-[2px]">
                                    <Check size={16} className="text-primary" />
                                </div>
                                <span className="text-[16px] font-medium text-white leading-[1.5]">
                                    {f}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="flex flex-col gap-[16px]">
                        <button
                            className="w-full rounded-full py-[18px] px-[32px] flex items-center justify-center gap-[10px] text-black font-bold text-[18px] cursor-pointer"
                            style={{
                                background: "linear-gradient(90deg, #E1FA00 18%, #EEFF55 100%)",
                                border: "1.94px solid #CBE200",
                                boxShadow: "0px 0px 56.87px rgba(225,250,0,0.35), 0px 0px 28.44px rgba(225,250,0,0.25)",
                            }}
                        >
                            Comprar agora
                            <ArrowRight size={20} />
                        </button>

                        <p className="text-[16px] font-medium text-[#838383] text-center">
                            Parcele em até 6x sem juros
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
