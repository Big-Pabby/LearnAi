import React from "react";

export const AboutUsSection = (): JSX.Element => {
  const partnerLogos = [
    {
      src: "/image-26.png",
      alt: "Partner Logo 1",
      className: "w-32 h-32 object-cover",
    },
    {
      src: "/image-27.png",
      alt: "Partner Logo 2",
      className: "w-32 h-32",
    },
    {
      src: "/image-28.png",
      alt: "Partner Logo 3",
      className: "w-[142.54px] h-32",
    },
    {
      src: "/image-29.png",
      alt: "Partner Logo 4",
      className: "w-[131.55px] h-32",
    },
    {
      src: "/image-30.png",
      alt: "Partner Logo 5",
      className: "w-[114.76px] h-32",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="flex flex-col max-w-[1200px] mx-auto px-8 items-center justify-center gap-16">
        <div className="flex flex-col max-w-[700px] items-center gap-4">
          <h3 className="text-ambersecondarya-300 text-[length:var(--desktop-h6-bold-font-size)] tracking-[var(--desktop-h6-bold-letter-spacing)] leading-[var(--desktop-h6-bold-line-height)] font-desktop-h6-bold font-[number:var(--desktop-h6-bold-font-weight)] text-center [font-style:var(--desktop-h6-bold-font-style)]">
            OUR PARTNERS
          </h3>

          <h2 className="font-desktop-h4-bold font-[number:var(--desktop-h4-bold-font-weight)] text-grayg-700 text-[length:var(--desktop-h4-bold-font-size)] text-center tracking-[var(--desktop-h4-bold-letter-spacing)] leading-[var(--desktop-h4-bold-line-height)] [font-style:var(--desktop-h4-bold-font-style)]">
            Together, we&apos;re shaping the future
          </h2>

          <p className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] text-center tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
            Learn AI collaborates with schools, educators, and forward-thinking
            organizations committed to bridging the educational gap.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 w-full">
          {partnerLogos.map((logo, index) => (
            <img
              key={`partner-logo-${index}`}
              className={logo.className}
              alt={logo.alt}
              src={logo.src}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
