"use client";
import { experiencesData, links } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { invariant } from "framer-motion";

export default function Experience() {
  const { ref, inView } = useSectionInView(links[3].name, 0.2);
  console.log(ref, inView);
  return (
    <section ref={ref} id="experience" className="scoll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>Mi Experiencia</SectionHeading>
      <VerticalTimeline lineColor="" animate={true}>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              visible={true}
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateX(40px)",
                transition: `all 0.3s ease-in-out`,
                transitionDelay: `${0.1 + 0.1 * index}`,
              }}
              icon={experience.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={experience.date}
            >
              <h3 className="font-semibold capitalize">{experience.title}</h3>
              <p className="font-normal !mt-0">{experience.location}</p>
              <p className="!mt-1 !font-normal text-[13px] !sm:text-[16px] text-gray-700">
                {experience.description}
              </p>
              <ul className="list-disc">
                {experience.marks.length !== 0 &&
                  experience.marks.map((item, index) => (
                    <li
                      key={index}
                      className="!ml-5 !mt-1 !font-normal text-[13px] sm:text-[16px] text-gray-700"
                    >
                      {item && item}
                    </li>
                  ))}
              </ul>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
