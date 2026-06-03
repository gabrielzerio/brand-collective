import Image from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import RatingBadge from "../ui/RatingBadge";
import NotificationPopUp from "../ui/NotificationPopUp";
import Splatter from "../icons/splatter";

export default function Hero() {
  return (
    <div id="hero" className="page-shell relative w-full pt-[34px] lg:min-h-[820px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-90px] top-[-72px] z-[1] h-[220px] w-[560px] rounded-full opacity-90 blur-[22px] md:right-[-120px] md:top-[-84px] md:h-[250px] md:w-[740px] lg:right-[-140px] lg:top-[-96px] lg:h-[280px] lg:w-[900px]"
        style={{
          background: "radial-gradient(ellipse at 82% 22%, rgba(224, 220, 1, 0.34) 0%, rgba(224, 220, 1, 0.18) 22%, rgba(224, 220, 1, 0.06) 48%, rgba(224, 220, 1, 0) 74%)",
        }}
      />
      <div className="pointer-events-none absolute right-[-20px] top-[-64px] z-[2] hidden h-[250px] w-[330px] overflow-hidden opacity-90 mix-blend-screen md:block lg:right-[-8px] lg:top-[-70px] lg:h-[370px] lg:w-[390px]">
        <div className="absolute right-[-22px] top-[-70px] w-[270px] rotate-[10deg] lg:w-[320px]">
          <Splatter />
        </div>
      </div>
      <div className="pointer-events-none absolute left-[-140px] top-[74px] z-0 w-[230px] rotate-[-6deg] opacity-90 mix-blend-screen md:left-[-150px] md:top-[94px] md:w-[260px] lg:left-[46px] lg:top-[168px] lg:w-[292px]">
        <Splatter />
      </div>
      {/* <div className="absolute left-[-45%] top-[-12%] z-0 h-[70vw] w-[70vw] rounded-full bg-accent/10 blur-[80px] pointer-events-none" /> */}
      <FloatingMockups />

      <Image
        src="/Group_481207.svg"
        alt=""
        width={620}
        height={640}
        className="pointer-events-none absolute -left-[210px] top-[894px] z-0 hidden opacity-70 mix-blend-screen lg:block"
      />
      <Image
        src="/Group_481207.svg"
        alt=""
        width={886}
        height={902}
        className="pointer-events-none absolute -right-[1016px] top-[293px] z-0 hidden opacity-50 mix-blend-screen lg:block"
      />

      <Menu />
      <section
        className="relative mt-[32px] flex flex-col px-4 text-[16px] md:mt-[64px] lg:mt-[78px] lg:flex-row lg:items-start lg:px-0"
        style={{ paddingLeft: "max(16px, calc((100vw - 1280px) / 2))" }}
      >
        <div className="z-10 flex w-full shrink-0 flex-col gap-[20px] md:gap-[22px] lg:max-w-[700px] lg:gap-[26px]">
          <Badge
            className="!h-[31px] !w-[287px] !max-w-[287px] justify-center mx-auto md:mx-0 !gap-[6px] !px-0 !py-0 !text-[10px] overflow-hidden whitespace-nowrap md:!h-[46px] md:!max-w-none md:!w-[430px] md:!gap-2 md:!px-5 md:!py-0 md:!text-[14px]"
            icon={
              <svg className="h-[17px] w-[17px] md:h-6 md:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L12 18M12 18L17 13M12 18V6M4 21H20" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          >
            Tudo que você precisa em um <span className="font-bold">único lugar</span>
          </Badge>

          <h1 className="title-hero max-w-full sm:max-w-[515px] md:max-w-[760px]">
            Crie sua <span className="highlight-primary">marca</span> ou <span className="highlight-primary">coleção</span> em{" "}
            <br className="hidden md:block" /><span className="font-bold">minutos</span>,
            <span className="text-primary font-bold"> sem gastar dinheiro</span>
            <br className="hidden md:block" /> com <span className="font-bold">designer</span> ou
            <span className="font-bold"> fotógrafo.</span>
          </h1>

          <h2 className="subtitle-hero max-w-full sm:max-w-[515px] md:max-w-[640px]">
            Mockups profissionais, vetores editáveis e mockups 3D reunidos em um único acesso.
            Do iniciante a quem já tem marca, tudo que você precisa pra criar ou lançar está aqui.
          </h2>

          <div className="flex flex-row items-center gap-2 sm:gap-4 sm:flex-row md:items-start md:gap-[28px]">
            <Button className="h-[46px] justify-center p-0 font-semibold md:h-[54px] md:w-[238px] md:p-0">Quero meu pack</Button>
            <RatingBadge />
          </div>
        </div>

        <div className="relative -ml-[54px] -mt-[4px] hidden shrink-0 lg:block">
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

      <BrandMarquee className="hidden lg:absolute lg:left-0 lg:right-0 lg:bottom-[-34px] lg:z-[100] lg:block" />
    </div>
  );
}

function FloatingMockups() {
  return (
    <>
      <Image
        src="/images/mockup-gallery-1.png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute left-[-30px] top-[148px] z-0 w-[118px] rotate-[-11deg] rounded-[14px] object-cover opacity-18 blur-[0.7px] md:hidden"
      />
      <Image
        src="/images/mockup-gallery-4.png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute right-[-34px] top-[226px] z-0 w-[126px] rotate-[9deg] rounded-[14px] object-cover opacity-15 blur-[1px] md:hidden"
      />
      <Image
        src="/images/mockup-gallery-3.png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute right-[8%] top-[418px] z-0 w-[84px] rotate-[14deg] rounded-[12px] object-cover opacity-16 blur-[0.8px] md:hidden"
      />
      <Image
        src="/images/mockup-gallery-5.png"
        alt=""
        width={180}
        height={180}
        className="pointer-events-none absolute left-[14px] top-[392px] z-0 w-[96px] rotate-[-8deg] rounded-[12px] object-cover opacity-14 blur-[0.9px] md:hidden"
      />
    </>
  );
}

function Menu() {
  return (
    <div className="container relative z-10 mx-auto flex max-w-[1280px] flex-row items-center justify-center px-4">
      <div
        className="border-white/10 border flex h-[78px] w-[252px] flex-row items-center justify-center gap-0 rounded-full px-[30px] py-0 md:h-[108px] md:w-full md:justify-between md:px-[48px]"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          // border: "1px solid rgba(255, 255, 255, 0.1)",
          // boxShadow: "inset 0px 2.3px 0px 2.3px #FFFFFF1A, 0px 18.37px 73.46px 0px #0000005E",
          backdropFilter: "blur(27.547576904296875px)",
          WebkitBackdropFilter: "blur(27.547576904296875px)",
        }}
      >
        <div className="flex-shrink-0">
          <Image
            src="/Logo-Brand-Collective-White-PNG_1.png"
            alt="Logo"
            width={337}
            height={80}
            className="h-auto w-[178px] object-contain md:w-[150px] lg:w-[200px]"
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
    <div className={`pointer-events-none relative h-[100px] overflow-visible md:h-[132px] ${className}`}>
      <div className="absolute left-1/2 top-[26px] flex w-[2300px] -translate-x-1/2 -rotate-[2.4deg] bg-primary text-black shadow-[0_0_40px_rgba(224,220,1,0.25)] md:top-[36px]">
        <div className="flex whitespace-nowrap py-2 md:py-4">
          {items.map((_, i) => (
            <div key={i} className="flex items-center px-3 md:px-5">
              <span className="font-impact text-[26px] leading-none md:text-[38px] px-10">BRAND COLLECTIVE</span>
              <Image src="/fb06852bbb6c389a2fba2122b63e3b59ddcd0ff0.png" alt="Logo" width={40} height={40} className="h-auto w-[40px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
