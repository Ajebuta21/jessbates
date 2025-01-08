import React from "react";
import {
  MdOutlineBusiness,
  MdOutlineLightbulb,
  MdOutlinePsychology,
} from "react-icons/md";

const SectionTwo = () => {
  const features = [
    {
      icon: <MdOutlineLightbulb />,
      text: "Gain clarity, confidence, and actionable strategies.",
    },
    {
      icon: <MdOutlinePsychology />,
      text: "Overcome self-doubt and limiting beliefs with EFT Tapping.",
    },
    {
      icon: <MdOutlineBusiness />,
      text: "Build a business that aligns with your goals and values.",
    },
  ];
  return (
    <div className="w-full relative px-10 pb-10">
      <div className="w-full flex flex-col gap-10">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 border-b">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-5 items-center py-5">
              <div
                data-aos="zoom-in"
                className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xl"
              >
                {feature.icon}
              </div>
              <p className="text-sm font-light">{feature.text}</p>
            </div>
          ))}
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-xl lg:text-2xl text-primary">My Story</h3>
            <p className="text-sm font-light">
              For years, I lived under the weight of self-doubt. I found myself
              in positions I didn’t think I deserved, convinced I was out of my
              depth. Fear kept me from speaking up, even when I knew the
              answers.
            </p>
            <p className="text-sm font-light">
              It wasn’t until I rewired my mindset and broke free from limiting
              beliefs that I realized my true potential. I’m on a mission to
              help you do the same.
            </p>
          </div>
          <div className="w-full flex flex-col gap-3">
            <h3 className="text-xl lg:text-2xl text-primary">My Mission</h3>
            <p className="text-sm font-light">
              I’m here to help you step into your confidence, overcome fear, and
              create the success you deserve. Whether you’re just starting or
              looking to level up, I provide the tools and strategies to make it
              happen.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col gap-3">
          <h3 className="text-xl lg:text-2xl text-primary">
            Why Work with Me?
          </h3>
          <ul className="list-decimal list-inside">
            <li className="text-sm font-light">
              ICF Certified Business and Mindset Coach.
            </li>
            <li className="text-sm font-light">
              Expert in Emotional Freedom Technique (EFT) tapping.
            </li>
            <li className="text-sm font-light">
              Proven strategies to help you align your mindset and actions.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
