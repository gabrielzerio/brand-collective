{/*
  Figma: Frame 112 (511:177)
  - Badge "Utilizado por marcas reais"
  - Title "Modelos desenvolvidos usando a Brand Collective ©"
  - Subtitle
  - 5 image cards in a row, 383x383 each, rounded-24, gap 28
*/}

import Image from "next/image";

export default function GallerySection() {
    return (
        <section className="max-w-[2027px] mx-auto px-4 mt-[120px]">
            <div className="flex flex-col items-center gap-[60px]">
                {/* Header */}
                <div className="flex flex-col items-center gap-[20px] max-w-[749px]">
                    <div className="section-badge">
                        <div className="section-badge-dot" />
                        <span>Utilizado por marcas reais</span>
                    </div>
                    <div className="flex flex-col items-center gap-[18px] w-full">
                        <h2 className="section-title">
                            Modelos desenvolvidos usando a Brand Collective ©
                        </h2>
                        <p className="section-subtitle">
                            Veja alguns resultados reais de quem já usa os nossos recursos, com as mesmas ferramentas que você terá acesso agora.
                        </p>
                    </div>
                </div>

                {/* Gallery cards â€” 5 items, 383x383 each */}
                <div className="flex flex-col md:flex-row items-center gap-[28px] w-full justify-center">
                    {[
                        "/images/mockup-gallery-1.png",
                        "/images/mockup-gallery-2.png",
                        "/images/mockup-gallery-3.png",
                        "/images/mockup-gallery-4.png",
                        "/images/mockup-gallery-5.png",
                    ].map((src, i) => (
                        <div
                            key={i}
                            className="relative w-full md:w-[383px] aspect-square rounded-[24px] overflow-hidden shrink-0"
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
                                backdropFilter: "blur(13.1px)",
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Gallery ${i + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
