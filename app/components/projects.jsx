import Button from "./utilitys/buttons";
import Image from "next/image";
import { projects } from "../_mock/projects";

export default function Projects() {
  return (
    <div className=" relative bg-linear-to-l from-secondary/10   to-background text-text pb-10 pt-20">
      <section className="flex flex-col gap-12">
        <div className="w-full flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h1 className="flex items-center gap-4 text-2xl sm:text-3xl font-semibold">
              Our Projects
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="opacity-80"
              />
            </h1>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed max-w-xl">
              Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
              ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor
              pesto pesto Bianca pesto roll onions.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex md:justify-end items-start">
            <Button
              href="#check"
              className="bg-transparent border border-white/30 text-white/30 hover:text-white hover:border-white transition-all duration-300"
            >
              Show All
            </Button>
          </div>
        </div>

        <div className="w-full flex flex-wrap gap-6 sm:gap-8">
          {projects.map((items, index) => (
            <div
              key={index}
              className="group w-full md:w-[48%] rounded-3xl overflow-hidden relative cursor-pointer"
            >
              <Image
                src={items}
                width={900}
                height={900}
                alt="Project Image"
                className="w-full h-72 sm:h-80 object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute bottom-0 w-full px-6 py-5 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <h2 className="text-lg font-semibold text-white">
                  Project Title
                </h2>
                <p className="text-sm text-white/70">
                  Short project description
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
