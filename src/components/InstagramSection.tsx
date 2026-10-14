import { useState } from "react";

const instagramPosts = [
  { id: 1, image: "/instagram/post-1.jpg" },
  { id: 2, image: "/instagram/post-2.jpg" },
  { id: 3, image: "/instagram/post-3.jpg" },
  { id: 4, image: "/instagram/post-4.jpg" },
  { id: 5, image: "/instagram/post-5.jpg" },
  { id: 6, image: "/instagram/post-6.jpg" },
];

function InstagramSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previous = () => {
    setCurrentIndex((current) =>
      current === 0 ? instagramPosts.length - 1 : current - 1,
    );
  };

  const next = () => {
    setCurrentIndex((current) => (current + 1) % instagramPosts.length);
  };

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Seguinos
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Recovery House en Instagram
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-neutral-600">
              Conocé nuestro espacio, nuestros servicios y las novedades de
              Recovery House.
            </p>
          </div>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-neutral-900 underline underline-offset-4 transition hover:text-neutral-500"
          >
            Ver Instagram →
          </a>
        </div>

        {/* Carrusel tipo slider */}
        <div className="relative mt-10">
          <div className="flex overflow-hidden">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 transition-transform duration-500`}
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="block overflow-hidden bg-neutral-100"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={post.image}
                      alt={`Publicación de Recovery House ${post.id}`}
                      className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Controles */}
          <div className="mt-6 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={previous}
              aria-label="Fotos anteriores"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-xl transition hover:bg-neutral-950 hover:text-white"
            >
              ←
            </button>
            <div className="flex items-center gap-2">
              {instagramPosts.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Mostrar foto ${index + 1}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-6 bg-neutral-950"
                      : "w-2 bg-neutral-300"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Fotos siguientes"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-xl transition hover:bg-neutral-950 hover:text-white"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
