import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="w-full bg-ambersecondarya-50 py-16">
      <div className="flex flex-col max-w-[1200px] mx-auto px-8 items-center justify-center gap-16">
        <header className="flex flex-col w-full max-w-[700px] items-center gap-4">
          <div className="font-desktop-h6-bold font-[number:var(--desktop-h6-bold-font-weight)] text-ambersecondarya-300 text-[length:var(--desktop-h6-bold-font-size)] text-center tracking-[var(--desktop-h6-bold-letter-spacing)] leading-[var(--desktop-h6-bold-line-height)] [font-style:var(--desktop-h6-bold-font-style)]">
            ABOUT US
          </div>

          <h1 className="font-desktop-h4-bold font-[number:var(--desktop-h4-bold-font-weight)] text-grayg-700 text-[length:var(--desktop-h4-bold-font-size)] text-center tracking-[var(--desktop-h4-bold-letter-spacing)] leading-[var(--desktop-h4-bold-line-height)] [font-style:var(--desktop-h4-bold-font-style)]">
            Democratizing Educational Opportunity
          </h1>

          <p className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] text-center tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
            Our mission is simple: ensure every brilliant Nigerian student can
            achieve
            <br />
            academic excellence, regardless of their circumstances or location.
          </p>
        </header>

        <div className="flex md:flex-row flex-col items-start justify-center gap-16 w-full">
          <article className="flex flex-col w-full max-w-[560px] items-start gap-4">
            <header className="flex flex-col items-start w-full">
              <h2 className="font-desktop-h6-bold font-[number:var(--desktop-h6-bold-font-weight)] text-grayg-500 text-[length:var(--desktop-h6-bold-font-size)] tracking-[var(--desktop-h6-bold-letter-spacing)] leading-[var(--desktop-h6-bold-line-height)] [font-style:var(--desktop-h6-bold-font-style)]">
                The Problem We&#39;re Solving
              </h2>
            </header>

            <div className="flex flex-col items-start w-full">
              <p className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
                45 million Nigerian students lack access to quality,
                personalized tutoring. With teacher-to-student ratios of 1:40.
                Over 75% of students scored below 200 in JAMB, and nearly 40%
                failed to secure required credits in WAEC.
                <br />
                <br />
                With WAEC and NECO moving towards full digitalization, these
                failure rates risk rising even further. Educational inequality
                continues to limit opportunities for brilliant minds across our
                nation. Traditional private tutoring costs ₦15,000+ monthly,
                putting it out of reach for most families. Geographic barriers
                further limit rural students&#39; access to quality education.
              </p>
            </div>
          </article>

          <article className="flex flex-col w-full max-w-[560px] items-start gap-4">
            <header className="flex flex-col items-start w-full">
              <h2 className="font-desktop-h6-bold font-[number:var(--desktop-h6-bold-font-weight)] text-grayg-500 text-[length:var(--desktop-h6-bold-font-size)] tracking-[var(--desktop-h6-bold-letter-spacing)] leading-[var(--desktop-h6-bold-line-height)] [font-style:var(--desktop-h6-bold-font-style)]">
                Our Solution
              </h2>
            </header>

            <div className="flex flex-col items-start w-full">
              <p className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
                Learn AI combines cutting-edge artificial intelligence with deep
                understanding of Nigerian curriculum and culture. We provide
                personalized tutoring at 80% less than traditional alternatives.
              </p>
            </div>

            <div className="flex flex-col w-full items-start">
              <p className="font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-body-regular-font-size)] tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
                Our AI analyzes 20+ years of examination patterns, adapts to
                individual learning styles, and provides content in multiple
                Nigerian languages, ensuring every student can learn in their
                preferred language. <br />
                <br />
                Save time and effort in exam preparation by leveraging analytics
                to help schools support students more effectively.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
