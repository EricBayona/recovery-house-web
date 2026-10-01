export type Service = {
  id: number;
  name: string;
  description: string;
  duration: number;
  price: number;
  image: string;
  longDescription: string;
  benefits: string[];
  idealFor: string;
  tools: string[];
};

export const services: Service[] = [
  {
    id: 1,
    name: "Recovery Express",
    description: "Una herramienta para una necesidad concreta.",
    duration: 30,
    price: 10000,
    image: "/services/recovery-express.jpg",
    longDescription:
      "Una sesión breve y enfocada en una necesidad concreta. El profesional selecciona la herramienta más adecuada según el objetivo de la sesión.",
    benefits: [
      "Sesión de 30 minutos",
      "Una herramienta de recuperación",
      "Atención orientada a una necesidad concreta",
    ],
    idealFor:
      "Personas que buscan una sesión puntual de recuperación o bienestar.",
    tools: ["Boots", "Cold Tub", "Sauna", "Muscle Gun", "Body Roll"],
  },
  {
    id: 2,
    name: "Recovery Deportivo",
    description: "Dos herramientas para necesidades complementarias.",
    duration: 45,
    price: 14000,
    image: "/services/recovery-deportivo.jpg",
    longDescription:
      "Una sesión que combina dos herramientas para abordar necesidades complementarias dentro de una estrategia de recuperación deportiva.",
    benefits: [
      "Sesión de 45 minutos",
      "Combinación de dos herramientas",
      "Atención adaptada al momento del deportista",
    ],
    idealFor:
      "Deportistas que buscan una sesión más completa después de entrenamientos o competencias.",
    tools: ["Muscle Gun → Boots", "Cold Tub → Boots", "Sauna → Boots"],
  },
  {
    id: 3,
    name: "Recovery Completo",
    description: "Tres etapas para una experiencia completa.",
    duration: 60,
    price: 18000,
    image: "/services/recovery-completo.jpg",
    longDescription:
      "Una experiencia de 60 minutos que combina tres etapas de recuperación: sauna, Cold Tub y Boots.",
    benefits: [
      "Sesión de 60 minutos",
      "Tres etapas de recuperación",
      "Experiencia completa",
    ],
    idealFor:
      "Deportistas que buscan una experiencia completa de recuperación.",
    tools: ["Sauna", "Cold Tub", "Boots"],
  },
  {
    id: 4,
    name: "Recovery Relax",
    description: "Una experiencia pensada para relajarse y desconectar.",
    duration: 60,
    price: 16000,
    image: "/services/recovery-relax.jpg",
    longDescription:
      "Una experiencia de bienestar que combina sauna, Boots y Boss Calm en un espacio pensado para relajarse y bajar el ritmo.",
    benefits: [
      "Sesión de 60 minutos",
      "Sauna",
      "Boots + Boss Calm",
      "Espacio pensado para la relajación",
    ],
    idealFor:
      "Personas que buscan relajarse, desconectar y disfrutar una experiencia de bienestar.",
    tools: ["Sauna", "Boots", "Boss Calm"],
  },
  {
    id: 5,
    name: "Recovery Personalizado",
    description: "Una sesión adaptada a las necesidades de cada persona.",
    duration: 60,
    price: 0,
    image: "/services/recovery-personalizado.jpg",
    longDescription:
      "Una modalidad de atención en la que el profesional adapta el servicio, la combinación de herramientas y los parámetros de la sesión según la situación de cada persona.",
    benefits: [
      "Atención personalizada",
      "Combinación de herramientas según la situación",
      "Duración adaptable",
      "Sesión individualizada",
    ],
    idealFor:
      "Deportistas que necesitan una sesión adaptada a su situación particular.",
    tools: ["Combinación personalizada"],
  },
];
