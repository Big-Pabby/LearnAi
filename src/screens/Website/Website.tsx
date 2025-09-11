import React from "react";
import { motion } from "framer-motion";
import { AboutUsSection } from "./sections/AboutUsSection/AboutUsSection";
import { EarlyAccessSection } from "./sections/EarlyAccessSection/EarlyAccessSection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { PricingSection } from "./sections/PricingSection/PricingSection";
import { TestimonialsSection } from "./sections/TestimonialsSection/TestimonialsSection";
import { WhyLearnAiSection } from "./sections/WhyLearnAiSection/WhyLearnAiSection";

// Page-level animation variants
const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const Website = (): JSX.Element => {
  return (
    <motion.div
      className="flex flex-col w-full items-start relative bg-white overflow-x-hidden mx-auto"
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <NavigationSection />
      <motion.div className="w-full" variants={sectionVariants}>
        <HeroSection />
      </motion.div>
      <motion.div className="w-full" variants={sectionVariants}>
        <AboutUsSection />
      </motion.div>
      <motion.div className="w-full" variants={sectionVariants}>
        <MainContentSection />
      </motion.div>
      <motion.div className="w-full" variants={sectionVariants}>
        <WhyLearnAiSection />
      </motion.div>
      <motion.div className="w-full" variants={sectionVariants}>
        <FeaturesSection />
      </motion.div>
      <motion.div className="w-full" variants={sectionVariants}>
        <TestimonialsSection />
      </motion.div>
      <motion.div className="w-full" variants={sectionVariants}>
        <PricingSection />
      </motion.div>
      <motion.div className="w-full" variants={sectionVariants}>
        <EarlyAccessSection />
      </motion.div>
      <motion.div className="w-full" variants={sectionVariants}>
        <FooterSection />
      </motion.div>
    </motion.div>
  );
};
