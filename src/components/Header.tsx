import { useState } from "react";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          {title}
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-neutral-600 transition hover:text-neutral-950 "
          >
            Inicio
          </a>

          <a
            href="#services"
            className="text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
          >
            Servicios
          </a>

          <a
            href="#booking"
            className="bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Reservar
          </a>
        </nav>
        <button
          type="button"
          className="rounded-md p-2 text-2xl md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "X" : "☰"}
        </button>
        {menuOpen && (
          <nav className="absolute left-0 top-full w-full border-b border-neutral-200 bg-white p-6 md:hidden">
            <div className="flex flex-col gap-5">
              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="font-medium"
              >
                Inicio
              </a>

              <a
                href="#services"
                onClick={() => setMenuOpen(false)}
                className="font-medium"
              >
                Servicios
              </a>

              <a
                href="#booking"
                onClick={() => setMenuOpen(false)}
                className="bg-neutral-950 px-5 py-3 text-center font-semibold text-white"
              >
                Reservar
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
