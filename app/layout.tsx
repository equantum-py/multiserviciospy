import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MultiServicios PY | Encontrá profesionales cerca tuyo",
  description:
    "Encontrá servicios para tu hogar, vehículo, jardín y negocio. Compará profesionales, pedí presupuesto y reservá fácilmente.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
