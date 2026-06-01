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
    <section className="mx-auto mt-[56px] max-w-[2027px] px-4 md:mt-[84px]">
      <div className="flex flex-col items-center gap-[34px] md:gap-[40px]">
        <div className="flex max-w-[680px] flex-col items-center gap-[16px] md:gap-[20px]">
          <div className="section-badge h-[42px] w-full max-w-[268px] justify-center px-0 md:h-[48px] md:max-w-[292px] lg:h-[53px] lg:max-w-[311px]">
            <div className="section-badge-dot" />
            <span>Utilizado por marcas reais</span>
          </div>
          <div className="flex w-full flex-col items-center gap-[14px] md:gap-[16px]">
            <h2 className="section-title">
              Modelos desenvolvidos usando a Brand Collective ©
            </h2>
            <p className="section-subtitle">
              Veja alguns resultados reais de quem já usa os nossos recursos, com as mesmas ferramentas que você terá acesso agora.
            </p>
          </div>
        </div>

        <div className="w-full overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:overflow-visible">
          <div className="flex w-max snap-x snap-mandatory gap-[16px] px-1 sm:gap-[18px] md:gap-[20px] lg:w-full lg:justify-center lg:gap-[18px]">
          {galleryItems.map((item, i) => (
            <div
              key={item.src}
              className="relative aspect-square w-[78vw] shrink-0 snap-center overflow-hidden rounded-[18px] sm:w-[58vw] md:w-[40vw] lg:w-[248px] lg:rounded-[20px] xl:w-[292px]"
              style={{
                
              }}
            >
              <Image src={item.src} alt={`Modelo desenvolvido ${i + 1}`} fill className={item.imageClass} sizes="383px" />
             
                {item.label}
              
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
