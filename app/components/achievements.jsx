import React from "react";
import Image from "next/image";
import AchivementCard from "./utilitys/achivementCard";
import { achivements } from "../_mock/achivement";
export default function Achievements() {
  return (
    <div className=" relative bg-linear-to-l from-secondary/10   to-background text-text pb-10 pt-20">
      <section className="space-y-20">
        <div className="flex flex-col gap-5 lg:flex-row">
          <h1 className="flex gap-5 max-md:text-3xl!">
            Our Achievements
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="opacity-80"
            />
          </h1>
          <p className="">
            Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
            ricotta garlic dolor sauce marinara Chicago marinara.
          </p>
        </div>

        <div className=" flex flex-col lg:flex-row justify-between max-md:gap-10">
          <div className="flex lg:w-1/4">
            <div className="flex flex-col lg:gap-40 w-full">
              <div className="flex justify-start items-center w-full! ">
                <h1 className="text-[10rem]! lg:text-[10rem]! text-secondary! flex w-1/3 gap-5">
                  20
                </h1>
              </div>
              <div className="flex justify-center  w-full! items-center ">
                <h1 className="text-[15rem]! lg:text-[15rem]! text-secondary! flex  w-fit! gap-5">
                  25
                </h1>
              </div>
            </div>
          </div>
          <div className="flex w-full lg:w-2/3  justify-end flex-col gap-10 items-end">
            {achivements.map((step) => {
              return <AchivementCard key={step.index} data={step} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
