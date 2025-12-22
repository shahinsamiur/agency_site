import React from "react";

export default function Service() {
  return (
    <div className="relative bg-linear-to-l from-secondary/10   to-background text-text py-40">
      <section>
        {/* <h1 className="w-full">Our Team Members</h1> */}

        <div className="w-full flex justify-center items-center flex-col gap-40 py-20">
          <h1 className="text-center text-stroke text-[2rem]! top-0 left-[10%] md:text-[6rem] lg:text-[8rem]! xl:text-[10rem]!   uppercase ">
            UI/UX Designer
          </h1>

          <h1 className="text-center text-stroke text-[2rem]! top-0 left-[10%] md:text-[6rem] lg:text-[8rem]! xl:text-[10rem]!   uppercase ">
            Web Developer
          </h1>

          <h1 className="text-center text-stroke text-[2rem]! top-0 left-[10%] md:text-[6rem] lg:text-[8rem]! xl:text-[10rem]!   uppercase ">
            SEO Marketing
          </h1>

          <h1 className="text-center text-stroke text-[2rem]! top-0 left-[10%] md:text-[6rem] lg:text-[8rem]! xl:text-[10rem]!   uppercase ">
            Brand Strategy
          </h1>
        </div>
      </section>
    </div>
  );
}
