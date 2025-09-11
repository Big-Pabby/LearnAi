import { ArrowRightIcon, CheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Progress } from "../../../../components/ui/progress";

const featureItems = [
  "Support across subjects and topics",
  "Builds long-term understanding",
  "Clear reasoning for every answer",
  "Simple, relatable explanations",
  "Step-by-step breakdowns",
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0 },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const FeaturesSection = (): JSX.Element => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="w-full bg-bright-blueprimaryb50 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          ref={ref}
          className="flex items-center flex-wrap justify-center gap-16 md:flex-row flex-col-reverse"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <motion.div
            className="flex flex-col items-start gap-6 flex-1"
            variants={fadeInLeft}
          >
            <motion.div
              className="flex flex-col items-start gap-2 w-full"
              variants={staggerItem}
            >
              <motion.div
                className="font-desktop-h6-bold font-[number:var(--desktop-h6-bold-font-weight)] text-bright-blueprimaryb500 text-[length:var(--desktop-h6-bold-font-size)] tracking-[var(--desktop-h6-bold-letter-spacing)] leading-[var(--desktop-h6-bold-line-height)] [font-style:var(--desktop-h6-bold-font-style)]"
                variants={fadeInUp}
              >
                FEATURES
              </motion.div>

              <motion.h2
                className="text-grayg-500 text-[length:var(--desktop-h4-bold-font-size)] tracking-[var(--desktop-h4-bold-letter-spacing)] leading-[var(--desktop-h4-bold-line-height)] font-desktop-h4-bold font-[number:var(--desktop-h4-bold-font-weight)] [font-style:var(--desktop-h4-bold-font-style)]"
                variants={fadeInUp}
              >
                AI-Powered Explanations
              </motion.h2>

              <motion.p
                className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]"
                variants={fadeInUp}
              >
                Our intelligent tutor goes beyond giving answers — it teaches.
                Every solution is broken down step by step so students
                understand concepts deeply.
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col items-start gap-4 w-full"
              variants={staggerContainer}
            >
              {featureItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 w-full"
                  variants={staggerItem}
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 400, damping: 17 },
                  }}
                >
                  <motion.div
                    className="flex w-5 h-5 items-center justify-center bg-bright-blueprimaryb500 rounded-[10px] flex-shrink-0"
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                      transition: { duration: 0.3 },
                    }}
                  >
                    <CheckIcon className="w-3 h-3 text-white" />
                  </motion.div>
                  <span className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
                    {item}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button
                className="h-auto px-6 py-3 bg-bright-blueprimaryb300 border-[0.8px] border-solid border-[#1f669c] shadow-[inset_0px_4px_16px_#ffffff29,0px_4px_16px_#0e439252] rounded-lg relative overflow-hidden"
                variant="ghost"
              >
                <span className="font-desktop-body-medium font-[number:var(--desktop-body-medium-font-weight)] text-grayg-700 text-[length:var(--desktop-body-medium-font-size)] tracking-[var(--desktop-body-medium-letter-spacing)] leading-[var(--desktop-body-medium-line-height)] [font-style:var(--desktop-body-medium-font-style)] relative z-10">
                  Join Early Waitlist
                </span>
                <ArrowRightIcon className="w-6 h-6 ml-1 relative z-10" />
                <img
                  className="absolute left-[101px] w-[111px] h-[50px] top-0"
                  alt="Rectangle"
                  src="/rectangle-12.svg"
                />
                <img
                  className="absolute left-0 w-[111px] h-[50px] top-0"
                  alt="Rectangle"
                  src="/rectangle-13.svg"
                />
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex flex-col items-start justify-center p-8 flex-1 bg-blue-100 rounded-[20px] w-full overflow-hidden"
            variants={fadeInRight}
          >
            <motion.div
            className="w-full"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Card className="w-full bg-white rounded-xl shadow-[0px_8px_30px_#00000026]">
                <CardContent className="p-6 space-y-4">
                  <motion.div
                    className="flex items-center gap-2 pb-[18px] border-b-2 border-slate-50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className="w-3 h-3 bg-red-500 rounded-md"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-amber-500 rounded-md"
                      whileHover={{ scale: 1.2 }}
                    />
                    <motion.div
                      className="w-3 h-3 bg-bright-blueprimaryb300 rounded-md"
                      whileHover={{ scale: 1.2 }}
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                  >
                    <div className="bg-slate-50 rounded-lg p-4">
                      <div className="[font-family:'Inter',Helvetica] font-normal text-slate-900 text-base tracking-[0] leading-[25.6px]">
                        <span className="font-bold">
                          Mathematics - Quadratic Equations
                          <br />
                        </span>
                        <span className="[font-family:'Inter',Helvetica] font-normal text-slate-900 text-base tracking-[0] leading-[25.6px]">
                          Solve: x² + 5x + 6 = 0
                        </span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                  >
                    <Progress value={85} className="w-full h-2 bg-slate-50" />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.1 }}
                  >
                    <div className="[font-family:'Inter',Helvetica] font-normal text-slate-500 text-[14.4px] tracking-[0] leading-[14.4px]">
                      <span className="font-bold leading-[23px]">
                        AI Tutor:
                      </span>
                      <span className="leading-[23px]">
                        {" "}
                        Let me break this down step by step. We can solve this
                        <br />
                        using factoring...
                      </span>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
