function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Elegí tu experiencia",
      description:
        "Conocé nuestros servicios y elegí la experiencia que mejor se adapte a lo que estás buscando.",
    },
    {
      number: "02",
      title: "Reservá tu sesión",
      description:
        "Completá el formulario y coordiná tu visita por WhatsApp de manera sencilla.",
    },
    {
      number: "03",
      title: "Disfrutá la experiencia",
      description:
        "Acercate a nuestro espacio y recibí la atención correspondiente al servicio que elegiste.",
    },
    {
      number: "04",
      title: "Dedicá tiempo a vos",
      description:
        "Hacé una pausa en tu rutina y disfrutá de un espacio pensado para la recuperación y el bienestar.",
    },
  ];

  return (
    <section className="bg-neutral-100 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Simple y práctico
          </p>

          <h2 className="mt-4 text-3xl font-bold text-neutral-950 md:text-4xl">
            ¿Cómo funciona?
          </h2>

          <p className="mt-5 leading-relaxed text-neutral-600">
            Disfrutar de Recovery House es sencillo. Seguí estos cuatro pasos y
            preparate para vivir tu experiencia.
          </p>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article key={step.number} className="relative">
              <span
                aria-hidden="true"
                className="text-5xl font-light tracking-tight text-neutral-300"
              >
                {step.number}
              </span>

              <div className="mt-5 h-px w-full bg-neutral-300" />

              <h3 className="mt-6 text-xl font-bold text-neutral-950">
                {step.title}
              </h3>

              <p className="mt-3 leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#booking"
            className="inline-flex items-center justify-center bg-neutral-950 px-8 py-4 font-semibold text-white transition hover:bg-neutral-800"
          >
            Reservá tu sesión
            <span className="ml-3" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
