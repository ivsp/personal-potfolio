"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView(links[1].name, 0.75);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <SectionHeading>Sobre mi</SectionHeading>

      <p className="mb-3">
        Tras graduarme en{" "}
        <span className="font-medium">Ingeniería de Caminos</span>, encontré en
        la programación una nueva pasión que me llevó a cambiar de rumbo. Decidí
        inscribirme en un bootcamp{" "}
        <span className="font-medium">de desarrollo full stack</span>, donde
        descubrí el mundo de la tecnología y el desarrollo web..{" "}
        <span className="italic">Lo que más disfruto de la programación</span>{" "}
        es la resolución de problemas y el análisis.{" "}
        <span className="underline">Me encanta</span> la sensación de encontrar
        la solución a un nproblema. Mi stack principal es{" "}
        <span className="font-medium">
          React, Next.js, JavaScript, TypeScript, Node, Express y MongoDB
        </span>
        . Aunque también estoy familiarizado con PHP y MySQL. Siempre estoy
        buscando aprender nuevas tecnologías. Es por eso que también me he
        formado en buenas prácticas de programación aprendiendo{" "}
        <span className="font-medium">
          SOLID, TDD y herramientas como Docker, Jest y React Testing Library
        </span>
      </p>

      <p>
        <span className="italic">Pero no todo es programar</span>, me encanta el
        deporte, la naturaleza y la aventura.{" "}
        <span className="font-medium">Crossfit y escalada</span> son los dos
        deportes que más practico.{" "}
      </p>
    </motion.section>
  );
}
