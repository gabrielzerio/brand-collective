import Menu from "./Menu"
import Badge from "../ui/Badge"
import Button from "../ui/Button"
import RatingBadge from "../ui/RatingBadge"
import NotificationPopUp from "../ui/NotificationPopUp"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="w-full flex flex-col justify-center items-center mt-11 mx-auto">
            <Menu />
            <section className="flex flex-row mt-36 text-[16px] relative">
                <div className="lado-esquerdo flex flex-col gap-[30px] lg:max-w-[760px] z-10">
                    <Badge className="px-16"
                        icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 13L12 18M12 18L17 13M12 18V6M4 21H20" className="stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        }
                    >
                        Tudo que você precisa em um <span className="font-bold">único lugar</span>
                    </Badge>
                    <h1 className="title-hero">
                        Crie sua <span className="highlight-primary">marca</span> ou <span className="highlight-primary">coleção</span> em <br /><span className="font-bold">minutos</span>,
                        <span className="text-primary font-bold"> sem gastar dinheiro</span><br /> com <span className="font-bold">designer</span> ou
                        <span className="font-bold">fotógrafo.</span>
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

                <div className="lado-direito flex justify-center items-center">

                    {/* 1. Mantemos o relative.
      2. Usamos -translate-x-10 (ou outro valor) para mover o bloco todo para a esquerda.
         Isso não afeta o título na outra coluna.
    */}
                    <div className="relative ">

                        {/* A imagem volta pro fluxo normal, sem absolute */}
                        <Image
                            src="/MacBook-Mockup-Template-PNG_1.png"
                            alt="MacBook Mockup"
                            width={687}
                            height={637}
                            priority
                            className="object-contain -translate-x-10"
                        />

                        {/* Os popups vão se mover junto com o MacBook perfeitamente */}
                        <NotificationPopUp
                            id="#4352"
                            time="há 32m"
                            items={2}
                            value="459,83"
                            rotation={-6.5}
                            className="absolute -top-10 -left-10 z-20"
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

                </div>
            </section>
        </div>
    )
}
