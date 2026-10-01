export type Service = {
  id: number;
  name: string;
  description: string;
  duration: number;
  image: string;
  longDescription: string;
  benefits: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    id: 1,
    name: "Presoterapia",
    description:
      "Compresión neumática para favorecer la recuperación de las piernas.",
    duration: 30,
    image: "/services/presoterapia.jpg",
    longDescription:
      "Sesión de compresión neumática mediante botas de presoterapia. El tratamiento aplica ciclos de presión sobre las piernas para acompañar los procesos de recuperación del deportista.",
    benefits: [
      "Sensación de piernas más livianas",
      "Recuperación después del entrenamiento",
      "Relajación de las piernas",
    ],
    idealFor:
      "Deportistas que buscan complementar su recuperación después de entrenamientos o competencias.",
  },
  {
    id: 2,
    name: "Crioterapia",
    description:
      "Sesión de recuperación mediante exposición controlada al frío.",
    duration: 15,
    image: "/services/crioterapia.jpg",
    longDescription:
      "Sesión de exposición controlada al frío utilizando nuestro equipamiento de crioterapia.",
    benefits: [
      "Exposición controlada al frío",
      "Sensación de recuperación después del esfuerzo",
      "Complemento para determinadas estrategias de recuperación",
    ],
    idealFor:
      "Deportistas que incorporan el frío dentro de su estrategia de recuperación.",
  },
  {
    id: 3,
    name: "Sauna",
    description:
      "Sesión de calor para complementar la recuperación y relajación.",
    duration: 30,
    image: "/services/sauna.jpg",
    longDescription:
      "Sesión de calor en sauna diseñada como complemento dentro de una estrategia de recuperación y relajación.",
    benefits: [
      "Relajación",
      "Sensación de bienestar",
      "Complemento de la recuperación",
    ],
    idealFor:
      "Deportistas que buscan complementar su recuperación con una sesión de calor.",
  },
  {
    id: 4,
    name: "Body Roll",
    description: "Masaje mecánico orientado a la recuperación muscular.",
    duration: 20,
    image: "/services/body-roll.jpg",
    longDescription:
      "Sesión utilizando el sistema Body Roll para trabajar las zonas musculares seleccionadas.",
    benefits: [
      "Relajación muscular",
      "Sensación de piernas más livianas",
      "Complemento de la recuperación",
    ],
    idealFor: "Deportistas que buscan complementar su recuperación muscular.",
  },
  {
    id: 5,
    name: "Muscle Gun",
    description: " Masaje mecánico orientado a la recuperación muscular",
    duration: 20,
    image: "/services/muscle-gun.jpg",
    longDescription:
      "Aplicación localizada de percusión muscular utilizando Muscle Gun en las zonas seleccionadas.",
    benefits: [
      "Trabajo localizado",
      "Relajación muscular",
      "Complemento de la recuperación",
    ],
    idealFor:
      "Deportistas que necesitan un trabajo localizado sobre determinados grupos musculares.",
  },
];
