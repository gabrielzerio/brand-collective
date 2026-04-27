{/*
  Figma: Footer
  - Gradient line (linear-gradient 10%→47%→90%)
  - Copyright text: Poppins 500 20px, #838383
*/}

export default function Footer() {
    return (
        <footer className="w-full mt-[80px] pb-[80px]">
            {/* Gradient divider line — from Figma: fill_Q1TILY */}
            <div
                className="max-w-[1646px] mx-auto h-[3px] mb-[80px]"
                style={{
                    background: "linear-gradient(90deg, rgba(225,250,0,0) 10%, #EEFF55 47%, rgba(225,250,0,0) 90%)",
                    boxShadow: "0px 0px 56.87px rgba(225,250,0,0.35), 0px 0px 28.44px rgba(225,250,0,0.25)",
                }}
            />

            <p className="text-center text-[20px] font-medium text-[#838383]">
                © 2026 Brand Collective. Todos os direitos reservados.
            </p>
        </footer>
    );
}
