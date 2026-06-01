import Image from "next/image";

const galleryItems = [
  { src: "/images/mockup-gallery-1.png", label: "Vetor", labelWidth: "w-[75px]", imageClass: "object-cover" },
  { src: "/images/mockup-gallery-2.png", label: ".PNG", labelWidth: "w-[63px]", imageClass: "object-cover" },
  { src: "/images/mockup-gallery-3.png", label: "Vetor", labelWidth: "w-[75px]", imageClass: "object-cover" },
  { src: "/images/mockup-gallery-4.png", label: ".PNG", labelWidth: "w-[63px]", imageClass: "object-cover" },
  { src: "/images/mockup-gallery-5.png", label: "Vetor", labelWidth: "w-[75px]", imageClass: "object-cover" },
];

export default function GallerySection() {
  return (
    <section className="max-w-[2027px] mx-auto px-4 mt-[64px] md:mt-[96px]">
      <div className="flex flex-col items-center gap-[44px]">
        <div className="flex max-w-[749px] flex-col items-center gap-[20px]">
          <div className="section-badge h-[53px] w-full max-w-[311px] justify-center px-0">
            <div className="section-badge-dot" />
            <span>Utilizado por marcas reais</span>
          </div>
          <div className="flex w-full flex-col items-center gap-[18px]">
            <h2 className="section-title">
              Modelos desenvolvidos usando a Brand Collective ©
            </h2>
            <p className="section-subtitle">
              Veja alguns resultados reais de quem já usa os nossos recursos, com as mesmas ferramentas que você terá acesso agora.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-[28px] md:flex-row">
          {galleryItems.map((item, i) => (
            <div
              key={item.src}
              className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[24px] md:w-[330px]"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
                backdropFilter: "blur(13.1px)",
              }}
            >
              <Image src={item.src} alt={`Modelo desenvolvido ${i + 1}`} fill className={item.imageClass} sizes="383px" />
              <div
                className={`absolute right-[21px] top-[24px] flex h-[37px] ${item.labelWidth} items-center justify-center rounded-full border border-primary/20 bg-white/[0.05] text-[14px] font-medium text-primary shadow-[0_5.8px_23px_rgba(0,0,0,0.37),inset_0_0.73px_0_rgba(255,255,255,0.1)] backdrop-blur-[4.35px]`}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
