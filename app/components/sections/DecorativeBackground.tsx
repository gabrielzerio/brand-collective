import Image from "next/image";

const splatters = [
  "left-[-250px] top-[940px] h-[640px] w-[620px] rotate-[8deg] opacity-60",
  "right-[-180px] top-[2015px] h-[520px] w-[490px] -rotate-[14deg] opacity-55",
  "left-[-250px] top-[2950px] h-[640px] w-[620px] rotate-[2deg] opacity-45",
  "right-[-160px] top-[4474px] h-[480px] w-[452px] rotate-[18deg] opacity-45",
  "left-[-150px] top-[6720px] h-[540px] w-[522px] -rotate-[20deg] opacity-45",
  "right-[-120px] top-[8701px] h-[477px] w-[452px] rotate-[15deg] opacity-40",
  "left-[-260px] top-[12548px] h-[529px] w-[510px] -rotate-[8deg] opacity-45",
];

const glows = [
  "left-[-1009px] top-[-422px] h-[4338px] w-[4904px] opacity-[0.16]",
  "left-[-4164px] top-[3998px] h-[4337px] w-[4904px] opacity-[0.14]",
  "right-[-5069px] top-[3302px] h-[4337px] w-[4904px] opacity-[0.15]",
  "right-[-5069px] top-[6614px] h-[4215px] w-[4828px] opacity-[0.13]",
  "left-[-4164px] top-[7710px] h-[4337px] w-[4904px] opacity-[0.13]",
  "right-[-5069px] top-[10847px] h-[4215px] w-[4828px] opacity-[0.13]",
  "left-[-4157px] top-[13361px] h-[4337px] w-[4904px] opacity-[0.1]",
];

export default function DecorativeBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block">
      {glows.map((className) => (
        <div
          key={className}
          className={`absolute rounded-full blur-[80px] ${className}`}
          style={{
            background: "radial-gradient(circle, rgba(224,220,1,0.32) 0%, rgba(224,220,1,0.11) 34%, transparent 63%)",
          }}
        />
      ))}

      {splatters.map((className) => (
        <Image
          key={className}
          src="/Group_481207.svg"
          alt=""
          width={620}
          height={640}
          className={`absolute object-contain mix-blend-screen ${className}`}
        />
      ))}
    </div>
  );
}
