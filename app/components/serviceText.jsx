import React from "react";

export default function Service() {
  const services = [
    "UI/UX Designer",
    "Web Developer",
    "SEO Marketing",
    "Brand ",
  ];

  return (
    <div className="relative bg-linear-to-l from-secondary/10 to-background text-text">
      <section className="relative">
        {services.map((service, index) => (
          <div
            key={index}
            className="h-screen flex justify-center items-center"
          >
            <h1
              className="
                sticky top-1/2 -translate-y-1/2
                text-center uppercase text-stroke
                text-[2rem] md:text-[6rem] lg:text-[8rem] xl:text-[12rem]!
              "
            >
              {service}
            </h1>
          </div>
        ))}
      </section>
    </div>
  );
}
