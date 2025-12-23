import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="relative bg-linear-to-l from-secondary/10 to-background text-text py-20 sm:py-28 lg:py-40">
      <section className="flex justify-center items-center">
        <div className="w-[95%] lg:w-[70%] bg-text/5 border border-text/20 rounded-3xl p-6 sm:p-10 lg:p-14 flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="w-full lg:w-2/3 space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-semibold">
              Let’s Build Something <br />
              <span className="text-secondary">Amazing</span>
            </h1>

            <p className="text-sm sm:text-base text-text/80 max-w-xl">
              Have an idea or a project in mind? Let’s turn it into something
              impactful together.
            </p>

            {/* Email Input */}
            <div className="w-full sm:w-[70%] lg:w-1/2 flex items-center border border-text/20 rounded-2xl overflow-hidden">
              <input
                type="email"
                className="w-full px-5 py-3 outline-none bg-transparent text-sm"
                placeholder="Email address"
              />
              <button className="bg-secondary px-5 py-3 flex items-center justify-center hover:bg-secondary/80 transition">
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/3 right-40 bottom-0 hidden lg:flex justify-end items-center absolute">
            <Image
              src="/images/hero.png"
              alt="Contact Illustration"
              width={500}
              height={500}
              className="w-full max-w-sm object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
