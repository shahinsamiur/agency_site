import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="relative bg-linear-to-l from-secondary/10 to-background text-text py-24 sm:py-32 lg:py-40">
      <section className=" flex justify-center items-center">
        <div className="p-10! bg-text/5 border border-text/30 rounded-3xl flex justify-between w-[90%]">
          <div className="w-2/3 space-y-10">
            <h1 className="text-6xl! leading-20!">
              Let’s Build Something
              <br />
              <span className="text-secondary">Amazing</span>
            </h1>
            <p>
              Pizza ipsum dolor meat lovers buffalo. Extra broccoli parmesan
              ricotta garlic dolor sauce marinara Chicago marinara. Tomato dolor
              pesto pesto Bianca pesto roll onions.
            </p>
            <div className="w-1/2 border  flex justify-center items-center border-text/20 rounded-2xl">
              <input
                type="text"
                className="w-[80%] outline-none px-6 py-3"
                placeholder="Email"
              />
              <button className="bg-secondary px-6 py-3 rounded-2xl cursor-pointer hover:bg-secondary/80">
                <FaArrowRight />
              </button>
            </div>
          </div>

          <div className=" w-1/3 relative flex justify-end items-center">
            <Image
              src="/images/hero.png"
              alt="Logo"
              width={500}
              height={500}
              className="absolute w-full -top-50"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
