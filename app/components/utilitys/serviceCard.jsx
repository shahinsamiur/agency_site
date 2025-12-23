import React from "react";
import { FaCode } from "react-icons/fa";

export default function ServiceCard() {
  return (
    <div
      className="group bg-[#2c2323] w-full lg:min-h-[380px] sm:min-h-[420px]
                 border border-text p-5 flex flex-col rounded-3xl
                 relative overflow-hidden transition-all duration-300 ease-out"
    >
      <div
        className="bg-secondary absolute bottom-[-60px] right-[-60px] size-200
                   rounded-full opacity-0 scale-75
                   group-hover:opacity-100 group-hover:scale-100
                   transition-all duration-700 ease-out"
      />

      <div className="relative z-10 flex flex-col gap-4 h-full">
        <div
          className="p-4 sm:p-5 bg-secondary group-hover:bg-[#2c2323]
                     w-fit rounded-2xl transition-all duration-700 ease-out"
        >
          <FaCode className="text-xl sm:text-2xl" />
        </div>

        <h2 className="text-xl sm:text-2xl">Web Development</h2>

        <div className="relative flex-1">
          <p
            className="absolute inset-0 text-sm sm:text-base
                       opacity-100 translate-y-0
                       group-hover:opacity-0 group-hover:-translate-y-2
                       transition-all duration-300 ease-out"
          >
            Lorem ipsum dolor sit amet consectetur. Venenatis lectus mollis
            placerat id. Egestas turpis mattis adipiscing ut.
          </p>
          <p
            className="absolute inset-0 text-sm sm:text-base
                       opacity-0 translate-y-2
                       group-hover:opacity-100 group-hover:translate-y-0
                       transition-all duration-300 ease-out delay-75"
          >
            We build fast, scalable, and modern websites using React, Next.js,
            Tailwind CSS, and clean backend architectures.
          </p>
        </div>
      </div>
    </div>
  );
}
