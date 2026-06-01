import Image from "next/image";

export default function GuaranteeSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-4 mt-[64px] md:mt-[96px]">
      <div
        className="relative flex min-h-[390px] w-full flex-col items-center justify-between overflow-hidden rounded-[24px] md:flex-row"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
          backdropFilter: "blur(6.55px)",
        }}
      >
        <div className="flex max-w-[671px] flex-col gap-[20px] p-[34px] md:ml-[50px] md:p-0">
          <div className="section-badge h-[53px] w-[300px] justify-center px-0">
            <div className="section-badge-dot" />
            <span>Damos a nossa palavra</span>
          </div>

          <div className="flex flex-col gap-[18px]">
            <h2 className="section-title max-w-[501px] !text-left">
              Palavra não faz curva: <span className="font-bold text-primary">Garantia de 7 dias</span>
            </h2>
            <p className="max-w-[671px] text-[18px] font-medium leading-[1.5] text-[#838383]">
              Se você não ficar satisfeito por qualquer que seja o motivo, devolvemos 100% do seu dinheiro na hora, dentro dos 7 primeiros dias. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>

        <div className="relative mb-8 h-[300px] w-[300px] shrink-0 md:mb-0 md:mr-[70px] md:h-[315px] md:w-[315px]">
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
