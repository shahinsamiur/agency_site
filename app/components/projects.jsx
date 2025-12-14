import Button from "./utilitys/buttons";
import Image from "next/image";
import { projects } from "../_mock/projects";

export default function Projects() {
  return (
    <div className="w-full relative ">
      <section className="flex flex-col gap-10">
        <div className="w-full  flex flex-col md:flex-row max-sm:gap-10">
          <div className="w-full md:w-1/2 flex flex-col justify-start items-start gap-10">
            <h1 className="flex justify-start items-center gap-5">
              Our Projects
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className=""
              />
            </h1>
            <p>
              Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
              ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor
              pesto pesto Bianca pesto roll onions.
            </p>
          </div>

          <div className="flex md:justify-end items-start w-full md:w-1/2">
            <Button
              href="#check"
              className="bg-transparent! border border-white/30 text-white/30!"
            >
              Show All
            </Button>
          </div>
        </div>
        <div className="w-full h-80 flex justify-between flex-wrap gap-10">
          {projects.map((items, index) => {
            return (
              <div
                key={index}
                className="w-full md:w-[48%] rounded-4xl overflow-hidden transition cursor-pointer relative"
              >
                <Image
                  src={items}
                  width={900}
                  height={900}
                  alt="error"
                  className="w-full object-cover hover:scale-120 "
                ></Image>

                <div className="absolute blur-7xl w-full h-20 bottom-0 px-5">
                  <h2>sfsfsf</h2>
                  <p>sfjshf</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
