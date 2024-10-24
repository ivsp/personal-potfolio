"use client";
import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <div className="w-full flex justify-end">
      <button
        type="submit"
        className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900
          text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-105 
          active:scale-100 disabled:-scale-y-100 disabled:opacity-65"
        disabled={pending}
      >
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Enviar{" "}
            <FaPaperPlane
              className="text-xs opacity-70 transition-all
          group-hover:translate-x-1 group-hover:-trnaslate-y-1"
            />
          </>
        )}
      </button>
    </div>
  );
}
