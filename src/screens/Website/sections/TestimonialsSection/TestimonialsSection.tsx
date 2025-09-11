import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonialsData = [
  {
    quote:
      "Learn AI helped me improve my Mathematics score from 45% to 82% in just 3 months. The AI tutor explains concepts in Yoruba when I don't understand in English. It's like having a personal teacher!",
    initial: "A",
    name: "Adunni Olatunji",
    location: "SS3 Student, Lagos",
  },
  {
    quote:
      "As a parent, I was worried about affording quality tutoring for my daughter. Learn AI costs less than 3,000 monthly but delivers better results than the ₦15,000 home lessons we tried before.",
    initial: "M",
    name: "Mrs. Fatima Ibrahim",
    location: "Parent, Abuja",
  },
  {
    quote:
      "The predictive exam feature is amazing! It correctly predicted 8 out of 10 topics that came out in my WAEC exam. I felt so prepared and confident during the exam.",
    initial: "C",
    name: "Chinedu Okwu",
    location: "Fresh Graduate, Enugu",
  },
  {
    quote:
      "As a parent, I was worried about affording quality tutoring for my daughter. Learn AI costs less than 3,000 monthly but delivers better results than the ₦15,000 home lessons we tried before.",
    initial: "M",
    name: "Mrs. Fatima Ibrahim",
    location: "Parent, Abuja",
  },
  {
    quote:
      "The predictive exam feature is amazing! It correctly predicted 8 out of 10 topics that came out in my WAEC exam. I felt so prepared and confident during the exam.",
    initial: "C",
    name: "Chinedu Okwu",
    location: "Fresh Graduate, Enugu",
  },
  {
    quote:
      "Learn AI helped me improve my Mathematics score from 45% to 82% in just 3 months. The AI tutor explains concepts in Yoruba when I don't understand in English. It's like having a personal teacher!",
    initial: "A",
    name: "Adunni Olatunji",
    location: "SS3 Student, Lagos",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[1133px] bg-bright-blueprimaryb500">
      <div className="min-h-[1133px] bg-[url(/chatgpt-image-sep-6--2025-at-09-02-28-pm-3-1.png)] bg-[100%_100%]">
        <div className="flex flex-col max-w-[1184px] mx-auto items-center justify-center gap-16 py-16 px-8">
          <header className="flex flex-col max-w-[700px] items-center gap-2">
            <div className="font-desktop-h6-bold font-[number:var(--desktop-h6-bold-font-weight)] text-ambersecondarya-300 text-[length:var(--desktop-h6-bold-font-size)] text-center tracking-[var(--desktop-h6-bold-letter-spacing)] leading-[var(--desktop-h6-bold-line-height)] [font-style:var(--desktop-h6-bold-font-style)]">
              TESTIMONIALS
            </div>

            <h2 className="font-desktop-h4-bold font-[number:var(--desktop-h4-bold-font-weight)] text-white text-[length:var(--desktop-h4-bold-font-size)] text-center tracking-[var(--desktop-h4-bold-letter-spacing)] leading-[var(--desktop-h4-bold-line-height)] [font-style:var(--desktop-h4-bold-font-style)]">
              What Nigerian Students Are Saying
            </h2>

            <p className="max-w-[600px] font-desktop-body-regular font-[number:var(--desktop-body-regular-font-weight)] text-grayg-30 text-[length:var(--desktop-body-regular-font-size)] text-center tracking-[var(--desktop-body-regular-letter-spacing)] leading-[var(--desktop-body-regular-line-height)] [font-style:var(--desktop-body-regular-font-style)]">
              Real stories from students who have transformed their academic
              <br />
              performance with Learn AI.
            </p>
          </header>

          <div className="flex flex-col items-start gap-16 w-full">
            <div className="flex flex-col items-start gap-6 w-full">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {testimonialsData.slice(0, 3).map((testimonial, index) => (
                  <Card
                    key={`testimonial-top-${index}`}
                    className="h-[390px] bg-bright-blueprimaryb50 border-[#ffffff1a] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]"
                  >
                    <CardContent className="flex flex-col justify-between h-full p-6 gap-8">
                      <blockquote className="font-desktop-h6-semibold font-[number:var(--desktop-h6-semibold-font-weight)] text-bright-blueprimaryb500 text-[length:var(--desktop-h6-semibold-font-size)] tracking-[var(--desktop-h6-semibold-letter-spacing)] leading-[var(--desktop-h6-semibold-line-height)] [font-style:var(--desktop-h6-semibold-font-style)]">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <Avatar className="w-[50px] h-[50px] bg-ambersecondarya-300">
                          <AvatarFallback className="bg-ambersecondarya-300 [font-family:'Inter',Helvetica] font-bold text-grayg-700 text-xl">
                            {testimonial.initial}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col gap-[3.25px]">
                          <div className="font-desktop-body-medium font-[number:var(--desktop-body-medium-font-weight)] text-grayg-700 text-[length:var(--desktop-body-medium-font-size)] tracking-[var(--desktop-body-medium-letter-spacing)] leading-[var(--desktop-body-medium-line-height)] [font-style:var(--desktop-body-medium-font-style)]">
                            {testimonial.name}
                          </div>

                          <div className="font-desktop-small-regular font-[number:var(--desktop-small-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-small-regular-font-size)] tracking-[var(--desktop-small-regular-letter-spacing)] leading-[var(--desktop-small-regular-line-height)] [font-style:var(--desktop-small-regular-font-style)]">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                {testimonialsData.slice(3, 6).map((testimonial, index) => (
                  <Card
                    key={`testimonial-bottom-${index}`}
                    className="h-[390px] bg-bright-blueprimaryb50 border-[#ffffff1a] backdrop-blur-[5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5px)_brightness(100%)]"
                  >
                    <CardContent className="flex flex-col justify-between h-full p-6 gap-8">
                      <blockquote className="font-desktop-h6-semibold font-[number:var(--desktop-h6-semibold-font-weight)] text-bright-blueprimaryb500 text-[length:var(--desktop-h6-semibold-font-size)] tracking-[var(--desktop-h6-semibold-letter-spacing)] leading-[var(--desktop-h6-semibold-line-height)] [font-style:var(--desktop-h6-semibold-font-style)]">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="flex items-center gap-4">
                        <Avatar className="w-[50px] h-[50px] bg-ambersecondarya-300">
                          <AvatarFallback className="bg-ambersecondarya-300 [font-family:'Inter',Helvetica] font-bold text-grayg-700 text-xl">
                            {testimonial.initial}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col gap-[3.25px]">
                          <div className="font-desktop-body-medium font-[number:var(--desktop-body-medium-font-weight)] text-grayg-700 text-[length:var(--desktop-body-medium-font-size)] tracking-[var(--desktop-body-medium-letter-spacing)] leading-[var(--desktop-body-medium-line-height)] [font-style:var(--desktop-body-medium-font-style)]">
                            {testimonial.name}
                          </div>

                          <div className="font-desktop-small-regular font-[number:var(--desktop-small-regular-font-weight)] text-grayg-100 text-[length:var(--desktop-small-regular-font-size)] tracking-[var(--desktop-small-regular-letter-spacing)] leading-[var(--desktop-small-regular-line-height)] [font-style:var(--desktop-small-regular-font-style)]">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
