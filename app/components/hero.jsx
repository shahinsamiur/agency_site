"use client";

import "../globals.css";
import Button from "./utilitys/buttons";
import Image from "next/image";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import useMobile from "../hooks/useMediaQuery";
export default function Hero() {
  const { scrollY } = useScroll();
  const isMobile = useMobile();
  // Parallax values
  const textY = useTransform(scrollY, [0, 500], [0, 180]);
  const imageY = useTransform(scrollY, [0, 500], [0, 80]);
  const contentY = useTransform(scrollY, [0, 500], [0, -40]);
  // common scroll range
  const range = isMobile ? 250 : 400;

  // DESKTOP SCALE
  const headingScale = useTransform(
    scrollY,
    [0, range],
    [1, isMobile ? 1 : 0.55]
  );

  const textScale = useTransform(scrollY, [0, range], [1, isMobile ? 1 : 0.9]);

  // MOBILE SLIDE LEFT
  const mobileXHeading = useTransform(
    scrollY,
    [0, range],
    [0, isMobile ? -120 : 0]
  );
  const mobileXParagraph = useTransform(
    scrollY,
    [0, range],
    [0, isMobile ? 120 : 0]
  );

  // MOBILE FADE
  const mobileOpacity = useTransform(
    scrollY,
    [0, range],
    [1, isMobile ? 0 : 1]
  );

  return (
    <div className="relative bg-linear-to-l from-secondary/10 to-background text-text pb-10 pt-20 overflow-hidden">
      <section>
        <div className="flex justify-center items-center flex-col-reverse md:flex-row p-2">
          {/* LEFT CONTENT */}
          <motion.div
            style={{ y: contentY }}
            className="w-full lg:w-1/2 flex flex-col justify-start items-center gap-10"
          >
            <motion.h1
              style={{
                scale: headingScale,
                x: mobileXHeading,
                opacity: mobileOpacity,
              }}
            >
              Turning <span className="text-secondary">Ideas</span> Into <br />
              Digital Reality
            </motion.h1>

            <motion.p
              className="w-[95%]"
              style={{
                scale: textScale,
                x: mobileXParagraph,
                opacity: mobileOpacity,
              }}
            >
              We help businesses grow with modern websites, smart design, and
              powerful digital solutions.
            </motion.p>

            <div className="w-full flex justify-start gap-5">
              <Button href="/contact">Start a Project</Button>
              <Button href="/contact" className="bg-transparent!">
                See Our Work <FaLongArrowAltRight />
              </Button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            style={{ y: imageY }}
            className="w-full lg:w-1/2 flex justify-center items-center relative"
          >
            {/* Background Stroke Text */}
            <motion.h1
              style={{ y: textY }}
              className="
                text-stroke uppercase absolute -z-10
                text-[5rem]! md:text-[6rem] lg:text-[8rem] xl:text-[15rem]!
              "
            >
              samiur
            </motion.h1>

            <Image
              src="/images/hero.png"
              alt="Hero"
              width={500}
              height={500}
              className="w-[50%]"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
