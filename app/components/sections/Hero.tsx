import Image from "next/image";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import RatingBadge from "../ui/RatingBadge";
import NotificationPopUp from "../ui/NotificationPopUp";

export default function Hero() {
  return (
    <div className="page-shell w-full relative pt-[46px] md:min-h-[1076px]">
      <div className="absolute top-[-12%] left-[-45%] w-[70vw] h-[70vw] bg-accent/10 rounded-full blur-[80px] pointer-events-none z-0" />
      <div className="absolute top-[10%] right-[-16%] w-[42vw] h-[42vw] bg-accent/10 rounded-full blur-[100px] pointer-events-none z-0" />

      <Image
        src="/Group_481207.svg"
        alt="Particles Decoration"
        width={200}
        height={300}
        className="absolute -top-68 right-0 pointer-events-none z-0 opacity-80"
      />

      <Menu />

      <section
        className="flex flex-col md:flex-row md:items-start mt-[39px] md:mt-[138px] text-[16px] relative px-4 md:px-0"
        style={{ paddingLeft: "max(16px, calc((100vw - 1280px) / 2))" }}
      >
        <div className="flex flex-col gap-[24px] md:gap-[30px] z-10 w-full md:max-w-[760px] shrink-0">
          <Badge
            className="w-full max-w-[287px] justify-center px-4 py-[7px] text-[10px] whitespace-nowrap md:max-w-none md:w-[488px] md:px-5 md:py-3 md:text-[16px]"
            icon={
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13L12 18M12 18L17 13M12 18V6M4 21H20" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
          >
            Tudo que você precisa em um <span className="font-bold">único lugar</span>
          </Badge>

          <h1 className="title-hero">
            Crie sua <span className="highlight-primary">marca</span> ou <span className="highlight-primary">coleção</span> em{" "}
            <br className="hidden md:block" /><span className="font-bold">minutos</span>,
            <span className="text-primary font-bold"> sem gastar dinheiro</span>
            <br className="hidden md:block" /> com <span className="font-bold">designer</span> ou
            <span className="font-bold"> fotógrafo.</span>
          </h1>

          <h2 className="subtitle-hero lg:max-w-[640px]">
            Mockups profissionais, vetores editáveis e mockups 3D reunidos em um único acesso.
            Do iniciante a quem já tem marca, tudo que você precisa pra criar ou lançar está aqui.
          </h2>

          <div className="flex flex-col items-center sm:flex-row md:items-start gap-4 md:gap-[28px]">
            <Button className="font-semibold">Quero meu pack</Button>
            <RatingBadge />
          </div>
        </div>

        <div className="hidden md:block shrink-0 relative -ml-[68px] -mt-[8px]">
          <Image
            src="/MacBook-Mockup-Template-PNG_1.png"
            alt="MacBook Mockup"
            width={687}
            height={637}
            priority
            className="object-contain"
          />

          <NotificationPopUp
            id="#4352"
            time="há 32m"
            items={2}
            value="459,83"
            rotation={-6.5}
            className="absolute -top-2 left-[68px] z-20"
          />

          <NotificationPopUp
            id="#4353"
            time="há 12m"
            items={1}
            value="173,28"
            rotation={8.4}
            className="absolute bottom-[210px] right-[-10px] z-20"
          />
        </div>
      </section>

      <BrandMarquee className="hidden md:block md:absolute md:left-0 md:right-0 md:bottom-0" />
    </div>
  );
}

function Menu() {
  return (
    <div className="container flex flex-row justify-center items-center px-4 max-w-[1280px] mx-auto relative z-10">
      <div
        className="w-[273px] h-[88px] md:w-full md:h-[150px] rounded-full py-0 px-[38px] md:px-[59px] flex flex-row items-center justify-center md:justify-between gap-0"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 18.37px 73.46px 0px rgba(0,0,0,0.37), inset 0px 2.3px 0px 2.3px rgba(255,255,255,0.1)",
          backdropFilter: "blur(27.55px)",
          WebkitBackdropFilter: "blur(27.55px)",
        }}
      >
        <div className="flex-shrink-0">
          <Image
            src="/Logo-Brand-Collective-White-PNG_1.png"
            alt="Logo"
            width={337}
            height={80}
            className="w-[197px] md:w-[337px] h-auto object-contain"
          />
        </div>

        <div className="hidden md:flex flex-row items-center justify-between md:justify-end w-full md:w-auto gap-4 md:gap-[39px]">
          <ul className="flex flex-row text-[14px] md:text-[20px] text-white gap-4 md:gap-[39px] font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">Ínicio</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">F.A.Q</a></li>
            <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
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
    <div className={`relative h-[92px] md:h-[166px] overflow-hidden ${className}`}>
      <div className="absolute left-1/2 top-[24px] md:top-[45px] flex w-[2300px] -translate-x-1/2 -rotate-[2.4deg] bg-primary text-black shadow-[0_0_40px_rgba(224,220,1,0.25)]">
        <div className="flex whitespace-nowrap py-2 md:py-4">
          {items.map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-3 md:px-5">
              <span className="font-pragati text-[28px] md:text-[54px] font-bold leading-none">BRAND COLLECTIVE</span>
              <span className="h-5 w-5 md:h-8 md:w-8 rounded-[4px] border-[3px] border-black" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-1/2 top-[54px] md:top-[102px] flex w-[2300px] -translate-x-1/2 rotate-[3.2deg] bg-primary text-black opacity-80 blur-[1px]">
        <div className="flex whitespace-nowrap py-2 md:py-4">
          {items.map((_, i) => (
            <div key={i} className="flex items-center gap-4 px-3 md:px-5">
              <span className="font-pragati text-[28px] md:text-[54px] font-bold leading-none">BRAND COLLECTIVE</span>
              <span className="h-5 w-5 md:h-8 md:w-8 rounded-[4px] border-[3px] border-black" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
