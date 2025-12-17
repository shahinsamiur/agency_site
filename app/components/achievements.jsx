import React from "react";
import Image from "next/image";
export default function Achievements() {
  return (
    <div className=" relative bg-linear-to-l from-secondary/10   to-background text-text pb-10 pt-20">
      <section className="space-y-20">
        <div className="flex ">
          <h1 className="flex gap-5">
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

        <div className="flex w-1/4">
          <div className="flex flex-col gap-20 w-full">
            <div className="flex justify-start items-center w-full! ">
              <h1 className="text-[7rem]! text-secondary! flex w-1/3 gap-5">
                20
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="opacity-80"
                />
              </h1>
            </div>
            <div className="flex justify-center  w-full! items-center ">
              <h1 className="text-[7rem]! text-secondary! flex  w-fit! gap-5">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={50}
                  height={50}
                  className="opacity-80"
                />
                25
              </h1>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </div>
  );
}
