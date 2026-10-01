import { services, type Service } from "../data/services";
import ServiceCard from "../components/ServiceCard";
import BookingForm from "../components/BookingForm";
import { useState } from "react";
import ServiceModal from "../components/ServiceModal";
import InstagramSection from "../components/InstagramSection";

function Home() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingService, setBookingService] = useState<Service | null>(null);
  return (
    <main>
      <section className="relative min-h-[75vh] overflow-hidden bg-neutral-950 text-white">
        <img
          src="/services/hero.jpg"
          alt="Recuperacion deportiva"
          className="absolute inset-0 h-full w-full object-cover object-[60%_center]"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-24">
          <div className="max-w-3xl">
            <p className="mb-6 text-sm font-semibold tracking-[0.3em] text-neutral-300">
              RECOVERY HOUSE
            </p>

            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Recuperá mejor.
              <br />
              Rendí mejor.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-neutral-200 md:text-xl">
              Recuperación deportiva pensada para deportistas que quieren llegar
              mejor a su próximo entrenamiento o competencia.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#booking"
                className="bg-white px-6 py-3 text-center font-semibold text-neutral-950 transition hover:bg-neutral-200"
              >
                Reservar sesión
              </a>

              <a
                href="#services"
                className="border border-white px-6 py-3 text-center font-semibold text-white transition hover:bg-white hover:text-neutral-950"
              >
                Ver servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-neutral-500">
              RECUPERACIÓN
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Nuestros servicios
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Elegí la sesión que mejor se adapte a tus necesidades.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onOpen={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      <InstagramSection />

      <section id="booking" className="bg-neutral-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.25em] text-neutral-500">
              TURNOS
            </p>

            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Reservá tu sesión
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-neutral-600">
              Completá tus datos y elegí el servicio que querés realizar.
            </p>
          </div>

          <BookingForm
            key={bookingService?.id ?? "empty"}
            selectedService={bookingService}
          />
        </div>
      </section>
      {selectedService && (
        <ServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onBook={(service) => {
            setBookingService(service);
            setSelectedService(null);
          }}
        />
      )}
    </main>
  );
}

export default Home;
