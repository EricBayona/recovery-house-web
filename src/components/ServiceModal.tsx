import type { Service } from "../data/services";

type ServiceModalProps = {
  service: Service;
  onClose: () => void;
  onBook: (service: Service) => void;
};

function ServiceModal({ service, onClose, onBook }: ServiceModalProps) {
  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 px-6 py-8"
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Imagen */}
        <div className="relative h-64 w-full bg-neutral-200">
          <img
            src={service.image}
            alt={service.name}
            className="h-full w-full object-cover"
          />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl text-neutral-700 shadow hover:bg-neutral-100"
            aria-label="Cerrar información"
          >
            ✕
          </button>
        </div>

        {/* Contenido */}
        <div className="p-8">
          <p className="text-sm font-semibold tracking-[0.25em] text-neutral-500">
            RECOVERY HOUSE
          </p>

          <h2 className="mt-2 text-3xl font-bold">{service.name}</h2>

          <p className="mt-5 leading-relaxed text-neutral-600">
            {service.longDescription}
          </p>

          {/* Duración */}
          <div className="mt-6 border-y border-neutral-200 py-5">
            <p className="text-sm text-neutral-500">Duración</p>

            <p className="mt-1 font-semibold">{service.duration} minutos</p>
          </div>

          {/* Beneficios */}
          <div className="mt-6">
            <h3 className="text-lg font-bold">¿Qué ofrece esta sesión?</h3>

            <ul className="mt-3 space-y-2">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-neutral-600">
                  <span className="text-neutral-950">•</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal para */}
          <div className="mt-6">
            <h3 className="text-lg font-bold">¿Para quién está pensada?</h3>

            <p className="mt-2 leading-relaxed text-neutral-600">
              {service.idealFor}
            </p>
          </div>

          {/* Acciones */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="w-full border border-neutral-300 px-5 py-3 font-semibold text-neutral-700 hover:bg-neutral-100"
            >
              Cerrar
            </button>

            <a
              href="#booking"
              onClick={() => onBook(service)}
              className="w-full bg-neutral-950 px-5 py-3 text-center font-semibold text-white hover:bg-neutral-800"
            >
              Reservar esta sesión
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceModal;
