import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TodosServicios PY | Un solo contacto para todos tus servicios",
  description:
    "Contanos qué necesitás. TodosServicios PY centraliza la atención, evaluación, cotización y coordinación de servicios para hogar, vehículos y negocios en Paraguay.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
