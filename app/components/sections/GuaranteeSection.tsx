import Image from "next/image";

export default function GuaranteeSection() {
  return (
    <section className="mx-auto mt-[56px] max-w-[1180px] px-4 md:mt-[84px]">
      <div
        className="relative flex min-h-[330px] w-full flex-col items-center justify-between overflow-hidden rounded-[22px] md:min-h-[350px] md:flex-row"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 1.26px 5.06px rgba(0,0,0,0.37), inset 0px 0.16px 0px 0.16px rgba(255,255,255,0.1)",
          backdropFilter: "blur(6.55px)",
        }}
      >
        <div className="flex max-w-[620px] flex-col gap-[16px] p-[26px] md:ml-[42px] md:p-0">
          <div className="section-badge h-[42px] w-[252px] justify-center px-0 md:h-[48px] md:w-[280px] lg:h-[53px] lg:w-[300px]">
            <div className="section-badge-dot" />
            <span>Damos a nossa palavra</span>
          </div>

          <div className="flex flex-col gap-[14px] md:gap-[16px]">
            <h2 className="section-title max-w-[501px] !text-left">
              Palavra não faz curva: <span className="font-bold text-primary">Garantia de 7 dias</span>
            </h2>
            <p className="max-w-[620px] text-[14px] font-medium leading-[1.5] text-[#838383] md:text-[15px] lg:text-[16px]">
              Se você não ficar satisfeito por qualquer que seja o motivo, devolvemos 100% do seu dinheiro na hora, dentro dos 7 primeiros dias. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>

        <div className="relative mb-7 h-[230px] w-[230px] shrink-0 md:mb-0 md:mr-[54px] md:h-[260px] md:w-[260px] lg:h-[292px] lg:w-[292px]">
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
