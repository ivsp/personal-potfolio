"use client";
import React from "react";
import Image from "next/image";
import cvImage from "@/public/images/ivan.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { links } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/cntext/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView(links[0].name, 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              delay: 0.1,
              duration: 0.2,
            }}
          >
            <Image
              src={cvImage}
              alt={"imagen de Iván"}
              width={200}
              height={200}
              quality={95}
              priority={true}
              className="rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            {/* <span className="absolute bottom-0 right-4 text-4xl">👋</span> */}
          </motion.div>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
      >
        Soy Iván. Desarrollador full stack con 3 años de experiencia en el
        desarrollo de interfaces intuitivas y funcionales. Especializado en
        React y Next.js
        <br />
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          delay: 0.4,
        }}
      >
        <Link
          href={"#contact"}
          className="group w-[200px] bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 
          rounded-full outline-none focus:scale-110 hover:scale-105 hover:bg-gray-950 transition"
          onClick={() => {
            setActiveSection(links[4].name);
            setTimeOfLastClick(Date.now());
          }}
        >
          Contacto{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          href="/CV. Iván Sánchez Pérez.pdf"
          download={true}
          className="group w-[200px] bg-white text-gray-900 border border-gray-900/50 px-7 py-3 flex items-center 
        justify-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-105 active:scale-100 transition cursor-pointer"
        >
          Descarga CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1" />
        </a>
        <div className="flex items-center justify-center gap-2 px-4 text-lg font-medium">
          <a
            href="https://www.linkedin.com/in/ivansperez/"
            target="_blank"
            className="bg-white text-gray-700 border border-gray-900/50 p-4 flex items-center justify-center gap-2 rounded-full text-[1.25rem]
        outline-none focus:scale-[1.15] hover:scale-[1.15] transition hover:text-gray-950"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/ivsp"
            target="_blank"
            className="bg-white text-gray-700 border border-gray-900/50 p-4 flex items-center justify-center gap-2 rounded-full text-[1.35rem]
         outline-none focus:scale-[1.15] hover:scale-[1.15] transition hover:text-gray-950 cursor-pointer"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
