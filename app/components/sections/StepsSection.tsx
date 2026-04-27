{/*
  Figma: Frame 106 (511:222) — "Simplicidade é a chave"
  Layout: badge + title + subtitle on top, then 3 step rows below
  Each step row: left image 629x353 #141414 rounded-25 | right column 543w 
  Right column: step number circle (gradient) + title pill, then description text
  Gap between rows: 50px
  Gap between image and text: 48px
*/}

import Image from "next/image";

const steps = [
    {
        number: "01",
        title: "Escolha o modelo desejado",
        description: "Garanta acesso a nossa Área de Membros com mais de 1.000 arquivos organizados por categorias. PNGs, Vetores ou 3D, em segundos você encontra o modelo certo e já começa a criar.",
        image: "/images/step-01-placeholder.png"
    },
    {
        number: "02",
        title: "Personalize do seu jeito",
        description: "Aplique estampas, ajuste cores, modifique modelagens ou crie peças do zero. Seja no Canva, Photoshop ou Illustrator, nossos recursos se adaptam ao seu nível de conhecimento e ao que sua marca precisa.",
        image: "/images/step-02-placeholder.png"
    },
    {
        number: "03",
        title: "Lance sua marca ou coleção",
        description: "Seja apresentando suas peças com visual profissional desde o início ou enviando modelagens de uma nova coleção para o fornecedor: você economiza tempo, dinheiro e dor de cabeça com arquivos prontos.",
        image: "/images/step-03-placeholder.png"
    }
];

export default function StepsSection() {
    return (
        <section className="max-w-[1280px] mx-auto px-4 mt-[120px]">
            <div className="flex flex-col items-center gap-[60px]">

                {/* Header */}
                <div className="flex flex-col items-center gap-[20px] max-w-[714px]">
                    <div className="section-badge">
                        <div className="section-badge-dot" />
                        <span>Simplicidade é a chave</span>
                    </div>
                    <div className="flex flex-col items-center gap-[18px] w-full">
                        <h2 className="section-title max-w-[680px]">
                            Você não precisa ser designer nem fotógrafo
                        </h2>
                        <p className="section-subtitle">
                            Economize horas de trabalho com recursos de altíssima qualidade, organizados por categorias e com vídeos explicativos.
                        </p>
                    </div>
                </div>

                {/* Steps list */}
                <div className="flex flex-col gap-[50px] w-full">
                    {steps.map((step, i) => (
                        <div key={i} className="flex flex-col md:flex-row items-center gap-[48px] w-full">
                            {/* Left — image placeholder */}
                            <div
                                className="w-full md:w-[629px] shrink-0 rounded-[25px] overflow-hidden relative"
                                style={{
                                    background: "#141414",
                                    aspectRatio: "629 / 353",
                                    border: "1px solid #E0DC01",
                                }}
                            >
                                <Image src={step.image} alt={step.title} fill className="object-cover" />
                            </div>

                            {/* Right — content */}
                            <div className="flex flex-col gap-[40px] w-full md:w-[543px]">
                                {/* Number + Title row */}
                                <div className="flex items-center gap-0">
                                    {/* Number circle */}
                                    <div
                                        className="w-[79px] h-[77px] rounded-full flex items-center justify-center shrink-0 relative z-10"
                                        style={{
                                            background: "linear-gradient(90deg, #E1FA00 18%, #EEFF55 100%)",
                                            border: "0.36px solid #CBE200",
                                            boxShadow: "0px 0px 10.63px rgba(225,250,0,0.35), 0px 0px 5.31px rgba(225,250,0,0.25), inset 0px 0.35px 0px rgba(225,250,0,1)",
                                        }}
                                    >
                                        <span className="step-number">{step.number}</span>
                                    </div>
                                    {/* Title pill */}
                                    <div
                                        className="rounded-full py-[26px] px-[49px] -ml-[14px]"
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
                                {/* Description */}
                                <p className="text-[20px] font-medium text-white leading-[1.5]">
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
