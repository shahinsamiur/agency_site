import Image from "next/image";
import JourneyComponents from "./utilitys/journeyComponents";
import { steps } from "../_mock/step";
export default function Journey() {
  return (
    <div className=" relative bg-linear-to-l from-secondary/10   to-background text-text pb-10 pt-20">
      <section className="flex flex-col gap-20">
        <div className="flex flex-col gap-10 w-full lg:w-1/2">
          <h1 className="flex w-full gap-5">
            Our Journey
            <Image
              src="/logo.png"
              alt="Logo"
              width={32}
              height={32}
              className="opacity-80"
            />
          </h1>
          <p>
            Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
            ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor
            pesto pesto Bianca pesto roll onions.
          </p>
        </div>
        <div className="flex flex-col gap-10 lg:gap-20">
          <div className="flex justify-start items-center flex-col max-lg:gap-10 lg:flex-row">
            {steps[0].map((step) => {
              return <JourneyComponents key={step.index} data={step} />;
            })}
          </div>
          <div className="flex justify-end items-center max-lg:gap-10 flex-col lg:flex-row">
            {steps[1].map((step) => {
              return <JourneyComponents key={step.index} data={step} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
