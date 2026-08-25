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

const WhatsAppIcon = () => (
  <svg viewBox="0 0 32 32" aria-hidden="true" className="h-7 w-7 fill-current">
    <path d="M16.04 3C9.43 3 4.05 8.32 4.05 14.86c0 2.31.68 4.57 1.95 6.5L4 29l7.86-2.05a12.1 12.1 0 0 0 4.17.75h.01C22.65 27.7 28 22.38 28 15.84 28 9.3 22.65 3 16.04 3Zm0 22.7h-.01a10.1 10.1 0 0 1-3.86-.77l-.56-.24-4.66 1.22 1.24-4.5-.26-.58a9.75 9.75 0 0 1-1.01-4.33c0-5.45 4.47-9.88 9.98-9.88 5.5 0 9.98 4.43 9.98 9.88 0 5.45-4.48 9.88-9.98 9.88Zm5.47-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47a9.02 9.02 0 0 1-1.66-2.05c-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.6-.92-2.2-.24-.57-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1-1.04 2.45 0 1.45 1.07 2.85 1.22 3.05.15.2 2.1 3.17 5.08 4.45.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={inter.variable}>
        {children}
        <a
          href="https://wa.me/595985194953"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contactar a TodosServicios PY por WhatsApp"
          title="Contactar por WhatsApp"
          className="fixed bottom-5 right-5 z-50 hidden h-16 w-16 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:grid"
        >
          <WhatsAppIcon />
        </a>
      </body>
    </html>
  );
}
