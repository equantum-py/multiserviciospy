import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "TodoServicios PY | Encontrá profesionales cerca tuyo",
  description:
    "Encontrá servicios para tu hogar, vehículo, jardín y negocio. Compará profesionales, pedí presupuesto y reservá fácilmente.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
