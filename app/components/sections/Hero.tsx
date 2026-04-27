import Image from "next/image"
import Badge from "../ui/Badge"
import Button from "../ui/Button"
import RatingBadge from "../ui/RatingBadge"
import NotificationPopUp from "../ui/NotificationPopUp"

export default function Hero() {
    return (
        <div className="w-full relative mt-[43px]">

            {/* Background Glow */}
            <div className="absolute top-[-10%] right-0 w-[50vw] h-[10vw] bg-accent/30 rounded-full blur-[120px] pointer-events-none z-0" />

            {/* Particles Decoration */}
            <Image
                src="/Group_481207.svg"
                alt="Particles Decoration"
                width={200}
                height={300}
                className="absolute -top-68 right-0 pointer-events-none z-0 opacity-80"
            />

            <Menu />

            <section
                className="flex flex-col md:flex-row md:items-center mt-16 md:mt-28 text-[16px] relative px-4 md:px-0"
                style={{ paddingLeft: "max(16px, calc((100vw - 1280px) / 2 + 16px))" }}
            >
                {/* Left Column */}
                <div className="flex flex-col gap-[24px] md:gap-[30px] z-10 w-full md:max-w-[760px] shrink-0">
                    <Badge
                        className="px-16"
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
                        <br /><span className="font-bold">minutos</span>,
                        <span className="text-primary font-bold"> sem gastar dinheiro</span>
                        <br /> com <span className="font-bold">designer</span> ou
                        <span className="font-bold"> fotógrafo.</span>
                    </h1>

                    <h2 className="subtitle-hero lg:max-w-[640px]">
                        Mockups profissionais, vetores editáveis e mockups 3D reunidos em um único acesso.
                        Do iniciante a quem já tem marca, tudo que você precisa pra criar ou lançar está aqui.
                    </h2>

                    <div className="flex gap-[28px]">
                        <Button className="font-semibold">Quero meu pack</Button>
                        <RatingBadge />
                    </div>
                </div>

                {/* Right Column — MacBook */}
                <div className="hidden md:block shrink-0 relative -ml-12">
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
                        className="absolute top-0 left-10 z-20"
                    />

                    <NotificationPopUp
                        id="#4353"
                        time="há 12m"
                        items={1}
                        value="173,28"
                        rotation={8.4}
                        className="absolute bottom-20 -right-10 z-20"
                    />
                </div>
            </section>
        </div>
    )
}

function Menu() {
    return (
        <div className="container flex flex-row justify-center items-center px-4 max-w-[1280px] mx-auto">
            <div
                className="w-full rounded-full py-6 md:py-[35px] px-6 md:px-[59px] flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0"
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
                        className="w-[180px] md:w-[337px] h-auto object-contain"
                    />
                </div>

                <div className="flex flex-row items-center justify-between md:justify-end w-full md:w-auto gap-4 md:gap-[39px]">
                    <ul className="flex flex-row text-[14px] md:text-[20px] text-white gap-4 md:gap-[39px] font-medium">
                        <li><a href="#" className="hover:text-primary transition-colors">Ínicio</a></li>
                        <li><a href="#faq" className="hover:text-primary transition-colors">F.A.Q</a></li>
                        <li><a href="#contato" className="hover:text-primary transition-colors">Contato</a></li>
                    </ul>
                    <Button className="cursor-pointer text-sm md:text-base">Quero meu pack</Button>
                </div>
            </div>
        </div>
    )
}
