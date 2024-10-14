"use client";
import React from "react";
import SectionHeading from "./section-heading";
import { links, projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView(links[2].name, 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My Projects</SectionHeading>
      <div className="">
        {projectsData.map((project, i) => (
          <React.Fragment key={i}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
