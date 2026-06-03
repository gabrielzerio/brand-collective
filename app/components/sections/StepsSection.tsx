import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Escolha o modelo desejado",
    description: "Garanta acesso a nossa Área de Membros com mais de 1.000 arquivos organizados por categorias. PNGs, Vetores ou 3D, em segundos você encontra o modelo certo e já começa a criar.",
    image: "/images/step-01-placeholder.png",
  },
  {
    number: "02",
    title: "Personalize do seu jeito",
    description: "Aplique estampas, ajuste cores, modifique modelagens ou crie peças do zero. Seja no Canva, Photoshop ou Illustrator, nossos recursos se adaptam ao seu nível de conhecimento e ao que sua marca precisa.",
    image: "/images/step-02-placeholder.png",
  },
  {
    number: "03",
    title: "Lance sua marca ou coleção",
    description: "Seja apresentando suas peças com visual profissional desde o início ou enviando modelagens de uma nova coleção para o fornecedor: você economiza tempo, dinheiro e dor de cabeça com arquivos prontos.",
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
            <h2 className="section-title max-w-[680px]">
              Você não precisa ser designer nem fotógrafo
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
                <Image src={step.image} alt={step.title} fill className="object-cover" sizes="629px" />
              </div>

              <div className="flex w-full flex-col gap-[24px] md:w-[46%] md:gap-[30px] lg:w-[470px]">
                <div className="flex items-center gap-0">
                  <div
                    className="relative z-10 flex h-[52px] w-[54px] shrink-0 items-center justify-center rounded-full md:h-[58px] md:w-[60px]"
                    style={{
                      background: "linear-gradient(90deg, #E1FA00 18%, #EEFF55 100%)",
                      border: "0.36px solid #CBE200",
                      boxShadow: "0px 0px 10.63px rgba(225,250,0,0.35), 0px 0px 5.31px rgba(225,250,0,0.25), inset 0px 0.35px 0px rgba(225,250,0,1)",
                    }}
                  >
                    <span className="step-number">{step.number}</span>
                  </div>
                  <div
                    className="-ml-[12px] rounded-full px-[24px] py-[15px] md:px-[30px] md:py-[18px]"
                    style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1.31px solid rgba(255, 255, 255, 0.1)",
                      boxShadow: "0px 10.47px 41.87px rgba(0,0,0,0.37), inset 0px 1.31px 0px 1.31px rgba(255,255,255,0.1)",
                      backdropFilter: "blur(20.25px)",
                    }}
                  >
                    <span className="step-title text-white">{step.title}</span>
                  </div>
                </div>
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
