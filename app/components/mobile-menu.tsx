"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#categorias", label: "Categorías" },
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#prestadores", label: "Prestadores" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:hidden"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        <Menu size={20} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 sm:hidden" role="dialog" aria-modal="true" aria-label="Menú principal">
          <button className="absolute inset-0 bg-black/35" aria-label="Cerrar menú" onClick={() => setOpen(false)} />
          <div id="mobile-navigation" className="absolute right-0 top-0 flex h-full w-[min(86vw,340px)] flex-col bg-white px-5 pb-6 pt-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-black/[.06] pb-4">
              <span className="text-sm font-semibold">Menú</span>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-xl border border-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                aria-label="Cerrar menú"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mt-5 flex flex-col" aria-label="Navegación mobile">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-black/[.06] text-[15px] font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#solicitud"
              onClick={() => setOpen(false)}
              className="mt-6 flex min-h-12 items-center justify-center rounded-xl bg-brand-500 px-5 text-sm font-semibold text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            >
              Solicitar atención
            </a>
          </div>
        </div>
      )}
    </>
  );
}
