"use client";

{/*
  Figma: Frame 153 (511:605) — FAQ Section
  Layout: horizontal row, gap 42px
  Left column (543w): badge + title + subtitle + 2 contact cards
  Right column (695w): 6 FAQ accordion items
  
  Contact cards: glass bg, rounded-24, icon + label + value
  FAQ items: glass bg, rounded-24, question + toggle + answer
*/}

import { useState } from "react";
import { Plus, Minus, MessageCircle, Mail } from "lucide-react";

const faqData = [
    {
        question: "Os arquivos são compatíveis com quais softwares?",
        answer: "Nossos Vetores funcionam no Adobe Illustrator, CorelDRAW e outros editores de vetor. Os Mockups são para Adobe Photoshop e Canva. Os modelos 3D necessitam do Blender."
    },
    {
        question: "Como acesso os arquivos após a compra?",
        answer: "Após a confirmação do pagamento, você recebe acesso imediato à nossa Área de Membros com todos os arquivos organizados por categorias."
    },
    {
        question: "Vocês oferecem suporte para usar os arquivos?",
        answer: "Sim! Todos os recursos acompanham vídeos tutoriais explicativos. Além disso, nosso suporte está disponível via WhatsApp e e-mail."
    },
    {
        question: "E se eu não souber usar os softwares?",
        answer: "Não se preocupe. Nossos recursos são pensados para todos os níveis. Temos vídeos passo a passo e você pode usar ferramentas gratuitas como o Canva."
    },
    {
        question: "Posso usar os arquivos para fins comerciais?",
        answer: "Sim! A licença comercial está inclusa. Use em quantos projetos quiser, para sua marca ou para clientes."
    },
    {
        question: "Existe alguma garantia de devolução?",
        answer: "Sim. Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="max-w-[1280px] mx-auto px-4 mt-[120px]">
            <div className="flex flex-col md:flex-row gap-[42px]">

                {/* Left column */}
                <div className="flex flex-col gap-[40px] w-full md:w-[543px] shrink-0">
                    {/* Header */}
                    <div className="flex flex-col gap-[20px]">
                        <div className="section-badge">
                            <div className="section-badge-dot" />
                            <span>F.A.Q</span>
                        </div>
                        <div className="flex flex-col gap-[18px]">
                            <h2
                                className="font-pragati text-white"
                                style={{
                                    fontWeight: 400,
                                    fontSize: "50px",
                                    lineHeight: "0.987em",
                                    letterSpacing: "-0.02em",
                                    textShadow: "6.08px 6.08px 26.71px rgba(0,0,0,1)",
                                }}
                            >
                                Perguntas Frequentes
                            </h2>
                            <p className="text-[16px] font-medium text-[#838383] leading-[1.5]">
                                Tire todas as dúvidas antes de garantir o seu acesso. Caso ainda reste alguma, você pode entrar em contato conosco.
                            </p>
                        </div>
                    </div>

                    {/* Contact cards */}
                    <div className="flex flex-col gap-[24px]">
                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/5519994355475"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-[24px] p-[30px] flex items-center gap-[16px] hover:border-primary/40 transition-colors"
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
                                backdropFilter: "blur(13.1px)",
                            }}
                        >
                            <MessageCircle size={24} className="text-primary shrink-0" />
                            <div className="flex flex-col gap-[4px]">
                                <span className="text-[14px] font-medium text-primary">WhatsApp</span>
                                <span className="text-[16px] font-medium text-white">(19) 9 9435-5475</span>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:contato@brandcollective.com.br"
                            className="rounded-[24px] p-[30px] flex items-center gap-[16px] hover:border-primary/40 transition-colors"
                            style={{
                                background: "rgba(255, 255, 255, 0.05)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
                                backdropFilter: "blur(13.1px)",
                            }}
                        >
                            <Mail size={24} className="text-primary shrink-0" />
                            <div className="flex flex-col gap-[4px]">
                                <span className="text-[14px] font-medium text-primary">E-mail</span>
                                <span className="text-[16px] font-medium text-white">contato@brandcollective.com.br</span>
                            </div>
                        </a>
                    </div>
                </div>

                {/* Right column — accordion */}
                <div className="flex flex-col gap-[24px] w-full md:w-[695px]">
                    {faqData.map((faq, i) => {
                        const isOpen = openIndex === i;
                        return (
                            <div
                                key={i}
                                className="rounded-[24px] overflow-hidden cursor-pointer"
                                style={{
                                    background: "rgba(255, 255, 255, 0.05)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
                                    backdropFilter: "blur(13.1px)",
                                }}
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                            >
                                <div className="flex items-center justify-between p-[20px] md:px-[35px]">
                                    <span className="text-[20px] font-semibold text-white pr-4">
                                        {faq.question}
                                    </span>
                                    <div className="shrink-0 text-primary">
                                        {isOpen ? <Minus size={24} /> : <Plus size={24} />}
                                    </div>
                                </div>

                                {isOpen && (
                                    <div className="px-[20px] md:px-[35px] pb-[20px]">
                                        <p className="text-[16px] font-medium text-[#838383] leading-[1.5]">
                                            {faq.answer}
                                        </p>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
