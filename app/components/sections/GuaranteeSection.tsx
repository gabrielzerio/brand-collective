{/*
  Figma: Frame 212 (511:212) â€” Guarantee Section
  1280w Ã— 460h glass card, rounded-24
  - Left: badge + title + subtitle + description, padding 51px left, 55px top
  - Right: 7-day guarantee seal image, 389Ã—389
*/}

import Image from "next/image";

export default function GuaranteeSection() {
    return (
        <section className="max-w-[1280px] mx-auto px-4 mt-[120px]">
            <div
                className="w-full rounded-[24px] flex flex-col md:flex-row items-center justify-between overflow-hidden relative"
                style={{
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
                    backdropFilter: "blur(13.1px)",
                    minHeight: "460px",
                }}
            >
                {/* Left content */}
                <div className="flex flex-col gap-[20px] p-[40px] md:p-[51px] md:pt-[55px] max-w-[671px]">
                    <div className="section-badge">
                        <div className="section-badge-dot" />
                        <span>Garantia incondicional</span>
                    </div>

                    <div className="flex flex-col gap-[18px]">
                        <h2 className="section-title !text-left">
                            7 dias de garantia
                        </h2>
                        <p className="text-[20px] font-medium text-[#838383] leading-[1.5]">
                            Se você não ficar satisfeito por qualquer que seja o motivo, devolvemos 100% do seu dinheiro na hora, dentro dos 7 primeiros dias. Sem perguntas, sem burocracia.
                        </p>
                    </div>
                </div>

                {/* Right â€” seal image */}
                <div className="relative w-[300px] md:w-[389px] aspect-square shrink-0 md:mr-[36px]">
                    <Image
                        src="/images/guarantee-seal.png"
                        alt="Garantia de 7 dias"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
