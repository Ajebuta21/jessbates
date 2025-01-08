import React from "react";

const SectionOne = () => {
  return (
    <div className="w-full h-screen bg-her bg-center bg-no-repeat bg-cover">
      <div className="w-full h-full bg-black/30 backdrop-blur-sm flex items-center p-10">
        <div className="flex flex-col w-full lg:w-1/2 gap-5 text-white">
          <p className="text-xs font-light">
            ICF Certified Business and Mindset Coach
          </p>
          <h1 className="text-3xl lg:text-5xl font-semibold">
            Rewrite Your Story. <br /> Redefine Your Potential.
          </h1>
          <p className="font-light">
            Turn your qualifications into income, build rock-solid business
            foundations, and cultivate a success mindset to become unstoppable.
          </p>
          <button className="text-sm py-2 px-4 border rounded w-fit">
            Schedule a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
