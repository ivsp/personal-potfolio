import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Inicio",
    hash: "#home",
  },
  {
    name: "Sobre mi",
    hash: "#about",
  },
  {
    name: "Stack",
    hash: "#skills",
  },
  {
    name: "Experiencia",
    hash: "#experience",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "FULL STACK TEAM LEAD",
    location: "Pampling (Sevilla)",
    description: "Transicioné a un rol de liderazgo como Team Lead tras haber gestionado y desarrollado con éxito varios procesos dentro de la empresa.",
    icon: React.createElement(CgWorkAlt),
    date: "junio 2024 - actualidad",
    marks: []
  },
  {
    title: "MIDDLE FULL STACK DEVELOPER",
    location: "Pampling (Sevilla)",
    description:
      "Destacan los siguientes hitos dentro de mi trayectoria:",
    icon: React.createElement(CgWorkAlt),
    date: "septiembre 2023 - mayo 2024",
    marks: ["Integraciones con plataformas de Ecommerce como Shopify y Bigcommerce.", "Implementación de sistemas de pago con ADYEN.", "Integración de Klaviyo como herramienta de Email Marketing.", "Desarrollo de aplicaciones de intranet."]
  },
  {
    title: "MIDDLE FULL STACK DEVELOPER (MERN)",
    location: "Attomo Digital (Madrid)",
    description:
      "Transicioné a un rol de gestión de equipo como tras haber gestionado y desarrollado con éxito varios proyectos dentro de la empresa. Algunos aspectos destacados de mi experiencia incluyen:",
    icon: React.createElement(CgWorkAlt),
    date: "junio 2023 - septiembre 2023",
    marks: ["Actualización de tecnologías: Migraciones y empleo de stack moderno y actualizado.", "Gestión de equipo: Responsable y supervisor de un equipo de 3 personas. Liderando un proyecto de larga duración enfocado en la gestión de una empresa del sector inmobiliario."]
  },
  {
    title: "JUNIOR FULL STACK DEVELOPER",
    location: "Attomo Digital (Madrid)",
    description:
      "Programador Full Stack (MERN) en el departamento de desarrollo. Trabajando en diversos proyectos como CRMs inmobiliarios y webs responsives.",
    icon: React.createElement(CgWorkAlt),
    date: "septiembre 2022 - mayo 2023",
    marks: []
  },
  {
    title: "INGENIERO DE CAMINOS, CANALES Y PUERTOS",
    location: "Fhecor Ingenieros Consultores (Sevilla)",
    description:
      "Entre mis trabajos destacan la coordinación de la campaña de inspección especial del puente del Centenario, en Sevilla. La asistencia técnica a la dirección de obras en proyectos de reparación de puentes. La inspección de estructuras y el cálculo de puentes de vigas.",
    icon: React.createElement(CgWorkAlt),
    date: "enero 2018  - noviembre 2021",
    marks: []
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  {
    name: "React",
    level: "80%",
    image: ""
  },
  {
    name: "Next.js",
    level: "70%",
    image: ""
  },
  {
    name: "TypeScript",
    level: "70%",
    image: ""
  },
  {
    name: "JavaScript",
    level: "90%",
    image: ""
  },
  // {
  //   name: "React Testing Library",
  //   level: "70%",
  //   image: ""
  // },
  // {
  //   name: "Jest",
  //   level: "70%",
  //   image: ""
  // },
  // {
  //   name: "HTML",
  //   level: "90%",
  //   image: ""
  // },
  // {
  //   name: "CSS",
  //   level: "90%",
  //   image: ""
  // },
  // {
  //   name: "Tailwind",
  //   level: "70%",
  //   image: ""
  // },
  {
    name: "Node.js",
    level: "60%",
    image: ""
  },
  {
    name: "Express",
    level: "90%",
    image: ""
  },
  {
    name: "MongoDB",
    level: "75%",
    image: ""
  }, 
  {
    name: "MySQL",
    level: "60%",
    image: ""
  },
  {
    name: "PostgreSQL",
    level: "50%",
    image: ""
  },
  // {
  //   name: "GraphQL",
  //   level: "60%",
  //   image: ""
  // },
  // {
  //   name: "Docker",
  //   level: "60%",
  //   image: ""
  // },
  // {
  //   name: "Contentful",
  //   level: "80%",
  //   image: ""
  // },
  // {
  //   name: "Strapi",
  //   level: "65%",
  //   image: ""
  // },
  // {
  //   name: "Git",
  //   level: "90%",
  //   image: ""
  // },
  // {
  //   name: "Framer Motion",
  //   level: "60%",
  //   image: ""
  // },
  // {
  //   name: "SOLID",
  //   level: "70%",
  //   image: ""
  // },
  // {
  //   name: "TDD",
  //   level: "70%",
  //   image: ""
  // },
  // {
  //   name: "API REST",
  //   level: "80%",
  //   image: ""
  // },
  // {
  //   name: "Sonar",
  //   level: "70%",
  //   image: ""
  // }
] as const;