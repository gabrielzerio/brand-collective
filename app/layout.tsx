import type { Metadata } from "next";
import { Poppins, Pragati_Narrow } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap"
});

const Pragati = Pragati_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-pragati",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Brand Collective — Crie sua marca ou coleção em minutos",
  description: "Mockups profissionais, vetores editáveis e mockups 3D reunidos em um único acesso. Do iniciante a quem já tem marca, tudo que você precisa pra criar ou lançar está aqui.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${poppins.variable} ${Pragati.variable} font-sans h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
