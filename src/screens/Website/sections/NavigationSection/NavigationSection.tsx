import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { label: "Home" },
  { label: "Features" },
  { label: "Product" },
  { label: "Pricing" },
  { label: "About" },
  { label: "Contact" },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b-[0.6px] border-solid border-[#ebebeb] shadow-[0px_0px_32px_#00030514] ">
      <nav className="flex items-center w-full justify-between md:px-32 px-5 py-4">
        <div className="w-[135.58px] h-10 bg-[url(/learn-ai-blue-icon-black-tecx-png.png)] bg-cover bg-[50%_50%]" />

        <div className="md:flex hidden items-center gap-2">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className="p-3 shadow-[inset_0px_4px_6px_#ffffff26] rounded-lg h-auto hover:bg-gray-50"
            >
              <span className="mt-[-0.40px] font-medium text-grayg-500 text-[length:var(--desktop-small-medium-font-size)] tracking-[var(--desktop-small-medium-letter-spacing)] leading-[var(--desktop-small-medium-line-height)] font-desktop-small-medium  whitespace-nowrap [font-style:var(--desktop-small-medium-font-style)]">
                {item.label}
              </span>
            </Button>
          ))}
        </div>

        <div className="relative">
          <Button className="px-6 py-3 bg-bright-blueprimaryb300 border-[0.8px] border-solid border-[#1f669c] shadow-[inset_0px_4px_16px_#ffffff29,0px_2px_8px_#0e439229] rounded-lg h-auto hover:bg-bright-blueprimaryb400">
            <span className="mt-[-0.40px] text-grayg-700 text-[length:var(--desktop-small-medium-font-size)] tracking-[var(--desktop-small-medium-letter-spacing)] leading-[var(--desktop-small-medium-line-height)] font-desktop-small-medium font-[number:var(--desktop-small-medium-font-weight)] whitespace-nowrap [font-style:var(--desktop-small-medium-font-style)]">
              Get Access
            </span>
          </Button>

          <img
            className="absolute w-20 h-[45px] top-0 left-[42px] pointer-events-none"
            alt="Rectangle"
            src="/rectangle-12.svg"
          />

          <img
            className="absolute w-20 h-[45px] top-0 left-0 pointer-events-none"
            alt="Rectangle"
            src="/rectangle-13.svg"
          />
        </div>
      </nav>
    </header>
  );
};
