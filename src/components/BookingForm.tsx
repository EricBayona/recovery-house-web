import { useState, type SubmitEvent } from "react";
import { services, type Service } from "../data/services";

type BookingFormProps = {
  selectedService?: Service | null;
};

function BookingForm({ selectedService }: BookingFormProps) {
  const [name, setName] = useState("");
  const [serviceId, setServiceId] = useState(
    selectedService ? String(selectedService.id) : "",
  );
  const [date, setDate] = useState("");

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!name.trim()) {
      alert("Ingresá tu nombre");
      return;
    }

    if (!serviceId) {
      alert("Seleccioná un servicio");
      return;
    }

    if (!date) {
      alert("Seleccioná una fecha");
      return;
    }

    const selectedService = services.find(
      (service) => service.id === Number(serviceId),
    );

    if (!selectedService) {
      alert("Seleccioná un servicio");
      return;
    }

    const message = `Hola, quiero reservar una sesion en Recovery House.
   Nombre: ${name}
   Servicio: ${selectedService.name}
   Duracion: ${selectedService.duration} minutos
   Fecha: ${date}
   `;
    const whatsappUrl = `https://wa.me/5493865439185?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-start">
      {/* Información */}
      <div>
        <div className="border-l-4 border-neutral-950 pl-6">
          <h3 className="text-2xl font-bold">Tu recuperación empieza acá</h3>

          <p className="mt-4 leading-relaxed text-neutral-600">
            Elegí el servicio que querés realizar, completá tus datos y solicitá
            tu turno. Te contactaremos por WhatsApp para confirmar la
            disponibilidad.
          </p>
        </div>

        <div className="mt-8 space-y-5">
          <div>
            <p className="font-semibold">01. Elegí tu servicio</p>
            <p className="mt-1 text-sm text-neutral-500">
              Seleccioná la sesión de recuperación que querés realizar.
            </p>
          </div>

          <div>
            <p className="font-semibold">02. Elegí una fecha</p>
            <p className="mt-1 text-sm text-neutral-500">
              Indicá cuándo te gustaría realizar la sesión.
            </p>
          </div>

          <div>
            <p className="font-semibold">03. Confirmamos por WhatsApp</p>
            <p className="mt-1 text-sm text-neutral-500">
              Recibirás la confirmación directamente por WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        className="border border-neutral-200 bg-white p-6 shadow-sm md:p-8"
      >
        <div className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-semibold text-neutral-800"
            >
              Nombre
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Ingresá tu nombre"
              className="w-full border border-neutral-300 px-4 py-3 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950"
            />
          </div>

          <div>
            <label
              htmlFor="service"
              className="mb-2 block text-sm font-semibold text-neutral-800"
            >
              Servicio
            </label>

            <select
              id="service"
              value={serviceId}
              onChange={(event) => setServiceId(event.target.value)}
              className="w-full border border-neutral-300 bg-white px-4 py-3 outline-none transition focus:border-neutral-950"
            >
              <option value="">Seleccioná un servicio</option>

              {services.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="date"
              className="mb-2 block text-sm font-semibold text-neutral-800"
            >
              Fecha
            </label>

            <input
              type="date"
              id="date"
              value={date}
              onChange={(event) => setDate(event.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className="w-full border border-neutral-300 px-4 py-3 outline-none transition focus:border-neutral-950"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neutral-950 px-6 py-4 font-semibold text-white transition hover:bg-neutral-800"
          >
            Solicitar turno por WhatsApp
          </button>

          <p className="text-center text-xs leading-relaxed text-neutral-500">
            La solicitud no confirma automáticamente el turno. Te contactaremos
            por WhatsApp para confirmar disponibilidad.
          </p>
        </div>
      </form>
    </div>
  );
}
export default BookingForm;
