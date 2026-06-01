import React from "react";
import Image from "next/image";

interface NotificationPopUpProps {
  id?: string;
  time?: string;
  items?: number;
  value: string;
  rotation?: number;
  className?: string;
}

export default function NotificationPopUp({
  id = "#4352",
  time = "há 32m",
  items = 2,
  value,
  rotation = 6.5,
  className = "",
}: NotificationPopUpProps) {
  return (
    <div
      className={`relative flex h-[96px] w-[288px] items-center gap-[12px] rounded-[13px] p-[11px] select-none border-[0.52px] border-transparent bg-[linear-gradient(rgba(255,255,255,0.07),rgba(255,255,255,0.07))_padding-box,linear-gradient(90deg,rgba(222,218,1,0.3),rgba(255,252,105,0.3))_border-box] shadow-[0_0.52px_0_0.52px_rgba(255,255,255,0.1)_inset,0_4.13px_16.51px_rgba(0,0,0,0.37)] backdrop-blur-[8px] ${className}`}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className="absolute -bottom-[44px] left-[24px] h-[136px] w-[358px] rounded-full bg-black/75 blur-[18px]" />
      <div className="relative z-10 flex h-[39px] w-[39px] shrink-0 items-center justify-center rounded-[8px]">
        <Image src="/App-Icon.png" alt="App Icon" width={39} height={39} className="rounded-[8px]" />
      </div>

      <div className="relative z-10 flex min-w-0 flex-1 flex-col font-sans">
        <div className="flex items-start justify-between gap-2">
          <span className="text-[11px] font-semibold leading-[21px] text-white tracking-[-0.01em]">
            Pedido {id}
          </span>
          <span className="pt-[3px] text-[9px] leading-[15px] text-white/40">
            {time}
          </span>
        </div>
        <p className="text-[10.8px] leading-[16px] text-white/80">
          Sua Marca tem um novo pedido de {items} {items === 1 ? "item" : "itens"} totalizando <span className="font-semibold text-white">R${value}.</span>
        </p>
      </div>
      <div className="absolute right-[36px] top-0 h-[47px] w-[146px] rounded-full bg-white/10 blur-[18px]" />
    </div>
  );
}
