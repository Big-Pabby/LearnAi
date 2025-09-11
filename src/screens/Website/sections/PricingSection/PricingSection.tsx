import { CheckIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const studentFeatures = [
  "Personalized AI tutoring",
  "WAEC, NECO, JAMB preparation",
  "Offline content download",
  "Progress tracking",
  "Multi-language support",
  "Practice questions & mock exams",
  "Email support",
];

const schoolFeatures = [
  "Bulk student accounts",
  "School management dashboard",
  "Teacher training & support",
  "Custom curriculum integration",
  "Performance analytics",
  "White-label options",
  "Dedicated account manager",
  "API access",
];

export const PricingSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start md:px-32 px-5 py-16 bg-white w-full">
      <div className="flex flex-col items-center justify-center gap-16 w-full">
        <div className="flex flex-col max-w-[700px] w-full items-center gap-4">
          <div className="font-desktop-h6-bold font-[number:var(--desktop-h6-bold-font-weight)] text-ambersecondarya-300 text-[length:var(--desktop-h6-bold-font-size)] text-center tracking-[var(--desktop-h6-bold-letter-spacing)] leading-[var(--desktop-h6-bold-line-height)] [font-style:var(--desktop-h6-bold-font-style)]">
            PRICING
          </div>

          <h2 className="font-desktop-h4-bold font-[number:var(--desktop-h4-bold-font-weight)] text-grayg-700 text-[length:var(--desktop-h4-bold-font-size)] text-center tracking-[var(--desktop-h4-bold-letter-spacing)] leading-[var(--desktop-h4-bold-line-height)] [font-style:var(--desktop-h4-bold-font-style)]">
            Affordable Excellence
          </h2>

          <p className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] text-center tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
            Choose the plan that fits your needs. All plans include our core AI
            tutoring
            <br />
            features and Nigerian curriculum content.
          </p>
        </div>

        <div className="flex md:items-start items-center md:flex-row flex-col justify-center gap-6 w-full">
          <Card className="flex flex-col h-[630px] items-center gap-6 p-8 flex-1 bg-white rounded-[20px] border-2 border-solid border-[#32a8ff] shadow-[0px_12px_40px_#1e40af26] relative">
            <Badge className="absolute -top-[19px] left-[223px] bg-ambersecondarya-300 text-white px-6 py-2 rounded-[20px] font-desktop-small-semibold font-[number:var(--desktop-small-semibold-font-weight)] text-[length:var(--desktop-small-semibold-font-size)] tracking-[var(--desktop-small-semibold-letter-spacing)] leading-[var(--desktop-small-semibold-line-height)] [font-style:var(--desktop-small-semibold-font-style)]">
              Most Popular
            </Badge>

            <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
              <div className="flex flex-col items-center gap-1">
                <h3 className="font-desktop-h4-bold font-[number:var(--desktop-h4-bold-font-weight)] text-grayg-700 text-[length:var(--desktop-h4-bold-font-size)] text-center tracking-[var(--desktop-h4-bold-letter-spacing)] leading-[var(--desktop-h4-bold-line-height)] [font-style:var(--desktop-h4-bold-font-style)]">
                  Student
                </h3>

                <div className="[text-shadow:0px_2px_8px_#1f669c26] [-webkit-text-stroke:0.3px_#1f669c] [font-family:'Inter',Helvetica] font-normal text-bright-blueprimaryb300 text-5xl text-center tracking-[0] leading-[76.8px]">
                  Coming Soon
                </div>

                <div className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-bright-blueprimaryb500 text-[length:var(--desktop-body-regular-font-size)] text-center tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
                  per month
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full h-80">
                {studentFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center w-full">
                    <div className="flex w-[30px] h-[18px] pl-0 pr-3 py-0 flex-col items-start">
                      <div className="flex w-[18px] h-[18px] items-center justify-center bg-ambersecondarya-300 rounded-[9px]">
                        <CheckIcon className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    <div className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full h-auto px-6 py-3 border border-solid border-[#ebebeb] shadow-[inset_0px_4px_6px_#ffffff26] rounded-lg"
                disabled
              >
                <span className="text-grayg-700 text-[length:var(--desktop-body-medium-font-size)] tracking-[var(--desktop-body-medium-letter-spacing)] leading-[var(--desktop-body-medium-line-height)] font-desktop-body-medium font-[number:var(--desktop-body-medium-font-weight)] [font-style:var(--desktop-body-medium-font-style)]">
                  Coming Soon
                </span>
              </Button>
            </CardContent>
          </Card>

          <Card className="flex flex-col h-[631.2px] items-center gap-6 p-8 flex-1 bg-white rounded-[20px] border-[0.6px] border-solid border-[#ebebeb]">
            <CardContent className="flex flex-col items-center gap-6 p-0 w-full">
              <div className="flex flex-col items-center gap-1">
                <h3 className="font-desktop-h4-bold font-[number:var(--desktop-h4-bold-font-weight)] text-grayg-700 text-[length:var(--desktop-h4-bold-font-size)] text-center tracking-[var(--desktop-h4-bold-letter-spacing)] leading-[var(--desktop-h4-bold-line-height)] [font-style:var(--desktop-h4-bold-font-style)]">
                  Schools
                </h3>

                <div className="[text-shadow:0px_2px_8px_#1f669c26] [-webkit-text-stroke:0.3px_#1f669c] [font-family:'Inter',Helvetica] font-normal text-bright-blueprimaryb300 text-5xl text-center tracking-[0] leading-[76.8px]">
                  Custom
                </div>

                <div className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-bright-blueprimaryb500 text-[length:var(--desktop-body-regular-font-size)] text-center tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
                  per institution
                </div>
              </div>

              <div className="flex flex-col gap-4 w-full h-80">
                {schoolFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center w-full">
                    <div className="flex w-[30px] h-[18px] pl-0 pr-3 py-0 flex-col items-start">
                      <div className="flex w-[18px] h-[18px] items-center justify-center bg-ambersecondarya-300 rounded-[9px]">
                        <CheckIcon className="w-3 h-3 text-white" />
                      </div>
                    </div>

                    <div className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full h-auto px-6 py-3 border border-solid border-[#ebebeb] shadow-[inset_0px_4px_6px_#ffffff26] rounded-lg"
                disabled
              >
                <span className="text-grayg-700 text-[length:var(--desktop-body-medium-font-size)] tracking-[var(--desktop-body-medium-letter-spacing)] leading-[var(--desktop-body-medium-line-height)] font-desktop-body-medium font-[number:var(--desktop-body-medium-font-weight)] [font-style:var(--desktop-body-medium-font-style)]">
                  Coming Soon
                </span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
