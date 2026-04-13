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
      className={`
        flex items-center gap-[12px] p-[10px] rounded-[12px] w-[320px] 
        backdrop-blur-[7.98px] select-none
        border-[0.52px] border-solid border-transparent
        bg-[linear-gradient(#FFFFFF12,#FFFFFF12)_padding-box,linear-gradient(90deg,rgba(222,218,1,0.3)_0%,rgba(255,252,105,0.3)_100%)_border-box]
        shadow-[0px_0.52px_0px_0.52px_rgba(255,255,255,0.1)_inset,0px_4.13px_16.51px_0px_rgba(0,0,0,0.37)]
        ${className}
      `}
      style={{
        transform: `rotate(${rotation}deg)`,
      }}
    >
      {/* App Icon */}
      <div 
        className="flex-shrink-0 flex items-center justify-center p-[3px] rounded-[7.68px] gap-[3px] rotate-[6.5deg] w-[35.31px] h-[35.31px]"
      >
        <Image src="/App-Icon.png" alt="App Icon" width={35} height={35} className="rounded-[7.68px]" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-0.5 font-sans overflow-hidden">
        <div className="flex justify-between items-center w-full">
          <span className="text-[10.86px] font-semibold text-white tracking-wide">
            Pedido {id}
          </span>
          <span className="text-[9.66px] align-middle text-white/40 font-normal">
            {time}
          </span>
        </div>
        <p className="text-[10.86px] text-white/80 leading-none font-normal">
          Sua Marca tem um novo pedido de {items} {items === 1 ? 'item' : 'itens'} totalizando <span className="font-semibold text-white">R${value}.</span>
        </p>
      </div>
    </div>
  );
}
