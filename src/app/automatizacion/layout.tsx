import { Merriweather, Montserrat, } from "next/font/google";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: '--font-merriweather'
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: '--font-montserrat'
});

export default function AutomatizacionRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="Automatizacion-layout">
      {children}
    </div>
  );
}

