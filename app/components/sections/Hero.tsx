import Menu from "./Menu"
import Badge from "../ui/Badge"
import Button from "../ui/Button"
import RatingBadge from "../ui/RatingBadge"
import NotificationPopUp from "../ui/NotificationPopUp"
import Image from "next/image"

export default function Hero() {
    return (
        /*
         * Wrapper full-width — sem overflow-hidden para
         * não cortar a imagem que vaza à direita.
         */
        <div className="w-full relative mt-11">

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

            {/* Menu no seu container centralizado em 1280px */}
            <div className="mx-auto px-4">
                <Menu />
            </div>

            {/*
             * A section é full-width sem max-w, mas recebe um
             * padding-left calculado para o conteúdo da esquerda
             * começar exatamente onde o container de 1280px começa.
             *
             * calc((100vw - 1280px) / 2 + 16px):
             *   - (100vw - 1280px) / 2 → margem lateral do container
             *   - + 16px → equivalente ao px-4 do container do Menu
             *   - max(16px, ...) → em viewports < 1280px usa 16px mínimo
             *
             * Com isso, a imagem da direita vaza livremente sem nada
             * que a contenha.
             */}
            <section
                className="flex flex-row items-center mt-32 text-[16px] relative"
                style={{ paddingLeft: "max(16px, calc((100vw - 1280px) / 2 + 16px))" }}
            >
                {/* Coluna esquerda — largura fixa, alinhada com o menu */}
                <div className="shrink-0 flex flex-col gap-[30px] z-10 max-w-[760px]">
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

                {/*
                 * Coluna direita — shrink-0 para não ser espremida.
                 * Sem max-width: a imagem se posiciona naturalmente
                 * e vaza além do viewport à direita.
                 */}
                <div className="shrink relative -ml-12">
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
            </section>
        </div>
    )
}
