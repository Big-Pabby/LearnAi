import React from "react";
import { Button } from "../../../../components/ui/button";

const socialMediaIcons = [
  {
    src: "/social-media---linkedin.svg",
    alt: "Social media",
  },
  {
    src: "/social-media---twitter.svg",
    alt: "Social media twitter",
  },
  {
    src: "/social-media---instagram.svg",
    alt: "Social media",
  },
  {
    src: "/social-media---linkedin.svg",
    alt: "Social media",
  },
];

const productLinks = [
  "Features",
  "Pricing",
  "Demo",
  "For Students",
  "For Schools",
];

const companyLinks = ["About Us", "Careers", "Blog", "Press", "Investors"];

const supportLinks = [
  "Help Center",
  "Contact Us",
  "WhatsApp Support",
  "Privacy Policy",
  "Terms of Service",
];

export const FooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-grayg-900 py-16">
      <div className="flex flex-col max-w-[1184px] mx-auto px-8 items-center gap-32">
        <div className="flex md:flex-row flex-col items-start justify-center gap-12 w-full">
          <div className="flex flex-col items-start gap-[23.4px] flex-1">
            <div className="w-[108.46px] h-8 bg-[url(/learn-ai-white-icon-white-text-png.png)] bg-cover bg-[50%_50%]" />

            <div className="flex flex-col items-start w-full">
              <div className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-30 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
                Democratizing educational
                <br />
                opportunity through AI-powered
                <br />
                personalized tutoring for Nigerian
                <br />
                students.
              </div>
            </div>

            <div className="flex items-start gap-4 pt-[0.59px] w-full">
              {socialMediaIcons.map((icon, index) => (
                <Button
                  key={`social-${index}`}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 bg-[#ffffff1a] rounded-[20px] hover:bg-[#ffffff2a] p-0"
                >
                  <img
                    className="w-[25.6px] h-[25.6px]"
                    alt={icon.alt}
                    src={icon.src}
                  />
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[200px] items-start gap-6">
            <div className="flex flex-col items-start w-full">
              <div className="[font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-8">
                Product
              </div>
            </div>

            <div className="gap-3 flex flex-col items-start w-full">
              {productLinks.map((link, index) => (
                <div
                  key={`product-${index}`}
                  className="flex-col items-start flex w-full"
                >
                  <Button
                    variant="ghost"
                    className="inline-flex items-start p-0 h-auto justify-start hover:bg-transparent"
                  >
                    <div className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-30 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] whitespace-nowrap [font-style:var(--desktop-body-regular-font-style)] hover:text-white transition-colors">
                      {link}
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[200px] items-start gap-6">
            <div className="flex flex-col items-start w-full">
              <div className="[font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-8">
                Company
              </div>
            </div>

            <div className="gap-3 flex flex-col items-start w-full">
              {companyLinks.map((link, index) => (
                <div
                  key={`company-${index}`}
                  className="flex-col items-start flex w-full"
                >
                  <Button
                    variant="ghost"
                    className="inline-flex items-start p-0 h-auto justify-start hover:bg-transparent"
                  >
                    <div className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-30 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] whitespace-nowrap [font-style:var(--desktop-body-regular-font-style)] hover:text-white transition-colors">
                      {link}
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-[200px] items-start gap-6">
            <div className="flex flex-col items-start w-full">
              <div className="[font-family:'Inter',Helvetica] font-bold text-white text-xl tracking-[0] leading-8">
                Support
              </div>
            </div>

            <div className="gap-3 flex flex-col items-start w-full">
              {supportLinks.map((link, index) => (
                <div
                  key={`support-${index}`}
                  className="flex-col items-start flex w-full"
                >
                  <Button
                    variant="ghost"
                    className="inline-flex items-start p-0 h-auto justify-start hover:bg-transparent"
                  >
                    <div className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-30 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] whitespace-nowrap [font-style:var(--desktop-body-regular-font-style)] hover:text-white transition-colors">
                      {link}
                    </div>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start pt-[33px] w-full border-t border-[#ffffff1a]">
          <div className="flex flex-col items-center w-full">
            <div className="font-desktop-body-regular  font-[number:var(--desktop-body-regular-font-weight)] text-[#ffffffb2] text-[length:var(--desktop-body-regular-font-size)] md:text-center text-left tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
              © 2025 Learn AI. All rights reserved. Made with ❤️ for Nigerian
              students.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
