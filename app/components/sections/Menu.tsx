import Image from "next/image"

export default function Menu() {
    return (
        <div className="container flex flex-row justify-center items-center">
            <div className="w-full border-white/10 border-solid border-[1.3px] rounded-full py-[35px] px-[59px] flex flex-row items-center justify-center gap-[50px]">
                <Image src="/Logo-Brand-Collective-White-PNG_1.png" alt="Logo" width={336} height={100} />
                <ul className="flex flex-row gap-5 text-lg">
                    <li>Inicio</li>
                    <li>F.A.Q</li>
                    <li>Contato</li>
                </ul>
                <button className="bg-linear">Quero meu pack</button>
            </div>
        </div>
    )
}