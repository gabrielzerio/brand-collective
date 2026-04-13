interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export default function Button({ children, className = "", style, ...props }: ButtonProps) {
  return (
    <button
      className={`
        flex items-center gap-2 md:gap-2.5 px-6 py-3 md:px-14 md:py-4 rounded-full font-bold text-[#000000]
        text-[14px] md:text-[20px]
        border-[1.94px] border-primary-dark
        transition-all duration-300 hover:scale-105 active:scale-95 group
        ${className}
      `}
      style={{
        background: "linear-gradient(90deg, #E1FA00 17.79%, #EEFF55 100%)",
        boxShadow: "0px 1.9px 0px 0px #E1FA00 inset, 0px 0px 56.87px 0px #E1FA0059, 0px 0px 28.44px 0px #E1FA0040",
        ...style
      }}
      {...props}
    >
      {children}
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
      >
        <path
          d="M4.5 13.5L13.5 4.5M13.5 4.5H6.75M13.5 4.5V11.25"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
