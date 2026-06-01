"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Mail, MessageCircle } from "lucide-react";

const faqData = [
  {
    question: <>Os arquivos são compatíveis com <span className="font-bold text-primary">quais softwares?</span></>,
    answer: "Nossos Vetores funcionam no Adobe Illustrator, CorelDRAW e outros editores de vetor. Os Mockups são para Adobe Photoshop e Canva. Os modelos 3D necessitam do Blender.",
  },
  {
    question: <>Como <span className="font-bold text-primary">acesso os arquivos</span> após a compra?</>,
    answer: "Após a confirmação do pagamento, você recebe acesso imediato à nossa Área de Membros com todos os arquivos organizados por categorias.",
  },
  {
    question: <>Vocês oferecem suporte para <span className="font-bold text-primary">usar os arquivos?</span></>,
    answer: "Sim! Todos os recursos acompanham vídeos tutoriais explicativos. Além disso, nosso suporte está disponível via WhatsApp e e-mail.",
  },
  {
    question: <>E se eu <span className="font-bold text-primary">não souber</span> usar os softwares?</>,
    answer: "Não se preocupe. Nossos recursos são pensados para todos os níveis. Temos vídeos passo a passo e você pode usar ferramentas gratuitas como o Canva.",
  },
  {
    question: <>Posso usar os arquivos para <span className="font-bold text-primary">fins comerciais?</span></>,
    answer: "Sim! A licença comercial está inclusa. Use em quantos projetos quiser, para sua marca ou para clientes.",
  },
  {
    question: <>Existe alguma <span className="font-bold text-primary">garantia de devolução?</span></>,
    answer: "Sim. Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu dinheiro.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="max-w-[1280px] mx-auto px-4 mt-[64px] md:mt-[96px]">
      <div className="flex flex-col gap-[42px] md:flex-row md:items-center">
        <div className="flex w-full flex-col gap-[40px] md:w-[500px] md:shrink-0">
          <div className="flex flex-col gap-[20px]">
            <div className="section-badge h-[53px] w-[151px] justify-center px-0">
              <div className="section-badge-dot" />
              <span>F.A.Q</span>
            </div>
            <div className="flex flex-col gap-[18px]">
              <h2 className="section-title !text-left">
                Perguntas <span className="font-bold text-primary">Frequentes</span>
              </h2>
              <p className="max-w-[543px] text-[20px] font-medium leading-[1.45] text-[#838383]">
                Tire todas as dúvidas antes de garantir o seu acesso. Caso ainda reste alguma, você pode entrar em contato conosco.
              </p>
            </div>
          </div>

          <div className="flex w-full max-w-[434px] flex-col gap-[24px]">
            <ContactCard href="https://wa.me/5519994355475" icon={<MessageCircle size={43} />} title="WhatsApp" value="(19) 9 9435-5475" compact />
            <ContactCard href="mailto:contato@brandcollective.com.br" icon={<Mail size={43} />} title="E-mail" value="contato@brandcollective.com.br" />
          </div>
        </div>

        <div className="flex w-full flex-col gap-[24px] md:w-[695px]">
          {faqData.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <button
                key={i}
                type="button"
                className="w-full cursor-pointer overflow-hidden rounded-[24px] px-[24px] py-[20px] text-left md:px-[35px]"
                style={glassStyle}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <div className="flex min-h-[55px] items-center justify-between gap-5">
                  <span className="font-pragati text-[28px] leading-[1.05] text-white md:text-[32px]">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-primary">
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </span>
                </div>

                {isOpen && (
                  <p className="mt-[18px] text-[18px] font-medium leading-[1.45] text-[#838383] md:text-[18px]">
                    {faq.answer}
                  </p>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ContactCard({ href, icon, title, value, compact = false }: {
  href: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  compact?: boolean;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`flex h-[95px] items-center gap-[16px] rounded-[24px] pl-[35px] transition-colors hover:border-primary/40 ${compact ? "w-full md:w-[296px]" : "w-full"}`}
      style={glassStyle}
    >
      <span className="text-primary">{icon}</span>
      <span className="flex flex-col">
        <span className="text-[24px] font-medium leading-[34px] text-[#fafafa]">{title}</span>
        <span className="text-[18px] leading-[18px] text-[#989898]">{value}</span>
      </span>
    </a>
  );
}

const glassStyle = {
  background: "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
  backdropFilter: "blur(6.55px)",
};
