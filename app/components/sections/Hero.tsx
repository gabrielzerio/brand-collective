import Image from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import RatingBadge from "../ui/RatingBadge";
import NotificationPopUp from "../ui/NotificationPopUp";

export default function Hero() {
  return (
    <div className="page-shell relative w-full pt-[34px] md:min-h-[820px]">
      <div className="absolute left-[-45%] top-[-12%] z-0 h-[70vw] w-[70vw] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />
      <div className="absolute right-[-16%] top-[10%] z-0 h-[42vw] w-[42vw] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

      <Image
        src="/Group_481207.svg"
        alt=""
        width={620}
        height={640}
        className="pointer-events-none absolute -left-[210px] top-[894px] z-0 hidden opacity-70 mix-blend-screen md:block"
      />
      <Image
        src="/Group_481207.svg"
        alt=""
        width={886}
        height={902}
        className="pointer-events-none absolute -right-[1016px] top-[293px] z-0 hidden opacity-50 mix-blend-screen md:block"
      />

      <Menu />

      <section
        className="relative mt-[32px] flex flex-col px-4 text-[16px] md:mt-[78px] md:flex-row md:items-start md:px-0"
        style={{ paddingLeft: "max(16px, calc((100vw - 1280px) / 2))" }}
      >
        <div className="z-10 flex w-full shrink-0 flex-col gap-[20px] md:max-w-[700px] md:gap-[26px]">
          <Badge
            className="!h-[31px] !w-[287px] !max-w-[287px] justify-center !gap-[6px] !px-0 !py-0 !text-[10px] overflow-hidden whitespace-nowrap md:!h-[46px] md:!max-w-none md:!w-[430px] md:!gap-2 md:!px-5 md:!py-0 md:!text-[14px]"
            icon={
              <svg className="h-[17px] w-[17px] md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L12 18M12 18L17 13M12 18V6M4 21H20" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          >
            Tudo que você precisa em um <span className="font-bold">único lugar</span>
          </Badge>

          <h1 className="title-hero max-w-[315px] md:max-w-[760px]">
            Crie sua <span className="highlight-primary">marca</span> ou <span className="highlight-primary">coleção</span> em{" "}
            <br className="hidden md:block" /><span className="font-bold">minutos</span>,
            <span className="text-primary font-bold"> sem gastar dinheiro</span>
            <br className="hidden md:block" /> com <span className="font-bold">designer</span> ou
            <span className="font-bold"> fotógrafo.</span>
          </h1>

          <h2 className="subtitle-hero max-w-[315px] md:max-w-[640px]">
            Mockups profissionais, vetores editáveis e mockups 3D reunidos em um único acesso.
            Do iniciante a quem já tem marca, tudo que você precisa pra criar ou lançar está aqui.
          </h2>

          <div className="flex flex-col items-center gap-4 sm:flex-row md:items-start md:gap-[28px]">
            <Button className="h-[46px] w-[198px] justify-center p-0 font-semibold md:h-[54px] md:w-[238px] md:p-0">Quero meu pack</Button>
            <RatingBadge />
          </div>
        </div>

        <div className="relative -ml-[54px] -mt-[4px] hidden shrink-0 md:block">
          <Image
            src="/MacBook-Mockup-Template-PNG_1.png"
            alt="MacBook Mockup"
            width={687}
            height={637}
            priority
            className="w-[600px] object-contain"
          />

          <NotificationPopUp
            id="#4352"
            time="há 32m"
            items={2}
            value="459,83"
            rotation={-6.5}
            className="absolute left-[68px] top-[-4px] z-20"
          />

          <NotificationPopUp
            id="#4353"
            time="há 12m"
            items={1}
            value="173,28"
            rotation={8.4}
            className="absolute bottom-[221px] right-[-12px] z-20"
          />
        </div>
      </section>

      <BrandMarquee className="hidden md:absolute md:left-0 md:right-0 md:bottom-0 md:block" />
    </div>
  );
}

function Menu() {
  return (
    <div className="container relative z-10 mx-auto flex max-w-[1280px] flex-row items-center justify-center px-4">
      <div
        className="flex h-[78px] w-[252px] flex-row items-center justify-center gap-0 rounded-full px-[30px] py-0 md:h-[108px] md:w-full md:justify-between md:px-[48px]"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 18.37px 73.46px rgba(0,0,0,0.37), inset 0px 2.3px 0px 2.3px rgba(255,255,255,0.1)",
          backdropFilter: "blur(13.774px)",
          WebkitBackdropFilter: "blur(13.774px)",
        }}
      >
        <div className="flex-shrink-0">
          <Image
            src="/Logo-Brand-Collective-White-PNG_1.png"
            alt="Logo"
            width={337}
            height={80}
            className="h-auto w-[178px] object-contain md:w-[250px]"
          />
        </div>

        <div className="hidden w-full flex-row items-center justify-between gap-4 md:flex md:w-auto md:justify-end md:gap-[39px]">
          <ul className="flex flex-row gap-4 text-[14px] font-medium text-white md:gap-[32px] md:text-[16px]">
            <li><a href="#" className="transition-colors hover:text-primary">Ínicio</a></li>
            <li><a href="#faq" className="transition-colors hover:text-primary">F.A.Q</a></li>
            <li><a href="#contato" className="transition-colors hover:text-primary">Contato</a></li>
          </ul>
          <Button className="cursor-pointer text-sm md:text-base">Quero meu pack</Button>
        </div>
      </div>
    </div>
  );
}

function BrandMarquee({ className = "" }: { className?: string }) {
  const items = Array.from({ length: 8 });

  return (
    <div className={`relative h-[82px] overflow-hidden md:h-[112px] ${className}`}>
      <div className="absolute left-1/2 top-[22px] flex w-[2300px] -translate-x-1/2 -rotate-[2.4deg] bg-primary text-black shadow-[0_0_40px_rgba(224,220,1,0.25)] md:top-[30px]">
        <div className="flex whitespace-nowrap py-2 md:py-4">
          {items.map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-3 md:px-5">
              <span className="font-pragati text-[26px] font-bold leading-none md:text-[38px]">BRAND COLLECTIVE</span>
              <span className="h-5 w-5 rounded-[4px] border-[3px] border-black md:h-8 md:w-8" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 top-[50px] flex w-[2300px] -translate-x-1/2 rotate-[3.2deg] bg-primary text-black opacity-80 blur-[1px] md:top-[70px]">
        <div className="flex whitespace-nowrap py-2 md:py-4">
          {items.map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-3 md:px-5">
              <span className="font-pragati text-[26px] font-bold leading-none md:text-[38px]">BRAND COLLECTIVE</span>
              <span className="h-5 w-5 rounded-[4px] border-[3px] border-black md:h-8 md:w-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
