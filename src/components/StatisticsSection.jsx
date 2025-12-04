import React, { useRef } from "react";
import ShorterLinkForm from "./ShorterLinkForm";
import { useInView, motion } from "motion/react";

const StatisticsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };
  const parentVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // delay for stagger effect
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-gray-100 mt-36 sm:mt-64 w-full flex flex-col items-center relative px-8 pb-16 sm:pb-32">
      {/* Floating Form */}
      <ShorterLinkForm />

      {/* Heading + Paragraph */}
      <div className="text-center max-w-[520px] mx-auto md:mt-4 space-y-4 relative z-[3]">
        <motion.h1
          ref={ref}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          variants={fadeUp}
          initial="hidden"
          className="text-3xl md:text-4xl font-bold text-greyNeutral-950"
        >
          Advanced Statistics
        </motion.h1>

        <motion.p
          variants={fadeUp}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          ref={ref}
          initial="hidden"
          transition={{ delay: 0.15 }} // slight stagger effect
          className="font-medium text-greyNeutral-500"
        >
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </motion.p>
      </div>

      {/* Cards Wrapper */}
      <motion.div
        ref={ref}
        variants={parentVariant}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="
        relative flex flex-col md:flex-row items-center md:items-start
        gap-20 md:gap-8 mt-20 w-full max-w-[1100px] z-[3]
      "
      >
        {/* Card 1 */}
        <motion.div
          variants={cardVariant}
          className="bg-white rounded-lg p-10 max-w-[380px] relative text-center md:text-left z-[5]"
        >
          <div
            className="w-20 h-20 bg-purplePrimary-950 rounded-full flex items-center justify-center 
            absolute -top-10 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0"
          >
            <img
              src="/images/icon-brand-recognition.svg"
              className="w-10 h-10"
            />
          </div>

          <h2 className="font-bold text-2xl mb-4 pt-8">Brand Recognition</h2>
          <p className="text-greyNeutral-500">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          variants={cardVariant}
          className="bg-white rounded-lg p-10 max-w-[380px] relative text-center md:text-left md:mt-10 z-[5]"
        >
          <div
            className="w-20 h-20 bg-purplePrimary-950 rounded-full flex items-center justify-center 
            absolute -top-10 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0"
          >
            <img
              src="/images/icon-detailed-records.svg"
              className="w-10 h-10"
            />
          </div>

          <h2 className="font-bold text-2xl mb-4 pt-8">Detailed Records</h2>
          <p className="text-greyNeutral-500">
            Gain insights into who is clicking your links. Knowing when and
            where people engage helps inform better decisions.
          </p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          variants={cardVariant}
          className="bg-white rounded-lg p-10 max-w-[380px] relative text-center md:text-left md:mt-20 z-[5]"
        >
          <div
            className="w-20 h-20 bg-purplePrimary-950 rounded-full flex items-center justify-center 
            absolute -top-10 left-1/2 md:left-8 -translate-x-1/2 md:translate-x-0"
          >
            <img
              src="/images/icon-fully-customizable.svg"
              className="w-10 h-10"
            />
          </div>

          <h2 className="font-bold text-2xl mb-4 pt-8">Fully Customizable</h2>
          <p className="text-greyNeutral-500">
            Improve brand awareness and discoverability through customizable
            links, supercharging audience engagement.
          </p>
        </motion.div>

        {/* Connecting line (Desktop) */}
        <div className="hidden md:block absolute h-2 bg-bluePrimary-400 w-full top-[50%] z-[1]"></div>

        {/* Connecting line (Mobile) */}
        <div className="md:hidden absolute w-2 bg-bluePrimary-400 h-[85%] left-1/2 -translate-x-1/2 top-10 z-[1]"></div>
      </motion.div>
    </section>
  );
};

export default StatisticsSection;
