import type { Metadata } from "next";
import { Merriweather, Montserrat, } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "INSOEL",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${merriweather.variable} ${montserrat.variable}`}>
      <body
      >
        {children}
      </body>
    </html>
  );
}
