import Image from "next/image";

const steps = [
  {
    number: "01",
    titlePrefix: "Escolha o",
    titleHighlight: "modelo desejado",
    description: (
      <>
        Garanta acesso a nossa <strong className="font-bold">Área de Membros</strong> com mais de
        1.000 arquivos organizados por categorias. PNGs, Vetores ou 3D,{" "}
        <strong className="font-bold">em segundos você encontra o modelo certo e já começa a criar.</strong>
      </>
    ),
    image: "/images/step-01-placeholder.png",
  },
  {
    number: "02",
    titlePrefix: "Personalize do",
    titleHighlight: "seu jeito",
    description: (
      <>
        <strong className="font-bold">Aplique estampas, ajuste cores, modifique modelagens ou crie peças do zero.</strong>{" "}
        Seja no Canva, Photoshop ou Illustrator, nossos recursos se adaptam ao seu nível de conhecimento e ao que sua marca precisa.
      </>
    ),
    image: "/images/step-02-placeholder.png",
  },
  {
    number: "03",
    titlePrefix: "Lance sua",
    titleHighlight: "marca ou coleção",
    description: (
      <>
        Seja apresentando suas peças com visual profissional desde o início ou enviando modelagens de uma nova coleção para o fornecedor:
        você <strong className="font-bold">economiza tempo, dinheiro e dor de cabeça com arquivos prontos.</strong>
      </>
    ),
    image: "/images/step-03-placeholder.png",
  },
];

export default function StepsSection() {
  return (
    <section className="mx-auto mt-[56px] max-w-[1180px] px-4 md:mt-[96px]">
      <div className="flex flex-col items-center gap-[34px] md:gap-[40px]">
        <div className="flex max-w-[660px] flex-col items-center gap-[16px] md:gap-[20px]">
          <div className="section-badge h-[42px] w-full max-w-[246px] justify-center px-0 md:h-[48px] md:max-w-[268px] lg:h-[53px] lg:max-w-[286px]">
            <div className="section-badge-dot" />
            <span>Simplicidade é a chave</span>
          </div>
          <div className="flex w-full flex-col items-center gap-[14px] md:gap-[16px]">
            <h2 className="section-title max-w-[480px]">
              Você <span className="font-bold text-primary">não precisa</span> ser{" "}
              <span className="font-bold text-primary">designer</span> nem{" "}
              <span className="font-bold text-primary">fotógrafo</span>
            </h2>
            <p className="section-subtitle">
              Economize horas de trabalho com recursos de altíssima qualidade, organizados por categorias e com vídeos explicativos.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-[30px] md:gap-[34px]">
          {steps.map((step) => (
            <div key={step.number} className="flex w-full flex-col items-center gap-[24px] md:flex-row md:gap-[28px]">
              <div
                className="relative w-full shrink-0 overflow-hidden rounded-[20px] md:w-[46%] lg:w-[510px]"
                style={{
                  background: "#141414",
                  aspectRatio: "629 / 353",
                  border: "1px solid #E0DC01",
                }}
              >
                <Image src={step.image} alt={`${step.titlePrefix} ${step.titleHighlight}`} fill className="object-cover" sizes="629px" />
              </div>

              <div className="flex w-full flex-col gap-[24px] md:w-[46%] md:gap-[30px] lg:w-[470px]">
                <StepBadge
                  number={step.number}
                  titlePrefix={step.titlePrefix}
                  titleHighlight={step.titleHighlight}
                />
                <p className="text-[14px] font-medium leading-[1.5] text-white md:text-[15px] lg:text-[16px]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepBadge({
  number,
  titlePrefix,
  titleHighlight,
}: {
  number: string;
  titlePrefix: string;
  titleHighlight: string;
}) {
  return (
    <div className="relative flex w-fit max-w-full items-center">
      <div
        className="relative z-10 flex h-[52px] w-[54px] shrink-0 items-center justify-center rounded-full md:h-[58px] md:w-[60px]"
        style={{
          background: "linear-gradient(90deg, #E1FA00 17.788%, #EEFF55 100%)",
          border: "0.362px solid #CBE200",
          boxShadow:
            "0px 0px 5.314px rgba(225,250,0,0.28), 0px 0px 2.657px rgba(225,250,0,0.18), inset 0px 0.354px 0px #E1FA00",
        }}
      >
        <div className="absolute h-[42px] w-[43px] rounded-full border-[1.4px] border-black md:h-[47px] md:w-[48px]" />
        <span className="step-number relative z-10">{number}</span>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[36px] top-1/2 z-30 h-[48px] w-[42px] -translate-y-1/2 rounded-full md:left-[40px] md:h-[54px]"
        style={{
          background:
            "radial-gradient(ellipse at left, rgba(225,250,0,0.18) 0%, rgba(225,250,0,0.07) 44%, rgba(225,250,0,0.018) 72%, rgba(225,250,0,0) 100%)",
          filter: "blur(5px)",
        }}
      />

      <div
        className="relative z-20 -ml-[12px] flex min-w-0 items-center rounded-full px-[24px] py-[15px] pl-[30px] md:px-[30px] md:py-[18px] md:pl-[36px]"
        style={{
          background: "rgba(255, 255, 255, 0.018)",
          border: "0.75px solid rgba(255, 255, 255, 0.08)",
          boxShadow:
            "0px 10.467px 41.87px rgba(0,0,0,0.24), inset 0px 0.8px 0px rgba(255,255,255,0.08)",
          backdropFilter: "blur(10.126px)",
          WebkitBackdropFilter: "blur(10.126px)",
        }}
      >
        <span className="step-title whitespace-nowrap text-white">
          {titlePrefix} <span className="font-bold text-primary">{titleHighlight}</span>
        </span>
      </div>
    </div>
  );
}
