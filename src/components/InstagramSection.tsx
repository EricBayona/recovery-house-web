const instagramPosts = [
  {
    id: 1,
    image: "/instagram/post-1.jpg",
  },
  {
    id: 2,
    image: "/instagram/post-2.jpg",
  },
  {
    id: 3,
    image: "/instagram/post-3.jpg",
  },
];

function InstagramSection() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-neutral-500">
              INSTAGRAM
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Recovery House en Instagram
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Conocé nuestro espacio, nuestros servicios y las novedades de
              Recovery House.
            </p>
          </div>

          <a
            href="https://www.instagram.com/recoveryhouse.aguilares"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit bg-neutral-950 px-6 py-3 font-semibold text-white transition hover:bg-neutral-800"
          >
            Ver Instagram
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden bg-neutral-100"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt="Recovery House en Instagram"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InstagramSection;
