import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import { Separator } from "../../../../components/ui/separator";

const statisticsData = [
  {
    value: "85%",
    description: "Average Score Improvement",
  },
  {
    value: "80%",
    description: "Less than traditional alternatives.",
  },
  {
    value: "4",
    description: "Nigerian Languages\nSupported",
  },
  {
    value: "20+",
    description: "Years of Past Questions\nAnalyzed",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export const HeroSection = (): JSX.Element => {
  return (
    <section className="w-full bg-bright-blueprimaryb500">
      <div className=" bg-[url(/chatgpt-image-sep-6--2025-at-09-02-28-pm-3.png)] bg-[100%_100%] pt-32 pb-20">
        <motion.div 
          className="flex flex-col  mx-auto items-center gap-8 px-4"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div 
            className="flex flex-col max-w-[700px] items-center gap-8"
            variants={staggerItem}
          >
            <motion.div 
              className="flex flex-col items-start gap-2 w-full"
              variants={staggerItem}
            >
              <motion.h1 
                className="text-white md:text-[length:var(--desktop-h1-bold-font-size)] text-3xl tracking-[var(--desktop-h1-bold-letter-spacing)] md:leading-[var(--desktop-h1-bold-line-height)] font-desktop-h1-bold font-[number:var(--desktop-h1-bold-font-weight)] text-center w-full [font-style:var(--desktop-h1-bold-font-style)] "
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform Your Learning Journey
              </motion.h1>

              <motion.p 
                className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-30 md:text-[length:var(--desktop-body-regular-font-size)] text-center tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] w-full [font-style:var(--desktop-body-regular-font-style)]"
                variants={fadeInUp}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Personalized, intelligent tutoring designed to help Nigerian
                students excel — starting with WAEC, NECO, and JAMB, and built
                to grow with every learner&apos;s academic path.
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex items-start justify-center gap-4 w-full"
              variants={staggerItem}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="h-auto px-6 py-3 bg-grayg-900 border-[0.8px] border-solid border-[#1c1f21] shadow-[inset_0px_4px_16px_#ffffff29,0px_4px_16px_#211e1c52] text-white text-[length:var(--desktop-body-medium-font-size)] tracking-[var(--desktop-body-medium-letter-spacing)] leading-[var(--desktop-body-medium-line-height)] font-desktop-body-medium font-[number:var(--desktop-body-medium-font-weight)] [font-style:var(--desktop-body-medium-font-style)] rounded-lg relative overflow-hidden">
                  Join Early Waitlist
                  <ArrowRightIcon className="w-6 h-6 ml-1" />
                  <img
                    className="left-[101px] absolute w-[111px] h-[50px] top-0"
                    alt="Rectangle"
                    src="/rectangle-12.svg"
                  />
                  <img
                    className="left-0 absolute w-[111px] h-[50px] top-0"
                    alt="Rectangle"
                    src="/rectangle-13.svg"
                  />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button
                  variant="outline"
                  className="h-auto px-6 py-3 border-[0.33px] border-solid border-[#2376b3] shadow-[inset_0px_4px_6px_#ffffff26] text-white text-[length:var(--desktop-body-medium-font-size)] tracking-[var(--desktop-body-medium-letter-spacing)] leading-[var(--desktop-body-medium-line-height)] font-desktop-body-medium font-[number:var(--desktop-body-medium-font-weight)] [font-style:var(--desktop-body-medium-font-style)] rounded-lg bg-transparent hover:bg-transparent"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.img
            className="w-full md:h-[720px] md:block hidden object-contain"
            alt="Frame"
            src="/frame-6.svg"
            variants={fadeInUp}
            transition={{ duration: 1, delay: 0.6 }}
            whileHover={{ scale: 1.02 }}
          />

          <motion.div 
            className="flex flex-wrap items-start justify-center w-full"
            variants={staggerContainer}
          >
            {statisticsData.map((stat, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  className="flex flex-col items-start gap-2 p-8 flex-1 rounded-lg"
                  variants={staggerItem}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { type: "spring", stiffness: 400, damping: 17 }
                  }}
                >
                  <div className="flex flex-col items-center w-full">
                    <motion.div 
                      className="font-desktop-h3-semibold font-[number:var(--desktop-h3-semibold-font-weight)] text-white text-[length:var(--desktop-h3-semibold-font-size)] text-center tracking-[var(--desktop-h3-semibold-letter-spacing)] leading-[var(--desktop-h3-semibold-line-height)] w-full [font-style:var(--desktop-h3-semibold-font-style)]"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 1 + index * 0.1, type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                  </div>

                  <div className="flex flex-col items-center w-full">
                    <div className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-30 text-[length:var(--desktop-body-regular-font-size)] text-center tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] w-full [font-style:var(--desktop-body-regular-font-style)] whitespace-pre-line">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>

                {index < statisticsData.length - 1 && (
                  <motion.div
                    variants={fadeInUp}
                    transition={{ delay: 1.2 + index * 0.1 }}
                  >
                    <Separator
                      orientation="vertical"
                      className="h-[172px] w-px bg-white/20"
                    />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
