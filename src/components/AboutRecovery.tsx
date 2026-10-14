function AboutRecovery() {
  return (
    <section className="bg-neutral-950 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Nuestro espacio
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Conocé Recovery House
          </h2>

          <p className="mt-6 max-w-xl leading-relaxed text-neutral-300">
            Un espacio pensado para la recuperación deportiva y el bienestar,
            donde cada persona puede encontrar una experiencia adaptada a sus
            necesidades.
          </p>

          <p className="mt-4 leading-relaxed text-neutral-400">
            Conocé nuestro espacio y descubrí todo lo que tenemos preparado para
            vos.
          </p>
        </div>

        <div className="overflow-hidden bg-neutral-900 shadow-2xl">
          <video
            controls
            preload="metadata"
            playsInline
            className="aspect-video w-full object-cover"
            aria-label="Recorrido por Recovery House"
          >
            <source src="/videos/recovery-house.mp4" type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
        </div>
      </div>
    </section>
  );
}

export default AboutRecovery;
