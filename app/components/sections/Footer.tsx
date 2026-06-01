export default function Footer() {
  return (
    <footer className="mt-[56px] w-full pb-[56px] md:mt-[72px] md:pb-[68px]">
      <div
        className="mx-auto mb-[48px] h-[3px] max-w-[1400px] md:mb-[64px]"
        style={{
          background: "linear-gradient(90deg, rgba(225,250,0,0) 10%, #EEFF55 47%, rgba(225,250,0,0) 90%)",
          boxShadow: "0px 0px 56.87px rgba(225,250,0,0.35), 0px 0px 28.44px rgba(225,250,0,0.25)",
        }}
      />

      <p className="text-center text-[14px] font-medium text-[#838383] md:text-[16px]">
        © 2026 Brand Collective. Todos os direitos reservados.
      </p>
    </footer>
  );
}
