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
    title: "DESARROLLADOR FULL STACK",
    location: "Pampling (Sevilla)",
    description:
      "Integraciones con plataformas de Ecommerce como Shopify y BigCommerce. Implementación de sistemas de pago como Google Pay y plataforma de ADYEN. Integración de Klaviyo como plataforma de Email marketing. Además, he desarrollado aplicaciones de intranet que conectan con sistemas internos como SGA (sistema de gestión de almacenes) y ERPs. El stack empleado es: React, TypeScript, PHP, Laravel y MySQL.",
    icon: React.createElement(LuGraduationCap),
    date: "septiembre 2023 - actualidad",
  },
  {
    title: "DESARROLLADOR FULL STACK",
    location: "Attomo Digital (Madrid)",
    description:
      "Entre los trabajos destacados se encuentra el desarrollo de 2 CRM inmobiliarios (desarrollo front y back) y diversas webs. Conexión con Stripe como plataforma de pagos. Migraciones de aplicaciones de React a Next. Integración de server side rendering. Integración y despliegues continuos con GitHub. Integración de test unitarios con Jest y conexiones a CMS como Contentful y Strapi. El stack empleado principalmente fue: React, Next, Node, Express y MongoDb.",
    icon: React.createElement(CgWorkAlt),
    date: "septiembre 2022 - septiembre 2023",
  },
  {
    title: "INGENIERO DE CAMINOS, CANALES Y PUERTOS",
    location: "Fhecor Ingenieros Consultores (Sevilla)",
    description:
      "Entre mis trabajos destacan la coordinación de la campaña de inspección especial del puente del Centenario, en Sevilla. La asistencia técnica a la dirección de obras en proyectos de reparación de puentes. La inspección de estructuras y el cálculo de puentes de vigas.",
    icon: React.createElement(FaReact),
    date: "enero 2018  - noviembre 2021",
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
  {
    name: "React Testing Library",
    level: "70%",
    image: ""
  },
  {
    name: "Jest",
    level: "70%",
    image: ""
  },
  {
    name: "HTML",
    level: "90%",
    image: ""
  },
  {
    name: "CSS",
    level: "90%",
    image: ""
  },
  {
    name: "Tailwind",
    level: "70%",
    image: ""
  },
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
  {
    name: "GraphQL",
    level: "60%",
    image: ""
  },
  {
    name: "Docker",
    level: "60%",
    image: ""
  },
  {
    name: "Contentful",
    level: "80%",
    image: ""
  },
  {
    name: "Strapi",
    level: "65%",
    image: ""
  },
  {
    name: "Git",
    level: "90%",
    image: ""
  },
  {
    name: "Framer Motion",
    level: "60%",
    image: ""
  },
  {
    name: "SOLID",
    level: "70%",
    image: ""
  },
  {
    name: "TDD",
    level: "70%",
    image: ""
  },
  {
    name: "API REST",
    level: "80%",
    image: ""
  },
  {
    name: "Sonar",
    level: "70%",
    image: ""
  }
] as const;