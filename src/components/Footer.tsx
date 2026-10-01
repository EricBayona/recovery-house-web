function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 md:grid-cols-3">
        <div>
          <h2 className="text-xl font-bold">Recovery House</h2>

          <p className="mt-4 max-w-sm text-sm leading-relaxed text-neutral-400">
            Recuperación deportiva pensada para ayudarte a llegar mejor a tu
            próximo entrenamiento o competencia.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
            Navegación
          </h3>

          <nav className="mt-4 flex flex-col gap-3">
            <a
              href="#"
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              Inicio
            </a>

            <a
              href="#services"
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              Servicios
            </a>

            <a
              href="#booking"
              className="text-sm text-neutral-300 transition hover:text-white"
            >
              Reservar
            </a>
          </nav>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
            Contacto
          </h3>

          <div className="mt-4 space-y-3 text-sm text-neutral-300">
            <p>Direccion: Carlos Pelegrini 256 - Aguilares-Tucuman</p>
            <p>Celular: (03865)439185</p>
            <a
              href="https://wa.me/5493865439185"
              target="_blank"
              rel="noreferrer"
              className="block transition hover:text-white"
            >
              WhatsApp
            </a>

            <p>Recovery House</p>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Recovery House. Todos los derechos
            reservados.
          </p>

          <p>Recuperación deportiva</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
