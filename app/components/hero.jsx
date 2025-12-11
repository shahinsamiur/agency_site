import "../globals.css";
import Button from "./utilitys/buttons";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
export default function Hero() {
  return (
    <div className=" relative bg-linear-to-l from-secondary/10   to-background text-text pb-10 pt-20">
      <section>
        <div className=" flex justify-center items-center flex-col-reverse md:flex-row  p-2 ">
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-center gap-10 ">
            <h1 className="text-text/90 text-4xl lg:text-5xl xl:text-6xl w-full font-semibold lg:leading-20 xl:leading-14">
              Turning <span className="text-secondary">Ideas</span> Into <br />
              Digital Reality
            </h1>
            <p className="text-white/90 text-sm w-[95%] lg:text-xl">
              Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
              ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor
              pesto pesto Bianca pesto roll onions.
            </p>
            <div className="w-full flex justify-start gap-5 items-start">
              <Button href="/contact">Start a Project</Button>
              <Button href="/contact" className="bg-transparent!">
                See Our Work <FaLongArrowAltRight />
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center flex-nowrap overflow-x-hidden">
            <h1 className="text-stroke text-[5rem] top-0 left-[10%] md:text-[6rem] lg:text-[8rem] xl:text-[15rem] absolute -z-10 uppercase md:top-20 lg:top-40 md:left-[50%] ">
              samiur
            </h1>
            <Image
              src="/image/hero.png"
              alt="Logo"
              width={500}
              height={500}
              className=" w-[50%]"
            />
          </div>
        </div>
      </section>
      <section>
        <div className=" w-full h-40 z-20 flex justify-between items-center px-6 flex-wrap">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 w-1/2 md:w-1/5">
            <Image
              src="/logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="w-10 max-lg:hidden"
            ></Image>
            <h1 className="text-text/90 text-xl lg:text-3xl xl:text-5xl  font-semibold lg:leading-24">
              150+
            </h1>
            <p className="text-sm xl:text-xl">Project Completed</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 w-1/2 md:w-1/5">
            <h1 className="text-text/90 text-xl lg:text-3xl xl:text-5xl  font-semibold lg:leading-24">
              98%
            </h1>
            <p className="text-sm xl:text-xl">Client Satisfaction</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 w-1/2 md:w-1/5">
            <h1 className="text-text/90 text-xl lg:text-3xl xl:text-5xl  font-semibold lg:leading-24">
              5+
            </h1>
            <p className="text-sm xl:text-xl">Years of Experience</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center gap-3 lg:gap-5 w-1/2 md:w-1/5">
            <h1 className="text-text/90 text-xl lg:text-3xl xl:text-5xl  font-semibold lg:leading-24">
              24/7
            </h1>
            <p className="text-sm xl:text-xl">Support Available</p>
            <Image
              src="/logo.png"
              alt="Logo"
              width={500}
              height={500}
              className="w-10 max-lg:hidden"
            ></Image>
          </div>
        </div>
      </section>
      <div className="absolute bg-linear-to-t from-background to-transparent w-full bottom-0 left-0 h-20"></div>
    </div>
  );
}
