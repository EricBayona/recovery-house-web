import type { Service } from "../data/services";

type serviceCardProps = {
  service: Service;
  onOpen: (service: Service) => void;
};

function ServiceCard({ service, onOpen }: serviceCardProps) {
  return (
    <article className="group overflow-hidden border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 overflow-hidden bg-neutral-200">
        <img
          src={service.image}
          alt={service.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold">{service.name}</h3>
        <p className="mt-3 min-h-14 leading-relaxed text-neutral-600">
          {service.description}
        </p>
        <p className="mt-4 tex-sm font-semibold text-neutral-500 inline-block">
          {service.duration} minutos
        </p>
        <p className="mt-4 tex-sm font-semibold text-neutral-500 inline-block ml-3">
          ${service.price}
        </p>
        <button
          type="button"
          onClick={() => onOpen(service)}
          className="mt-6 w-full bg-neutral-950 px-5 py-3 font-semibold text-white transition hover:bg-neutral-800"
        >
          Ver más información
        </button>
      </div>
    </article>
  );
}

export default ServiceCard;
