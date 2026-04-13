import Image from "next/image"
import Button from "../ui/Button"

export default function Menu() {
    return (
        <div className="container flex flex-row justify-center items-center px-4 max-w-[1280px] mx-auto">
            <div className="w-full border-white/10 border-solid border-[1.3px] rounded-[2rem] md:rounded-full py-6 md:py-[35px] px-6 md:px-[59px] flex flex-col md:flex-row items-center justify-between bg-white/5 shadow-glass gap-6 md:gap-0">
                {/* Logo - Tamanho reduzido no mobile */}
                <div className="flex-shrink-0">
                    <Image 
                        src="/Logo-Brand-Collective-White-PNG_1.png" 
                        alt="Logo" 
                        width={336} 
                        height={100} 
                        className="w-[180px] md:w-[336px] h-auto object-contain"
                    />
                </div>

                {/* Container para links e botão - lado a lado no mobile */}
                <div className="flex flex-row items-center justify-between md:justify-end w-full md:w-auto gap-4 md:gap-[50px]">
                    <ul className="flex flex-row text-[14px] md:text-[20px] text-white gap-4 md:gap-[39px]">
                        <li>Ínicio</li>
                        <li>F.A.Q</li>
                        <li>Contato</li>
                    </ul>
                    <Button className="cursor-pointer text-sm md:text-base">Quero meu pack</Button>
                </div>
            </div>
        </div>
    )
}