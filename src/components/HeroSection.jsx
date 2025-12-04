import React from "react";
import { motion } from "motion/react";

const HeroSection = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const staggerParent = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="w-full overflow-x-hidden">
  <div className="max-w-[1280px] mx-auto mt-8 md:mt-20 lg:mt-24 px-4 md:px-6 lg:px-8 
  flex flex-col-reverse lg:flex-row items-center justify-between gap-6 md:gap-8 lg:gap-12 relative">

    
    {/* TEXT LEFT */}
    <motion.div
      variants={staggerParent}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center text-center md:text-start md:items-start 
      justify-center gap-4 md:gap-6 mt-6 md:mt-0 w-full lg:w-1/2"
    >
      <motion.h1 variants={fadeUp}
        className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-greyNeutral-950">
        More than just <br className="hidden md:block" /> shorter links
      </motion.h1>

      <motion.p variants={fadeUp} className="text-greyNeutral-500 text-base md:text-lg max-w-lg">
        Build your brand’s recognition and get detailed insights on how your links are performing.
      </motion.p>

      <motion.button variants={fadeUp}
        className="bg-bluePrimary-400 hover:bg-bluePrimary-300 transition text-white font-bold 
        px-6 md:px-8 py-3 rounded-full text-base md:text-lg"
      >
        Get Started
      </motion.button>
    </motion.div>


    {/* IMAGE RIGHT */}
    <motion.div
      className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <img
        src="/images/illustration-working.svg"
        alt="illustration working"
        className="w-[130%] max-w-none lg:w-[115%] xl:w-[100%] object-contain lg:translate-x-48"
      />
    </motion.div>

  </div>
</section>

  );
};

export default HeroSection;
