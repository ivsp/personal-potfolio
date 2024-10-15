"use client";
import { links } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { senEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView(links[4].name, 0.05);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contacto</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Contacta directamente al correo{" "}
        <a className="underline" href="mailto:ivansperez93@gmail.com">
          ivansperez93@gmail.com
        </a>{" "}
        o a través de este formulario.
      </p>
      <form
        className="mt-10 flex flex-col"
        action={async (formData: FormData) => {
          const { data, error } = await senEmail(formData);
          if (error) {
            toast.error(JSON.stringify(error));
            return;
          }
          toast.success("Email enviado correctamente");
          console.log();
          if (emailRef.current) emailRef.current.value = "";
          if (messageRef.current) messageRef.current.value = "";
        }}
      >
        <input
          ref={emailRef}
          type="email"
          className="h-14 rounded-lg borderBlack p-4"
          placeholder="Tu email"
          name="email"
          required
          max={50}
        />
        <textarea
          ref={messageRef}
          className="h-52 my-3 rounded-lg borderBlack p-4"
          placeholder="Tu mensaje"
          name="message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
