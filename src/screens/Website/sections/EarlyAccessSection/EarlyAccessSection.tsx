import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const EarlyAccessSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-ambersecondarya-50">
      <div className="relative min-h-[500px]">
        <div className="absolute inset-0 bg-[url(/images.svg)] bg-cover bg-center" />

        <div className="relative flex flex-col items-center justify-center gap-6 md:px-32 px-5 py-[119px]">
          <div className="flex flex-col max-w-[700px] items-center gap-2">
            <h1 className="text-white font-desktop-body-regular font-bold text-center md:text-6xl text-3xl">
              Join 10,000+ Students on Our Waitlist
            </h1>

            <p className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-white text-[length:var(--desktop-body-regular-font-size)] text-center tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
              Be among the first to experience AI-powered tutoring designed
              <br />
              specifically for Nigerian students. Early access members get
              <br />
              exclusive benefits and special pricing.
            </p>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-4  max-w-[700px] w-full">
            <Input
              placeholder="Enter your email address"
              className="flex-1 min-w-[300px] h-auto px-6 py-4 bg-white rounded-lg border-[0.6px] border-neutral-50 font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-[#757575] text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]"
            />

            <Button className="relative md:w-auto w-full h-auto px-6 py-3 bg-bright-blueprimaryb300 border-[0.8px] border-solid border-[#1f669c] shadow-[inset_0px_4px_16px_#ffffff29,0px_4px_16px_#0e439252] rounded-lg font-desktop-body-medium font-[number:var(--desktop-body-medium-font-weight)] text-grayg-700 text-[length:var(--desktop-body-medium-font-size)] tracking-[var(--desktop-body-medium-letter-spacing)] leading-[var(--desktop-body-medium-line-height)] [font-style:var(--desktop-body-medium-font-style)] hover:bg-bright-blueprimaryb300/90">
              Join Early Waitlist
              <ArrowRightIcon className="w-6 h-6 ml-1" />
              <img
                className="absolute left-[101px] w-[111px] h-[50px] top-0 pointer-events-none"
                alt="Rectangle"
                src="/rectangle-12.svg"
              />
              <img
                className="absolute left-0 w-[111px] h-[50px] top-0 pointer-events-none"
                alt="Rectangle"
                src="/rectangle-13.svg"
              />
            </Button>
          </div>

          <div className="flex flex-col max-w-[600px] items-center pt-2 opacity-[0.72]">
            <p className="font-desktop-small-regular font-[number:var(--desktop-small-regular-font-weight)] text-white text-[length:var(--desktop-small-regular-font-size)] text-center tracking-[var(--desktop-small-regular-letter-spacing)] leading-[var(--desktop-small-regular-line-height)] [font-style:var(--desktop-small-regular-font-style)]">
              ✓ Early access to premium features ✓ 50% discount on first 3<br />
              months ✓ Exclusive study materials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
