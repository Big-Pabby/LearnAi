import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const featureCards = [
  {
    icon: "/background-2.svg",
    title: "Predictive\nExam Intelligence",
    description:
      "Our AI analyses 20+ years of WAEC, NECO, and JAMB past questions to  rank most frequent/common exam topics or areas.",
  },
  {
    icon: "/background-5.svg",
    title: "Personalized\nLearning Paths",
    description:
      "Every student learns differently. Our AI identifies your knowledge gaps and creates customized study plans that adapt to your pace and learning style.",
  },
  {
    icon: "/background-3.svg",
    title: "Cultural\nAdaptation",
    description:
      "Content available in English, Hausa, Yoruba, and Igbo with locally relevant examples that resonate with your experience as a Nigerian student.",
  },
  {
    icon: "/background-4.svg",
    title: "Offline\nFunctionality",
    description:
      "Download content for areas with limited connectivity. Never let poor internet connection stop your academic progress.",
  },
  {
    icon: "/background.svg",
    title: "Group\nLearning",
    description:
      "Connect with peers, form study groups, and learn collaboratively while competing in friendly academic challenges.",
  },
  {
    icon: "/background-1.svg",
    title: "Performance\nAnalytics",
    description:
      "Track your progress with detailed analytics that show your strengths, weaknesses, and improvement trends over time.",
  },
];

export const WhyLearnAiSection = (): JSX.Element => {
  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1184px] mx-auto px-4 flex flex-col items-center gap-16">
        <header className="flex flex-col w-full max-w-[700px] items-center gap-2">
          <h3 className="font-desktop-h6-bold font-[number:var(--desktop-h6-bold-font-weight)] text-bright-blueprimaryb500 text-[length:var(--desktop-h6-bold-font-size)] text-center tracking-[var(--desktop-h6-bold-letter-spacing)] leading-[var(--desktop-h6-bold-line-height)] [font-style:var(--desktop-h6-bold-font-style)]">
            WHY LEARNAI?
          </h3>

          <h2 className="text-grayg-700 text-[length:var(--desktop-h3-bold-font-size)] text-center tracking-[var(--desktop-h3-bold-letter-spacing)] leading-[var(--desktop-h3-bold-line-height)] font-desktop-h3-bold font-[number:var(--desktop-h3-bold-font-weight)] [font-style:var(--desktop-h3-bold-font-style)]">
            AI-powered tutoring
          </h2>

          <p className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] text-center tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
            Learn AI combines advanced artificial intelligence with deep
            knowledge of Nigeria&apos;s curriculum and culture. It adapts to
            each student&apos;s pace, identifies knowledge gaps, and delivers
            personalized lessons that build confidence.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="relative border-[0.6px] border-[#ebebeb] rounded-lg overflow-hidden bg-white"
            >
              <div className="absolute w-full h-1 top-0 left-0 bg-ambersecondarya-300" />
              <CardContent className="pt-12 pb-6 px-6 flex flex-col gap-6">
                <img
                  className="w-[60px] h-[60px]"
                  alt="Feature icon"
                  src={card.icon}
                />

                <div className="flex flex-col gap-2">
                  <h4 className="font-desktop-h6-bold font-[number:var(--desktop-h6-bold-font-weight)] text-grayg-500 text-[length:var(--desktop-h6-bold-font-size)] tracking-[var(--desktop-h6-bold-letter-spacing)] leading-[var(--desktop-h6-bold-line-height)] [font-style:var(--desktop-h6-bold-font-style)] whitespace-pre-line">
                    {card.title}
                  </h4>

                  <p className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
                    {card.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
